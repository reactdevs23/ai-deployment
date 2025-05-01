import ConversationContainer from "@/components/Playground/ConversationContianer/ConversationContainer";
import classes from "./Playground.module.css";
import clsx from "clsx";
import PlaygroundHeader from "@/components/Playground/PlaygroundHeader/PlaygroundHeader";
import Perameters from "@/components/Playground/Perameters/Perameters";
import { useState } from "react";
import useViewportHeight from "@/hooks/useViewportHeight";

const Playground = () => {
  useViewportHeight();
  const [sidebar, setSidebar] = useState(false);
  return (
    <div
      className={clsx(
        classes.wrapper,
        classes.playground,
        "container sectionPattern"
      )}
    >
      <div className={classes.container}>
        <div className={classes.sidebarAndConversation}>
          <PlaygroundHeader sidebar={sidebar} setSidebar={setSidebar} />
          <ConversationContainer />
        </div>

        <Perameters sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </div>
  );
};
export default Playground;
