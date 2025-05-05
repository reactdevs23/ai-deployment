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

const ModelsTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "model",
        header: "Model",
        cell: ({ getValue }) => (
          <Text
            lxs
            medium
            primitive600
            className={clsx(classes.item, classes.model, classes.firstItem)}
          >
            {getValue() || "-"}
          </Text>
        ),
      },
      {
        accessorKey: "type",
        header: "Type",
        cell: ({ getValue }) => (
          <Text lxs primitive600 className={clsx(classes.item, classes.type)}>
            {getValue() || "-"}
          </Text>
        ),
      },
      {
        accessorKey: "framework",
        header: "Framework",
        cell: ({ getValue }) => (
          <Text
            lxs
            primitive600
            className={clsx(classes.item, classes.frameWork)}
          >
            {getValue() || "-"}
          </Text>
        ),
      },
      {
        accessorKey: "version",
        header: "Version",
        cell: ({ getValue }) => (
          <Text
            lxs
            primitive600
            className={clsx(classes.item, classes.version)}
          >
            {getValue() || "-"}
          </Text>
        ),
      },
      {
        accessorKey: "lastUpdated",
        header: "Last Updated",
        cell: ({ getValue }) => (
          <Text
            lxs
            primitive600
            className={clsx(classes.item, classes.lastUpdate)}
          >
            {getValue() || "-"}
          </Text>
        ),
      },
      {
        id: "actions",
        header: "",
        cell: () => null, // Placeholder for actions
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

export default ModelsTable;
