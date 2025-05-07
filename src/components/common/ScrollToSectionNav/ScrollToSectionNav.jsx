import { Link } from "react-scroll";
import { Text } from "..";
import classes from "./ScrollToSectionNav.module.css";
import clsx from "clsx";

const ScrollToSectionNav = ({
  heading,
  items,
  className,
  type2,
  type3,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        classes.wrapper,
        className,
        type2 && classes.type2,
        type3 && classes.type3
      )}
    >
      <Text primitive500 xs uppercase className={classes.heading}>
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
            {...rest}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ScrollToSectionNav;
