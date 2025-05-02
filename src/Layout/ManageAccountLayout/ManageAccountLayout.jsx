import classes from "./ManageAccountLayout.module.css";
import { useRef, useState } from "react";
import { PiSidebar } from "react-icons/pi";

import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { Heading, Line, Modal, Text } from "@/components/common";
import { IoClose } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {
  apiTokenActiveIcon,
  apiTokenIcon,
  billingActiveIcon,
  billingIcon,
  generalActiveIcon,
  generalIcon,
  logoutIcon,
} from "@/images";
import General from "@/Modals/ManageAccount/General/General";
import Sidebar from "./Sidebar/Sidebar";
// import Profile from "@/Modals/ManageAccount/Profile/Profile";
// import Security from "@/Modals/ManageAccount/Security/Security";
// import Subscription from "@/Modals/ManageAccount/Subscription/Subscription";
// import ChatData from "@/Modals/ManageAccount/ChatData/ChatData";
const navItems = [
  { icons: [generalIcon, generalActiveIcon], navItem: "General" },
  { icons: [apiTokenIcon, apiTokenActiveIcon], navItem: "API Token" },
  { icons: [billingIcon, billingActiveIcon], navItem: "Billing" },
];

const ManageAccountLayout = ({ isActive, onClose }) => {
  const navigate = useNavigate();
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const [activeNavItem, setActiveNavItem] = useState("General");
  const handleLogout = () => {};

  return (
    <Modal
      className={classes.modal}
      isActive={isActive}
      onClose={onClose}
      heading="Account Settings"
    >
      <div className={classes.wrapper}>
        <Sidebar
          handleLogout={handleLogout}
          navItems={navItems}
          activeNavItem={activeNavItem}
          isSidebarActive={isSidebarActive}
          setIsSidebarActive={setIsSidebarActive}
          setActiveNavItem={setActiveNavItem}
        />
        <div className={classes.container}>
          {activeNavItem === "General" && <General />}
        </div>
        {/* {activeNavItem === "Security" && <Security />}
        {activeNavItem === "Subscription" && <Subscription />}
        {activeNavItem === "Chat Data" && <ChatData onClose={onClose} />} */}
      </div>
    </Modal>
  );
};
export default ManageAccountLayout;
