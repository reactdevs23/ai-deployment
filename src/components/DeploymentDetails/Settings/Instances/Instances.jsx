import {
  Dropdown,
  Heading,
  Input,
  Line,
  Text,
  Wrapper,
} from "@/components/common";
import classes from "./Instances.module.css";
import { useState } from "react";
import clsx from "clsx";
import { handleKeyDown } from "@/hooks";

const Instances = () => {
  const [minimumInstances, setMinimumInstances] = useState("");
  const [MaximumInstances, setMaximumInstances] = useState("");
  return (
    <Wrapper className={clsx(classes.wrapper, classes.mainWrapper)}>
      <Heading lsm medium blue500>
        Instances
      </Heading>
      <Line />
      <div className={classes.inputWrapper}>
        <div className={classes.labelContainer}>
          <Text primitive600 medium lxs>
            Minimum Instances
          </Text>
          <Text primitive600 lxs>
            0 min / 0 min
          </Text>
        </div>
        <Input
          onKeyDown={handleKeyDown}
          type="number"
          name="minimamInstances"
          value={minimumInstances}
          setValue={setMinimumInstances}
          placeholder="0"
        />
        <Text xs primitive600 medium>
          Keep one or more instance running at all times to avoid cold boots.
        </Text>
      </div>
      <div className={classes.inputWrapper}>
        <div className={classes.labelContainer}>
          <Text primitive600 medium lxs>
            Maximum Instances
          </Text>
          <Text primitive600 lxs>
            0 min / 0 min
          </Text>
        </div>
        <Input
          onKeyDown={handleKeyDown}
          type="number"
          name="maximamInstances"
          value={MaximumInstances}
          setValue={setMaximumInstances}
          placeholder="1"
        />
        <Text xs primitive600 medium>
          Limit the number of concurrent predictions to run at once.{" "}
        </Text>
      </div>
    </Wrapper>
  );
};
export default Instances;
