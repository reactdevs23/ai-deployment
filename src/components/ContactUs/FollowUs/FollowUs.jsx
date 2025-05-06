import clsx from "clsx";
import { Heading, Text } from "../../common";
import classes from "./FollowUs.module.css";
const socialMedia = [
  {
    name: "Twitter",
    link: "#",
  },
  {
    name: "LinkedIn",
    link: "#",
  },
  {
    name: "GitHub",
    link: "#",
  },
  {
    name: "Blog",
    link: "#",
  },
];
const FollowUs = ({ className, title, description, email, availibility }) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <Heading xxl blue500 medium>
        Follow Us
      </Heading>
      <div className={classes.serviceContainer}>
        <Text base primitive600>
          Stay connected and get the latest updates:
        </Text>
        <ul className={classes.listContainer}>
          {socialMedia.map((el, i) => (
            <li className={classes.list} key={i}>
              <a href={el.to} className={classes.link}>
                {el.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FollowUs;
