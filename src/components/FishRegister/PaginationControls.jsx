import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const PaginationControls = ({ table, pagination, setPagination }) => {
	return (
		<div className="flex items-center justify-end space-x-2 py-4">
			<div className="flex items-center space-x-2">
				<p>Rows per page</p>
				<Select
					value={pagination.pageSize.toString()}
					onValueChange={(value) =>
						setPagination((prev) => ({
							...prev,
							pageSize: Number(value),
							pageIndex: 0,
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
	);
};
export default PaginationControls;
