import { Button, Heading, Line, Text } from "@/components/common";
import classes from "./PricingSummary.module.css";
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
const PricingSummary = () => {
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.priceContainer)}>
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
      <Button lsm wFull className={classes.saveButton}>
        Save Settings
      </Button>
    </div>
  );
};
export default PricingSummary;
