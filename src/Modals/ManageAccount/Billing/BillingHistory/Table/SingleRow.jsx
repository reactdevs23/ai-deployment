import { useState } from "react";

import classes from "./Table.module.css";
import { flexRender } from "@tanstack/react-table";

const SingleRow = ({ row, parentRef }) => {
  return (
    <tr className={classes.row}>
      {row.getVisibleCells().map((cell) => {
        // Regular cell rendering with fallback
        const renderedContent = flexRender(
          cell.column.columnDef.cell,
          cell.getContext()
        );
        const safeContent = !renderedContent ? "-" : renderedContent;

        return (
          <td key={cell.id} className={classes.cell}>
            {safeContent}
          </td>
        );
      })}
    </tr>
  );
};

export default SingleRow;
