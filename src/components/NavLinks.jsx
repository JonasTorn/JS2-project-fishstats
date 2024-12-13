import React from "react";
import { NavLink } from "react-router-dom";
import { Separator } from "./ui/separator";
import { useLanguageStore } from "@/lib/languageStore";

const NavLinks = () => {
    const language = useLanguageStore((state) => state.language);
	const navLinkStyle = "hover:text-muted-foreground active-navbar text-base";
	const seperatorStyle = "h-6 self-center bg-white opacity-50";
	return (
		<>
			<NavLink to="/" className={navLinkStyle}>
				START
			</NavLink>
			<Separator orientation="vertical" className={seperatorStyle} />
			<NavLink to="/fiske" className={navLinkStyle}>
            {language === "sv" ? "FISKE" : "FISHING"}
			</NavLink>
			<Separator orientation="vertical" className={seperatorStyle} />
			<NavLink to="/fisktrappa" className={navLinkStyle}>
				{language === "sv" ? "FISKTRAPPA" : "FISH LADDER"}
			</NavLink>
			<Separator orientation="vertical" className={seperatorStyle} />
			<NavLink to="/boende" className={navLinkStyle}>
				{language === "sv" ? "BOENDE" : "ACCOMODATION"}
			</NavLink>
			<Separator orientation="vertical" className={seperatorStyle} />
			<NavLink to="/bilder" className={navLinkStyle}>
				{language === "sv" ? "BILDER" : "PICTURES"}
			</NavLink>
		</>
	);
};

export default NavLinks;
