import classes from "./ManageAccountLayout.module.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Modal } from "@/components/common";
import {
  apiTokenActiveIcon,
  apiTokenIcon,
  billingActiveIcon,
  billingIcon,
  generalActiveIcon,
  generalIcon,
} from "@/images";
import General from "@/pages/ManageAccount/General/General";
import Sidebar from "./Sidebar/Sidebar";
import ApiToken from "@/pages/ManageAccount/ApiToken/ApiToken";
import Billing from "@/pages/ManageAccount/Billing/Billing";

const navItems = [
  { icons: [generalIcon, generalActiveIcon], navItem: "General" },
  { icons: [apiTokenIcon, apiTokenActiveIcon], navItem: "API Token" },
  { icons: [billingIcon, billingActiveIcon], navItem: "Billing" },
];

const ManageAccountLayout = ({
  isActive,
  onClose,
  activeNavItem,
  setActiveNavItem,
}) => {
  const navigate = useNavigate();
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarActive((prev) => !prev);
  };

  const handleLogout = () => {};
  const parentRef = useRef(null);
  return (
    <Modal
      className={clsx(classes.modal, classes.mainModal)}
      toggleSidebar={toggleSidebar}
      parentRef={parentRef}
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
          {activeNavItem === "General" && <General parentRef={parentRef} />}{" "}
          {activeNavItem === "API Token" && <ApiToken />}
          {activeNavItem === "Billing" && <Billing parentRef={parentRef} />}
        </div>

        {/* {activeNavItem === "Subscription" && <Subscription />}
        {activeNavItem === "Chat Data" && <ChatData onClose={onClose} />}  */}
      </div>
    </Modal>
  );
};
export default ManageAccountLayout;
