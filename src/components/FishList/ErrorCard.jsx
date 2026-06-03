import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ErrorCard = ({ error }) => {
	return (
		<Card className="w-full max-w-4xl mx-auto mt-8 border-destructive">
			<CardHeader>
				<CardTitle>Något gick fel</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-destructive">Misslyckades med att ladda fiskstatistik: {error}</p>
			</CardContent>
		</Card>
	);
};

export default ErrorCard;
