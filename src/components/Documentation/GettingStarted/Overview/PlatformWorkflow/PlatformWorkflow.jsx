import { Heading, Text } from "@/components/common";
import classes from "./PlatformWorkflow.module.css";
import clsx from "clsx";
import React from "react";

const PlatformWorkflow = ({
  list = [],
  heading,

  className,
  ...rest
}) => {
  return (
    <div className={clsx(classes.wrapper, className)} {...rest}>
      <Heading blue500 xxl medium>
        {heading}
      </Heading>
      <div>
        <ol className={classes.listContainer}>
          {list?.map(({ title, description }, i) => (
            <li key={i}>
              <Heading base primitive700 medium>
                {title}
              </Heading>
              <Text base primitive700>
                {description}
              </Text>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default PlatformWorkflow;
