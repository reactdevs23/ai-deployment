import React, { useState, useRef, useEffect } from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import classes from "./SlidingScrollToSectionNav.module.css";
import clsx from "clsx";
import { Link } from "react-scroll";
import { Text } from "..";

const SlidingScrollToSectionNav = ({ items, heading, className }) => {
  const [activeTab, setActiveTab] = useState(items[0]);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);

  // Calculate container height on mount and resize
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const activeTabIndex = items.findIndex(
    (tab) => tab.title === activeTab.title
  );

  const onTabClick = (e, index) => {
    setActiveTab(items[index]);
  };

  // Calculate dynamic offset based on container height
  const getDynamicOffset = () => {
    // Base offset (-90) minus the container height
    return -90 - containerHeight;
  };

  return (
    <div ref={containerRef} className={clsx(classes.tabContainer, className)}>
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
              spy={true}
              smooth={true}
              duration={500}
              offset={getDynamicOffset()}
            >
              {title}
            </Link>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default SlidingScrollToSectionNav;
