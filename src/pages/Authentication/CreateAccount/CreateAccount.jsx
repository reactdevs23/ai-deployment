import { deploymentSkeletonImg } from "@/images";
import { useState } from "react";

import CheckInboxForVerify from "../../../components/Authentication/CheckInbox/CheckInbox";
import SignUpSuccess from "../../../components/Authentication/SignUpSuccess/SignUpSuccess";
import CreateAccountForm from "@/components/Authentication/CreateAccountForm/CreateAccountForm";
const STEPS = {
  CREATE_ACCOUNT: 1,
  VERIFICATION: 2,
  SUCCESS: 3,
};

const CreateAccount = () => {
  const [step, setStep] = useState(STEPS.CREATE_ACCOUNT);
  // step ===1  create account
  // step 2 === verify
  // step 3 === success

  return (
    <>
      {STEPS.CREATE_ACCOUNT === step && <CreateAccountForm setStep={setStep} />}
      {STEPS.VERIFICATION === step && (
        <CheckInboxForVerify
          buttonText="Verify & Create Account"
          img={deploymentSkeletonImg}
          setStep={setStep}
        />
      )}
      {STEPS.SUCCESS === step && (
        <SignUpSuccess buttonText="" img={deploymentSkeletonImg} />
      )}
    </>
  );
};
export default CreateAccount;
