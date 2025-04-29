import { Button, Header, Heading, Text } from "@/components/common";

import classes from "./SignUpSuccess.module.css";
import { Link } from "react-router-dom";
import clsx from "clsx";
const SignUpSuccess = () => {
  return (
    <section className={clsx(classes.mainWrapper, "formPttern")}>
      <div className={classes.wrapper}>
        <Heading xl3 semiBold primitive900 textCenter>
          Thank You for Signing Up!
        </Heading>
        <div className={classes.infoContainer}>
          <Text xl primitive800 textCenter>
            {" "}
            Welcome aboard,
            <span className={classes.name}>[First Name]!</span>
          </Text>
          <Text sm primitive600 textCenter>
            Your account has been created successfully. We’ve sent a
            confirmation to{" "}
            <span className={classes.email}>yo**ur@email.com</span>
          </Text>
        </div>
        <Button to="/dashboard">Go to Dashboard</Button>
      </div>
    </section>
  );
};
export default SignUpSuccess;
