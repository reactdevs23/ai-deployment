import React, { forwardRef, useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { HamburgerButton, Input } from "@/components/common";
import classes from "./Navbar.module.css";
import clsx from "clsx";
import useOnClickOutside from "@/hooks";

const SearchSection = forwardRef(({ sidebar, setSidebar }) => {
  const [showSeacrhField, setShowSearchField] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  useOnClickOutside([searchRef, buttonRef], () => setShowSearchField(false));
  useEffect(() => {
    if (showSeacrhField && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSeacrhField]);
  return (
    <>
      <div className={classes.searchAndMobileButton}>
        <div className={classes.mobileButtons}>
          <HamburgerButton sidebar={sidebar} setSidebar={setSidebar} />

          <button
            ref={buttonRef}
            className={clsx(
              classes.mobileButton,
              showSeacrhField && classes.active
            )}
            onClick={() => setShowSearchField((prev) => !prev)}
          >
            <LuSearch className={classes.searchIcon} />
          </button>
        </div>
        <Input
          ref={inputRef}
          ctrlK
          className={classes.searchContainer}
          search
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Search"
        />
      </div>
      <div
        className={clsx(classes.searchWrapper, showSeacrhField && classes.show)}
      >
        <Input
          ref={searchRef}
          ctrlK
          className={classes.searchContainer}
          search
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Search"
        />
      </div>
    </>
  );
});

export default SearchSection;
