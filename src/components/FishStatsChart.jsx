import { useEffect, useState } from "react";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
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
import { useLanguageStore } from "@/lib/languageStore";

function FishStatsChart() {
	const language = useLanguageStore((state) => state.language);
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			setIsLoading(true);
			const { data: fishData, error: fetchError } = await getAmountYearlyAll();

			if (fetchError) {
				setError(fetchError);
			} else {
				setData(fishData);
			}
			setIsLoading(false);
		};

		loadData();
	}, []);
	const chartConfig = {
		amount: {
			label: language === "sv" ? "Mängd" : "Fish Count",
			color: "hsl(var(--primary))",			
		},
		year: {
			label: language === "sv" ? "Årtal" : "Year",
			color: "hsl(var(--destructive))",			
		},
	};
	if (isLoading) {
		return (
			<Card>
				<CardContent className="flex items-center justify-center min-h-[400px]">
					<div className="text-muted-foreground">Loading data...</div>
				</CardContent>
			</Card>
		);
	}

	if (error) {
		return (
			<Card>
				<CardContent className="flex items-center justify-center min-h-[400px]">
					<div className="text-destructive">{error}</div>
				</CardContent>
			</Card>
		);
	}
	console.log(data);
	return (
		<Card className="mx-auto max-w-3xl">
			<CardHeader>
				<CardTitle>
					{language === "sv"
						? "Mängd fiskar per år"
						: "Fish Statistics Over Time"}
				</CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className=" max-h-64 w-full">
					<AreaChart
						data={data}
						accessibilityLayer
						margin={{
							left: 0,
							right: 0,
						}}
					>
						<CartesianGrid vertical={false} horizontal={false} />
						<XAxis
							dataKey="year"
							tickLine={true}
							axisLine={true}
							tickMargin={10}
						/>
						<YAxis dataKey="amount" tickLine={true} axisLine={true} tickMargin={10} />
						<ChartTooltip
							cursor={true}
							content={<ChartTooltipContent indicator="dot" dataKey="amount" />
                           }
						/>
                     

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
				{language === "sv"
					? "Antal uppvandrande fiskar per år från"
					: "Annual fish count from"}{" "}
				{data[0]?.year} - {data[data.length - 1]?.year}
			</CardFooter>
		</Card>
	);
}

export default FishStatsChart;
