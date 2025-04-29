import React from "react";
import classes from "./SectionHeading.module.css";
import { Heading } from "@/components/common";

const SectionHeading = ({ children }) => {
  return (
    <Heading primitive800 rgular sm textCenter className={classes.heading}>
      {children}
    </Heading>
  );
};

export default SectionHeading;
