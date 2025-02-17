import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="bg-secondary my-4">
				<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
					<div className="sm:flex sm:items-center sm:justify-between text-background">
						<Link
							to="/"							
							title="Gå till startsidan"
							className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
						>
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
						</Link>
						<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
							<li>
								<a href="#" className="hover:underline me-4 md:me-6">
									About
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline me-4 md:me-6">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline me-4 md:me-6">
									Licensing
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<span className="block text-sm text-gray-400 sm:text-center">
                    073-063 47 72  |  info@campdamman.se
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
