import { Button, Heading, Line, Text } from "@/components/common";
import classes from "./EstimatedCost.module.css";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
const data = [
  {
    title: "Base Cost",
    description:
      "The estimated cost for the configured 0 minimum instances, before autoscaling",
    costPerDay: "$0.00",
  },
  {
    title: "Maximum Cost",
    description:
      "The cost estimate for 1 instance running at full capacity continuously for 24 hours.",
    costPerDay: "$0.00",
  },
];
const EstimatedCost = () => {
  return (
    <div className={classes.wrapper}>
      <Text primitive600 sm>
        <span className={classes.highlight}>
          Deployments give you full control over how your model runs through a
          private, fixed API endpoint.
        </span>{" "}
        You can manage the model version, choose the hardware it runs on, and
        define how it scales to match your needs.
      </Text>

      <div className={clsx(classes.costContainer)}>
        <Heading blue500 lsm medium>
          Base Cost
        </Heading>
        {data?.map((el, i) => (
          <React.Fragment key={i}>
            <Line className={classes.line} />
            <div className={classes.costInfo}>
              <div className={clsx(classes.content)}>
                <Heading primitive700 sm medium>
                  {el?.title}
                </Heading>
                <Text xs primitive500>
                  {el?.description}
                </Text>
              </div>{" "}
              <div className={clsx(classes.content, classes.price)}>
                <Heading primitive700 sm medium>
                  {el?.costPerDay}
                </Heading>
                <Text xs primitive500>
                  per day
                </Text>
              </div>
            </div>
          </React.Fragment>
        ))}{" "}
      </div>
    </div>
  );
};
export default EstimatedCost;
