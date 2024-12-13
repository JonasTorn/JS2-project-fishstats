import React from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguageStore } from "@/lib/languageStore";
import { COLUMN_TITLES } from "@/data/constants";

const ColumnVisibilityMenu = ({ table }) => {
	const language = useLanguageStore((state) => state.language);
	// console.log('Current visibility state:', table.getState().columnVisibility);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="ml-auto">
					{language === "sv" ? "Kolumner" : "Columns"} <ChevronDown />
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
								onCheckedChange={(value) => column.toggleVisibility(!!value)}
							>
								{COLUMN_TITLES[language]?.[column.id] || column.id}
							</DropdownMenuCheckboxItem>
						);
					})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ColumnVisibilityMenu;
