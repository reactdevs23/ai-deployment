import clsx from "clsx";
import classes from "./CheckBox.module.css";

import Text from "../Text/Text";

const CheckBox = ({ className, label, checked, setChecked, ...rest }) => {
  return (
    <label className={clsx(className, classes.container)}>
      <Text primitive600 medium className={classes.label}>
        {label}
      </Text>
      <input
        type="checkbox"
        {...rest}
        checked={checked}
        onChange={() => {
          setChecked((prev) => !prev);
        }}
      />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default CheckBox;
