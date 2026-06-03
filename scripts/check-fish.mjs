import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const CONFIG_PATH = resolve(ROOT, 'notification-config.json');
const STATE_PATH = resolve(ROOT, 'notification-state.json');
const API_BASE = 'https://xn--dammn-pra.se/wp-json/fishregister/v1/list/';

async function sendTelegram(token, chatId, text) {
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
  if (!res.ok) throw new Error(`Telegram error: ${await res.text()}`);
}

function formatMessage(fish, headline) {
  const sex = fish.sex === 'Male' ? '♂️ Hane' : fish.sex === 'Female' ? '♀️ Hona' : fish.sex ?? '–';
  const lines = [
    `🎣 ${headline}`,
    `📅 ${fish.measurementday}`,
    `📏 Längd: ${fish.length ?? '–'} cm`,
    `⚖️  Vikt: ${fish.weight ?? '–'} g`,
    `   Kön: ${sex}`,
  ];
  if (fish.watertemp != null) lines.push(`🌡️ Vattentemp: ${fish.watertemp} °C`);
  return lines.join('\n');
}

async function main() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    process.exit(1);
  }

  const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
  const state = JSON.parse(readFileSync(STATE_PATH, 'utf8'));

  const year = String(new Date().getFullYear());
  const isFirstRun = !state[year];
  const yearState = state[year] ?? { lastMaxId: 0, firstFishNotified: false };

  const res = await fetch(API_BASE + year);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const { Fish: fish = [] } = await res.json();

  // On first run just capture baseline — no notifications
  if (isFirstRun) {
    yearState.lastMaxId = fish.length > 0 ? Math.max(...fish.map(f => f.id)) : 0;
    yearState.firstFishNotified = fish.length > 0;
    state[year] = yearState;
    writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
    console.log(`First run for ${year}. Baseline set to ID ${yearState.lastMaxId}.`);
    return;
  }

  const newFish = fish.filter(f => f.id > yearState.lastMaxId);
  if (newFish.length === 0) {
    console.log('No new fish.');
    return;
  }

  console.log(`${newFish.length} new fish found.`);

  // First fish of the year
  if (config.notifyFirstFish && !yearState.firstFishNotified) {
    await sendTelegram(token, chatId, formatMessage(newFish[0], 'Första fisken i år! 🎉'));
    yearState.firstFishNotified = true;
    console.log('Sent: first fish of year notification.');
  }

  // Size threshold check for each new fish
  for (const f of newFish) {
    const reasons = [];
    if (config.minLength != null && Number(f.length) >= config.minLength) {
      reasons.push(`${f.length} cm ≥ ${config.minLength} cm`);
    }
    if (config.minWeight != null && Number(f.weight) >= config.minWeight) {
      reasons.push(`${f.weight} g ≥ ${config.minWeight} g`);
    }
    if (reasons.length > 0) {
      await sendTelegram(token, chatId, formatMessage(f, `Stor fisk! (${reasons.join(', ')})`));
      console.log(`Sent: size threshold notification for fish ID ${f.id}.`);
    }
  }

  yearState.lastMaxId = Math.max(...fish.map(f => f.id));
  state[year] = yearState;
  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
  console.log(`State updated. New lastMaxId: ${yearState.lastMaxId}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
