import React, { useState } from "react";
import { useLanguageStore } from "@/lib/languageStore";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const SwedenFlag = () => (
	<img
		src="https://kapowaz.github.io/square-flags/flags/se.svg"
		className="w-6 h-6 aspect-square rounded-full"
	/>
);

const UKFlag = () => (
	<img
		src="https://kapowaz.github.io/square-flags/flags/gb.svg"
		className="w-6 h-6 aspect-square rounded-full"
	/>
);

export const LanguageSwitcher = () => {
	const { language, setLanguage } = useLanguageStore();

	return (
		<div>
			<Select value={language} onValueChange={setLanguage}>
				<SelectTrigger className="w-fit h-fit gap-1 items-center justify-evenly text-background border-white border-opacity-50">
					<span className="uppercase">{language}</span>
				</SelectTrigger>
				<SelectContent className="bg-primary-foreground">
					<SelectItem value="sv" className="hover:bg-secondary">
						<div className="flex items-center gap-2 ">
							<SwedenFlag />
							<span>Svenska</span>
						</div>
					</SelectItem>
					<SelectItem value="en">
						<div className="flex items-center gap-2">
							<UKFlag />
							<span>English</span>
						</div>
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default LanguageSwitcher;
