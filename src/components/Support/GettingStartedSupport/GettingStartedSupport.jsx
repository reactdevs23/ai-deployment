import clsx from "clsx";
import { Heading, Text } from "../../common";
import classes from "./GettingStartedSupport.module.css";

const GettingStartedSupport = ({
  className,
  title,
  description,
  services,
  children,
}) => {
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
          {services?.map(({ service, link }, i) => (
            <li key={i} className={classes.list}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                {service}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};
export default GettingStartedSupport;
