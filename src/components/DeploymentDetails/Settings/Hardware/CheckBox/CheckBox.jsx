import clsx from "clsx";
import classes from "./CheckBox.module.css";

const Checkbox = ({ className, checked, ...rest }) => {
  return (
    <label className={clsx(className, classes.container)}>
      <input type="checkbox" {...rest} checked={checked} readOnly />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default Checkbox;
