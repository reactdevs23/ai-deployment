import WelComeMessage from "../WelComeMessage/WelComeMessage";
import classes from "./ConversationContainer.module.css";
const ConversationContainer = () => {
  return (
    <div className={classes.wrapper}>
      <WelComeMessage />
    </div>
  );
};
export default ConversationContainer;
