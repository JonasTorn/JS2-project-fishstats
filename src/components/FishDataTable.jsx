import React, { useMemo, useState, useEffect } from "react";
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
	const apiUrl = "https://xn--dammn-pra.se/wp-json/fishregister/v1/list/";
	const { data, isLoading, error } = useFishData(year, apiUrl);

	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: 25, // Increased from default 10
	});
	const yearSpan = Array.from(
		{ length: currentYear - 2002 + 1 },
		(_, index) => currentYear - index
	);

	const columns = useMemo(() => Columns({ data }), [data]);
	const [sorting, setSorting] = useState([]);
	const [columnFilters, setColumnFilters] = useState([]);
	const [columnVisibility, setColumnVisibility] = useState({});
	const [rowSelection, setRowSelection] = useState({});

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		onPaginationChange: setPagination,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
			pagination,
		},
	});

	if (isLoading) {
		return <LoadingCard />;
	}

	if (error) {
		return <ErrorCard error={error} />;
	}

	return (
		<div className="w-full">
			<div className="flex items-center py-4">
				<YearSelector year={year} yearSpan={yearSpan} setYear={setYear} />
				<ColumnVisibilityMenu table={table} />
			</div>
			<div className="rounded-md border">
				<TableContent table={table} columns={columns} />
			</div>
			<PaginationControls
				table={table}
				pagination={pagination}
				setPagination={setPagination}
			/>
		</div>
	);
};

export default FishDataTable;
