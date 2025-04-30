import ConversationContainer from "@/components/Playground/ConversationContianer/ConversationContainer";
import classes from "./Playground.module.css";
import clsx from "clsx";
import PlaygroundHeader from "@/components/Playground/PlaygroundHeader/PlaygroundHeader";

const Playground = () => {
  return (
    <div
      className={clsx(
        classes.wrapper,
        classes.playground,
        "container sectionPattern"
      )}
    >
      <PlaygroundHeader />
      <ConversationContainer />
    </div>
  );
};
export default Playground;
