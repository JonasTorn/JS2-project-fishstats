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

  const chartConfig = {
    amount: {
      label: language === "sv" ? "Mängd" : "Fish Count",
      color: "hsl(var(--primary))",
    },
  };

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

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          {language === "sv" ? "Mängd fiskar per år" : "Fish Statistics Over Time"}
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={data}
            accessibilityLayer
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="dot" />}
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
          ? "Antal uppvandrande fiskar per år"
          : "Annual fish count from"}{" "}
        {data[0]?.year} to {data[data.length - 1]?.year}
      </CardFooter>
    </Card>
  );
}

export default FishStatsChart;










const FishStatsChart2 = () => {
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

	if (isLoading) {
		return (
			<Card className="w-full">
				<CardContent className="flex items-center justify-center min-h-[400px]">
					<div className="text-muted-foreground">Loading data...</div>
				</CardContent>
			</Card>
		);
	}

	if (error) {
		return (
			<Card className="w-full">
				<CardContent className="flex items-center justify-center min-h-[400px]">
					<div className="text-destructive">{error}</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>
					{language === "sv"
						? "Mängd fiskar per år"
						: "Fish Statistics Over Time"}
				</CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent>
				<div className="h-[300px] w-full">
					<ResponsiveContainer width="100%" height="100%">
						<AreaChart
							data={data}
							margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
						>
							<CartesianGrid strokeDasharray="3 3" vertical={false} />
							<XAxis
								dataKey="year"
								tickLine={false}
								axisLine={false}
								tick={{ fill: "hsl(var(--muted-foreground))" }}
							/>
							<YAxis
								tickLine={false}
								axisLine={false}
								tick={{ fill: "hsl(var(--muted-foreground))" }}
							/>
							<Tooltip
								content={({ active, payload, label }) => {
									if (!active || !payload) return null;
									return (
										<div className="rounded-lg border bg-background p-2 shadow-sm">
											<div className="text-sm font-medium">{label}</div>
											<div className="text-sm">
												{language === "sv" ? "Mängd: " : "Amount: "}
												{payload[0].value}
											</div>
										</div>
									);
								}}
							/>
							<Area
								type="monotone"
								dataKey="amount"
								stroke="hsl(var(--primary))"
								fill="hsl(var(--primary))"
								fillOpacity={0.2}
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
			<CardFooter className="flex justify-center italic">
				{language === "sv"
					? "Antal uppvandrande fiskar per år"
					: "Annual fish count from"}
				{data[0]?.year} to {data[data.length - 1]?.year}
			</CardFooter>
		</Card>
	);
};
