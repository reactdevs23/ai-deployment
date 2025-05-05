import React, { useState, useEffect, useRef } from "react";
import classes from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { FaUserAlt } from "react-icons/fa";

import { Button, HamburgerButton, Input } from "@/components/common";
import { useScroll } from "@/hooks/useScroll";

import { LuSearch } from "react-icons/lu";
import useOnClickOutside from "@/hooks";
import { MdClose } from "react-icons/md";
import { Logo, userImg } from "@/images";
import ResourceDropdown from "./ResourceDropdown/ResourceDropdown";
import UserDropdown from "./UserDropdown/UserDropdown";
import NavDropdown from "./NavDropdown/NavDropdown";
// resource dropdownItems

const navItems = [
  { navItem: "Playground", to: "/playground" },
  { navItem: "Pricing", to: "/pricing" },
  { navItem: "Docs", to: "/docs" },
  { navItem: "Releases", to: "/releases" },
  { navItem: "Blog", to: "/blog" },
];
const resources = [
  { navItem: "FAQ’s", to: "/faqs" },
  { navItem: "Support", to: "/support" },
  { navItem: "Contact Us ", to: "/contact-us" },
];
const Navbar = ({
  isAuthenticated,
  setShowManageAccountModal,
  setActiveTab,
}) => {
  const userInfo = {
    img: userImg,
    name: "Imam Hossain",
    email: "example@gmail.com",
  };
  const [showSeacrhField, setShowSearchField] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");

  // resource dropdown

  const [isResourcesDropdownActive, setIsResourcesDropdownActive] =
    useState(false);

  const [isUserDropdownActive, setIsUserDropdownActive] = useState(false);
  const [isNavDropdownActive, setIsNavDropdownActive] = useState(false);

  const sidebarRef = useRef(null);
  const [sidebar, setSidebar] = useState(false);
  const isScrolled = useScroll(90);

  useOnClickOutside(sidebarRef, () => setSidebar(false));
  useOnClickOutside(searchRef, () => setShowSearchField(false));
  return (
    <>
      <div
        className={clsx(
          classes.wrapper,
          (isScrolled || sidebar) && classes.wrapperBg
        )}
      >
        <header className={[classes.header, "container"].join(" ")}>
          <NavLink to="/" onClick={() => setSidebar((prev) => !prev)}>
            <span className={classes.logo}>
              <Logo color="#336FE1" />
            </span>
          </NavLink>
          <div
            className={clsx(classes.navItems, sidebar && classes.sidebar)}
            ref={sidebarRef}
          >
            {navItems.map(({ navItem, to }, i) => (
              <NavLink
                key={i}
                className={({ isActive }) =>
                  clsx(classes.navItem, {
                    [classes.navActive]: isActive,
                  })
                }
                to={to}
                // onClick={() => setSidebar((prev) => !prev)}
              >
                {navItem}
              </NavLink>
            ))}

            <ResourceDropdown
              isActive={isResourcesDropdownActive}
              setIsActive={setIsResourcesDropdownActive}
              onSelect={() => {
                setIsResourcesDropdownActive(false);
              }}
              dropdownItems={resources}
            >
              <span
                className={clsx(
                  classes.navItem,
                  classes.dropdownItem,
                  isResourcesDropdownActive && classes.navActive
                )}
              >
                {" "}
                Resources
              </span>
            </ResourceDropdown>
          </div>
          <div className={classes.searchAndMobileButton}>
            <div className={classes.mobileButtons}>
              <HamburgerButton sidebar={sidebar} setSidebar={setSidebar} />

              <button
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
            className={clsx(
              classes.searchWrapper,
              showSeacrhField && classes.show
            )}
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
          <div className={classes.buttonContainer}>
            {isAuthenticated ? (
              <>
                <NavDropdown
                  isActive={isNavDropdownActive}
                  setIsActive={setIsNavDropdownActive}
                />
                <UserDropdown
                  setActiveTab={setActiveTab}
                  userInfo={userInfo}
                  isActive={isUserDropdownActive}
                  setIsActive={setIsUserDropdownActive}
                  setShowManageAccountModal={setShowManageAccountModal}
                >
                  Explorer
                </UserDropdown>
              </>
            ) : (
              <>
                <Button xsm transparent to="/sign-in">
                  Login
                </Button>
                <Button xsm className={classes.getStartedButton} btnPrimary>
                  Get Started
                </Button>
              </>
            )}
          </div>
        </header>
      </div>

      <div className={clsx(classes.overlay, sidebar && classes.sidebarActive)}>
        {" "}
        <button className={classes.closeIcon}>
          <MdClose />
        </button>
      </div>
    </>
  );
};

export default Navbar;
