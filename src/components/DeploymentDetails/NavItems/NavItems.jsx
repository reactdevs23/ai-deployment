import { NavLink } from "react-router-dom";
import classes from "./NavItems.module.css";
import clsx from "clsx";
const navItems = [
  {
    navItem: "API",
    to: "/deployment-details/api",
  },
  {
    navItem: "Playground",
    to: "/deployment-details/playground",
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
const NavItems = () => {
  return (
    <nav className={classes.navs}>
      {navItems.map(({ navItem, to }, i) => (
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
export default NavItems;
