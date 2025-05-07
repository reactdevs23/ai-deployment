import React, { useEffect, useState, useCallback } from "react";
import { MiniModal, Button, Input } from "@/components/common";
import InputUserName from "../InputUserName/InputUserName";
import classes from "../EditableField.module.css";
import clsx from "clsx";

const existingUsernames = ["john.doe", "admin123", "user01"];

const EditModal = ({ label, value, setValue, onClose, isUsername }) => {
  const [tempValue, setTempValue] = useState(value);
  const [isValid, setIsValid] = useState(false);

  const handleSave = useCallback(() => {
    if (!isUsername || isValid) {
      setValue(tempValue);
      onClose();
    }
  }, [tempValue, isValid, isUsername, onClose, setValue]);

  useEffect(() => {
    if (isUsername) {
      const isLongEnough = tempValue.length > 3;
      const isUnique = !existingUsernames.includes(tempValue.toLowerCase());
      setIsValid(isLongEnough && isUnique);
    }
  }, [tempValue, isUsername]);

  return (
    <MiniModal
      isActive
      onClose={onClose}
      onSave={handleSave}
      onCancel={onClose}
    >
      <div className={classes.container}>
        {isUsername ? (
          <InputUserName
            isValid={isValid}
            value={tempValue}
            setValue={setTempValue}
            label={label}
            placeholder={label}
          />
        ) : (
          <Input
            value={tempValue}
            setValue={setTempValue}
            label={label}
            placeholder={label}
          />
        )}
      </div>
      <div className={classes.buttonContainer}>
        <Button
          sm
          wFull
          primitive100
          className={clsx(classes.cancelButton, classes.button)}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          sm
          wFull
          disabled={isUsername && !isValid}
          className={clsx(classes.saveButton, classes.button)}
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </MiniModal>
  );
};

export default EditModal;
