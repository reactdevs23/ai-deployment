import clsx from "clsx";
import classes from "./SidebarNav.module.css";
import React from "react";
import ScrollToSectionNav from "@/components/common/ScrollToSectionNav/ScrollToSectionNav";
import { Line } from "@/components/common";

const SidebarNav = ({ sidebar, items, setSidebar }) => {
  return (
    <aside className={clsx(classes.sideNav, sidebar && classes.show)}>
      <div
        className={clsx(classes.sidebar, "container")}
        onClick={() => setSidebar(false)}
      >
        {items.map((section, index) => (
          <React.Fragment key={section.heading}>
            <ScrollToSectionNav
              offset={-130}
              onClick={() => setSidebar((prev) => !prev)}
              className={clsx(classes.scrollNav, classes.nav)}
              type3
              heading={section.heading}
              items={section.items}
            />
            {/* Don't render Line after last section */}
            {index !== items.length - 1 && <Line />}
          </React.Fragment>
        ))}
      </div>
    </aside>
  );
};
export default SidebarNav;
