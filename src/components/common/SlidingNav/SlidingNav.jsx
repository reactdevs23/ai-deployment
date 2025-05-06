import React, { useState } from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import classes from "./SlidingNav.module.css";
import clsx from "clsx";

import { Text } from "..";
import { Link } from "react-router-dom";

const SlidingNav = ({ items, heading, className }) => {
  const [activeTab, setActiveTab] = useState(items[0]);

  const activeTabIndex = items.findIndex(
    (tab) => tab.title === activeTab.title
  );

  const onTabClick = (e, index) => {
    setActiveTab(items[index]);
  };

  return (
    <div className={clsx(classes.tabContainer, className)}>
      <Text primitive500 xs className={classes.heading}>
        {heading}
      </Text>
      <Tabs
        activeTab={activeTabIndex}
        onTabClick={onTabClick}
        hideNavBtns={true}
        tabsScrollable={true}
        tabsContainerClassName={classes.items}
      >
        {items.map(({ title, to }, index) => (
          <Tab
            key={index}
            className={clsx(classes.item, {
              [classes.active]: index === activeTabIndex,
            })}
          >
            <Link
              onClick={(e) => onTabClick(e, index)}
              to={to}
              className={classes.link}
            >
              {title}
            </Link>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default SlidingNav;
