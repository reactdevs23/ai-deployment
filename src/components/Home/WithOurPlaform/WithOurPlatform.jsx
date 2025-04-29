import { HeaderWrapper, Section } from "@/components/common";
import classes from "./WithOurPlatform.module.css";
import clsx from "clsx";
import { useState } from "react";
import Tabs from "./Tabs/Tabs";

import Carousel from "./Carousel/Carousel";
import { generateImages, generateVideos } from "@/assets/data";

const tabs = [
  {
    name: "Generate images",
    items: generateImages,
  },
  {
    name: "Generate videos",
    items: generateVideos,
  },
  {
    name: "Restore images",
    items: generateImages,
  },
  {
    name: "Caption images",
    items: generateVideos,
  },
  {
    name: "Fine-tune models",
    items: generateImages,
  },
  {
    name: "Generate speech",
    items: generateVideos,
  },
  {
    name: "Generate music",
    items: generateImages,
  },
  {
    name: "Generate text",
    items: generateVideos,
  },
];

const WithOurPlatform = () => {
  const [activeTab, setActiveTab] = useState({
    name: "Generate images",
    items: generateImages,
  });
  return (
    <Section className={clsx(classes.wrapper, classes.mainWrapper)}>
      <HeaderWrapper
        className={clsx(classes.header, classes.mainHeader)}
        xl4
        heading={
          <span>
            With our Platform, <br /> you can do:
          </span>
        }
      >
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </HeaderWrapper>
      <Carousel items={activeTab.items} />
    </Section>
  );
};
export default WithOurPlatform;
