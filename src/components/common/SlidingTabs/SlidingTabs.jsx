import React from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import classes from "./SlidingTabs.module.css";
import clsx from "clsx";

const SlidingTabs = ({ tabs, activeTab, setActiveTab }) => {
  // Find the index of the active tab
  const activeTabIndex = tabs.findIndex((tab) => tab.name === activeTab.name);

  const onTabClick = (e, index) => {
    // Set the active tab using the tab object from your tabs array
    setActiveTab(tabs[index]);
  };

  return (
    <div className={classes.tabContainer}>
      <Tabs
        activeTab={activeTabIndex} // This should be the index
        onTabClick={onTabClick}
        hideNavBtns={true}
        tabsScrollable={true}
        tabsContainerClassName={classes.tabs}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={clsx(classes.tab, {
              [classes.activeTab]: index === activeTabIndex,
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
