import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import FishDataTable from "@/components/FishDataTable";

const StatsPage = () => {
	
	return (
		<div className="w-full max-w-4xl mx-auto mt-8">
			<FishDataTable></FishDataTable>			
		</div>
	);
};

export default StatsPage;
