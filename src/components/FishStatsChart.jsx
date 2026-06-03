import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { getAmountYearlyAll } from "@/services/fetchData";

const chartConfig = {
	amount: {
		label: "Antal fiskar",
		color: "hsl(var(--primary))",
	},
};

function FishStatsChart() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			setIsLoading(true);
			const { data: fishData, error: fetchError } = await getAmountYearlyAll();
			if (fetchError) setError(fetchError);
			else setData(fishData);
			setIsLoading(false);
		};
		loadData();
	}, []);

	if (isLoading) return <Card><CardContent className="flex items-center justify-center min-h-[400px]">Loading...</CardContent></Card>;
	if (error) return <Card><CardContent className="flex items-center justify-center min-h-[400px] text-destructive">{error}</CardContent></Card>;

	return (
		<Card className="mx-auto max-w-3xl">
			<CardHeader>
				<CardTitle>Antal fiskar per år</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="max-h-64 w-full">
					<AreaChart data={data} margin={{ left: 0, right: 0 }}>
						<CartesianGrid vertical={false} horizontal={false} />
						<XAxis dataKey="year" tickLine={true} axisLine={true} tickMargin={10} />
						<YAxis dataKey="amount" tickLine={true} axisLine={true} tickMargin={10} />
						<ChartTooltip cursor={true} content={<ChartTooltipContent indicator="dot" hideLabel />} />
						<Area
							dataKey="amount"
							type="natural"
							fill="hsl(var(--chart-1))"
							fillOpacity={0.2}
							stroke="hsl(var(--chart-1))"
							strokeOpacity={0.5}
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex justify-center italic">
				Antal uppvandrande fiskar per år från {data[0]?.year} – {data[data.length - 1]?.year}
			</CardFooter>
		</Card>
	);
}

export default FishStatsChart;
