import React from "react";
import classes from "./CopyrightContainer.module.css";

import clsx from "clsx";
import { Text } from "@/components/common";
import { Link } from "react-router-dom";
const CopyrightContainer = () => {
  return (
    <div className={classes.wrapper}>
      {" "}
      <div className={clsx(classes.copyRightContainer, "container")}>
        <Text sm primitive0 className={classes.copyRight}>
          © 2025 Zarp AI. All Rights Reserved.
        </Text>

        <Text xs primitive0 className={classes.policyAndCondition}>
          <Link to="terms-of-service">Terms and Condition</Link>{" "}
          <Link to="privacy-policy" href="#/">
            Privacy Policy
          </Link>
        </Text>
      </div>
    </div>
  );
};

export default CopyrightContainer;
