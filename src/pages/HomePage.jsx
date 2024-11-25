import React from "react";
import { Button } from "../components/ui/button";


const HomePage = () => {
	return (
		<div>
			<div className="bg-slate-500 px-[10vw] py-12 lg:py-24 w-full">
				<h1 className="mb-4 text-4xl font-extrabold lg:text-5xl">
					Dammåns FVO
				</h1>
				<div className="flex gap-4">
					<Button className="bg-green-700 hover:bg-green-500">Fiske</Button>
					<Button className="bg-red-700 hover:bg-red-500">Boende</Button>
				</div>
			</div>
			<main>
				<section className="px-24 py-12 w-full">
					<article>
						<h2 className="mt-10 scroll-m-20 pb-4 text-4xl font-bold tracking-tight transition-colors first:mt-0">
							Dammån
						</h2>
						<p className="mb-5">
							Dammån är den å i Jämtland som startar sin resa i Dalsjön vid
							Bydalsfjällen och sedan ringlar sin väg väster om Storsjön tills
							den mynnar ut i Ockesjön. Denna stenbottniga å är hem till öring,
							harr, abborre, mört och gädda. Av dessa har vi dock en fisk som
							står ut i dess förmåga att dra till sig fiskare, fisken som under
							Dammåns historia alltid har varit den mest åtråvärda fångsten,
							öringen. Under 1900-talet fångades de med ryssjor av familjer och
							fiskare som var bosatta nära Dammån. Nu för tiden är ryssjor, nät
							och dylikt inte aktuellt för fiske i Dammån, men intresset för
							öringen lever kvar i de som tar sig dit varje fiskesäsong för att
							testa sin lycka, förmåga och kunskap. Flugfiske och kastspö med
							spinnare är de föredragna metoder för de fiskare som letar efter
							fisken som väntar i strömmen.
						</p>
						<p className="mb-5">
							Det kalla vattnet från detta vattendrag har sedan starten av
							1900-talet varit en plats för sportfiskare. Det vill säga att
							Sveriges första sportfiskeklubb var under året 1912 intresserad av
							att testa sin lycka med storöringen som vandrar upp i Dammåns
							strömmande vatten och därmed arrenderade fiskerätt i Dammån. Det
							var dock inte enbart öringen men även harren som lockade
							sportfiskeklubben som senare skulle bilda Jämtlands läns
							sportfiskeklubb som är aktiv än idag. Denna sportfiskeklubb gjorde
							det första och enda försöket att inplantera fisk som inte är
							inhemsk i Dammån, vilket slutade som ett misslyckande och har inte
							upprepats då inplantering av icke inhemsk fisk inte anses vara bra
							för ekosystemet.
						</p>
						<p className="mb-5">
							<em>
								Källa: Dammån - ett populärt storöringsvatten, Richard Öhman,
								1983.
							</em>
						</p>
					</article>

					{/* <p className="leading-7 [&:not(:first-child)]:mt-6">
						Once upon a time, in a far-off land, there was a very lazy king who
						spent all day lounging on his throne. One day, his advisors came to
						him with a problem: the kingdom was running out of money.
					</p>
					<h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
						The King's Plan
					</h2>
					<p className="leading-7 [&:not(:first-child)]:mt-6">
						The king thought long and hard, and finally came up with{" "}
						<a
							href="#"
							className="font-medium text-primary underline underline-offset-4"
						>
							a brilliant plan
						</a>
						: he would tax the jokes in the kingdom.
					</p> */}
				</section>
			</main>
		</div>
	);
};

export default HomePage;
