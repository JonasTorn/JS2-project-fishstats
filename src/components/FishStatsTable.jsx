import React, { useMemo, useState } from "react";
import { API_BASE_URL } from "@/data/constants";
import { useTableState } from "@/components/FishList/useTableState";
import useFishData from "@/services/useFishData";
import { columns } from "./FishList/columns";
import ErrorCard from "./FishList/ErrorCard";
import LoadingCard from "./FishList/LoadingCard";
import YearSelector from "./FishList/YearSelector";
import ColumnVisibilityMenu from "./FishList/ColumnVisibilityMenu";
import PaginationControls from "./FishList/PaginationControls";
import TableContent from "./FishList/TableContent";

const FishStatsTable = () => {
	const currentYear = new Date().getFullYear();
	const [year, setYear] = useState(currentYear);

	const { data, isLoading, error } = useFishData(year, API_BASE_URL);

	const tableColumns = useMemo(() => (data ? columns(data) : []), [data]);
	const yearSpan = useMemo(
		() => Array.from({ length: currentYear - 2002 + 1 }, (_, i) => currentYear - i),
		[currentYear]
	);

	const { table, pagination, setPagination } = useTableState(data, tableColumns);

	if (isLoading) return <LoadingCard />;
	if (error) return <ErrorCard error={error} />;

	return (
		<div className="space-y-4">
			<div className="flex items-center gap-3">
				<YearSelector year={year} yearSpan={yearSpan} setYear={setYear} />
				<ColumnVisibilityMenu table={table} />
			</div>
			<div className="rounded-lg border bg-card shadow-sm overflow-hidden">
				<TableContent table={table} columns={tableColumns} />
			</div>
			<PaginationControls
				table={table}
				pagination={pagination}
				setPagination={setPagination}
			/>
		</div>
	);
};

export default FishStatsTable;
