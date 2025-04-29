import { deploymentSkeletonImg } from "@/images";
import { useState } from "react";

import CheckInboxForVerify from "../../../components/Authentication/CheckInbox/CheckInbox";
import SignUpSuccess from "../../../components/Authentication/SignUpSuccess/SignUpSuccess";
import CreateAccountForm from "@/components/Authentication/CreateAccountForm/CreateAccountForm";
const CreateAccount = () => {
  const [step, setStep] = useState(1);
  // step ===1  create account
  // step 2 === verify
  // step 3 === success

  return (
    <>
      {step === 1 && <CreateAccountForm setStep={setStep} />}
      {step === 2 && (
        <CheckInboxForVerify
          buttonText="Verify & Create Account"
          img={deploymentSkeletonImg}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <SignUpSuccess buttonText="" img={deploymentSkeletonImg} />
      )}
    </>
  );
};
export default CreateAccount;
