import clsx from "clsx";
import classes from "./ParagraphWrapper.module.css";
import { Heading } from "..";

const ParagraphWrapper = ({ className, children }) => {
  return <div className={clsx(classes.wrapper, className)}>{children}</div>;
};
export default ParagraphWrapper;
