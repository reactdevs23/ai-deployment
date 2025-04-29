import clsx from "clsx";
import classes from "./Line.module.css";

const Line = ({ className }) => {
  return <div className={clsx(classes.line, className)}></div>;
};
export default Line;
