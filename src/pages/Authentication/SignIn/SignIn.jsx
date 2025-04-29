import { playgroundSkeletonImg } from "@/images";
import { useState } from "react";

import CheckInboxForVerify from "../../../components/Authentication/CheckInbox/CheckInbox";
import SignInForm from "@/components/Authentication/SignInForm/SignInForm";
const SignIn = () => {
  const [step, setStep] = useState(1);

  // step ===1  create account
  // step 2 === verify
  return (
    <>
      {step === 1 && <SignInForm setStep={setStep} />}
      {step === 2 && (
        <CheckInboxForVerify
          to="/dashboard"
          buttonText=" Verify & Sign-in"
          img={playgroundSkeletonImg}
        />
      )}
    </>
  );
};
export default SignIn;
