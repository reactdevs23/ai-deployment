import React, { useState, useRef, useEffect } from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import classes from "./SlidingNav.module.css";
import clsx from "clsx";

import { Text } from "..";
import { Link } from "react-router-dom";

const SlidingNav = ({ items, heading, className }) => {
  const [activeTab, setActiveTab] = useState(items[0]);
  const tabRefs = useRef([]);
  const scrollContainerRef = useRef();

  // const activeTabIndex = items.findIndex(
  //   (tab) => tab.title === activeTab.title
  // );
  const activeTabIndex = items.findIndex((tab) => tab.to === location.pathname);

  const onTabClick = (e, index) => {
    setActiveTab(items[index]);
  };

  // Center active tab on change
  useEffect(() => {
    const tabNode = tabRefs.current[activeTabIndex];
    const container = scrollContainerRef.current;

    if (tabNode && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = tabNode.getBoundingClientRect();

      const offset =
        tabRect.left -
        containerRect.left -
        container.clientWidth / 2 +
        tabRect.width / 2;

      container.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [activeTabIndex]);

  return (
    <div className={clsx(classes.tabContainer, className)}>
      <Text primitive500 xs className={classes.heading}>
        {heading}
      </Text>
      <div ref={scrollContainerRef}>
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
                ref={(el) => (tabRefs.current[index] = el)}
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
    </div>
  );
};

export default SlidingNav;
