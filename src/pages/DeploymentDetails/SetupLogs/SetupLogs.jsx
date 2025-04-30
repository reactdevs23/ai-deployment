import { useTable } from "react-table";
import { useMemo, useState } from "react";
import classes from "./SetupLogs.module.css";
import clsx from "clsx";
import SingleRow from "./SingleRow"; // Updated version for logs
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
const data = [
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        message: "🚀 Starting deployment for 'sentiment-analyzer'...",
      },
      { time: "12:02:05", message: "🔧 Allocating 1x GPU instance..." },
      { time: "12:02:09", message: "📦 Pulling model artifact: v1.2.0" },
      { time: "12:02:13", message: "✅ Model loaded successfully" },
      {
        time: "12:02:25",
        message: "✅ Deployment is live at https://api.domain.com/...",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Error!",
    completedIn: "24 seconds",
    logs: [{ time: "12:03:01", message: "🚨 Failed to connect to endpoint" }],
  },
];

const SetupLogs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Deployment ID",
        accessor: "deploymentId",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <span className={clsx(classes.status, value.toLowerCase())}>
            {value === "Successful" ? "✅" : "❌"} {value}
          </span>
        ),
      },
      {
        Header: "Completed in",
        accessor: "completedIn",
      },
      {
        Header: "", // Toggle
        id: "expander",
        Cell: ({ row }) => {
          const index = row.index;
          return (
            <button
              onClick={() => handleToggle(index)}
              className={classes.expandBtn}
              aria-label="Expand row"
            >
              {expandedIndex === index ? <FaChevronDown /> : <FaChevronRight />}
            </button>
          );
        },
      },
    ],
    [expandedIndex]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className={classes.wrapper}>
      <table {...getTableProps()} className={classes.table}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key: headerGroupKey, ...headerGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr
                key={headerGroupKey}
                {...headerGroupProps}
                className={classes.headerRow}
              >
                {headerGroup.headers.map((column) => {
                  const { key: columnKey, ...columnProps } =
                    column.getHeaderProps();
                  return (
                    <th
                      key={columnKey}
                      {...columnProps}
                      className={classes.headerCell}
                    >
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const { key: rowKey, ...rowProps } = row.getRowProps();
            return (
              <SingleRow
                key={rowKey}
                row={row}
                isExpanded={expandedIndex === row.index}
                toggleExpand={() => handleToggle(row.index)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SetupLogs;
