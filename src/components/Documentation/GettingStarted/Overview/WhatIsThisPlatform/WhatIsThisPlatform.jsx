import { Heading, Text } from "@/components/common";
import classes from "./WhatIsThisPlatform.module.css";
import clsx from "clsx";

const WhatIsThisPlatform = ({
  list,
  heading,

  className,
  note,
  descripton,
  ...rest
}) => {
  return (
    <div className={clsx(classes.wrapper, className)} {...rest}>
      <Heading blue500 xxl medium>
        {heading}
      </Heading>
      {descripton && (
        <Text base primitive700 className={classes.list}>
          {descripton}
        </Text>
      )}
      <ul className={classes.listContainer}>
        {list?.map((list, i) => (
          <li key={i} className={classes.list}>
            {list}
          </li>
        ))}
      </ul>{" "}
      {note && (
        <Text base primitive700 className={classes.list}>
          {note}
        </Text>
      )}
    </div>
  );
};
export default WhatIsThisPlatform;
