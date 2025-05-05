import classes from "./AdditonalHardwareTable.module.css";
import { Button, Heading, Text } from "@/components/common";
import Blank from "@/components/common/Blank/Blank";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";

// Columns Configuration
const columns = [
  {
    id: "hardwareCell",
    accessorKey: "hardware",

    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <div
          className={clsx(
            classes.hardwareContainer,
            classes.firstItem,
            classes.item
          )}
        >
          <Text sm primitive800 medium>
            {value?.name || <Blank />}
          </Text>{" "}
          <Text lxs primitive600>
            {value?.model || <Blank />}
          </Text>
        </div>
      );
    },
  },
  {
    id: "priceCell",

    accessorKey: "price",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <div className={clsx(classes.priceContainer, classes.item)}>
          <Text sm primitive800>
            {value.persec || <Blank />}
          </Text>
          <Text lxs primitive600>
            {value.perhour || <Blank />}
          </Text>
        </div>
      );
    },
  },
  {
    id: "descriptionCell",

    accessorKey: "description",
    cell: ({ getValue }) => (
      <Text
        sm
        primitive800
        className={clsx(classes.description, classes.lastItem)}
      >
        {getValue() || <Blank />}
      </Text>
    ),
  },
];

const AdditonalHardwareTable = ({ data }) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <thead>
          <tr className={classes.headerRow}>
            <th className={classes.headerCell} colSpan={3}>
              <Text sm primitive600 className={classes.heading}>
                Additional hardware
              </Text>
            </th>
          </tr>
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

export default AdditonalHardwareTable;
