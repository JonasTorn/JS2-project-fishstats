import React, { useMemo, useState, useEffect } from "react";

import { API_BASE_URL } from "@/data/constants";
import { useTableState } from "@/components/FishRegister/useTableState";
import useFishData from "@/services/useFishData";
import { columns } from "./FishRegister/columns";
import ErrorCard from "./FishRegister/ErrorCard";
import LoadingCard from "./FishRegister/LoadingCard";
import YearSelector from "./FishRegister/YearSelector";
import ColumnVisibilityMenu from "./FishRegister/ColumnVisibilityMenu";
import PaginationControls from "./FishRegister/PaginationControls";
import TableContent from "./FishRegister/TableContent";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useLanguageStore } from "@/lib/languageStore";


const FishStatsTable = () => {
	const language = useLanguageStore((state) => state.language);
       
   

	const currentYear = new Date().getFullYear();
	const [year, setYear] = useState(currentYear);
    
	const { data, isLoading, error } = useFishData(year, API_BASE_URL);

	const tableColumns = useMemo(
		() => (data ? columns(data, language) : []),
		[data, language]
	);
	const yearSpan = useMemo(
		() =>
			Array.from(
				{ length: currentYear - 2002 + 1 },
				(_, index) => currentYear - index
			),
		[currentYear]
	);

	const { table, pagination, setPagination } = useTableState(
		data,
		tableColumns
	);
	if (isLoading) {
		return <LoadingCard />;
	}

	if (error) {
		return <ErrorCard error={error} />;
	}

	return (
		<Card className=" mx-[4vw] md:px-8 border-none shadow-none">
			<CardTitle className="flex items-center py-8">
				<YearSelector year={year} yearSpan={yearSpan} setYear={setYear} />
				<ColumnVisibilityMenu table={table} />
			</CardTitle>
			<CardContent className="rounded-md border px-0">
				<TableContent table={table} columns={tableColumns} />
			</CardContent>
			<CardFooter>
				<PaginationControls
					table={table}
					pagination={pagination}
					setPagination={setPagination}
				/>
			</CardFooter>
		</Card>
	);
};

export default FishStatsTable;
