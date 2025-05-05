import classes from "./HardwareTable.module.css";
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

    header: () => (
      <Text
        sm
        primitive600
        className={clsx(classes.heading, classes.firstHeading)}
      >
        Hardware
      </Text>
    ),
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
    header: () => (
      <Text sm primitive600 className={classes.heading}>
        Price
      </Text>
    ),
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
    id: "gpuCell",
    header: () => (
      <Text sm primitive600 className={classes.heading}>
        GPU
      </Text>
    ),
    accessorKey: "gpu",
    cell: ({ getValue }) => (
      <Text sm primitive800 className={clsx(classes.gpu, classes.item)}>
        {getValue() || <Blank />}
      </Text>
    ),
  },
  {
    id: "cpuCell",
    header: () => (
      <Text sm primitive600 className={classes.heading}>
        CPU
      </Text>
    ),
    accessorKey: "cpu",
    cell: ({ getValue }) => (
      <Text sm primitive800 className={clsx(classes.cpu, classes.item)}>
        {getValue() || <Blank />}
      </Text>
    ),
  },
  {
    id: "gpuvsRamCell",
    header: () => (
      <Text sm primitive600 className={classes.heading}>
        GPU v RAM
      </Text>
    ),
    accessorKey: "gpuvsram",
    cell: ({ getValue }) => (
      <Text sm primitive800 className={clsx(classes.gpuvsram, classes.item)}>
        {getValue() || <Blank />}
      </Text>
    ),
  },
  {
    id: "ramCell",
    header: () => (
      <Text sm primitive600 className={classes.heading}>
        RAM
      </Text>
    ),
    accessorKey: "ram",
    cell: ({ getValue }) => (
      <Text
        sm
        primitive800
        className={clsx(classes.ram, classes.lastItem, classes.item)}
      >
        {getValue() || <Blank />}
      </Text>
    ),
  },
];

const HardwareTable = ({ data }) => {
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

export default HardwareTable;
