import clsx from "clsx";
import { Heading, Text } from "..";
import classes from "./Header.module.css";
import { memo } from "react";

const Header = memo(({ className, heading, description, center, small }) => {
  return (
    <div
      className={clsx(
        classes.header,
        className,
        center && classes.center,
        small && classes.header2
      )}
    >
      <Heading
        xl={!small}
        base={small}
        medium
        primitive900={!small}
        primitive800={small}
        textCenter={center}
      >
        {heading}
      </Heading>
      <Text sm={!small} xs={small} primitive600 textCenter={center}>
        {description}
      </Text>
    </div>
  );
});
export default Header;
