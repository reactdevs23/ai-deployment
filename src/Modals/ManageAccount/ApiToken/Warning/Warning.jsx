import { Button, Header, Text } from "@/components/common";
import classes from "./Warning.module.css";
import clsx from "clsx";
import { maskToken } from "@/utils/utils";

const Warning = ({ handleCancel, handleDelete, token }) => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.headerContainer}>
          <Header
            center
            heading="Warning!"
            description="⚠️ Are you sure you want to delete this token? This action cannot be undone."
          />
          <Text textCenter medium primitive600 xs className={classes.token}>
            {maskToken(token)}
          </Text>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          primitive100
          sm
          wFull
          className={clsx(classes.cancelButton, classes.button)}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          sm
          wFull
          className={clsx(classes.deleteButton, classes.button)}
          onClick={handleDelete}
        >
          Yes Delete
        </Button>
      </div>
    </>
  );
};
export default Warning;
