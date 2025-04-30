import { Button, Heading } from "@/components/common";
import Dropdown from "../Dropdown/Dropdown";
import classes from "./PlaygroundHeader.module.css";
import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { sidebarIcon } from "@/images";

const items = [
  "meta-llama/llama-4-scount-17b-16e-instruct",
  "meta-llama/llama-5-scount-17b-16e-instruct",
  "meta-llama/llama-6-scount-17b-16e-instruct",
  "meta-llama/llama-7-scount-17b-16e-instruct",
];
const PlaygroundHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    "meta-llama/llama-4-scount-17b-16e-instruct"
  );
  return (
    <header className={classes.header}>
      <div className={classes.headingContainer}>
        <button className={classes.showSidebarButton}>
          <img
            src={sidebarIcon}
            alt="Sidebar"
            className={classes.sidebarIcon}
          />
        </button>
        <Heading lg primitive900 medium>
          Playground
        </Heading>
      </div>
      <Dropdown
        className={classes.dropdown}
        dropdownItems={items}
        isActive={showDropdown}
        setIsActive={setShowDropdown}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        onSelect={(val) => setSelectedValue(val)}
      />
      <Button blue50 sm className={classes.viewCodeButton}>
        <FaCode /> View Code
      </Button>
      <Button sm transparent className={classes.settingsButton}>
        <IoSettingsOutline className={classes.settingsIcon} />
      </Button>
    </header>
  );
};
export default PlaygroundHeader;
