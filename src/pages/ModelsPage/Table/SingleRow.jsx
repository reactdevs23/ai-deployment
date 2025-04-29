import { useRef, useState } from "react";
import { ActionDropdown } from "@/components/common";
import { HiDotsVertical } from "react-icons/hi";

import clsx from "clsx";
import classes from "./Table.module.css";

const allActions = ["Deployment", "Delete"]; // You can pass this as prop too

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
      {row.cells.map((cell, j) => {
        // Check if this is the action column
        if (cell.column.id === "actions") {
          return (
            <td key={j} className={classes.cell}>
              <div className={clsx(classes.lastItem, classes.buttonContainer)}>
                <button
                  className={classes.actionButton}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent table row click conflicts
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

        return (
          <td key={j} className={classes.cell}>
            {cell.render("Cell")}
          </td>
        );
      })}
    </tr>
  );
};

export default SingleRow;
