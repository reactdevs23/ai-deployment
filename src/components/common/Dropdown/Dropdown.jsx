import { useRef } from "react";
import clsx from "clsx";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import classes from "./Dropdown.module.css";
import React from "react";
import useOnClickOutside from "@/hooks";
import { Text } from "@/components/common";
import { Link } from "react-router-dom";

const Dropdown = ({
  isActive,
  dropdownItems,
  selectedValue,
  onSelect,
  setIsActive,
  label,
  type2,
  labelBreak,
}) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div className={clsx(classes.dropdown)} ref={ref}>
      <div
        className={clsx(classes.labelContainer, isActive && classes.active)}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <Text
          sm
          primitive700
          medium
          className={clsx(classes.label, labelBreak && classes.labelBreak)}
        >
          {selectedValue ? selectedValue : label}
        </Text>
        {isActive ? (
          <FaAngleUp className={clsx(classes.arrow, classes.active)} />
        ) : (
          <FaAngleDown className={classes.arrow} />
        )}
      </div>
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
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
