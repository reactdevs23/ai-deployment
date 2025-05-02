import { Header, Line } from "@/components/common";
import classes from "./General.module.css";
import React, { useRef, useState } from "react";
import InfoField from "./InfoField/InfoField";
import DropdownField from "./DropdownField/DropdownField";

const languageList = ["English (US)", "English (UK)"];
const timezoneList = ["GMT+6 (Asia/Dhaka)", "GMT+2(Europe/Paris)"];
const General = () => {
  const [firstName, setFirstName] = useState("Imam");
  const [lastName, setLastName] = useState("Hossain");
  const [userName, setUserName] = useState("");
  const [selectedTimezone, setSelectedTimezone] =
    useState("GMT+6 (Asia/Dhaka)");
  const [selectedLanugage, setSelectedLanguage] = useState("English (US)");
  const parentRef = useRef(null);
  return (
    <>
      <Header
        small
        heading="General"
        description="Manage your personal details and basic account information. Keep everything up to date for a smoother experience across the platform."
      />
      <div className={classes.container}>
        <InfoField label="First Name" value={firstName} />
        <Line />
        <InfoField label="Last Name" value={lastName} />
        <Line />
        <InfoField label="Username" value={userName} />
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
        <InfoField type2 label="Username" value="January 14, 2025" />
      </div>
    </>
  );
};
export default General;
