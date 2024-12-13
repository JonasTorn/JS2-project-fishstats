import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { STYLES } from "@/data/styles";
import { Separator } from "@/components/ui/separator";
import React from "react";
import PageHeader from "@/components/PageHeader";

const FishingPage = () => {
	return (
		<>
			{/* <PageHeader>Fiske</PageHeader> */}
			<main>
				<section>
					<div className="max-w-5xl mx-[4vw] px-6 py-12 flex flex-col lg:flex-row lg:gap-6 place-self-center">
						<article className=" max-w-3xl lg:max-w-[60%] place-self-center border-none shadow-none bg-transparent">
							<h1 className={STYLES.title}>Fiske i Dammån</h1>
							<div className={STYLES.paragraph}>
								För att fiska i Dammån så krävs det att du äger ett fiskekort,
								dessa säljs via specifika återförsäljare eller online. Det
								lättaste är att köpa fiskekortet via datorn eller mobilen på
								hemsidan{" "}
								<a
									className="underline text-blue-800 hover:text-blue-500 active:text-primary"
									href="https://www.ifiske.se/fiskekort-damman.htm"
								>
									https://www.ifiske.se/fiskekort-damman.htm
								</a>
								. När du har köpt ett fiskekort får du ett kvitto i mobilen som
								används eller så kan du skriva ut den via din dator.
							</div>
							<div className={STYLES.paragraph}>
								<h3 className="text-lg font-bold">Områden</h3>I Häggsåssjön,
								Dromtjärnarna samt Torrisbotjärn är fiske tillåtet mellan 1
								januari och 31 december dvs hela året. Dammån och Bastuån är
								fiske tillåtet från den 1 juni till den 31 augusti.
							</div>
							<div className={STYLES.paragraph}>
								<h3 className="text-lg font-bold">Föreskrifter</h3>Både öring
								och harr har krav på storlek för fångst och öring har även krav
								på fångster per dag. Harr måste minst vara 30cm. Öring måste
								minst vara 45cm och enbart 1 öring/dygn.
							</div>
							<div className={STYLES.paragraph}>
								<h3 className="text-lg font-bold">Förbjudet</h3>
								Latmete samt lodmete och nätfiske är förbjudet i hela Dammån.
							</div>
							<div className={STYLES.paragraph}>
								<h3 className="text-lg font-bold">Totalt fiskeförbud råder</h3>
								Hängbron uppströms i Lekarån och till Storfallet. Från
								vindskyddet (50 m uppströms fisktrappan) nedströms till hängbron
								vid kraftverket, på kraftverkets sida gäller förbudet vidare
								förbi hängbron och till 50 m nedströms utloppet av
								kraftverksströmmen.
							</div>
							<div className={STYLES.paragraph}>
							<h2 className={STYLES.title}>Rekommendationer från föreningen</h2>
							<p className={STYLES.paragraph}>
								Vi kan skriva regler om både det ena och det andra men hur man
								beter sig är det svårt att lagstifta om. Att behandla andra som
								man vill bli behandlad själv är en bra grundregel.
							</p>
							<p className={STYLES.paragraph}>
								Öringsfiske är ett rörligt fiske där man tjänar på att byta
								plats ofta. Välj startplats för ditt fiske med sunt förnuft. Gå
								aldrig ut framför en annan fiskare, ett kast ett steg är en bra
								grundregel. Det är ditt ansvar att försäkra dig om att ditt
								fiske inte stör någon annan fiskare. Ha respekt för naturen för
								det är ett stort arv vi förvaltar åt kommande generationer. Tänk
								på att ta med dig ditt skräp och använd så långt det är möjligt
								redan upptrampade stigar. Om du gör upp eld vill vi att du gör
								det med förstånd och gärna vid våra vindskydd eller där det
								eldats förut.
							</p>
							<p className={STYLES.paragraph}>
								Att fiske kan bedrivas som det gör i Dammån beror till stor del
								av välvilja från privata markägare. Visa respekt för dem och
								tacka genom att inte göra åverkan eller i onödan störa de som
								bor längs ån.
							</p>
                            </div>
							<div className={STYLES.paragraph}>
								<h3 className="text-lg font-bold">
									För ytterligare regler eller förklaringar gå till
									https://www.ifiske.se/fiske-damman.htm
								</h3>
								<a
									className={STYLES.link}
									href="https://www.ifiske.se/fiskekort-damman.htm"
								>
									https://www.ifiske.se/fiskekort-damman.htm
								</a>
							</div>
							<h2 className={STYLES.title}>Fiskeguider</h2>
							<div className={STYLES.paragraph}>
								<strong>Jimmy Stockhaus:</strong>
								<address>
									073-8412586
									<br />
									<a href="mailto:jimmy.stockhaus@hotmail.com">
										jimmy.stockhaus@hotmail.com
									</a>
								</address>
							</div>
							<div className={STYLES.paragraph}>
								<strong>Jacop Tiilikainen:</strong>
								<address>
									070-8880667
									<br />
									<a href="mailto:jacopmt@hotmail.com">jacopmt@hotmail.com</a>
								</address>
							</div>

							<div className={STYLES.paragraph}>
								<strong>Mattias Burkhard:</strong>
								<address>
									073-6256067
									<br />
									<a href="mailto:mattiasburkhard@gmail.com">
										mattiasburkhard@gmail.com
									</a>
								</address>
							</div>
							<div className={STYLES.paragraph}>
								<strong>Viktor Lidin:</strong>
								<address>
									070-2041355
									<br />
									<a href="mailto:enkasakaffe@gmail.com">
										enkasakaffe@gmail.com
									</a>
								</address>
							</div>
						</article>
						<Card className="lg:mt-12 max-w-xl h-fit bg-secondary text-background place-self-center lg:self-start">
							<CardHeader>
								<CardTitle>
									<h3 className="text-2xl">Fiskekort</h3>
								</CardTitle>
								<CardDescription className="text-background">
									Köp fiskekortet digitalt{" "}
									<a
										className="underline text-blue-200 hover:text-blue-500 active:text-primary font-semibold"
										href="https://www.ifiske.se/fiskekort-damman.htm"
									>
										HÄR
									</a>
									, eller scanna qr-koden.
								</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col items-center">
								<img
									src="src/assets/images/fiskekort-qr.png"
									alt="qr-kod till fiskekort"
									className="bg-transparent max-w-48 mb-5"
								/>

								<p className="">
									Om fiskekortet ska köpas fysiskt så finns de att köpa på
									följande orter under dagtid:
								</p>
								<ul className="list-disc list-inside self-start my-2 mb-6">
									<li>Camp Dammån</li>
									<li>Hallen, ICA Karl-Ors bua</li>
								</ul>

								<h4 className="text-lg font-semibold text-left self-start">
									Priser för fiskekort:
								</h4>
								<ul className="list-disc list-inside self-start my-2 mb-4">
									<li>Dygnkort för 130kr</li>
									<li>Veckokort för 500kr</li>
									<li>Säsongskort för 1200kr, 1 juni - 31 maj</li>
								</ul>
							</CardContent>
							<CardFooter className="text-sm italic">
								Barn under 16 fiskar gratis i sällskap med en vuxen som löst
								gällande fiskekort. Dygnskort gäller från det klockslag du själv
								väljer och sedan 24timmar framåt.
							</CardFooter>
						</Card>
					</div>
				</section>
			</main>
		</>
	);
};

export default FishingPage;
