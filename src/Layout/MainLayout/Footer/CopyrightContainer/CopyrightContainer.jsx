import React from "react";
import classes from "./CopyrightContainer.module.css";

import clsx from "clsx";
import { Text } from "@/components/common";
const CopyrightContainer = () => {
  return (
    <div className={classes.wrapper}>
      {" "}
      <div className={clsx(classes.copyRightContainer, "container")}>
        <Text sm primitive0 className={classes.copyRight}>
          © 2025 Zarp AI. All Rights Reserved.
        </Text>

        <Text xs primitive0 className={classes.policyAndCondition}>
          <a href="#/">Terms and Condition</a> <a href="#/">Privacy Policy</a>
        </Text>
      </div>
    </div>
  );
};

export default CopyrightContainer;
