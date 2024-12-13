import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import {
	COLUMN_ORDER,
	COLUMN_TITLES,
	isSortableColumn,
	isExcludedColumn,
} from "@/data/constants";


// If no custom title. Then just capitalize the original key.
const formatHeaderText = (key, language) =>
	COLUMN_TITLES[language]?.[key] ||
	key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ");

const createSortableHeader = (key, language) => {
	return ({ column }) => (
		<Button
			variant="ghost"
			className="px-1 py-6 sm:px-4 flex flex-col gap-1 m-auto"
			onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
		>
			{formatHeaderText(key, language)}
			<ArrowUpDown className="size-4" />
		</Button>
	);
};

export const columns = (data, language) => {
	if (!data?.length) return [];

	const filteredKeys = Object.keys(data[0] || {}).filter(isExcludedColumn);

	const columnsWithProperties = filteredKeys.map((key) => ({
		id: key,
		accessorKey: key,
		header: isSortableColumn(key)
			? createSortableHeader(key, language)
			: formatHeaderText(key, language),
		cell: ({ row }) => row.getValue(key),
		enableSorting: isSortableColumn(key),
		enableHiding: true,
	}));

	return columnsWithProperties.sort((a, b) => {
		const indexA = COLUMN_ORDER.indexOf(a.id);
		const indexB = COLUMN_ORDER.indexOf(b.id);

		if (indexA !== -1 && indexB !== -1) {
			return indexA - indexB;
		}

		if (indexA !== -1) return -1;
		if (indexB !== -1) return 1;

		return 0;
	});
};

export default columns;
