import { Outlet, useLocation } from "react-router-dom";
import classses from "./SidebarLayout.module.css";
import Sidebar from "./Sidebar/Sidebar";

import clsx from "clsx";

import { Heading, Text } from "@/components/common";
import { closeIcon, sidebarIcon } from "@/images";
import React, { useState } from "react";
const SidebarLayout = ({ noPadding, hideFirstPathSegment = false }) => {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();

  let pathSegments = location.pathname.split("/").filter(Boolean);

  if (hideFirstPathSegment) {
    pathSegments = pathSegments.slice(1); // Remove the first segment
  }

  const isLast = (index) => index === pathSegments.length - 1;

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

          <div className={classses.breadCram}>
            {pathSegments.map((segment, index) => {
              const isLastSegment = index === pathSegments.length - 1;
              const isFirstAndLast = index === 0 && isLastSegment;

              return (
                <React.Fragment key={index}>
                  {index !== 0 && <span className={classses.separator}>/</span>}
                  <Heading
                    xl
                    medium
                    className={clsx(
                      classses.segment,
                      isLastSegment
                        ? classses.lastSegment
                        : classses.intermediateSegment,
                      isFirstAndLast && classses.capitalize
                    )}
                  >
                    {segment}
                  </Heading>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className={clsx(classses.outlet, noPadding && classses.noPadding)}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default SidebarLayout;
