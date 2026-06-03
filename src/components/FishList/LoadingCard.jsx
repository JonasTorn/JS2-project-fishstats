import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const LoadingCard = () => {
	return (
		<Card className="w-full max-w-4xl mx-auto mt-8">
			<CardHeader>
				<CardTitle>Laddar...</CardTitle>
			</CardHeader>
			<CardContent>Hämtar fiskdata</CardContent>
		</Card>
	);
};

export default LoadingCard;
