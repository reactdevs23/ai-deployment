import clsx from "clsx";
import { Heading, Text } from "../../common";
import classes from "./SupportBox.module.css";

const SupportBox = ({ className, title, description, services, children }) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <Heading xl3 blue500 medium>
        {title}
      </Heading>
      <div className={classes.serviceContainer}>
        <Text lg primitive600>
          {description}
        </Text>
        <ul className={classes.listContainer}>
          {services?.map((service, i) => (
            <li key={i} className={classes.list}>
              {service}
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};
export default SupportBox;
