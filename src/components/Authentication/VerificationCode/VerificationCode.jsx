import clsx from "clsx";
import React from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Button, Text } from "@/components/common";
import classes from "./VerificationCode.module.css";
import { useNavigate } from "react-router-dom";

const renderButton = (buttonProps) => {
  return (
    <button
      {...buttonProps}
      disabled={buttonProps.remainingTime !== 0}
      className={clsx(
        classes.resend,
        buttonProps.remainingTime !== 0 && classes.notAllowed
      )}
    >
      {buttonProps.remainingTime !== 0
        ? `Resend Code - ${buttonProps.remainingTime}s`
        : "Resend"}
    </button>
  );
};

const VerificationCode = ({
  otpInvalid,
  setOtpInvalid,
  otp,
  setOTP,

  buttonText,
  onVerify,
}) => {
  return (
    <div className={classes.wrapper}>
      <OTPInput
        inputClassName={clsx(classes.input, otpInvalid && classes.hasError)}
        value={otp}
        onChange={setOTP}
        autoFocus
        OTPLength={6}
        otpType="number"
        disabled={false}
      />

      {otpInvalid && (
        <Text xs className={classes.helperError}>
          Please enter valid verification code.
        </Text>
      )}

      <Button wFull onClick={onVerify}>
        {buttonText ? buttonText : "Verify"}
      </Button>

      <ResendOTP
        renderButton={renderButton}
        maxTime={30}
        timeInterval={1000}
        renderTime={() => null}
        onResendClick={() => console.log("Resend clicked")}
      />
    </div>
  );
};

export default VerificationCode;
