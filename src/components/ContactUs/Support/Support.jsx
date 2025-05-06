import clsx from "clsx";
import { Heading, Text } from "../../common";
import classes from "./Support.module.css";
const info = {
  email: "support@yourplatform.com",
  availibility: "Mon–Fri, 9 AM to 6 PM (PST)",
};
const Support = ({ className }) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <Heading xxl blue500 medium>
        Support
      </Heading>
      <div className={classes.serviceContainer}>
        <Text base primitive600>
          For help with deployments, API integration, or troubleshooting issues:
        </Text>
        <ul className={classes.listContainer}>
          <li className={classes.list}>
            Email: <br />
            <a href={`mailto:${info.email}`} className={classes.link}>
              {info.email}
            </a>
          </li>{" "}
          <li className={classes.list}>
            Availability: <br />
            {info.availibility}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Support;
