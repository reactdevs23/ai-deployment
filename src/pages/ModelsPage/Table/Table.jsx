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
        Header: "Model",
        accessor: "model",
        Cell: ({ value }) => (
          <Text
            lxs
            medium
            primitive600
            className={clsx(classes.item, classes.model, classes.firstItem)}
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Type",
        accessor: "type",
        Cell: ({ value }) => (
          <Text lxs primitive600 className={clsx(classes.item, classes.type)}>
            {value}
          </Text>
        ),
      },
      {
        Header: "Framework",
        accessor: "framework",
        Cell: ({ value }) => (
          <Text
            lxs
            primitive600
            className={clsx(classes.item, classes.frameWork)}
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Version",
        accessor: "version",
        Cell: ({ value }) => (
          <Text
            lxs
            primitive600
            className={clsx(classes.item, classes.version)}
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Last Updated",
        accessor: "lastUpdated",
        Cell: ({ value }) => (
          <Text
            lxs
            primitive600
            className={clsx(classes.item, classes.lastUpdate)}
          >
            {value}
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
              return <SingleRow key={i} row={row} parentRef={parentRef} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ModelsTable;
