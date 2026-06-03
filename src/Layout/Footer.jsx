import React from "react";

const Footer = () => {
	return (
		<footer className="bg-secondary my-4">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div className="flex items-center gap-3 text-background mb-4">
					<span className="bg-background w-14 h-14 p-1.5 rounded-full">
						<img
							src="https://xn--dammn-pra.se/wp-content/uploads/2022/06/dammans-logo-480x510.png"
							alt="Dammån FVO Logo"
							className="w-auto"
						/>
					</span>
					<span className="self-center text-2xl font-semibold whitespace-nowrap">
						Dammån
					</span>
				</div>
				<hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
				<span className="block text-sm text-gray-400 sm:text-center">
					073-063 47 72 | info@campdamman.se
				</span>
			</div>
		</footer>
	);
};

export default Footer;
