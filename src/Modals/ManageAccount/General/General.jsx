import { Header, Line } from "@/components/common";
import classes from "./General.module.css";
import React, { useRef, useState } from "react";
import EditableField from "./EditableField/EditableField";
import DropdownField from "./DropdownField/DropdownField";

const languageList = ["English (US)", "English (UK)"];
const timezoneList = ["GMT+6 (Asia/Dhaka)", "GMT+2(Europe/Paris)"];
const General = ({ parentRef }) => {
  const [firstName, setFirstName] = useState("Imam");
  const [lastName, setLastName] = useState("Hossain");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("imam@example.com");
  const [selectedTimezone, setSelectedTimezone] =
    useState("GMT+6 (Asia/Dhaka)");
  const [selectedLanugage, setSelectedLanguage] = useState("English (US)");

  return (
    <>
      <Header
        small
        heading="General"
        description="Manage your personal details and basic account information. Keep everything up to date for a smoother experience across the platform."
      />
      <div className={classes.container}>
        <EditableField
          label="First Name"
          value={firstName}
          setValue={setFirstName}
        />
        <Line />
        <EditableField
          label="Last Name"
          value={lastName}
          setValue={setLastName}
        />
        <Line />
        <EditableField
          inputUserName
          label="Username"
          value={userName}
          setValue={setUserName}
        />{" "}
        <EditableField
          emailEditing
          label="Enter new email"
          value={email}
          setValue={setEmail}
        />
      </div>
      <div className={classes.container} ref={parentRef}>
        <DropdownField
          dropdownItems={timezoneList}
          label="Time Zone"
          selectedValue={selectedTimezone}
          setSelectedValue={setSelectedTimezone}
        />
        <Line />
        <DropdownField
          dropdownItems={languageList}
          label="Language"
          selectedValue={selectedLanugage}
          setSelectedValue={setSelectedLanguage}
          parentRef={parentRef}
        />
        <Line />
        <EditableField type2 label="Date Joined" value="January 14, 2025" />
      </div>
    </>
  );
};
export default General;
