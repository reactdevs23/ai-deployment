import { Text } from "@/components/common";
import classes from "./DropdownField.module.css";
import { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";

const DropdownField = ({
  label,
  dropdownItems,
  selectedValue,
  setSelectedValue,
  parentRef,
}) => {
  const [showDropdown, setShowDropdown] = useState(null);
  return (
    <div className={classes.wrapper}>
      <Text className={classes.label} lxs primitive700>
        {label}
      </Text>
      <Dropdown
        dropdownItems={dropdownItems}
        isActive={showDropdown}
        setIsActive={setShowDropdown}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        onSelect={(val) => setSelectedValue(val)}
        parentRef={parentRef ? parentRef : null}
      />
    </div>
  );
};
export default DropdownField;
