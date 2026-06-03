import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { COLUMN_ORDER, COLUMN_TITLES, isSortableColumn, isExcludedColumn } from "@/data/constants";

const formatHeaderText = (key) =>
	COLUMN_TITLES[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ");

const createSortableHeader = (key) => {
	return ({ column }) => (
		<Button
			variant="ghost"
			className="px-1 py-6 sm:px-4 flex flex-col gap-1 m-auto"
			onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
		>
			{formatHeaderText(key)}
			<ArrowUpDown className="size-4" />
		</Button>
	);
};

export const columns = (data) => {
	if (!data?.length) return [];

	const filteredKeys = Object.keys(data[0] || {}).filter(isExcludedColumn);

	const columnsWithProperties = filteredKeys.map((key) => ({
		id: key,
		accessorKey: key,
		header: isSortableColumn(key) ? createSortableHeader(key) : formatHeaderText(key),
		cell: ({ row }) => row.getValue(key),
		enableSorting: isSortableColumn(key),
		enableHiding: true,
	}));

	return columnsWithProperties.sort((a, b) => {
		const indexA = COLUMN_ORDER.indexOf(a.id);
		const indexB = COLUMN_ORDER.indexOf(b.id);
		if (indexA !== -1 && indexB !== -1) return indexA - indexB;
		if (indexA !== -1) return -1;
		if (indexB !== -1) return 1;
		return 0;
	});
};

export default columns;
