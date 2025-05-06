import { NavLink } from "react-router-dom";
import { Text } from "..";
import classes from "./SideNavs.module.css";
import clsx from "clsx";

const SideNavs = ({ heading, items, className }) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <Text primitive500 xs uppercase>
        {heading}
      </Text>
      <div className={classes.items}>
        {items?.map(({ title, to }, i) => (
          <NavLink
            key={i}
            to={to}
            className={({ isActive }) =>
              clsx(classes.item, {
                [classes.active]: isActive,
              })
            }
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default SideNavs;
