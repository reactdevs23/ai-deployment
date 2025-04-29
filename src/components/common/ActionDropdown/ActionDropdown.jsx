import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import classes from "./ActionDropdown.module.css";
import React from "react";
import useOnClickOutside from "@/hooks";
import { Text } from "@/components/common";

const ActionDropdown = ({
  isActive,
  dropdownItems,
  selectedValue,
  onSelect,
  setIsActive,
  children,
  parentRef,
}) => {
  const ref = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState("bottom");

  // Close dropdown when clicking outside
  useOnClickOutside(ref, () => setIsActive(false));

  useEffect(() => {
    if (isActive && ref?.current && dropdownRef?.current) {
      const triggerRect = ref.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;

      // Calculate available space based on parent or window
      let spaceBelow, spaceAbove;

      if (parentRef?.current) {
        // Use parent container for space calculation
        const parentRect = parentRef.current.getBoundingClientRect();
        spaceBelow = parentRect.bottom - triggerRect.bottom;
        spaceAbove = triggerRect.top - parentRect.top;
      } else {
        // Use window for space calculation
        spaceBelow = window.innerHeight - triggerRect.bottom;
        spaceAbove = triggerRect.top;
      }

      // Determine dropdown position
      if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        setDropdownPosition("top");
      } else {
        setDropdownPosition("bottom");
      }
    }
  }, [isActive, parentRef]);

  return (
    <div className={clsx(classes.dropdown)} ref={ref}>
      {children}

      <div
        className={clsx(
          classes.dropdownMain,
          isActive && classes.active,
          dropdownPosition === "top" && classes.above
        )}
        ref={dropdownRef}
      >
        <div className={clsx(classes.list, "overflow")}>
          {dropdownItems?.map((item, idx) => {
            return (
              <button
                key={idx}
                className={classes.listItemContainer}
                onClick={() => {
                  setIsActive(false);
                  onSelect(item);
                }}
              >
                <Text
                  className={clsx(
                    classes.listItem,
                    item === selectedValue && classes.active
                  )}
                  sm
                >
                  {item}
                </Text>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActionDropdown;
