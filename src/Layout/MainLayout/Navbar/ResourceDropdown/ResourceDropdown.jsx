import { useRef } from "react";
import clsx from "clsx";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import classes from "./ResourceDropdown.module.css";
import React from "react";
import useOnClickOutside from "@/hooks";
import { Text } from "@/components/common";
import { Link } from "react-router-dom";

const ResourceDropdown = ({
  children,
  isActive,
  dropdownItems,
  setIsActive,
}) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div className={clsx(classes.dropdown)} ref={ref}>
      <div
        className={classes.labelContainer}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <Text xs className={classes.label}>
          {children}
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
              <Link
                to={item.to}
                key={idx}
                className={clsx(classes.listItem)}
                onClick={() => {
                  setIsActive(false);
                }}
              >
                {item.navItem}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourceDropdown;
