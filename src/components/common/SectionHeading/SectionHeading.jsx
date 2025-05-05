import React from "react";
import classes from "./SectionHeading.module.css";
import { Heading } from "@/components/common";
import clsx from "clsx";

const SectionHeading = ({ children, className }) => {
  return (
    <Heading xxl2 blue500 regular className={clsx(className, classes.heading)}>
      {children}
    </Heading>
  );
};

export default SectionHeading;
