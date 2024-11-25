import React from "react";

import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";

const Header = () => {
	return (
		<header className="bg-secondary p-10 flex justify-between items-center">
			<span className="bg-background w-16 h-16 p-1.5 rounded-full">
				<img
					src="src/assets/images/dammans-logo-480x510.png"
					alt="Flowbite Logo"
					className="w-auto"
				/>
			</span>

			<HamburgerMenu />
			<nav>
				<div className="flex space-x-4 text-background text-xl">
					<NavLinks/>
				</div>
			</nav>
		</header>
	);
};

export default Header;
