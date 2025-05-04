import React, { useRef, useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import { editIcon, plusIcon } from "@/images";
import {
  Button,
  Header,
  IconButton,
  Input,
  MiniModal,
  Text,
} from "@/components/common";

import classes from "./EditableField.module.css";
import InputUserName from "./InputUserName/InputUserName";
import { FaArrowRight } from "react-icons/fa";

import VerificationCode from "@/components/Authentication/VerificationCode/VerificationCode";
const existingUsernames = ["john.doe", "admin123", "user01"];
const EditableField = React.memo(
  ({
    type2,

    label,
    value,
    setValue,
    inputUserName,
    emailEditing,
  }) => {
    const [step, setStep] = useState(1);
    const [isEditing, setIsEditing] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [tempValue, setTempValue] = useState(value);
    const [newEmail, setNewEmail] = useState("");
    const handleSaveClick = useCallback(() => {
      setValue(tempValue);
      setIsEditing(false);
      setStep(1);
    }, [tempValue, setValue]);

    const handleCancelClick = useCallback(() => {
      setTempValue(value);
      setIsEditing(false);
      setStep(1);
    }, [value]);
    const handleContinue = useCallback(() => {
      setStep((prev) => prev + 1);
    }, []);
    const handleVerify = () => {
      setStep((prev) => prev + 1);
      setValue(newEmail);
    };
    useEffect(() => {
      if (inputUserName) {
        const isLongEnough = tempValue.length > 3;
        const isUnique = !existingUsernames.includes(tempValue.toLowerCase());
        setIsValid(isLongEnough && isUnique);
      }
    }, [tempValue, inputUserName]);

    return (
      <div className={clsx(classes.wrapper, type2 && classes.wrapper2)}>
        <Text className={classes.label} lxs primitive700>
          {label}
        </Text>

        <Text sm primitive700 medium className={classes.value}>
          {value || "-"}
        </Text>

        {!type2 && (
          <IconButton
            className={classes.iconButton}
            onClick={() => setIsEditing(true)}
          >
            <img
              src={value ? editIcon : plusIcon}
              alt="edit"
              className={classes.icon}
            />
          </IconButton>
        )}

        <MiniModal
          isActive={isEditing && !emailEditing}
          onClose={handleCancelClick}
          onSave={handleSaveClick}
          onCancel={handleCancelClick}
        >
          <form className={classes.container}>
            {!inputUserName ? (
              <Input
                value={tempValue}
                setValue={setTempValue}
                label={label}
                placeholder={label}
              />
            ) : (
              <InputUserName
                isValid={isValid}
                value={tempValue}
                setValue={setTempValue}
                label={label}
                placeholder={label}
              />
            )}
          </form>

          <div className={classes.buttonContainer}>
            <Button
              wFull
              sm
              primitive100
              className={clsx(classes.cancelButton, classes.button)}
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
            <Button
              sm
              wFull
              className={clsx(classes.saveButton, classes.button)}
              onClick={handleSaveClick}
            >
              Save
            </Button>
          </div>
        </MiniModal>
        <>
          <MiniModal
            isActive={isEditing && emailEditing}
            onClose={handleCancelClick}
            onSave={handleSaveClick}
            onCancel={handleCancelClick}
          >
            <form className={classes.container}>
              {step === 1 && (
                <Header
                  center
                  heading="Warning!"
                  description="⚠️ Changing your email will log you out and require email verification. Make sure you have access to the new address before proceeding."
                />
              )}
              {(step === 2 || step === 4) && (
                <>
                  <VerificationCode header />
                </>
              )}
              {step === 3 && (
                <>
                  <Header
                    center
                    heading="Account Verified!"
                    description="Your account is now verified."
                  />
                  <Input
                    type="email"
                    value={newEmail}
                    setValue={setNewEmail}
                    label={label}
                    placeholder={label}
                  />
                </>
              )}{" "}
              {step === 5 && (
                <>
                  <Header
                    center
                    heading="Successful!"
                    description="Your email has been updated. Please use the new address to log in next time."
                  />
                </>
              )}
            </form>
            <div className={classes.buttonContainer}>
              {step !== 5 && (
                <Button
                  wFull
                  sm
                  primitive100
                  className={clsx(classes.cancelButton, classes.button)}
                  onClick={handleCancelClick}
                >
                  Cancel
                </Button>
              )}
              {step === 1 && (
                <Button
                  sm
                  wFull
                  className={clsx(classes.saveButton, classes.button)}
                  onClick={handleContinue}
                >
                  Continue <FaArrowRight className={classes.arrow} />
                </Button>
              )}{" "}
              {(step === 2 || step === 4) && (
                <Button
                  sm
                  wFull
                  className={clsx(classes.saveButton, classes.button)}
                  onClick={handleVerify}
                >
                  Verify
                </Button>
              )}{" "}
              {step === 3 && (
                <Button
                  sm
                  wFull
                  className={clsx(classes.saveButton, classes.button)}
                  onClick={handleContinue}
                >
                  Save
                </Button>
              )}{" "}
              {step === 5 && (
                <Button
                  sm
                  wFull
                  className={clsx(classes.okayButton, classes.button)}
                  onClick={handleCancelClick}
                >
                  Okay
                </Button>
              )}
            </div>
          </MiniModal>
        </>
      </div>
    );
  }
);

export default EditableField;
