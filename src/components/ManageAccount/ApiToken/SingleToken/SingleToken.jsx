import { IconButton, MiniModal, Text } from "@/components/common";
import classes from "./SingleToken.module.css";
import CopyButton from "@/components/common/CopyButton/CopyButton";
import { deleteIcon } from "@/images";
import { maskToken } from "@/utils/utils";
import Warning from "../Warning/Warning";
import { useState } from "react";
import VerifyNow from "../../VerifyNow/VerifyNow";
import SuccessMessage from "../../SuccessMessage/SuccessMessage";
const STEPS = {
  WARNING: 1,
  VERIFICATION: 2,
  SUCCESS: 3,
};

const SingleToken = ({ name, token }) => {
  const [step, setStep] = useState(STEPS.WARNING);
  const [isDeleting, setIsDeleteing] = useState(false);
  const handleCancel = () => {
    setIsDeleteing(false);
    setStep(STEPS.WARNING);
  };

  const handleDelete = () => {
    setStep((prev) => prev + 1);
  };
  const handleVerification = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <>
      <div className={classes.tokenContainer}>
        <div className={classes.tokenInfo}>
          <Text primitive700 sm medium>
            {name}
          </Text>
          <Text primitive600 lxs className={classes.token}>
            {maskToken(token)}
          </Text>
        </div>
        <div className={classes.buttonContainer}>
          <CopyButton textToCopy={token} />
          <IconButton onClick={() => setIsDeleteing(true)}>
            <img src={deleteIcon} alt="#" className={classes.deleteIcon} />
          </IconButton>
        </div>
      </div>
      <MiniModal isActive={isDeleting} onClose={() => setIsDeleteing(false)}>
        {STEPS.WARNING === step && (
          <Warning
            handleCancel={handleCancel}
            handleDelete={handleDelete}
            token={token}
          />
        )}{" "}
        {STEPS.VERIFICATION === step && (
          <VerifyNow
            handleCancel={handleCancel}
            handleVerification={handleVerification}
          />
        )}{" "}
        {STEPS.SUCCESS === step && (
          <SuccessMessage
            onClose={handleCancel}
            heading="Top-up Successful!"
            description="✅ Your account has been successfully topped up. The added balance is now available for use."
          />
        )}
      </MiniModal>
    </>
  );
};
export default SingleToken;
