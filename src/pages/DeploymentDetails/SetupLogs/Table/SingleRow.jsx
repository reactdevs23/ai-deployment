import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { flexRender } from "@tanstack/react-table";
import clsx from "clsx";
import { Text } from "@/components/common";
import classes from "./SetupLogsTable.module.css";

const SingleRow = ({ row }) => {
  const isExpanded = row.getIsExpanded();

  const toggleExpanded = () => row.toggleExpanded();

  return (
    <>
      <tr className={clsx(classes.row, isExpanded && classes.activeRow)}>
        {row.getVisibleCells().map((cell, j) => {
          const cellId = cell.column.id;

          if (cellId === "actions") {
            return (
              <td key={j} className={classes.cell}>
                <button
                  className={classes.actionButton}
                  onClick={toggleExpanded}
                >
                  {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </td>
            );
          }

          return (
            <td key={j} className={classes.cell}>
              {flexRender(cell.column.columnDef.cell, cell.getContext()) ?? "-"}
            </td>
          );
        })}
      </tr>

      {isExpanded && row.original.logs?.length > 0 && (
        <tr className={classes.expandedRow}>
          <td colSpan={row.getVisibleCells().length}>
            <div className={classes.logsBox}>
              {row.original.logs.map((log, i) => (
                <Text lxs primitive600 key={i} className={classes.logLine}>
                  <span className={classes.timestamp}>{log?.time}</span>
                  <span>{log?.icon}</span>
                  <span className={classes.logdescription}>
                    {log?.description}{" "}
                    {log?.modelName && (
                      <b className={classes.modelName}>{log.modelName}</b>
                    )}
                  </span>
                </Text>
              ))}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default SingleRow;
