import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

const Columns = ({ data, excludedKeys }) => {
	if (!data || data.length === 0) return [];

	const formatHeaderText = (key) =>
		key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ");

	const isSortableColumn = (key) =>
		["some_column", "another_column"].includes(key);

	const createHeader = (key, column) => {
		if (!isSortableColumn(key)) {
			return formatHeaderText(key);
		}

		return (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{formatHeaderText(key)}
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		);
	};

	const filteredKeys = Object.keys(data[0] || {}).filter(
		(key) => !excludedKeys.includes(key)
	);

	return filteredKeys.map((key) => ({
		accessorKey: key,
		header: ({ column }) => createHeader(key, column),
		cell: ({ row }) => row.getValue(key),
		enableSorting: isSortableColumn(key),
	}));
};

export default Columns;
