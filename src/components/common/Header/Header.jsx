import clsx from "clsx";
import { Heading, Text } from "..";
import classes from "./Header.module.css";
import { memo } from "react";

const Header = memo(({ className, heading, info }) => {
  return (
    <div className={clsx(classes.header, className)}>
      <Heading xl medium primitive900 textCenter>
        {heading}
      </Heading>

      <Text sm primitive600 textCenter>
        {info}
      </Text>
    </div>
  );
});
export default Header;
