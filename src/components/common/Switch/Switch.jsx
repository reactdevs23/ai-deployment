import React from "react";
import classes from "./Switch.module.css";
import { Text } from "..";

const Switch = ({ isChecked, setIsChecked, label }) => {
  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={classes.wrapper}>
      {label && (
        <Text sm primitive800>
          {label}
        </Text>
      )}
      <div
        className={`${classes.switch} ${isChecked ? classes.checked : ""}`}
        onClick={handleToggle}
      >
        <div className={classes.slider}></div>
      </div>
    </div>
  );
};

export default Switch;
