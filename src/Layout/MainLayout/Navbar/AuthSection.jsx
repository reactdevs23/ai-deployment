import React, { useState } from "react";
import { Button } from "@/components/common";
import NavDropdown from "./NavDropdown/NavDropdown";
import UserDropdown from "./UserDropdown/UserDropdown";
import classes from "./Navbar.module.css";
const AuthSection = ({
  isAuthenticated,
  setActiveTab,
  setShowManageAccountModal,
  userInfo,
}) => {
  const [isUserDropdownActive, setIsUserDropdownActive] = useState(false);
  const [isNavDropdownActive, setIsNavDropdownActive] = useState(false);
  return (
    <div className={classes.buttonContainer}>
      {isAuthenticated ? (
        <>
          <NavDropdown
            isActive={isNavDropdownActive}
            setIsActive={setIsNavDropdownActive}
          />
          <UserDropdown
            setActiveTab={setActiveTab}
            userInfo={userInfo}
            isActive={isUserDropdownActive}
            setIsActive={setIsUserDropdownActive}
            setShowManageAccountModal={setShowManageAccountModal}
          >
            Explorer
          </UserDropdown>
        </>
      ) : (
        <>
          <Button xsm transparent to="/sign-in">
            Login
          </Button>
          <Button xsm className={classes.getStartedButton} btnPrimary>
            Get Started
          </Button>
        </>
      )}
    </div>
  );
};

export default AuthSection;
