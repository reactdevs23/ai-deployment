import { Heading, Line, Text } from "@/components/common";
import classes from "./Perameters.module.css";

const Perameters = () => {
  return (
    <aside className={classes.wrapper}>
      <div className={classes.header}>
        <Heading base primitive800 medium>
          Perameters
        </Heading>
        <button>
          <Text lxs primitive400 medium>
            Close
          </Text>
        </button>
      </div>
      <Line />
    </aside>
  );
};
export default Perameters;
