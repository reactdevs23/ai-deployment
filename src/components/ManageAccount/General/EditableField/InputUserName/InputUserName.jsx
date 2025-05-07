import React, { memo, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

import clsx from "clsx";

import classes from "./InputUserName.module.css";
import { Text } from "@/components/common";

const InputUserName = memo(
  ({
    value,
    setValue,
    placeholder,

    type,
    className,
    readonly,

    label,
    name,
    onChange,
    isValid,
  }) => {
    const [isFocused, setIsFocused] = useState(false); // To track if input is focused

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };
    // Handle change event
    const handleOnChange = (e) => {
      setValue(e.target.value);
    };
    return (
      <div className={clsx(classes.inputWrapper)}>
        {label && (
          <label htmlFor="input" className={classes.label}>
            {label}
          </label>
        )}
        <div
          className={clsx(
            classes.inputContainer,
            isFocused && classes.focused,
            !isValid && value && classes.notValid,
            isValid && classes.valid,
            className
          )}
        >
          <input
            id="input"
            name={name}
            type={type || "text"}
            className={classes.input}
            placeholder={placeholder}
            required
            readOnly={readonly}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            onChange={handleOnChange}
          />
          {!isValid && value && (
            <IoIosCloseCircle className={classes.notValidIcon} />
          )}
          {isValid && <FaCheckCircle className={classes.validIcon} />}
        </div>
        {!isValid && value && (
          <Text error xs className={classes.error}>
            Not Available or Not valid
          </Text>
        )}
      </div>
    );
  }
);

export default InputUserName;
