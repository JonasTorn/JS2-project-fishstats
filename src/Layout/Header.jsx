import React from "react";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Header = () => {
	return (
		<header className="bg-secondary min-h-fit">
			<div className="max-w-5xl w-full p-8 mx-auto flex items-center justify-between gap-4">
				<span className="bg-background w-32 h-32 p-3 rounded-full">
					<img
						src="https://xn--dammn-pra.se/wp-content/uploads/2022/06/dammans-logo-480x510.png"
						alt="Dammån FVO logo"
						className="m-auto p-0.5"
					/>
				</span>
				<LanguageSwitcher />
			</div>
		</header>
	);
};

export default Header;
