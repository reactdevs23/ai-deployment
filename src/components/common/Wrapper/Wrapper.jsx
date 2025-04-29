import React from "react";
import classes from "./Wrapper.module.css";
import clsx from "clsx";

const Wrapper = ({ className, children, ...rest }) => {
  return (
    <div className={clsx(classes.wrapper, className)} {...rest}>
      {children}
    </div>
  );
};

export default Wrapper;
