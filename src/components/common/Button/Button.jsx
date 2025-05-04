import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";
import { ImSpinner } from "react-icons/im";

const Button = ({
  children,
  onClick,
  href,
  arrowButton,
  transparent,
  btnPrimary,
  primitive100,
  primitiveTransparent8,
  semiBold,
  blue50,
  wFull,
  className,
  to,
  loading,
  xsm,
  lsm,
  lxs,
  base,
  lg,
  sm,
  radius,
  disabled,
  ...rest
}) => {
  return (
    <>
      {onClick ? (
        <button
          className={clsx(
            className,
            classes.button,
            semiBold && classes.semiBold,

            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            sm && classes.sm,
            xsm && classes.xsm,
            lsm && classes.lsm,
            lxs && classes.lxs,
            primitive100 && classes.primitive100,
            blue50 && classes.blue50,
            arrowButton && classes.arrowButton,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          onClick={onClick}
          disabled={!!(loading || disabled)}
          {...rest}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </button>
      ) : href ? (
        <a
          {...rest}
          className={clsx(
            className,
            classes.button,
            semiBold && classes.semiBold,

            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            sm && classes.sm,
            xsm && classes.xsm,
            lsm && classes.lsm,
            lxs && classes.lxs,
            primitive100 && classes.primitive100,
            blue50 && classes.blue50,
            arrowButton && classes.arrowButton,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </a>
      ) : to ? (
        <Link
          {...rest}
          className={clsx(
            className,
            classes.button,
            semiBold && classes.semiBold,

            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            sm && classes.sm,
            xsm && classes.xsm,
            lsm && classes.lsm,
            lxs && classes.lxs,
            primitive100 && classes.primitive100,
            blue50 && classes.blue50,
            arrowButton && classes.arrowButton,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          to={to}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </Link>
      ) : (
        <button
          className={clsx(
            className,
            classes.button,
            semiBold && classes.semiBold,

            radius && classes.radius,
            base && classes.base,
            lg && classes.lg,
            sm && classes.sm,
            xsm && classes.xsm,
            lsm && classes.lsm,
            lxs && classes.lxs,
            primitive100 && classes.primitive100,
            blue50 && classes.blue50,
            arrowButton && classes.arrowButton,
            btnPrimary && classes.btnPrimary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          disabled={!!(loading || disabled)}
          {...rest}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </button>
      )}
    </>
  );
};

export default Button;
