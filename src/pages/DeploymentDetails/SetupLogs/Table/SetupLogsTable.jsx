import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { useMemo, useRef, useState } from "react";
import classes from "./SetupLogsTable.module.css";
import { Text } from "@/components/common";
import clsx from "clsx";
import SingleRow from "./SingleRow";

const SetupLogsTable = ({ data }) => {
  const [activeRow, setActiveRow] = useState(1);

  const columns = useMemo(
    () => [
      {
        accessorKey: "date",
        header: "Date",
        cell: ({ getValue }) => (
          <Text
            lxs
            medium
            primitive600
            className={clsx(classes.item, classes.date, classes.firstItem)}
          >
            {getValue() || "-"}
          </Text>
        ),
      },
      {
        accessorKey: "deploymentId",
        header: "Deployment ID",
        cell: ({ getValue }) => (
          <Text
            lxs
            primitive600
            medium
            className={clsx(classes.item, classes.deploymentId)}
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
              className={clsx(classes.item, classes.status)}
            >
              {value?.toLowerCase() === "successful" && "✅"}
              {value?.toLowerCase() === "error" && "🔴"} {value || "-"}
            </Text>
          );
        },
      },
      {
        accessorKey: "completedIn",
        header: "Completed in",
        cell: ({ getValue }) => (
          <Text
            lxs
            primitive600
            medium
            className={clsx(classes.item, classes.completedIn)}
          >
            {getValue() || "-"}
          </Text>
        ),
      },
      {
        id: "actions",
        header: "",
        cell: () => null,
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
            {table.getRowModel().rows.map((row, i) => (
              <SingleRow
                key={row.id}
                row={row}
                parentRef={parentRef}
                isExpanded={activeRow === i}
                onToggle={() => setActiveRow((prev) => (prev === i ? null : i))}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SetupLogsTable;
