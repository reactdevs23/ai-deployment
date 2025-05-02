import { useRef } from "react";
import clsx from "clsx";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import classes from "./NavDropdown.module.css";
import React from "react";
import useOnClickOutside from "@/hooks";
import { Line, Text } from "@/components/common";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiChevronUpDown } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";

import {
  dashboardActiveIcon,
  dashboardIcon,
  deploymentActiveIcon,
  deploymentIcon,
  modelsActiveIcon,
  modelsIcon,
  supportActiveIcon,
  supportIcon,
} from "@/images";
const navItems = [
  {
    icons: [dashboardActiveIcon, dashboardIcon],
    navItem: "Dashboard",
    to: "/dashboard",
  },
  {
    icons: [modelsActiveIcon, modelsIcon],
    navItem: "Models",
    to: "/models",
  },
  {
    icons: [deploymentActiveIcon, deploymentIcon],
    navItem: "Deployments",
    to: "/deployments",
  },
  {
    icons: [supportActiveIcon, supportIcon],
    navItem: "Support",
    to: "/supports",
  },
];
const NavDropdown = ({
  isActive,

  setIsActive,
}) => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];
  const ref = useRef();

  const handleHide = () => {
    setIsActive(false);
  };

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div className={clsx(classes.dropdown)} ref={ref}>
      <div
        className={clsx(classes.labelContainer, isActive && classes.active)}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <Text primitive700 sm className={clsx(classes.label)}>
          {currentPath}
        </Text>
        <div
          className={clsx(classes.arrowContainer, isActive && classes.active)}
        >
          {isActive ? (
            <FaAngleUp className={clsx(classes.arrow, classes.active)} />
          ) : (
            <FaAngleDown className={classes.arrow} />
          )}
        </div>
      </div>
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        {navItems.map((el, i) => (
          <NavLink
            to={el.to}
            key={i}
            className={({ isActive }) =>
              isActive
                ? [classes.listItem, classes.navActive].join(" ")
                : classes.listItem
            }
            onClick={handleHide}
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? el.icons[0] : el.icons[1]}
                  className={classes.navIcon}
                  alt={el.navItem}
                />
                <Text className={classes.navItem}>{el.navItem}</Text>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
