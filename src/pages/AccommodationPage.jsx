import React from "react";
import { STYLES } from "@/data/styles";
import PageHeader from "@/components/PageHeader";
const AccommodationPage = () => {
	return (
		<>
			<PageHeader>Boende</PageHeader>
			<article className={STYLES.article}>
				<img src="" alt="" />
				<h2 className={STYLES.title}>Camp Dammån</h2>
				<p className={STYLES.paragraph}>
					På Camp Dammån erbjuds boende i stuga, husvagn & tält. I vår
					restaurang med fullständiga rättigheter lagar vår köksmästare
					spännande rätter med inslag av lokala specialiteter. Vi erbjuder även
					varma och kalla drycker & glass. I vildmarksrummet kan ni beskåda
					områdets vilda djur.
				</p>
				<p>
					Det är vi som sköter Fisktrappan som ligger 5 minuters bilfärd
					uppströms från campingen.{" "}
					<a
						href="https://www.campdamman.se/start.html"
						className={STYLES.link}
					>
						https://www.campdamman.se/start.html
					</a>
				</p>
			</article>
			<article className={STYLES.article}>
				<img src="" alt="" />
				<h2 className={STYLES.title}>Ol-jons by</h2>
				<p className={STYLES.paragraph}>
					Mycket prisvärt boende i närheten av Storsjön med ett lugnt och
					härligt läge. Kompletta stugor i en aktiv miljö. ALLA stugor har
					gratis internet.
				</p>
				<p>
					Utflykter, fiske, vandring och bad. Aktiv eller bara koppla av - du
					väljer själv. Vintertid finns skidåkning på längden eller utför.
					<a href="https://www.oljonsby.com/" className={STYLES.link}>
						https://www.oljonsby.com/
					</a>
				</p>
			</article>
			<article className={STYLES.article}>
				<img src="" alt="" />
				<h2 className={STYLES.title}>Bydalens Fjällby</h2>
				<p className={STYLES.paragraph}>
					Bydalens Fjällby består av 36 stycken 4- bäddsstugor i två stugbyar,
					belägna mellan skidsystemet, Dalsjöns strand och Dammån.
				</p>
				<p>
					På bekvämt gångavstånd ligger skidspår, liftstation, skiduthyrning och
					Bydalens Wärdshus, som är Bydalens samlingsplats och restaurang.
					<a href="https://www.bydalensfjallby.se/" className={STYLES.link}>
						https://www.bydalensfjallby.se/
					</a>
				</p>
			</article>
		</>
	);
};

export default AccommodationPage;
