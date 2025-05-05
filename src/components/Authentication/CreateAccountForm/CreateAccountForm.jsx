import { Button, CheckBox, Header, Input, Text } from "@/components/common";
import AuthentictionWrapper from "@/components/common/AuthenticationWrapper/AuthentictionWrapper";
import { dashboardSkeletonImg, deploymentSkeletonImg } from "@/images";
import { useState } from "react";
import classes from "./CreateAccountForm.module.css";
import { Link } from "react-router-dom";

const CreateAccountForm = ({ setStep }) => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subribeUs, setSubscribeUs] = useState(false);

  // step ===1  create account
  // step 2 === verify
  // step 3 === success
  const handleSubmit = (e) => {
    e.preventDefault();
    if (subribeUs) {
      setStep(2);
      setLoading(true);
    }
  };
  return (
    <AuthentictionWrapper img={dashboardSkeletonImg}>
      <div className={classes.wrapper}>
        <Header
          center
          heading="Create Your Account"
          description="Fill in your details to get started. We’ll send you a one-time code to verify your email."
        />
        <form action="" onSubmit={handleSubmit} className={classes.form}>
          <Input
            required
            className={classes.input}
            value={firstName}
            setValue={setFirstName}
            placeholder="e.g. John"
            name="firstName"
            label="First Name"
          />{" "}
          <Input
            required
            className={classes.input}
            value={lastName}
            setValue={setLastName}
            placeholder="e.g. Doe"
            name="lastName"
            label="Last Name"
          />
          <Input
            email
            required
            className={classes.input}
            value={email}
            setValue={setEmail}
            placeholder="your-mail@example.com"
            name="email"
            label="Email"
          />
          <CheckBox
            required
            checked={subribeUs}
            setChecked={setSubscribeUs}
            label="Subscribe to our newsletter for get latest updates, news and offers."
          />
          <Button sm wFull semiBold onClick={() => {}} loading={loading}>
            Continue
          </Button>
        </form>
        <div className={classes.alreadyHaveAccont}>
          <Text sm premitive600>
            Don’t have any account?
          </Text>
          <Link to="/sign-in" className={classes.signIn}>
            Sign In
          </Link>
        </div>
      </div>
    </AuthentictionWrapper>
  );
};
export default CreateAccountForm;
