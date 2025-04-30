import { Outlet } from "react-router-dom";
import classses from "./SidebarLayout.module.css";
import Sidebar from "./Sidebar/Sidebar";
import StickyBox from "react-sticky-box";

import clsx from "clsx";
import Navbar from "../MainLayout/Navbar/Navbar";
import { Heading } from "@/components/common";
import { closeIcon, sidebarIcon } from "@/images";
import { useState } from "react";
const SidebarLayout = ({ noPadding }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main className={clsx(classses.wrapper, "container")}>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

      <div className={clsx(classses.container, "sectionPattern")}>
        <div className={classses.header}>
          <button
            onClick={() => setSidebar((prev) => !prev)}
            className={classses.sidebarIcon}
          >
            <img src={sidebar ? closeIcon : sidebarIcon} alt="#" />
          </button>
          <Heading xl medium primitive900>
            Dashboard
          </Heading>
        </div>

        <div className={clsx(classses.outlet, noPadding && classses.noPadding)}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};
export default SidebarLayout;
