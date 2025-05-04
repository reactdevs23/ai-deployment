import React, { useState } from "react";
import { MiniModal, Button, Input, Header } from "@/components/common";
import VerificationCode from "@/components/Authentication/VerificationCode/VerificationCode";
import { FaArrowRight } from "react-icons/fa";
import classes from "../EditableField.module.css";
import clsx from "clsx";
import { maskEmail } from "@/utils/utils";

const STEPS = {
  WARNING: 1,
  VERIFY_CURRENT: 2,
  ENTER_NEW_EMAIL: 3,
  VERIFY_NEW: 4,
  SUCCESS: 5,
};

// Dummy OTPs for validation
const DUMMY_OTPS = {
  CURRENT_EMAIL: "123456",
  NEW_EMAIL: "654321",
};

const EmailEditModal = ({ label, value, setValue, onClose }) => {
  const [step, setStep] = useState(STEPS.WARNING);
  const [newEmail, setNewEmail] = useState("");
  const [currentEmailOtp, setCurrentEmailOtp] = useState("");
  const [newEmailOtp, setNewEmailOtp] = useState("");
  const [currentEmailOtpInvalid, setCurrentEmailOtpInvalid] = useState(false);
  const [newEmailOtpInvalid, setNewEmailOtpInvalid] = useState(false);

  const handleContinue = () => setStep((prev) => prev + 1);

  const handleVerifyCurrentEmail = () => {
    if (currentEmailOtp === DUMMY_OTPS.CURRENT_EMAIL) {
      setCurrentEmailOtpInvalid(false);
      setStep(STEPS.ENTER_NEW_EMAIL);
    } else {
      setCurrentEmailOtpInvalid(true);
    }
  };

  const handleVerifyNewEmail = () => {
    if (newEmailOtp === DUMMY_OTPS.NEW_EMAIL) {
      setNewEmailOtpInvalid(false);
      setValue(newEmail);
      setStep(STEPS.SUCCESS);
    } else {
      setNewEmailOtpInvalid(true);
    }
  };

  const handleSaveNewEmail = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      setStep(STEPS.VERIFY_NEW);
      // In a real app, you would send OTP to the new email here
    }
  };

  const renderVerificationStep = (
    otp,
    setOtp,
    otpInvalid,
    setOtpInvalid,
    email
  ) => (
    <VerificationCode
      otp={otp}
      setOTP={setOtp}
      otpInvalid={otpInvalid}
      setOtpInvalid={setOtpInvalid}
      header
      description={
        <span>
          We&apos;ve sent a 6-digit code to{" "}
          <b className={classes.bold}>{maskEmail(email)}</b> — Enter the code
          below to complete verification.
        </span>
      }
    />
  );

  const renderStepContent = () => {
    switch (step) {
      case STEPS.WARNING:
        return (
          <Header
            center
            heading="Warning!"
            description="⚠️ Changing your email will log you out and require email verification. Make sure you have access to the new address before proceeding."
          />
        );

      case STEPS.VERIFY_CURRENT:
        return renderVerificationStep(
          currentEmailOtp,
          setCurrentEmailOtp,
          currentEmailOtpInvalid,
          setCurrentEmailOtpInvalid,
          value
        );

      case STEPS.ENTER_NEW_EMAIL:
        return (
          <>
            <Header
              center
              heading="Account Verified!"
              description="Your current email has been verified. Please enter your new email address."
            />
            <Input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              label={label}
              placeholder={label}
            />
          </>
        );

      case STEPS.VERIFY_NEW:
        return renderVerificationStep(
          newEmailOtp,
          setNewEmailOtp,
          newEmailOtpInvalid,
          setNewEmailOtpInvalid,
          newEmail
        );

      case STEPS.SUCCESS:
        return (
          <Header
            center
            heading="Successful!"
            description={`Your email has been updated to ${newEmail}. Please use this address to log in next time.`}
          />
        );

      default:
        return null;
    }
  };
  const renderActionButtons = () => {
    if (step === STEPS.SUCCESS) {
      return (
        <Button
          sm
          wFull
          className={clsx(classes.okayButton, classes.button)}
          onClick={onClose}
        >
          Okay
        </Button>
      );
    }

    const cancelButton = (
      <Button
        primitive100
        sm
        wFull
        className={clsx(classes.cancelButton, classes.button)}
        onClick={onClose}
      >
        Cancel
      </Button>
    );

    switch (step) {
      case STEPS.WARNING:
        return (
          <>
            {cancelButton}
            <Button
              sm
              wFull
              className={clsx(classes.continueButton, classes.button)}
              onClick={handleContinue}
            >
              Continue <FaArrowRight className={classes.arrow} />
            </Button>
          </>
        );

      case STEPS.VERIFY_CURRENT:
        return (
          <>
            {cancelButton}
            <Button
              sm
              wFull
              className={clsx(classes.verifyButton, classes.button)}
              onClick={handleVerifyCurrentEmail}
              disabled={currentEmailOtp.length !== 6}
            >
              Verify
            </Button>
          </>
        );

      case STEPS.ENTER_NEW_EMAIL:
        return (
          <>
            {cancelButton}
            <Button
              sm
              wFull
              className={clsx(classes.saveButton, classes.button)}
              onClick={handleSaveNewEmail}
              disabled={
                !newEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
              }
            >
              Save
            </Button>
          </>
        );

      case STEPS.VERIFY_NEW:
        return (
          <>
            {cancelButton}
            <Button
              sm
              wFull
              className={clsx(classes.verifyButton, classes.button)}
              onClick={handleVerifyNewEmail}
              disabled={newEmailOtp.length !== 6}
            >
              Verify
            </Button>
          </>
        );

      default:
        return cancelButton;
    }
  };

  return (
    <MiniModal isActive onClose={onClose}>
      <form className={classes.container}>{renderStepContent()}</form>
      <div className={classes.buttonContainer}>{renderActionButtons()}</div>
    </MiniModal>
  );
};

export default EmailEditModal;
