import React from "react";
import classes from "./HamburgerButton.module.css";
import clsx from "clsx";

const HamburgerButton = ({ sidebar, setSidebar }) => {
  const toggleMenu = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <button
      className={clsx(classes.button, sidebar && classes.active)}
      onClick={toggleMenu}
    >
      <span className={`${classes.line} `} />
      <span className={`${classes.line} ${classes.middle} `} />
      <span className={`${classes.line} `} />
    </button>
  );
};

export default HamburgerButton;
