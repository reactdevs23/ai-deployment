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
        // Action column rendering
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

        // Regular cell rendering with fallback
        const renderedContent = cell.render("Cell");
        const safeContent =
          renderedContent === undefined ||
          renderedContent === null ||
          renderedContent === ""
            ? "-"
            : renderedContent;

        return (
          <td key={j} className={classes.cell}>
            {safeContent}
          </td>
        );
      })}
    </tr>
  );
};

export default SingleRow;
