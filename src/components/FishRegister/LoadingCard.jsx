import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useLanguageStore } from "@/lib/languageStore";
const LoadingCard = () => {
	const language = useLanguageStore((state) => state.language);
	return (
		<Card className="w-full max-w-4xl mx-auto mt-8">
			<CardHeader>
				<CardTitle>
					{language === "sv" ? "Fångar in fiskar..." : "Catching fishes..."}
				</CardTitle>
			</CardHeader>
			<CardContent>
				{language === "sv"
					? "Snart visas fiskarna här"
					: "Fishes will be displayed here shortly"}
			</CardContent>
		</Card>
	);
};

export default LoadingCard;
