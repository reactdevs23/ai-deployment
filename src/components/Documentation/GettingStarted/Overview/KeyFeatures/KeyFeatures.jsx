import { Heading, Text } from "@/components/common";
import classes from "./KeyFeatures.module.css";
const KeyFeatures = ({ heading, list, ...rest }) => {
  return (
    <div className={classes.wrapper} {...rest}>
      <Heading blue500 xxl medium>
        {heading}
      </Heading>

      <div className={classes.features}>
        {list?.map(({ icon, title, description }, i) => (
          <div className={classes.feature} key={i}>
            <Heading sm primitive700 medium>
              {icon} {title}
            </Heading>
            <Text sm primitive600>
              {description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};
export default KeyFeatures;
