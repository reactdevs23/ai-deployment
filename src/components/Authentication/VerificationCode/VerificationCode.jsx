import clsx from "clsx";
import React from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Button, Header, Text } from "@/components/common";
import classes from "./VerificationCode.module.css";
import { useNavigate } from "react-router-dom";
import { maskEmail } from "@/utils/utils";

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

  header,
  heading,
  description,
}) => {
  return (
    <div className={classes.wrapper}>
      <Header
        center
        heading={heading || "Check Your Inbox"}
        description={
          <span>
            We’ve sent a digit code to{" "}
            <b className={classes.bold}>{maskEmail("your@email.com")}</b> —
            Enter the code below to complete sign-in.
          </span>
        }
      />

      <div className={classes.inputWrapper}>
        <OTPInput
          inputClassName={clsx(
            classes.input,
            otpInvalid && otp.length === 6 && classes.hasError
          )}
          value={otp}
          onChange={(value) => {
            setOTP(value);
            if (otpInvalid) {
              setOtpInvalid(false);
            }
          }}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
        />

        {otpInvalid && otp.length === 6 && (
          <Text xs className={classes.helperError}>
            Please enter valid verification code.
          </Text>
        )}
      </div>

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
