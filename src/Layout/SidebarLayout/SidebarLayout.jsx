import { Outlet, useLocation, useNavigate } from "react-router-dom";
import classses from "./SidebarLayout.module.css";
import Sidebar from "./Sidebar/Sidebar";

import clsx from "clsx";

import { Button, Heading, Text } from "@/components/common";
import { closeIcon, sidebarIcon } from "@/images";
import React, { useState } from "react";
const SidebarLayout = ({ noPadding, createDeployment, cancelDeployment }) => {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();
  let pathSegments = location.pathname.split("/").filter(Boolean);
  const navigate = useNavigate();

  const buttons = [
    createDeployment && {
      label: "Create Deployment",
      className: classses.createDeploymentButton,
      to: "/create-deployment",
      props: { sm: true },
    },
    cancelDeployment && {
      label: "Cancel",
      className: classses.cancelButton,
      onClick: () => navigate(-1),
      props: { sm: true, transparent: true },
    },
  ].filter(Boolean);
  return (
    <main className={clsx(classses.wrapper, "container")}>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

      <div className={clsx(classses.container, "sectionPattern")}>
        <div className={classses.header}>
          <div className={classses.breadCram}>
            <button
              onClick={() => setSidebar((prev) => !prev)}
              className={classses.sidebarIcon}
            >
              <img src={sidebar ? closeIcon : sidebarIcon} alt="#" />
            </button>
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
          {buttons.map((btn, i) => (
            <Button
              key={i}
              className={btn.className}
              to={btn.to}
              onClick={btn.onClick}
              {...btn.props}
            >
              {btn.label}
            </Button>
          ))}
        </div>

        <div className={clsx(classses.outlet, noPadding && classses.noPadding)}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default SidebarLayout;
