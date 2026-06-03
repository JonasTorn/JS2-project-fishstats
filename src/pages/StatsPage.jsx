import React from "react";
import FishStatsTable from "@/components/FishStatsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FishStatsChart from "@/components/FishStatsChart";

const StatsPage = () => {
	return (
		<div className="min-h-screen">
			<div className="max-w-5xl mx-auto px-6 py-10">
				<div className="mb-8 pb-6 border-b">
					<h1 className="text-2xl font-semibold tracking-tight">Fisktrappan</h1>
					<p className="text-sm text-muted-foreground mt-1">Dammåns fiskräkning sedan 2002</p>
				</div>

				<Tabs defaultValue="list" className="flex flex-col">
					<TabsList className="h-9 rounded-none border-b border-border bg-transparent p-0 w-full justify-start mb-6">
						<TabsTrigger
							value="list"
							className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-3 pt-2 font-medium text-muted-foreground data-[state=active]:text-foreground"
						>
							Lista
						</TabsTrigger>
						<TabsTrigger
							value="statistics"
							className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-3 pt-2 font-medium text-muted-foreground data-[state=active]:text-foreground"
						>
							Statistik
						</TabsTrigger>
					</TabsList>
					<TabsContent value="list">
						<FishStatsTable />
					</TabsContent>
					<TabsContent value="statistics">
						<FishStatsChart />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default StatsPage;
