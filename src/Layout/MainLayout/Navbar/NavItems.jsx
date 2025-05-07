import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import classes from "./Navbar.module.css";
import ResourceDropdown from "./ResourceDropdown/ResourceDropdown";
import useOnClickOutside from "@/hooks";
import { MdClose } from "react-icons/md";

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
  { navItem: "Contact Us", to: "/contact-us" },
];

const NavItems = ({ sidebar, setSidebar }) => {
  const sidebarRef = useRef(null);
  const [isResourcesDropdownActive, setIsResourcesDropdownActive] =
    useState(false);
  useOnClickOutside(sidebarRef, () => setSidebar(false));
  return (
    <>
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
            onClick={() => setSidebar(false)}
          >
            {navItem}
          </NavLink>
        ))}

        <ResourceDropdown
          setSidebar={setSidebar}
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
            Resources
          </span>
        </ResourceDropdown>
      </div>
    </>
  );
};

export default NavItems;
