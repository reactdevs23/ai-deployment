import { useTable } from "react-table";
import { useMemo, useRef, useState } from "react";
import classes from "./SetupLogsTable.module.css";
import { Text } from "@/components/common";
import clsx from "clsx";
import SingleRow from "./SingleRow"; // Make sure this path is correct

const SetupLogsTable = ({ data }) => {
  const [activeRow, setActiveRow] = useState(1);
  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => (
          <Text
            lxs
            medium
            primitive600
            className={clsx(classes.item, classes.date, classes.firstItem)}
          >
            {value || "-"}
          </Text>
        ),
      },
      {
        Header: "Deployment ID",
        accessor: "deploymentId",
        Cell: ({ value }) => (
          <Text
            lxs
            primitive600
            medium
            className={clsx(classes.item, classes.deploymentId)}
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
            className={clsx(classes.item, classes.status)}
          >
            {value.toLowerCase() === "successful" && "✅"}
            {value.toLowerCase() === "error" && "🔴"} {value || "-"}
          </Text>
        ),
      },
      {
        Header: "Completed in",
        accessor: "completedIn",
        Cell: ({ value }) => (
          <Text
            lxs
            primitive600
            medium
            className={clsx(classes.item, classes.completedIn)}
          >
            {value || "-"}
          </Text>
        ),
      },
      {
        Header: "",
        id: "actions",
        Cell: () => null, // Placeholder, actual action button is handled in ModelRow
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
              return (
                <SingleRow
                  key={i}
                  row={row}
                  parentRef={parentRef}
                  isExpanded={activeRow === i}
                  onToggle={() =>
                    setActiveRow((prev) => (prev === i ? null : i))
                  }
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SetupLogsTable;
