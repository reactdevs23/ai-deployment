import { Dropdown, Heading, Wrapper } from "@/components/common";
import classes from "./Verision.module.css";
import { useState } from "react";
import clsx from "clsx";
const allVersions = [
  "03d3a482 (about 2 years ago, lates)",
  "03d3a483 (about 1 years ago, lates)",
  "03d3a484 (about 3 years ago, lates)",
  "03d3a485 (about 2 years ago, lates)",
  "03d3a486 (about 1 years ago, lates)",
];
const Verision = () => {
  const [showVersionDropdown, setShowVersionDropdown] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState("");
  return (
    <Wrapper className={clsx(classes.wrapper, classes.mainWrapper)}>
      <Heading lsm medium blue500>
        Version
      </Heading>
      <div className={classes.container}>
        <Dropdown
          labelBreak
          type2
          label="Version"
          placholder="Select a version"
          dropdownItems={allVersions}
          isActive={showVersionDropdown}
          setIsActive={setShowVersionDropdown}
          selectedValue={selectedVersion}
          setSelectedValue={setSelectedVersion}
          onSelect={(val) => setSelectedVersion(val)}
        />
        <div className={classes.billingRequired}>
          <Heading lxs blue500 regular>
            <span className={classes.highlight}>
              Billing Required: 03d3a482
            </span>
            <br />
            No release notes available
          </Heading>
        </div>
      </div>
    </Wrapper>
  );
};
export default Verision;
