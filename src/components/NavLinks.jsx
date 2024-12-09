import React from "react";
import { NavLink } from "react-router-dom";
import { Separator } from "./ui/separator";

const NavLinks = () => {
	return (
		<>
			<NavLink to="/" className="hover:text-muted-foreground active-navbar">
				START
			</NavLink>
			<Separator
				orientation="vertical"
				className="h-6 self-center bg-muted-foreground"
			/>
			<NavLink to="/fiske" className="hover:text-muted-foreground active-navbar">
				FISKE
			</NavLink>
			<Separator
				orientation="vertical"
				className="h-6 self-center bg-muted-foreground"
			/>
			<NavLink to="/statistik" className="hover:text-muted-foreground active-navbar">
				STATISTIK
			</NavLink>
			<Separator
				orientation="vertical"
				className="h-6 self-center bg-muted-foreground"
			/>
			<NavLink to="/boende" className="hover:text-muted-foreground active-navbar">
				BOENDE
			</NavLink>
			<Separator
				orientation="vertical"
				className="h-6 self-center bg-muted-foreground"
			/>
			<NavLink to="/bilder" className="hover:text-muted-foreground active-navbar">
				BILDER
			</NavLink>
		</>
	);
};

export default NavLinks;
