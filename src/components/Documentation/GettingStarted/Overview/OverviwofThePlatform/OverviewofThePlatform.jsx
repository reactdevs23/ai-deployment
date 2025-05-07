import { Heading, ParagraphWrapper, Text } from "@/components/common";
import classes from "./OverviewofThePlatform.module.css";
import React from "react";

const OverviewofThePlatform = ({ heading, list = [], ...rest }) => {
  return (
    <div className={classes.wrapper} {...rest}>
      <Heading xxl2 blue500 medium>
        {heading}
      </Heading>
      {list.length > 0 && (
        <ParagraphWrapper>
          {list?.map((list, i) => (
            <React.Fragment key={i}>
              <Text primitive600 base className={classes.info}>
                {list}
              </Text>
            </React.Fragment>
          ))}
        </ParagraphWrapper>
      )}
    </div>
  );
};
export default OverviewofThePlatform;
