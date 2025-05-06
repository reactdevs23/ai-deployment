import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "@/images";
import classes from "./Navbar.module.css";

const LogoSection = ({ setSidebar }) => (
  <NavLink to="/" onClick={() => setSidebar(false)} className={classes.logo}>
    <Logo color="#336FE1" />
  </NavLink>
);

export default LogoSection;
