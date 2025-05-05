import clsx from "clsx";
import classes from "./NotFound.module.css";
import { Button, Heading } from "..";

const NotFound = () => {
  return (
    <main className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <Heading xl5 textCenter>
          404 - Page Not Found
        </Heading>
        <Button to="/"> Go Back To Home</Button>
      </div>
    </main>
  );
};
export default NotFound;
