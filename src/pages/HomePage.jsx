import React from "react";
import { Button } from "../components/ui/button";
import { Link, NavLink } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { STYLES } from "@/data/styles";

const HomePage = () => {
	return (
		<div>
			<PageHeader>Dammåns FVO</PageHeader>

			<main>
				<section>
					<article className={STYLES.article}>
						<div>
							<h2 className={STYLES.title}>Dammån</h2>
							<p className={STYLES.paragraph}>
								Dammån är den å i Jämtland som startar sin resa i Dalsjön vid
								Bydalsfjällen och sedan ringlar sin väg väster om Storsjön tills
								den mynnar ut i Ockesjön. Denna stenbottniga å är hem till
								öring, harr, abborre, mört och gädda. Av dessa har vi dock en
								fisk som står ut i dess förmåga att dra till sig fiskare, fisken
								som under Dammåns historia alltid har varit den mest åtråvärda
								fångsten, öringen. Under 1900-talet fångades de med ryssjor av
								familjer och fiskare som var bosatta nära Dammån. Nu för tiden
								är ryssjor, nät och dylikt inte aktuellt för fiske i Dammån, men
								intresset för öringen lever kvar i de som tar sig dit varje
								fiskesäsong för att testa sin lycka, förmåga och kunskap.
								Flugfiske och kastspö med spinnare är de föredragna metoder för
								de fiskare som letar efter fisken som väntar i strömmen.
							</p>
							<p className={STYLES.paragraph}>
								Det kalla vattnet från detta vattendrag har sedan starten av
								1900-talet varit en plats för sportfiskare. Det vill säga att
								Sveriges första sportfiskeklubb var under året 1912 intresserad
								av att testa sin lycka med storöringen som vandrar upp i Dammåns
								strömmande vatten och därmed arrenderade fiskerätt i Dammån. Det
								var dock inte enbart öringen men även harren som lockade
								sportfiskeklubben som senare skulle bilda Jämtlands läns
								sportfiskeklubb som är aktiv än idag. Denna sportfiskeklubb
								gjorde det första och enda försöket att inplantera fisk som inte
								är inhemsk i Dammån, vilket slutade som ett misslyckande och har
								inte upprepats då inplantering av icke inhemsk fisk inte anses
								vara bra för ekosystemet.
							</p>
							<p className={STYLES.paragraph}>
								<em>
									Källa: Dammån - ett populärt storöringsvatten, Richard Öhman,
									1983.
								</em>
							</p>
						</div>
						<img
							src="src/assets/images/jamtland-marked.svg"
							className="w-60 place-self-center"
						/>
					</article>

					<div className="even:bg-blue-100">
						<article className={STYLES.article}>
							<img
								src="src/assets/images/square-camping.jpg"
								className="w-60 place-self-center"
							/>
							<div>
								<h2 className={STYLES.title}>Dammåns Camping</h2>
								<p className={STYLES.paragraph}>
									Campingverksamheten i Ågårdarna har sin början året 1959, då
									var campingen enbart en äng vid landsvägsbron som korsade
									Dammån där sportfiskare kunde slå upp sina tält. Inga
									faciliteter fanns då, men de tillkom strax därpå. 1967 tog
									Dammåns FVO över ansvaret för campingplatsen, från
									lokalbyggden. Marken och faciliteterna såldes dock till Hallen
									kommun och det ritades upp planer om att bygga ut
									campingplatsen. Denna utbyggnation skedde dock aldrig då de
									tidiga förslagen som lades fram 1972 räknades som för dyra och
									innan något hann beslutas så fanns Hallens kommun inte längre,
									kommunen hade sammanslagits till en större kommun. Denna nya
									kommun fick börja om förundersökningarna om utbyggnationer. De
									byggnationer som skedde var betydligt mindre än de som
									föreslagits och påbörjades 6 år efter förslaget hade tagits
									fram. Förslaget hade inledningsvis inkluderat sådana saker som
									ett friluftsbad, badhytter, toaletter samt en ledning som
									skulle förse baddammen med vatten och det som i slutänden
									beslutades om var en rastplats och en mindre campingplats.
								</p>
								<p className={STYLES.paragraph}>
									Den utbyggda campingplatsen arrenderades av Sven och Marianne
									Elf året 1981. Efter tio år av att driva campingen och se
									stamkunder komma tillbaka årligen så kom paret Elf på tankarna
									att de ville äga marken och campingen själv. Det gick vägen
									och med de växande kraven från campinggästerna byggde paret
									upp en modernare fiskecamping året 1994 med duschar, stugor,
									strömakvarium under glasat golv samt en del annat. Den nya
									campingplatsen gick nu under namnet Dammåns Camping. Paret Elf
									sålde Dammåns Camping 2007. I dagsläget drivs campingen av
									sina nya ägare och campingen består av en restaurang, ett
									flertal stugor samt platser för husvagnar och tält.
								</p>
								<p className={STYLES.paragraph}>
									<em>
										Källa: Ågårdarna- Från 1400-tal till nutid, Richard Öhman,
										1994.
									</em>
								</p>
							</div>
						</article>
					</div>
					<div className="even:bg-blue-100">
						<article className={STYLES.article}>
							<div>
								<h2 className={STYLES.title}>Dammåns FVO</h2>
								<p className={STYLES.paragraph}>
									Dammåns FVO (fiskevårdsområde) blev verksam 1952, men då
									kallades föreningen Dammåns fiskevårdsförening. 1988
									omorganiserades föreningen och antog namnet Dammåns FVO.
									Samtidigt som föreningen ändrades så tillades Dalsjön till i
									fiskekortsområdet. Samma år som detta skedde tog även Dammåns
									FVO över fisktrappan vid kraftverket i Dammån från Jämtkraft,
									och därmed blev Dammåns FVO ansvariga för kontrollen av
									öringar som simmar uppströms under lekperioden. Nuvarande
									Dammåns FVO har inte genomgått några större förändringar eller
									omorganiseringar sedan namnändringen 1988.
								</p>
								<p className={STYLES.paragraph}>
									De uppgifter och arbeten som Dammåns FVO hanterar är
									relaterade till fiskevård, vård av vattendrag som räknas till
									området Dammån, omskötsel av vindskydd samt röjning och
									gallring av fiskestigar. Vård av vattendragen inkluderar till
									exempel tillbakaläggning av sten som har tagits bort förr i
									tiden för flottningens skull, som ger tillbaka öringen sina
									naturliga skydd från strömmen och skapar därmed en plats där
									vandrande fisk kan vila. I fiskevård kan man inräkna
									predatorkontroll eller bekämpning av djur som mink och gäddor,
									en annan del av fiskevården är utplantering av öringsungar
									(tvåsomriga öringar) i närliggande vattendrag (inte i Dammån).
									Dammåns FVO hanterar försäljning av fiskekort för Dammån och
									bestämmer vilka återförsäljare som finns tillgängliga.
									Fisketillsyn är något som föreningen har satsat på genom att
									utbilda personal och fler aktiva timmar fisketillsyn. Förutom
									detta så har föreningen, som tidigare nämnts, ansvaret för
									fisktrappan och därmed kontrollen och rapporteringen av all
									uppvandrande öring som vandrar upp under lekperioden.
								</p>
								<p className={STYLES.paragraph}>
									<em>
										Källa: Ågårdarna- Från 1400-tal till nutid, Richard Öhman,
										1994. Källa:{" "}
										<a href="https://www.ifiske.se/fiske-damman.htm">
											https://www.ifiske.se/fiske-damman
										</a>
										, 2022/06/10
									</em>
								</p>
							</div>
							<img
								src="src/assets/images/square-oring.jpg"
								className="w-60 place-self-center"
							/>
						</article>
					</div>
				</section>
			</main>
		</div>
	);
};

export default HomePage;
