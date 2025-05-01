import { useRef } from "react";
import clsx from "clsx";
import { HiChevronUpDown } from "react-icons/hi2";

import classes from "./ModelDropdown.module.css";
import React from "react";
import useOnClickOutside from "@/hooks";
import { Text } from "@/components/common";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const ModelDropdown = React.memo(
  ({
    isActive,
    dropdownItems,
    selectedValue,
    onSelect,
    setIsActive,
    label = "Models",
    className,
  }) => {
    const ref = useRef();

    useOnClickOutside(ref, () => setIsActive(false));
    return (
      <div className={clsx(classes.dropdown, className)} ref={ref}>
        <Text sm medium primitive900>
          {label}
          <span className={classes.length}> ({dropdownItems.length})</span>
        </Text>
        <div
          className={clsx(classes.valueContainer, isActive && classes.active)}
          onClick={() => setIsActive((prev) => !prev)}
        >
          <div className={classes.selectedValue}>
            <Text lxs blue500 medium className={classes.logoAndName}>
              {selectedValue?.logo && (
                <img
                  src={selectedValue?.logo}
                  alt="#"
                  className={classes.logo}
                />
              )}
              {selectedValue?.name}
            </Text>
            <Text sm primitive800 className={classes.platform}>
              {selectedValue?.platform}
            </Text>
          </div>
          {isActive ? (
            <FaAngleUp className={clsx(classes.arrow)} />
          ) : (
            <FaAngleDown className={clsx(classes.arrow, classes.active)} />
          )}
        </div>
        <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
          <div className={clsx(classes.list, "overflow")}>
            {dropdownItems?.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className={clsx(
                    classes.listItemContainer,
                    classes.listItem,
                    item.name === selectedValue.name && classes.active
                  )}
                  onClick={() => {
                    setIsActive(false);
                    onSelect(item);
                  }}
                >
                  <Text lxs blue500 medium className={classes.logoAndName}>
                    {item?.logo && (
                      <img src={item?.logo} alt="#" className={classes.logo} />
                    )}
                    {item?.name}
                  </Text>
                  <Text sm primitive800 className={classes.platform}>
                    {item?.platform}
                  </Text>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

export default ModelDropdown;
