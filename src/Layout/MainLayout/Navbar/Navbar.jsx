import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { useScroll } from "@/hooks/useScroll";

import { Logo, userImg } from "@/images";

import NavItems from "./NavItems";
import AuthSection from "./AuthSection";
import { MdClose } from "react-icons/md";
import SearchSection from "./SearchSection";
import LogoSection from "./LogoSection";
import Overlay from "@/components/common/Overlay/Overlay";
// resource dropdownItems

const Navbar = ({
  isAuthenticated,
  setShowManageAccountModal,
  setActiveTab,
}) => {
  const userInfo = {
    img: userImg,
    name: "Imam Hossain",
    email: "example@gmail.com",
  };

  const [sidebar, setSidebar] = useState(true);
  const isScrolled = useScroll(90);

  return (
    <>
      <div
        className={clsx(
          classes.wrapper,
          (isScrolled || sidebar) && classes.wrapperBg
        )}
      >
        <header className={[classes.header, "container"].join(" ")}>
          <LogoSection setSidebar={setSidebar} />
          <NavItems sidebar={sidebar} setSidebar={setSidebar} />
          <SearchSection sidebar={sidebar} setSidebar={setSidebar} />
          <AuthSection
            isAuthenticated={isAuthenticated}
            setActiveTab={setActiveTab}
            setShowManageAccountModal={setShowManageAccountModal}
            userInfo={userInfo}
          />
        </header>
      </div>
      <Overlay sidebar={sidebar} onClose={() => setSidebar(false)} />
    </>
  );
};

export default Navbar;
