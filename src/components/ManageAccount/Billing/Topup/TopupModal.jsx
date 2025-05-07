import { MiniModal } from "@/components/common";
import { useState } from "react";
import TopupYourBalance from "./TopupYourBalance/TopupYourBalance";
import classes from "./TopupModal.module.css";
import VerifyNow from "../../VerifyNow/VerifyNow";
import SuccessMessage from "../../SuccessMessage/SuccessMessage";
import clsx from "clsx";
const STEPS = {
  TOP_UP: 1,
  VERIFICATION: 2,
  SUCCESS: 3,
};
const TopupModal = ({ onClose, isActive }) => {
  const [step, setStep] = useState(STEPS.TOP_UP);
  const handleVerification = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <MiniModal
      isActive={isActive}
      onClose={onClose}
      className={clsx(classes.modal, classes.mainModal)}
    >
      <div className={classes.wrapper}>
        {STEPS.TOP_UP === step && (
          <TopupYourBalance setStep={setStep} onClose={onClose} />
        )}
        {STEPS.VERIFICATION === step && (
          <VerifyNow
            handleCancel={onClose}
            handleVerification={handleVerification}
            email="your@gmail.com"
          />
        )}{" "}
        {STEPS.SUCCESS === step && (
          <SuccessMessage
            onClose={onClose}
            heading="Top-up Successful!"
            description="✅ Your account has been successfully topped up. The added balance is now available for use."
          />
        )}
      </div>
    </MiniModal>
  );
};
export default TopupModal;
