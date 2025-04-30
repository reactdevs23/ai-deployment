import clsx from "clsx";
import { Heading, Text } from "..";
import classes from "./HeaderWrapper.module.css";
import { memo } from "react";

const HeaderWrapper = memo(
  ({ children, className, topHeading, heading, info, xl4, xl5, center }) => {
    return (
      <header
        className={clsx(classes.header, className, center && classes.center)}
      >
        {topHeading && (
          <Heading
            primitive800
            regular
            sm
            textCenter
            className={classes.topHeading}
          >
            {topHeading}
          </Heading>
        )}
        {heading && (
          <Heading xl5={!xl4} xl4={!xl5} medium blue600 textCenter={center}>
            {heading}
          </Heading>
        )}
        {info && (
          <Text lg primitive600 textCenter={center}>
            {info}
          </Text>
        )}
        {children}
      </header>
    );
  }
);
export default HeaderWrapper;
