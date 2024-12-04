import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ErrorCard = () => {
	return (
		<Card className="w-full max-w-4xl mx-auto mt-8 border-destructive">
			<CardHeader>
				<CardTitle>
					{/* Error Loading Data */}
					Något gick fel...Inga fiskar hittades...
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-destructive">
					{/* Failed to load fish statistics: {error} */}
					Misslyckades med att ladda in fiskarna: {error}
				</p>
			</CardContent>
		</Card>
	);
};

export default ErrorCard;
