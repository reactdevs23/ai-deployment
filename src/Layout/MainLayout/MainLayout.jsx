import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import classes from "./MainLayout.module.css";
import React from "react";
import ManageAccountLayout from "../ManageAccountLayout/ManageAccountLayout";
const MainLayout = ({ isAuthenticated }) => {
  return (
    <main className={classes.wrapper}>
      <Navbar isAuthenticated={isAuthenticated} />
      <Outlet />
      <ManageAccountLayout isActive={true} />
    </main>
  );
};
export default MainLayout;
