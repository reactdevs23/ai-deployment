import { useTable } from "react-table";
import { useMemo, useRef } from "react";
import classes from "./Table.module.css";
import { Text } from "@/components/common";
import clsx from "clsx";
import SingleRow from "./SingleRow"; // Make sure this path is correct

const ModelsTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Invoice #",
        accessor: "invoice",
        Cell: ({ value }) => (
          <Text
            lxs
            medium
            primitive600
            className={clsx(classes.item, classes.invoice, classes.firstItem)}
          >
            {value || "-"}
          </Text>
        ),
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => (
          <Text lxs primitive600 className={clsx(classes.item, classes.date)}>
            {value || "-"}
          </Text>
        ),
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: ({ value }) => (
          <Text
            lxs
            blue500
            medium
            className={clsx(classes.item, classes.amount)}
          >
            {value || "-"}
          </Text>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <Text
            lxs
            primitive600
            medium
            className={clsx(classes.item, classes.status, classes.lastItem)}
          >
            {value.toLowerCase() === "paid" && "✅"}
            {value.toLowerCase() === "unpaid" && "🔴"} {value || "-"}
          </Text>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: data || [] });
  const parentRef = useRef(null);
  return (
    <section className={classes.wrapper}>
      <div className={classes.tableContainer} ref={parentRef}>
        <table {...getTableProps()} className={classes.table}>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr key={i} className={classes.headerRow}>
                {headerGroup.headers.map((column) => (
                  <th key={column.id} className={classes.headerCell}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return <SingleRow key={i} row={row} parentRef={parentRef} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ModelsTable;
