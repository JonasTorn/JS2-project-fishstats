import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useLanguageStore } from "@/lib/languageStore";
const ErrorCard = () => {
	const language = useLanguageStore((state) => state.language);
	return (
		<Card className="w-full max-w-4xl mx-auto mt-8 border-destructive">
			<CardHeader>
				<CardTitle>
					{language === "sv"
						? "Något gick fel...Inga fiskar hittades..."
						: "Error Loading Data"}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-destructive">
					{language === "sv"
						? "Misslyckades med att ladda in fiskarna: " + { error }
						: "Failed to load fish statistics: " + { error }}

				</p>
			</CardContent>
		</Card>
	);
};

export default ErrorCard;
