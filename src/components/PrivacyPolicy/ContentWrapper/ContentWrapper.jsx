import { Heading, Text } from "@/components/common";
import classes from "./ContentWrapper.module.css";
import clsx from "clsx";

const ContentWrapper = ({
  infolist = [],
  title,
  children,
  className,
  index,
  note,
  descripton,
}) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <Heading blue500 xxl2 regular>
        {index + 1}. {title}
      </Heading>
      <div>
        {descripton && (
          <Text base primitive700 className={classes.list}>
            {descripton}
          </Text>
        )}
        <ul className={classes.listContainer}>
          {infolist?.map((list, i) => (
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
        {children}
      </div>
    </div>
  );
};
export default ContentWrapper;
