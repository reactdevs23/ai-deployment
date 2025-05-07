import React, { useState } from "react";
import clsx from "clsx";
import { editIcon, plusIcon } from "@/images";
import { IconButton, Text } from "@/components/common";
import classes from "./EditableField.module.css";

import EditModal from "./EditModal/EditModal";
import EmailEditModal from "./EmailEditModal/EmailEditModal";

const EditableField = React.memo(
  ({ type2, label, value, setValue, inputUserName, emailEditing }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleOpenEdit = () => setIsEditing(true);
    const handleCloseEdit = () => setIsEditing(false);

    return (
      <div className={clsx(classes.wrapper, type2 && classes.wrapper2)}>
        <Text className={classes.label} lxs primitive700>
          {label}
        </Text>
        <div className={classes.valueAndButton}>
          <Text sm primitive700 medium className={classes.value}>
            {value || "-"}
          </Text>

          {!type2 && (
            <IconButton className={classes.iconButton} onClick={handleOpenEdit}>
              <img
                src={value ? editIcon : plusIcon}
                alt="edit"
                className={classes.icon}
              />
            </IconButton>
          )}
        </div>

        {isEditing &&
          (emailEditing ? (
            <EmailEditModal
              label="Enter New Email"
              value={value}
              setValue={setValue}
              onClose={handleCloseEdit}
            />
          ) : (
            <EditModal
              label={label}
              value={value}
              setValue={setValue}
              onClose={handleCloseEdit}
              isUsername={inputUserName}
            />
          ))}
      </div>
    );
  }
);

export default EditableField;
