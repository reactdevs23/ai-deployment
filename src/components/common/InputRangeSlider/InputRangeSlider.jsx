import React from "react";
import classes from "./InputRangeSlider.module.css";
import { Input, Text } from "@/components/common";

const InputRangeSlider = React.memo(
  ({ label = "", value, setValue, min = -1, max = 1 }) => {
    const clamp = (value) => Math.max(min, Math.min(max, value));
    const handleKeyDown = (event) => {
      const { key, target } = event;
      const value = target.value;

      const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab"];

      if (allowedKeys.includes(key) || /[0-9]/.test(key)) return;

      if (key === "-") {
        if (value.includes("-") || target.selectionStart !== 0) {
          event.preventDefault();
        }
        return;
      }

      if (key === ".") {
        if (value.includes(".")) {
          event.preventDefault();
        }
        return;
      }

      if (key === "ArrowUp" || key === "ArrowDown") {
        event.preventDefault();
        const delta = key === "ArrowUp" ? 0.1 : -0.1;
        const current = parseFloat(value || 0);
        const newValue = clamp(parseFloat((current + delta).toFixed(1)));
        setValue(newValue);
        return;
      }

      event.preventDefault();
    };
    const getSliderBackground = (value) => {
      const zeroPercent = ((0 - min) / (max - min)) * 100;
      const currentPercent = ((value - min) / (max - min)) * 100;

      if (value < 0) {
        return `linear-gradient(to right,
        #E5E7EB 0%,
        #E5E7EB ${currentPercent}%,
        #de5254 ${currentPercent}%,
        #de5254 ${zeroPercent}%,
        #E5E7EB ${zeroPercent}%,
        #E5E7EB 100%)`;
      }

      if (value > 0) {
        return `linear-gradient(to right,
        #E5E7EB 0%,
        #E5E7EB ${zeroPercent}%,
        #3981F8 ${zeroPercent}%,
        #3981F8 ${currentPercent}%,
        #E5E7EB ${currentPercent}%,
        #E5E7EB 100%)`;
      }

      return `linear-gradient(to right, #E5E7EB 0%, #E5E7EB 100%)`;
    };

    const handleInputChange = (val) => {
      if (val === "") {
        setValue(""); // Allow empty string during typing
        return;
      }

      const parsed = parseFloat(val);
      if (!isNaN(parsed)) {
        setValue(clamp(parsed));
      }
    };

    return (
      <div className={classes.wrapper}>
        <div className={classes.labelContainer}>
          <Text sm primitive800>
            {label}
          </Text>
          <Input
            type="number"
            name={label}
            value={value}
            setValue={handleInputChange}
            onKeyDown={handleKeyDown}
            wrapperClassName={classes.inputWrapper}
            className={classes.input}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step="0.1"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className={`${classes.slider} ${
            value > 0
              ? classes.greenThumb
              : value < 0
              ? classes.redThumb
              : classes.neutralThumb
          }`}
          style={{ background: getSliderBackground(value) }}
        />
      </div>
    );
  }
);

export default InputRangeSlider;
