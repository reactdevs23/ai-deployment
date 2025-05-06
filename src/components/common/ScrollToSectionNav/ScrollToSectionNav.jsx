import { Link } from "react-scroll";
import { Text } from "..";
import classes from "./ScrollToSectionNav.module.css";
import clsx from "clsx";

const ScrollToSectionNav = ({ heading, items, className }) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <Text primitive500 xs uppercase>
        {heading}
      </Text>
      <div className={classes.items}>
        {items?.map(({ title, offset, to }, i) => (
          <Link
            key={i}
            to={to}
            spy={true}
            smooth={true}
            duration={500}
            offset={offset ? offset : -90}
            className={classes.item}
            activeClass={classes.active}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ScrollToSectionNav;
