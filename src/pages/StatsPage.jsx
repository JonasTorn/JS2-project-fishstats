import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import FishDataTable from "@/components/FishDataTable";

const StatsPage = () => {
	
	return (
		<div className="w-full max-w-4xl mx-auto mt-8">
			<FishDataTable></FishDataTable>
			{/* <Select
				value={year.toString()}
				onValueChange={(value) => setYear(Number(value))}
			>
				<SelectTrigger className="w-[280px]">
					<SelectValue placeholder="Välj år:" />
				</SelectTrigger>
				<SelectContent className="max-h-[300px] overflow-y-auto">
					<SelectGroup>
						<SelectLabel>Årtal</SelectLabel>
						{years.map((yearOption) => (
							<SelectItem key={yearOption} value={yearOption.toString()}>
								{yearOption}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>

			<Card className="">
				<CardHeader>
					<CardTitle className="flex flex-col space-y-4">
						<h2>Statistik från {year}</h2>
					</CardTitle>
				</CardHeader>
				<CardContent>
					
				</CardContent>
			</Card>
			<Separator className="m-4"></Separator> */}
		</div>
	);
};

export default StatsPage;
