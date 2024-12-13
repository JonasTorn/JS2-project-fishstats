import { useState, useMemo, useEffect } from "react";
import {
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { DEFAULT_PAGE_SIZE, DEFAULT_VISIBLE_KEYS } from "@/data/constants";

export const useTableState = (data, columns, pageSize = DEFAULT_PAGE_SIZE) => {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: pageSize,
    });

    // Set initial visibility when columns change
    useEffect(() => {
        if (!columns.length) return;
        const initialVisibility = {};
        
        // First set ALL columns to false
        columns.forEach(col => {
            initialVisibility[col.accessorKey] = false;
        });
        
        // Then set only DEFAULT_VISIBLE_KEYS to true
        DEFAULT_VISIBLE_KEYS.forEach(key => {
            if (key in initialVisibility) {
                initialVisibility[key] = true;
            }
        });

        setColumnVisibility(initialVisibility);
    }, [columns]);

    const table = useReactTable({
        data: data || [],
        columns: columns || [],
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
        }
    });

    return { table, pagination, setPagination };
};