import React from "react";
import { NavLink } from "react-router-dom";
import { Separator } from "./ui/separator";

const NavLinks = () => {
	return (
		<>
			<NavLink to="/" className="hover:text-muted-foreground ">
				START
			</NavLink>
			<Separator
				orientation="vertical"
				className="h-6 self-center bg-muted-foreground"
			/>
			<NavLink to="/fiske" className="hover:text-muted-foreground ">
				FISKE
			</NavLink>
			<Separator
				orientation="vertical"
				className="h-6 self-center bg-muted-foreground"
			/>
			<NavLink to="/statistik" className="hover:text-muted-foreground ">
				STATISTIK
			</NavLink>
			<Separator
				orientation="vertical"
				className="h-6 self-center bg-muted-foreground"
			/>
			<NavLink to="/boende" className="hover:text-muted-foreground ">
				BOENDE
			</NavLink>
			<Separator
				orientation="vertical"
				className="h-6 self-center bg-muted-foreground"
			/>
			<NavLink to="/bilder" className="hover:text-muted-foreground ">
				BILDER
			</NavLink>
		</>
	);
};

export default NavLinks;
