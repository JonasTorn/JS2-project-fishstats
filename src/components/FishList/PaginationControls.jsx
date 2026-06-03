import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";

const PaginationControls = ({ table, pagination, setPagination }) => {
	const currentPage = table.getState().pagination.pageIndex + 1;
	const totalPages = table.getPageCount();

	return (
		<div className="flex items-center justify-between py-2">
			<p className="text-sm text-muted-foreground">
				Sida {currentPage} av {totalPages}
			</p>
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<span>Rader per sida</span>
					<Select
						value={pagination.pageSize.toString()}
						onValueChange={(value) =>
							setPagination((prev) => ({ ...prev, pageSize: Number(value), pageIndex: 0 }))
						}
					>
						<SelectTrigger className="w-16 h-8">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{[10, 25, 50, 100].map((size) => (
								<SelectItem key={size} value={size.toString()}>{size}</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="flex items-center gap-1">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Föregående
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Nästa
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PaginationControls;
