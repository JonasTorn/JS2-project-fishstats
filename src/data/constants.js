// STYLING------------------------------------
export const STYLES = {
	article:
		"even:bg-blue-100 mx-[10vw] py-12 px-6 max-w-3xl place-self-center border-none shadow-none bg-transparent",
	title:
		"scroll-m-20 mt-12 pb-4 text-4xl font-bold tracking-tight transition-colors ",
	paragraph: "mb-5",
};
//   ------------------------------------------



// STATSPAGE------------------------------------------

// DEFAULT page size
export const DEFAULT_PAGE_SIZE = 25;

// Vilka "keys" i datan som INTE ska kunna visas som kolumner i tabellen
export const EXCLUDED_KEYS = ["id", "created_at", "updated_at", "deleted_at"];

// Vilka "keys" som ska kunna sorteras
export const SORTABLE_KEYS = [
	"measurementday",
	"length",
	"weight",
	"airtemp",
	"watertemp",
	"waterlevel",
	"sex",
];

// Vilka "keys" som ska visas som STANDARD som kolumner i tabellen
export const DEFAULT_VISIBLE_KEYS = [
	"measurementday",
	"length",
	"weight",
	"sex",
	"airtemp",
	"watertemp",
	"waterlevel",
];

// The order the columns should be displayed in.
export const COLUMN_ORDER = [
	"measurementday",
	"length",
	"weight",
	"sex",
	"airtemp",
	"watertemp",
	"waterlevel",
	"timeofday",
	"weather",
	"precipitation",
	"visitors",
];

// Column names visible on the page in ENGLISH and SWEDISH
export const COLUMN_TITLES = {
	en: {
		measurementday: "Date",
		timeofday: "Time",
		airtemp: "Air Temp",
		watertemp: "Water Temp",
		waterlevel: "Water Level",
		weather: "Weather",
		precipitation: "Rain",
		visitors: "Visitors",
		sex: "Sex",
		length: "Length",
		weight: "Weight",
	},
	sv: {
		measurementday: "Datum",
		timeofday: "Tid",
		airtemp: "Lufttemp",
		watertemp: "Vattentemp",
		waterlevel: "Vattennivå",
		weather: "Väder",
		precipitation: "Nederbörd",
		visitors: "Besökare",
		sex: "Kön",
		length: "Längd",
		weight: "Vikt",
	},
};
// ---------------------------------------------


// API-BAS-URL för fisklista per år
export const API_BASE_URL =
	"https://xn--dammn-pra.se/wp-json/fishregister/v1/list/";

// ------------------------------------------
