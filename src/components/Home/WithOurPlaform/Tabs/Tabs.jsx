import React from "react";
import classes from "./Tabs.module.css";
import clsx from "clsx";

const Tabs = ({ tabs, activeTab, setActiveTab, className }) => {
  return (
    <div className={clsx(classes.tabs, classes.tabContainer, className)}>
      {tabs.map((tab, i) => (
        <button
          className={clsx(
            classes.tab,
            activeTab.name === tab.name && classes.activeTab
          )}
          key={i}
          onClick={() => setActiveTab(tab)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
