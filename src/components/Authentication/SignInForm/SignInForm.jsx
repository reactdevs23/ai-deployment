import { Button, Header, Input, Text } from "@/components/common";
import AuthentictionWrapper from "@/components/common/AuthenticationWrapper/AuthentictionWrapper";
import { apiSkeletonImg } from "@/images";
import { useState } from "react";
import classes from "./SignInForm.module.css";
import { Link } from "react-router-dom";

const SignInForm = ({ setStep }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  // step ===1  create account
  // step 2 === verify

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    setLoading(true);
  };
  return (
    <>
      <AuthentictionWrapper img={apiSkeletonImg}>
        <div className={classes.wrapper}>
          <Header
            heading="Welcome Back!"
            info="Enter your email to continue. We'll send you a one-time code to verify."
          />
          <form action="" onSubmit={handleSubmit} className={classes.form}>
            <Input
              type="email"
              required
              className={classes.input}
              value={email}
              setValue={setEmail}
              placeholder="your-mail@example.com"
              name="email"
              label="Email"
            />
            <Button sm wFull semiBold loading={loading} onClick={() => {}}>
              Continue
            </Button>
          </form>
          <div className={classes.wantToCreateAccount}>
            <Text sm premitive600>
              Don’t have any account?
            </Text>
            <Link to="/sign-up" className={classes.signUp}>
              Sign Up
            </Link>
          </div>
        </div>
      </AuthentictionWrapper>
    </>
  );
};
export default SignInForm;
