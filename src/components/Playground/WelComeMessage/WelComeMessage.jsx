import { Heading } from "@/components/common";
import classes from "./WelComeMessage.module.css";

const WelComeMessage = () => {
  const info = [
    "You can start by typing a message",
    "Click submit to get a response",
    "Use the </> icon to view the code",
  ];
  return (
    <div className={classes.wrapper}>
      <Heading base medium blue500>
        Welcome to the playground
      </Heading>
      <ul className={classes.list}>
        {info.map((el, i) => (
          <li key={i} className={classes.item}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WelComeMessage;
