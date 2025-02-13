import React from "react";

import HamburgerMenu from "@/components/HamburgerMenu";
import NavLinks from "@/components/NavLinks";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-secondary min-h-fit">
			<div className="max-w-5xl w-full  p-8 mx-auto flex items-center justify-between gap-4 ">
				<Link to="/" className="bg-background w-32 h-32 p-3 rounded-full">
					<img
						src="https://xn--dammn-pra.se/wp-content/uploads/2022/06/dammans-logo-480x510.png"
						alt="Dammån FVO logo"
						className=" m-auto p-0.5"
					/>
				</Link>

				<nav className="h-36 flex flex-col items-end justify-evenly gap-5">
					<div className=" ">
                        <LanguageSwitcher  />
                    </div>
					<div className="md:hidden justify-content-end">
						<HamburgerMenu />
					</div>
					<div className="hidden md:flex space-x-4 text-background text-xl ">
						<NavLinks />
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
