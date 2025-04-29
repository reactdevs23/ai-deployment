import { Heading, Text } from "@/components/common";
import classes from "./WhatAreDeployments.module.css";
const WhatAreDeployments = () => {
  return (
    <section className={classes.wrapper}>
      <Heading xl primitive900 medium>
        What Are Deployments?
      </Heading>{" "}
      <Text sm primitive600>
        Deployments give you complete control over how your models run in
        production. Whether you&apos;re scaling for millions or fine-tuning a
        private model, deployments provide flexibility, scalability, and
        monitoring in a unified interface.
      </Text>
    </section>
  );
};
export default WhatAreDeployments;
