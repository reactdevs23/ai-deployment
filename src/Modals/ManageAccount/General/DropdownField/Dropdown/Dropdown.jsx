import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import classes from "./Dropdown.module.css";
import React from "react";
import useOnClickOutside from "@/hooks";
import { Text } from "@/components/common";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import useDropdownPosition from "@/hooks/useDropdownPosition";

const Dropdown = ({
  isActive,
  dropdownItems,
  selectedValue,
  onSelect,
  setIsActive,

  parentRef,
}) => {
  const ref = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownPosition = useDropdownPosition(
    isActive,
    ref,
    dropdownRef,
    parentRef
  );

  // Close dropdown when clicking outside
  useOnClickOutside(ref, () => setIsActive(false));

  return (
    <div className={clsx(classes.dropdown)} ref={ref}>
      <div
        className={clsx(classes.labelContainer, isActive && classes.active)}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <Text sm primitive700 medium className={clsx(classes.label)}>
          {selectedValue ? selectedValue : ""}
        </Text>
        {isActive ? (
          <FaAngleUp className={clsx(classes.arrow, classes.active)} />
        ) : (
          <FaAngleDown className={classes.arrow} />
        )}
      </div>

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

export default Dropdown;
