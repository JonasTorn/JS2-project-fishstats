import React, { useMemo, useState, useEffect } from "react";

import { EXCLUDED_KEYS, PAGE_SIZE, API_BASE_URL } from "@/data/constants";
import { useTableState } from "@/components/FishRegister/useTableState";
import useFishData from "@/services/useFishData";
import Columns from "./FishRegister/Columns";
import ErrorCard from "./FishRegister/ErrorCard";
import LoadingCard from "./FishRegister/LoadingCard";
import YearSelector from "./FishRegister/YearSelector";
import ColumnVisibilityMenu from "./FishRegister/ColumnVisibilityMenu";
import PaginationControls from "./FishRegister/PaginationControls";
import TableContent from "./FishRegister/TableContent";

const FishDataTable = () => {
	const currentYear = new Date().getFullYear();
	const [year, setYear] = useState(currentYear);

	const { data, isLoading, error } = useFishData(year, API_BASE_URL);
	const yearSpan = useMemo(
		() =>
			Array.from(
				{ length: currentYear - 2002 + 1 },
				(_, index) => currentYear - index
			),
		[currentYear]
	);

	const columns = useMemo(
		() =>
			Columns({
				data,
				excludedKeys: EXCLUDED_KEYS,
			}),
		[data]
	);

	const { table, pagination, setPagination } = useTableState(
		data,
		columns,
		PAGE_SIZE
	);

	if (isLoading) {
		return <LoadingCard />;
	}

	if (error) {
		return <ErrorCard error={error} />;
	}

	return (
        // Använda <Card/> här istället? 
		<div className="w-full">
            {/* <CardTitle>? */}
			<div className="flex items-center py-4"> 
				<YearSelector year={year} yearSpan={yearSpan} setYear={setYear} />
				<ColumnVisibilityMenu table={table} />
			</div>
            {/* <CardContent>? */}
			<div className="rounded-md border">
				<TableContent table={table} columns={columns} />
			</div>
            {/* <CardFooter>? */}
			<PaginationControls
				table={table}
				pagination={pagination}
				setPagination={setPagination}
			/>
		</div>
	);
};

export default FishDataTable;
