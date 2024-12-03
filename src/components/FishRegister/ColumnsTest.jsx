import React from "react";
import { ArrowUpDown } from "lucide-react";

const columns = [
	{
		accessorKey: "status",
		header: "Status",
		// You can add additional configuration here if needed
	},
	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Email
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "amount",
		header: "Amount",
	},
];

export default columns;
