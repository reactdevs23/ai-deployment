import clsx from "clsx";
import classes from "./PatternContainer.module.css";
const PatternContainer = ({ children, className }) => {
  return <main className={clsx(className, classes.wrapper)}>{children}</main>;
};
export default PatternContainer;
