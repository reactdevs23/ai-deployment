import React, { forwardRef, useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { HamburgerButton, Input } from "@/components/common";
import classes from "./Navbar.module.css";
import clsx from "clsx";
import useOnClickOutside from "@/hooks";
import SearchIconButton from "@/components/common/SearchIconButton/SearchIconButton";

const SearchSection = forwardRef(({ sidebar, setSidebar }) => {
  const [showSeacrhField, setShowSearchField] = useState(false);

  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  useOnClickOutside([inputRef, buttonRef], () => setShowSearchField(false));
  useEffect(() => {
    if (showSeacrhField && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSeacrhField]);
  return (
    <>
      <div className={classes.searchAndMobileButton}>
        <div className={classes.mobileButtons}>
          <HamburgerButton sidebar={sidebar} setSidebar={setSidebar} />
          <SearchIconButton
            showSeacrhField={showSeacrhField}
            setShowSearchField={setShowSearchField}
            ref={buttonRef}
          />
        </div>
        <div
          className={clsx(
            classes.searchWrapper,
            showSeacrhField && classes.show,
            !showSeacrhField && classes.hide
          )}
        >
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
      </div>
    </>
  );
});

export default SearchSection;
