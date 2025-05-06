import {
  Button,
  Heading,
  Input,
  Line,
  Text,
  Wrapper,
} from "@/components/common";
import classes from "./StayUpdated.module.css";
import clsx from "clsx";
import { useState } from "react";
const StayUpdated = () => {
  const [email, setEmail] = useState("");
  return (
    <Wrapper className={clsx(classes.wrapper, classes.mainWrapper)}>
      <div className={classes.container}>
        <Heading medium blue500 base>
          Stay Updated
        </Heading>
        <Text lxs primitive600>
          Subscribe to our monthly newsletter to get the latest blogs, platform
          updates, and community highlights right to your inbox.
        </Text>
      </div>
      <Line />
      <div className={classes.container}>
        <Input
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="Enter email address"
          className={classes.input}
        />
        <Button sm wFull>
          Subscribe
        </Button>
      </div>
    </Wrapper>
  );
};
export default StayUpdated;
