import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import classes from "./MainLayout.module.css";
import React from "react";
const MainLayout = () => {
  return (
    <main className={classes.wrapper}>
      <Navbar />
      <Outlet />
    </main>
  );
};
export default MainLayout;
