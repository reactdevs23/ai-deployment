import classes from "./ActivityTable.module.css";
import { Button, Heading, Text } from "@/components/common";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
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
// Columns Configuration
const columns = [
  {
    id: "timeCell",
    header: () => (
      <Text xs primitive600 className={classes.timeHeader}>
        Time
      </Text>
    ),
    accessorKey: "time",
    cell: ({ getValue }) => (
      <Text lxs primitive600 className={classes.time}>
        {getValue() || "-"}
      </Text>
    ),
  },
  {
    id: "eventCell",
    header: () => (
      <Text xs primitive600 className={classes.eventHeader}>
        Event
      </Text>
    ),
    accessorKey: "event",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <Text lxs primitive600 className={classes.event}>
          <span>{value?.description || "-"}</span>
          {value?.emphasizedText && (
            <span className={classes.emphasizedText}>
              {" "}
              {value.emphasizedText}
            </span>
          )}
        </Text>
      );
    },
  },
  {
    id: "modelCell",
    header: () => (
      <Text xs primitive600 className={classes.modelHeader}>
        Model
      </Text>
    ),
    accessorKey: "model",
    cell: ({ getValue }) => (
      <Text lxs primitive600 medium className={classes.model}>
        {getValue() || "-"}
      </Text>
    ),
  },
];

const ActivityTable = () => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className={classes.wrapper}>
      <Heading base medium primitive900>
        Activity
      </Heading>
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
                    className={`${classes.cell} ${
                      classes[cell.column.id] || ""
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button sm arrowButton>
        View All Models <FaArrowRight />
      </Button>
    </section>
  );
};

export default ActivityTable;
