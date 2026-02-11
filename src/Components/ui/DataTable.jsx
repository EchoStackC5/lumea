import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

export default function DataTable({
  columns,
  data,
  onRowClick,
  emptyMessage = "No data available",
}) {
  return (
    <div className="">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-light-border">
            <TableRow className="hover:bg-light-border">
              {columns.map((column, index) => (
                <TableHead
                  key={index}
                  className={`font-poppins font-medium text-secondary-text text-xs md:text-sm whitespace-nowrap ${
                    column.align === "center" ? "text-center" : ""
                  }`}
                >
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.length > 0 ? (
              data.map((row, rowIndex) => (
                <TableRow
                  key={row.id || rowIndex}
                  className="cursor-pointer hover:bg-backgrounds"
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((column, colIndex) => (
                    <TableCell
                      key={colIndex}
                      className={`${column.align === "center" ? "text-center" : ""} whitespace-nowrap`}
                    >
                      {column.cell ? column.cell(row) : row[column.accessorKey]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-32 text-center">
                  <p className="font-semibold text-lg md:text-xl font-inter">
                    {emptyMessage}
                  </p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
