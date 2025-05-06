import { useRef, useState } from "react";
import clsx from "clsx";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import classes from "./VersionDropdown.module.css";
import React from "react";
import useOnClickOutside from "@/hooks";
import { Text } from "@/components/common";
import { Link } from "react-scroll";

const VersionDropdown = ({
  dropdownItems,

  className,
}) => {
  const ref = useRef();
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(dropdownItems[0].title);
  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div className={clsx(classes.dropdown, className)} ref={ref}>
      <div
        className={clsx(classes.labelContainer, isActive && classes.active)}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <Text sm primitive700 medium className={clsx(classes.label)}>
          {selectedValue}
        </Text>
        {isActive ? (
          <FaAngleUp className={clsx(classes.arrow, classes.active)} />
        ) : (
          <FaAngleDown className={classes.arrow} />
        )}
      </div>
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={clsx(classes.list, "overflow")}>
          {dropdownItems?.map(({ title, to }, idx) => {
            return (
              <Link
                key={idx}
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-130}
                className={classes.listItemContainer}
                onClick={() => {
                  setIsActive(false);
                  setSelectedValue(title);
                }}
              >
                <Text
                  className={clsx(
                    classes.listItem,
                    title === selectedValue && classes.active
                  )}
                  sm
                >
                  {title}
                </Text>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VersionDropdown;
