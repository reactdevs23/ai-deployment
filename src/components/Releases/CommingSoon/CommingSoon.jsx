import { Heading, Wrapper } from "@/components/common";
import classes from "./CommingSoon.module.css";
import clsx from "clsx";
const list = [
  "Custom domain support for deployment endpoints",
  "Model rollback system with single-click reversion",
  "Integrated billing graphs and alerts in dashboard",
];
const CommingSoon = () => {
  return (
    <Wrapper className={clsx(classes.wrapper, classes.mainWrapper)}>
      <Heading blue500 base medium>
        Coming Soon
      </Heading>
      <ul className={classes.listContainer}>
        {list?.map((list, i) => (
          <li key={i} className={classes.list}>
            {list}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default CommingSoon;
