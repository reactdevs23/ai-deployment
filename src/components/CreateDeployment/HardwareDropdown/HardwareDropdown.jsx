import { useRef } from "react";
import clsx from "clsx";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import classes from "./HardwareDropdown.module.css";
import React from "react";
import useOnClickOutside from "@/hooks";
import { Line, Text } from "@/components/common";

const HardwareDropdown = ({
  isActive,
  dropdownItems,
  selectedValue,
  onSelect,
  setIsActive,
  placholder,
  label,
}) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div className={classes.wrapper}>
      <Text primitive600 medium lxs>
        {label}
      </Text>
      <div className={clsx(classes.dropdown)} ref={ref}>
        <div
          className={clsx(classes.labelContainer, isActive && classes.active)}
          onClick={() => setIsActive((prev) => !prev)}
        >
          {selectedValue && (
            <Text sm primitive700 medium className={classes.label}>
              {selectedValue.name}
            </Text>
          )}{" "}
          {placholder && !selectedValue && (
            <Text sm primitive400 lsm>
              {placholder}
            </Text>
          )}
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
                <React.Fragment key={idx}>
                  <Line className={classes.line} />
                  <button
                    className={clsx(
                      classes.listItemContainer,
                      classes.listItem,
                      item?.name === selectedValue?.name && classes.active
                    )}
                    onClick={() => {
                      setIsActive(false);
                      onSelect(item);
                    }}
                  >
                    <div className={classes.content}>
                      <Text
                        primitive700
                        sm
                        medium
                        textLeft
                        className={classes.info}
                      >
                        {item.name}
                      </Text>
                      <Text lxs primitive600 textLeft className={classes.info}>
                        {item.specification}
                      </Text>
                    </div>
                    <div
                      className={clsx(classes.content, classes.priceContainer)}
                    >
                      <Text lxs primitive600 medium className={classes.info}>
                        ${item.price}/sec
                      </Text>
                      <Text lxs primitive600 className={classes.info}>
                        ${(item.price * 3600).toFixed(2)}/hour
                      </Text>
                    </div>
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareDropdown;
