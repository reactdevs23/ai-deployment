import React from "react";
import classes from "./MaxToken.module.css";
import { Input, Text } from "@/components/common";
import { handleKeyDown } from "@/hooks";

const MaxToken = ({ value, setValue, label = "", maxValue = 1024 }) => {
  const getSliderBackground = (val, min, max) => {
    const percent = ((val - min) / (max - min)) * 100;
    const activeColor = val > 0 ? "#3981F8" : "#E5E7EB";

    return `linear-gradient(to right, ${activeColor} 0%, ${activeColor} ${percent}%, #ddd ${percent}%, #ddd 100%)`;
  };

  return (
    <div className={classes.sliderWrapper}>
      <div className={classes.labelContainer}>
        <Text sm primitive800>
          {label}
        </Text>
        <Input
          type="number"
          name={label}
          value={value}
          setValue={(val) => {
            const num = Number(val);
            if (!isNaN(num) && num >= 0 && num <= maxValue) {
              setValue(num);
            }
          }}
          onKeyDown={handleKeyDown}
          wrapperClassName={classes.inputWrapper}
          className={classes.input}
        />
      </div>
      <input
        type="range"
        min="0"
        max={maxValue}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className={classes.slider}
        style={{ background: getSliderBackground(value, 0, maxValue) }}
      />
    </div>
  );
};

export default MaxToken;
