import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import classes from "./MainLayout.module.css";
import React, { useState } from "react";
import ManageAccountLayout from "../ManageAccountLayout/ManageAccountLayout";
const MainLayout = ({ isAuthenticated }) => {
  const [activeTab, setActiveTab] = useState("General");
  const [showManageAccountModal, setShowManageAccountModal] = useState(false);
  return (
    <main className={classes.wrapper}>
      <Navbar
        setActiveTab={setActiveTab}
        isAuthenticated={isAuthenticated}
        setShowManageAccountModal={setShowManageAccountModal}
      />
      <Outlet />
      <ManageAccountLayout
        activeNavItem={activeTab}
        setActiveNavItem={setActiveTab}
        isActive={showManageAccountModal}
        onClose={() => setShowManageAccountModal(false)}
      />
    </main>
  );
};
export default MainLayout;
