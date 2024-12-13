import React, { useState, useEffect } from "react";

import FishStatsTable from "@/components/FishStatsTable";
import PageHeader from "@/components/PageHeader";
import { useLanguageStore } from "@/lib/languageStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FishStatsChart from "@/components/FishStatsChart";

const StatsPage = () => {
	const language = useLanguageStore((state) => state.language);
	return (
		<>
			<PageHeader>
				{language === "sv" ? "Fisktrappan" : "Fish ladder"}
			</PageHeader>

			<Tabs defaultValue="list" className="my-8 flex flex-col">
				<TabsList className="bg-transparent text-primary w-fit max-w-md self-center ">
					<TabsTrigger
						value="list"
						className="bg-muted data-[state=active]:bg-secondary data-[state=active]:text-background border border-r-0 rounded-r-none w-24"
					>
						{language === "sv" ? "Lista" : "List"}
					</TabsTrigger>
					<TabsTrigger
						value="statistics"
						className="bg-muted data-[state=active]:bg-secondary data-[state=active]:text-background border border-l-0 rounded-l-none w-1/2"
					>
						{language === "sv" ? "Statistik" : "Statistics"}
					</TabsTrigger>
				</TabsList>
				<TabsContent value="list">
					<FishStatsTable></FishStatsTable>
				</TabsContent>
				<TabsContent value="statistics" className="w-full md:px-[5vw]">
					<FishStatsChart/>
                    {/*
                    
                    Här kan man lägga in flera olika grafer :)

                    */}
				</TabsContent>
			</Tabs>
		</>
	);
};

export default StatsPage;
