import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";

const TableContent = ({ table, columns }) => {
	return (
		<Table>
			<TableHeader>
				{table.getHeaderGroups().map((headerGroup) => (
					<TableRow key={headerGroup.id} className="hover:bg-transparent border-b bg-muted/40">
						{headerGroup.headers.map((header) => (
							<TableHead
								key={header.id}
								className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
							>
								{header.isPlaceholder
									? null
									: flexRender(header.column.columnDef.header, header.getContext())}
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
							className="hover:bg-muted/50 transition-colors"
						>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id} className="text-center">
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))
				) : (
					<TableRow>
						<TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
							Inga resultat.
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};

export default TableContent;
