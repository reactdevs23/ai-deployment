import { Button } from "@/components/common";
import classes from "./VerifyNow.module.css";
import clsx from "clsx";
import { useState } from "react";
import VerificationCode from "@/components/Authentication/VerificationCode/VerificationCode";
import { maskEmail } from "@/utils/utils";

const VerifyNow = ({
  handleCancel,
  handleVerification,
  email = "your@gmail.com",
}) => {
  const [otp, setOtp] = useState("");
  const [otpInvalid, setOtpInvalid] = useState(false);
  return (
    <>
      <div className={classes.wrapper}>
        <VerificationCode
          otp={otp}
          setOTP={setOtp}
          otpInvalid={otpInvalid}
          setOtpInvalid={setOtpInvalid}
          header
          description={
            <span>
              We&apos;ve sent a 6-digit code to{" "}
              <b className={classes.bold}>{maskEmail(email)}</b> — Enter the
              code below to complete verification.
            </span>
          }
        />
      </div>

      <div className={classes.buttonContainer}>
        <Button
          primitive100
          sm
          wFull
          className={clsx(classes.cancelButton, classes.button)}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          sm
          wFull
          className={clsx(classes.verifyButton, classes.button)}
          onClick={handleVerification}
          disabled={otp.length !== 6}
        >
          Verify
        </Button>
      </div>
    </>
  );
};
export default VerifyNow;
