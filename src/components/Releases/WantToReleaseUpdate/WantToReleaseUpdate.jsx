import { Heading, Line, Text, Wrapper } from "@/components/common";
import classes from "./WantToReleaseUpdate.module.css";
import { useState } from "react";
import Switch from "@/components/common/Switch/Switch";
import clsx from "clsx";
const WantToReleaseUpdate = () => {
  const [wantReleaseUpdate, setWantReleaseUpdate] = useState(false);
  return (
    <Wrapper className={clsx(classes.wrapper, classes.mainWrapper)}>
      <div className={classes.header}>
        <Heading base blue500 medium>
          Want Release Updates?
        </Heading>
        <Text primitive600 lxs className={classes.info}>
          Enable email notifications or subscribe to our changelog feed to get
          the latest release notes directly to your inbox.
        </Text>
      </div>
      <Line />
      <div className={classes.footer}>
        <Text lxs primitive700>
          Enable Notifications
        </Text>
        <Switch
          isChecked={wantReleaseUpdate}
          setIsChecked={setWantReleaseUpdate}
        />
      </div>
    </Wrapper>
  );
};
export default WantToReleaseUpdate;
