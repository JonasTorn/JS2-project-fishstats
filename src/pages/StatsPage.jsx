import React from "react";
import FishStatsTable from "@/components/FishStatsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FishStatsChart from "@/components/FishStatsChart";

const StatsPage = () => {
	return (
		<div className="max-w-5xl mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Fisktrappan</h1>
			<Tabs defaultValue="list" className="flex flex-col">
				<TabsList className="bg-transparent text-primary w-fit self-center">
					<TabsTrigger
						value="list"
						className="bg-muted data-[state=active]:bg-secondary data-[state=active]:text-background border border-r-0 rounded-r-none w-24"
					>
						Lista
					</TabsTrigger>
					<TabsTrigger
						value="statistics"
						className="bg-muted data-[state=active]:bg-secondary data-[state=active]:text-background border border-l-0 rounded-l-none w-32"
					>
						Statistik
					</TabsTrigger>
				</TabsList>
				<TabsContent value="list">
					<FishStatsTable />
				</TabsContent>
				<TabsContent value="statistics" className="w-full md:px-[5vw]">
					<FishStatsChart />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default StatsPage;
