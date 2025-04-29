import React, { useState } from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import classes from "./SlidingTabs.module.css";
import "./SlidingTabs.module.css"; // Your existing CSS
import clsx from "clsx";

const SlidingTabs = ({ tabs, activeTab, setActiveTab }) => {
  // If you need to control the active tab from parent component,
  // use the props directly. Otherwise, manage it internally:
  // const [activeTab, setActiveTab] = useState(0);

  const onTabClick = (e, index) => {
    setActiveTab(tabs[index]);
  };

  const activeTabIndex = tabs.findIndex((tab) => tab.name === activeTab.name);
  return (
    <div className={classes.tabContainer}>
      <Tabs
        activeTab={activeTabIndex}
        onTabClick={onTabClick}
        hideNavBtns={true} // This completely hides navigation buttons
        tabsScrollable={true}
        tabsContainerClassName={classes.tabs}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={clsx(classes.tab, {
              [classes.activeTab]: tab.name === activeTab.name,
            })}
          >
            {tab.name}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default SlidingTabs;
