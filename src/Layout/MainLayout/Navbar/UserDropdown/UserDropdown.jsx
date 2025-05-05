import { useRef } from "react";
import clsx from "clsx";

import classes from "./UserDropdown.module.css";
import React from "react";
import useOnClickOutside from "@/hooks";
import { Line, Text } from "@/components/common";
import { Link, NavLink } from "react-router-dom";
import { HiChevronUpDown } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { accountSettingsIcon, apiTokenIcon, logoutIcon } from "@/images";
import { RiLogoutCircleRLine } from "react-icons/ri";

const UserDropdown = ({
  setActiveTab,
  setShowManageAccountModal,
  children,
  isActive,
  setIsActive,
  userInfo,
}) => {
  const handleLogout = () => {
    setIsActive(false);
  };
  const ref = useRef();

  const handleUserAccount = () => {
    setIsActive(false);
    setShowManageAccountModal(true);
  };
  const handleApiToken = () => {
    setIsActive(false);
    setActiveTab("API Token");
    setShowManageAccountModal(true);
  };

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div className={clsx(classes.dropdown)} ref={ref}>
      <div
        className={clsx(classes.userContainer, isActive && classes.active)}
        onClick={() => setIsActive((prev) => !prev)}
      >
        {userInfo.img ? (
          <div className={classes.userImgContainer}>
            <img src={userInfo.img} alt="User" className={classes.userImg} />
          </div>
        ) : (
          <div className={classes.userImgContainer}>
            <FaUserAlt className={classes.userIcon} />
          </div>
        )}
        <Text
          primitive700
          sm
          className={clsx(classes.label, isActive && classes.active)}
        >
          {children}

          <HiChevronUpDown
            className={clsx(classes.arrow, isActive && classes.active)}
          />
        </Text>
      </div>
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={clsx(classes.list, "overflow")}>
          <div className={clsx(classes.userInfo, classes.listItem)}>
            <Text blue500 sm medium>
              Imam Hossain
            </Text>{" "}
            <Text primitive500 xs>
              example@gmail.com
            </Text>
          </div>
          <Line />
          <button className={classes.listItem} onClick={handleUserAccount}>
            <img
              src={accountSettingsIcon}
              alt="#"
              className={classes.navIcon}
            />
            <Text className={classes.navItem}>Account Settings</Text>
          </button>
          <button className={classes.listItem} onClick={handleApiToken}>
            <img src={apiTokenIcon} alt="#" className={classes.navIcon} />
            <Text className={classes.navItem}>API Token</Text>
          </button>{" "}
          <Line />
          <button
            className={clsx(classes.listItem, classes.logoutButton)}
            onClick={handleLogout}
          >
            <RiLogoutCircleRLine className={classes.logoutIcon} />

            <Text className={classes.navItem}>Logout</Text>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
