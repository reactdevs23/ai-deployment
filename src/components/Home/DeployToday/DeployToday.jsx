import { Button, HeaderWrapper, Section } from "@/components/common";
import classes from "./DeployToday.module.css";
import clsx from "clsx";
import { secondLogo } from "@/images";
const DeployToday = () => {
  return (
    <Section className={clsx(classes.wrapper, classes.mainWrapper)}>
      <img src={secondLogo} alt="#" className={classes.logo} />
      <HeaderWrapper
        center
        className={clsx(classes.header, classes.mainHeader)}
        xl4
        heading="Start Deploying Smarter Today"
        info="Launch Your First Deployment"
      >
        <Button className={classes.button} to="/sign-up">
          Get Started Now
        </Button>
      </HeaderWrapper>
    </Section>
  );
};
export default DeployToday;
