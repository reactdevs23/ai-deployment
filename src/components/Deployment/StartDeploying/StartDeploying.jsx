import { Button, Heading, Text } from "@/components/common";
import classes from "./StartDeploying.module.css";
import { FaArrowRight } from "react-icons/fa";

const StartDeploying = () => {
  return (
    <section className={classes.mainWrapper}>
      <div className={classes.wrapper}>
        <div className={classes.noDeploymentYet}>
          <Heading xl primitive900 medium>
            No Deployments Yet
          </Heading>
          <Text sm primitive600>
            Deploy your own custom models or explore and deploy powerful
            open-source models — all in one place.
          </Text>
        </div>
        <div className={classes.billingRequired}>
          <Heading sm blue500 regular>
            <span className={classes.highlight}>Billing Required:</span> To
            create deployments, you’ll need to set up billing.
          </Heading>
          <Button lxs arrowButton className={classes.learnButton}>
            Learn how billing works <FaArrowRight />
          </Button>
        </div>
      </div>
      <Button
        lsm
        wFull
        className={classes.deploymentButton}
        to="/create-deployment"
      >
        Create a Deployment
      </Button>
    </section>
  );
};
export default StartDeploying;
