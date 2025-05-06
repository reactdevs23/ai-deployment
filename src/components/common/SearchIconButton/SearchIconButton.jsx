import React from "react";
import classes from "./SearchIconButton.module.css";
import clsx from "clsx";
import { LuSearch } from "react-icons/lu";
const SearchIconButton = React.forwardRef(
  ({ setShowSearchField, showSeacrhField }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          classes.mobileButton,
          showSeacrhField && classes.active
        )}
        onClick={() => setShowSearchField((prev) => !prev)}
      >
        <LuSearch className={classes.searchIcon} />
      </button>
    );
  }
);
export default SearchIconButton;
