import React from "react";
import classes from "./Text.module.css";
import clsx from "clsx";
const Text = ({
  children,

  xs,
  lxs,
  sm,
  base,

  md,
  lg,
  xxl,
  xl,
  xl2,
  xl3,
  xl4,
  blue500,
  blue600,

  primitive0,
  primitive50,
  primitive100,
  primitive200,
  primitive300,
  primitive400,
  primitive500,

  primitive600,
  primitive700,
  primitive800,
  primitive900,
  primitive950,
  green,
  warning,
  error,
  success,
  medium,
  secondary,
  bold,
  font600,
  textCenter,
  textRight,
  uppercase,
  textLeft,
  className,
  onClick,
}) => {
  return (
    <p
      onClick={onClick && onClick}
      className={clsx(
        classes.text,
        blue500 && classes.blue500,
        blue600 && classes.blue600,
        primitive0 && classes.primitive0,
        primitive50 && classes.primitive50,
        primitive100 && classes.primitive100,
        primitive200 && classes.primitive200,
        primitive300 && classes.primitive300,
        primitive400 && classes.primitive400,
        primitive500 && classes.primitive500,
        primitive600 && classes.primitive600,
        primitive700 && classes.primitive700,
        primitive900 && classes.primitive900,
        primitive800 && classes.primitive800,
        primitive950 && classes.primitive950,
        green && classes.green,
        warning && classes.warning,
        error && classes.error,
        success && classes.success,
        secondary && classes.secondary,
        xs && classes.xs,
        lxs && classes.lxs,
        sm && classes.sm,
        md && classes.md,
        base && classes.base,
        lg && classes.lg,
        xl && classes.xl,
        xxl && classes.xxl,
        xl2 && classes.xl2,
        xl3 && classes.xl3,
        xl4 && classes.xl4,
        bold && classes.bold,
        font600 && classes.font600,
        medium && classes.medium,
        textCenter && classes.textCenter,
        uppercase && classes.uppercase,
        textLeft && classes.textLeft,
        textRight && classes.textRight,
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
