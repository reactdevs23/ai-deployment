import { useMemo, useRef } from "react";
import classes from "./Table.module.css";
import { Text } from "@/components/common";
import clsx from "clsx";
import SingleRow from "./SingleRow";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "invoice",
        header: "Invoice #",
        cell: ({ getValue }) => (
          <Text
            lxs
            medium
            primitive600
            className={clsx(classes.item, classes.invoice, classes.firstItem)}
          >
            {getValue() || "-"}
          </Text>
        ),
      },
      {
        accessorKey: "date",
        header: "Date",
        cell: ({ getValue }) => (
          <Text lxs primitive600 className={clsx(classes.item, classes.date)}>
            {getValue() || "-"}
          </Text>
        ),
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ getValue }) => (
          <Text
            lxs
            blue500
            medium
            className={clsx(classes.item, classes.amount)}
          >
            {getValue() || "-"}
          </Text>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
          const value = getValue();
          return (
            <Text
              lxs
              primitive600
              medium
              className={clsx(classes.item, classes.status, classes.lastItem)}
            >
              {value?.toLowerCase() === "paid" && "✅"}
              {value?.toLowerCase() === "unpaid" && "🔴"} {value || "-"}
            </Text>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const parentRef = useRef(null);

  return (
    <section className={classes.wrapper}>
      <div className={classes.tableContainer} ref={parentRef}>
        <table className={classes.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className={classes.headerRow}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={classes.headerCell}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <SingleRow key={row.id} row={row} parentRef={parentRef} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
