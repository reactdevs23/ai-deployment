import clsx from "clsx";
import classes from "./Blank.module.css";

const Blank = ({ className }) => {
  return <span className={clsx(classes.blank, className)}>-</span>;
};
export default Blank;
