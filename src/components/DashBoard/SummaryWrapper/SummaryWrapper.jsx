import { Heading, Line, Text, Wrapper } from "@/components/common";
import classes from "./SummaryWrapper.module.css";
import clsx from "clsx";
const SummaryWrapper = ({ title, items, children }) => {
  return (
    <Wrapper className={clsx(classes.wrapper, classes.mainWrapper)}>
      <Heading sm blue500 medium>
        {title}
      </Heading>

      {items?.map((item, i) => (
        <div className={classes.spaceBetween} key={i}>
          <Text lxs primitive700>
            {item.label || "-"}
          </Text>
          <Text sm primitive700 medium>
            {item.value || "-"}
          </Text>
        </div>
      ))}
      {children}
    </Wrapper>
  );
};
export default SummaryWrapper;
