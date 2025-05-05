import { NavLink } from "react-router-dom";
import classes from "./NavTabs.module.css";
import clsx from "clsx";
const navTabs = [
  {
    navItem: "API",
    to: "/deployment-details/api",
  },
  {
    navItem: "Playground",
    to: "/playground",
  },
  {
    navItem: "Setup Logs",
    to: "/deployment-details/setup-logs",
  },
  {
    navItem: "Settings",
    to: "/deployment-details/settings",
  },
];
const NavTabs = () => {
  return (
    <nav className={classes.navs}>
      {navTabs.map(({ navItem, to }, i) => (
        <NavLink
          key={i}
          to={to}
          className={({ isActive }) =>
            clsx(classes.navItem, {
              [classes.navActive]: isActive,
            })
          }
        >
          {navItem}
        </NavLink>
      ))}
    </nav>
  );
};
export default NavTabs;
