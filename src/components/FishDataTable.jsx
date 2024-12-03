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

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const FishDataTable = () => {
	const currentYear = new Date().getFullYear();
	const [year, setYear] = useState(currentYear);
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 25, // Increased from default 10
    });
	const years = Array.from(
		{ length: currentYear - 2002 + 1 },
		(_, index) => currentYear - index
	);

	const columns = useMemo(() => {
		if (data.length === 0) return [];
		// Vilka "keys" som INTE ska visas på sidan
		const keysToExclude = ["id", "created_at", "updated_at", "deleted_at"];
		const filteredKeys = Object.keys(data[0] || {}).filter(
			(key) => !keysToExclude.includes(key)
		);

		// Skapar kolumner
		return filteredKeys.map((key) => ({
			accessorKey: key,
			header: key.charAt(0).toUpperCase() + key.slice(1),
			cell: ({ row }) => row.getValue(key),
		}));
	}, [data]);

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

	const apiUrl = "https://xn--dammn-pra.se/wp-json/fishregister/v1/list/";

	useEffect(() => {
		const fetchFishDataByYear = async (selectedYear) => {
			try {
				setIsLoading(true);
				setError(null);
				const response = await fetch(apiUrl + selectedYear);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const responseData = await response.json();
				const fishData = responseData.Fish || [];
				setData(fishData);
				setIsLoading(false);
			} catch (e) {
				setError(e.message);
				setData([]);
				setIsLoading(false);
			}
		};

		fetchFishDataByYear(year);
	}, [year]);

	if (isLoading) {
		return (
			<Card className="w-full max-w-4xl mx-auto mt-8">
				<CardHeader>
					<CardTitle>Fångar in fiskar...</CardTitle>
				</CardHeader>
				<CardContent>
					<p>Snart visas fiskarna här...</p>
				</CardContent>
			</Card>
		);
	}

	if (error) {
		return (
			<Card className="w-full max-w-4xl mx-auto mt-8 border-destructive">
				<CardHeader>
					<CardTitle>
                        {/* Error Loading Data */}
                        Något gick fel...Inga fiskar hittades...
                    </CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-destructive">
						{/* Failed to load fish statistics: {error} */}
                        Misslyckades med att ladda in fiskarna: {error}
					</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<div className="w-full">            
            {/* Previous year and column visibility selectors */}
			<div className="flex items-center py-4">
				<Select
					value={year}
					onValueChange={(value) => setYear(value)}
				>
					<SelectTrigger className="w-[280px]">
						<SelectValue placeholder="Välj år:" />
					</SelectTrigger>
					<SelectContent className="max-h-[300px] overflow-y-auto">
						<SelectGroup>
							<SelectLabel>Årtal</SelectLabel>
							{years.map((yearOption) => (
								<SelectItem key={yearOption} value={yearOption}>
									{yearOption}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="ml-auto">
							Columns <ChevronDown />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
									>
										{column.id}
									</DropdownMenuCheckboxItem>
								);
							})}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
            {/* ------------------------------------------------------------- */}
            
            {/* Table rendering */}
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
            {/* ------------------------------------- */}

            {/* Pagination controls */}
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex items-center space-x-2">
                    <p>Rows per page</p>
                    <Select
                        value={pagination.pageSize.toString()}
                        onValueChange={(value) => 
                            setPagination(prev => ({ 
                                ...prev, 
                                pageSize: Number(value),
                                pageIndex: 0 
                            }))
                        }
                    >
                        <SelectTrigger className="w-[70px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {[10, 25, 50, 100].map((pageSize) => (
                                <SelectItem key={pageSize} value={pageSize.toString()}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
		</div>
	);
};

export default FishDataTable;
