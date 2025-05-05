import classes from "./ModelsTable.module.css";
import { Text } from "@/components/common";
import Blank from "@/components/common/Blank/Blank";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import clsx from "clsx";

// Columns Configuration
const columns = [
  {
    id: "model",

    header: () => (
      <Text
        sm
        primitive600
        medium
        className={clsx(classes.heading, classes.firstHeading)}
      >
        Model
      </Text>
    ),
    accessorKey: "model",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <Text
          sm
          primitive800
          medium
          className={clsx(classes.item, classes.firstItem)}
        >
          {value || <Blank />}
        </Text>
      );
    },
  },
  {
    id: "priceCell",
    header: () => (
      <Text
        sm
        primitive600
        medium
        className={clsx(classes.heading, classes.lastHeading)}
      >
        Price
      </Text>
    ),
    accessorKey: "price",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <Text sm primitive800 className={clsx(classes.price, classes.lastItem)}>
          {value || <Blank />}
        </Text>
      );
    },
  },
];

const ModelsTable = ({ data }) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={classes.tableContainer}>
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
            <tr key={row.id} className={classes.row}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`${classes.cell} ${classes[cell.column.id] || ""}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModelsTable;
