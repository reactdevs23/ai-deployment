import { Button, Header } from "@/components/common";
import classes from "./SuccessMessage.module.css";
import clsx from "clsx";

const SuccessMessage = ({ heading, description, onClose }) => {
  return (
    <>
      <div className={classes.container}>
        <Header center heading={heading} description={description} />
      </div>{" "}
      <Button
        sm
        wFull
        className={clsx(classes.okayButton, classes.button)}
        onClick={onClose}
      >
        Okay
      </Button>
    </>
  );
};
export default SuccessMessage;
