import { useRef, useState } from "react";
import { ActionDropdown } from "@/components/common";
import { HiDotsVertical } from "react-icons/hi";
import clsx from "clsx";
import classes from "./Table.module.css";
import { flexRender } from "@tanstack/react-table";

const allActions = ["Deployment", "Delete"];

const SingleRow = ({ row, parentRef }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);

  const handleAction = (val) => {
    console.log("Selected:", val, "for row:", row.original);
    setSelectedAction(val);
    setIsDropdownOpen(false);
  };

  return (
    <tr className={classes.row}>
      {row.getVisibleCells().map((cell) => {
        // Action column rendering
        if (cell.column.id === "actions") {
          return (
            <td key={cell.id} className={classes.cell}>
              <div className={clsx(classes.lastItem, classes.buttonContainer)}>
                <button
                  className={classes.actionButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen((prev) => !prev);
                  }}
                >
                  <HiDotsVertical />
                </button>

                {isDropdownOpen && (
                  <ActionDropdown
                    parentRef={parentRef}
                    dropdownItems={allActions}
                    isActive={isDropdownOpen}
                    setIsActive={setIsDropdownOpen}
                    selectedValue={selectedAction}
                    onSelect={(val) => handleAction(val)}
                  />
                )}
              </div>
            </td>
          );
        }

        // Regular cell rendering
        return (
          <td key={cell.id} className={classes.cell}>
            {flexRender(cell.column.columnDef.cell, cell.getContext()) || "-"}
          </td>
        );
      })}
    </tr>
  );
};

export default SingleRow;
