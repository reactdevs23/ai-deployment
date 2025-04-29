import { useTable } from "react-table";
import classes from "./ActivityTable.module.css"; // CSS Module

import { Button, Heading, Text } from "@/components/common";
import { FaArrowRight } from "react-icons/fa";

// Table Data
const data = [
  {
    time: "12:04 PM",
    event: {
      description: "🔁 Deployed new version",
    },
    model: "sentiment-analyzer",
  },
  {
    time: "11:32 AM",
    event: {
      description: "🧠 Model uploaded",
    },
    model: "object-detector",
  },
  {
    time: "10:47 AM",
    event: {
      description: "⚠️ Deployment failed (timeout)",
    },
    model: "fraud-detector",
  },
  {
    time: "10:47 AM",
    event: {
      description: "⚠️ Deployment failed – GPU timeout",
    },
    model: "fraud-detector",
  },
  {
    time: "9:15 AM",
    event: {
      description: "✅ API test succeeded (status: 200)",
    },
    model: "sentiment-analyzer",
  },
  {
    time: "Yesterday",
    event: {
      description: "📊 2,340 predictions processed",
    },
    model: "text-summarizer",
  },
  {
    time: "Yesterday",
    event: {
      description: "🔒 API token regenerated",
    },
    model: "Security Settings",
  },
  {
    time: "Apr 10, 2025",
    event: {
      description: "💾 Saved version ",
      emphasizedText: "v2.1.0-beta",
    },
    model: "vision-transformer",
  },
  {
    time: "Apr 10, 2025",
    event: {
      description: "📤 Uploaded dataset ",
      emphasizedText: "feedback_dataset_v3.csv",
    },
    model: "sentiment-analyzer",
  },
  {
    time: "Apr 9, 2025",
    event: {
      description: "📉 Model accuracy dropped below threshold alert",
    },
    model: "fraud-detector",
  },
];

// Columns Configuration
const columns = [
  {
    id: "timeCell",

    Header: () => (
      <Text xs primitive600 className={classes.timeHeader}>
        Time
      </Text>
    ),
    accessor: "time",
    Cell: ({ value }) => (
      <Text lxs primitive600 className={classes.time}>
        {value}
      </Text>
    ),
  },
  {
    id: "eventCell",
    Header: () => (
      <Text xs primitive600 className={classes.eventHeader}>
        Event
      </Text>
    ),
    accessor: "event",

    Cell: ({ value }) => (
      <Text lxs primitive600 className={classes.event}>
        <span> {value.description}</span>
        <span className={classes.emphasizedText}> {value.emphasizedText}</span>
      </Text>
    ),
  },
  {
    id: "modelCell",
    Header: () => (
      <Text xs primitive600 className={classes.modelHeader}>
        Model
      </Text>
    ),
    accessor: "model",
    Cell: ({ value }) => (
      <Text lxs primitive600 medium className={classes.model}>
        {value}
      </Text>
    ),
  },
];

const ActivityTable = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <section className={classes.wrapper}>
      <Heading base medium primitive900>
        Activity
      </Heading>
      <div className={classes.tableContainer}>
        <table {...getTableProps()} className={classes.table}>
          <thead>
            {headerGroups?.map((headerGroup, i) => (
              <tr key={i} className={classes.headerRow}>
                {headerGroup?.headers.map((column) => (
                  <th key={column.id} className={classes.headerCell}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows?.map((row, i) => {
              prepareRow(row);
              return (
                <tr key={i} className={classes.row}>
                  {row?.cells.map((cell, i) => (
                    <td
                      key={i}
                      className={`${classes.cell} ${
                        classes[cell.column.id] || ""
                      }`}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>{" "}
      <Button sm arrowButton>
        View All Models <FaArrowRight />
      </Button>
    </section>
  );
};

export default ActivityTable;
