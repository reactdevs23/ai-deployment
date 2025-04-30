import { useState } from "react";
import classes from "./SetupLogs.module.css";
import { Text } from "@/components/common";
import clsx from "clsx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SingleRow = ({ row, isExpanded }) => {
  const { key: rowKey, ...rowProps } = row.getRowProps();

  return (
    <>
      <tr key={rowKey} {...rowProps} className={classes.row}>
        {row.cells.map((cell, idx) => {
          const { key: cellKey, ...cellProps } = cell.getCellProps();
          return (
            <td key={cellKey} {...cellProps} className={classes.cell}>
              {cell.render("Cell")}
            </td>
          );
        })}
      </tr>

      {isExpanded && row.original.logs && (
        <tr key={`${rowKey}-expanded`} className={classes.expandedRow}>
          <td colSpan={row.cells.length}>
            <div className={classes.logsBox}>
              {row.original.logs.map((log, i) => (
                <div key={i} className={classes.logLine}>
                  <span className={classes.timestamp}>{log.time}</span>
                  <span className={classes.message}>{log.message}</span>
                </div>
              ))}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default SingleRow;
