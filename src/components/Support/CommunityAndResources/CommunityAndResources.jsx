import clsx from "clsx";
import { Heading, Text } from "../../common";
import classes from "./CommunityAndResources.module.css";

const CommunityAndResources = ({ title, description, services, children }) => {
  return (
    <div className={clsx(classes.wrapper)}>
      <Heading xl3 blue500 medium>
        {title}
      </Heading>
      <div className={classes.serviceContainer}>
        <Text lg primitive600>
          {description}
        </Text>
        <ul className={classes.listContainer}>
          {services?.map((resource, index) => (
            <li key={index} className={classes.list}>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                {resource.title}
              </a>{" "}
              - <span>{resource.description}</span>
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};

export default CommunityAndResources;
