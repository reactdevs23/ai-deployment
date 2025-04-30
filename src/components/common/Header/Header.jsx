import clsx from "clsx";
import { Heading, Text } from "..";
import classes from "./Header.module.css";
import { memo } from "react";

const Header = memo(({ className, heading, description, center }) => {
  return (
    <div className={clsx(classes.header, className, center && classes.center)}>
      <Heading xl medium primitive900 textCenter={center}>
        {heading}
      </Heading>
      <Text sm primitive600 textCenter={center}>
        {description}
      </Text>
    </div>
  );
});
export default Header;
