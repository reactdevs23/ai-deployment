import clsx from "clsx";
import classes from "./NotFound.module.css";
import { Button, Heading } from "..";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <Heading xl5 textCenter>
          404 - Page Not Found
        </Heading>
        <Button to="/" onClick={() => navigate(-1)}>
          {" "}
          Go Back{" "}
        </Button>
      </div>
    </main>
  );
};
export default NotFound;
