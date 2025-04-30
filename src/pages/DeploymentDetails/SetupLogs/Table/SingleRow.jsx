import { useRef, useState } from "react";
import { ActionDropdown, Text } from "@/components/common";
import { HiDotsVertical } from "react-icons/hi";
import clsx from "clsx";
import classes from "./SetupLogsTable.module.css";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";
const allActions = ["Deployment", "Delete"]; // You can pass this as prop too

const SingleRow = ({ row, isExpanded, onToggle }) => {
  return (
    <>
      <tr className={clsx(classes.row, isExpanded && classes.activeRow)}>
        {row.cells.map((cell, j) => {
          if (cell.column.id === "actions") {
            return (
              <td key={j} className={classes.cell}>
                <button className={classes.actionButton} onClick={onToggle}>
                  {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </td>
            );
          }

          const content = cell.render("Cell") ?? "-";
          return (
            <td key={j} className={classes.cell}>
              {content}
            </td>
          );
        })}
      </tr>

      {isExpanded && row.original.logs?.length > 0 && (
        <tr className={classes.expandedRow}>
          <td colSpan={row.cells.length}>
            <div className={classes.logsBox}>
              {row?.original?.logs?.map((log, i) => (
                <Text lxs primitive600 key={i} className={classes.logLine}>
                  <span className={classes.timestamp}>{log?.time}</span>
                  <span>{log?.icon}</span>
                  <span className={classes.logdescription}>
                    {log?.description}{" "}
                    {log?.modelName && (
                      <b className={classes.modelName}>{log?.modelName}</b>
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
