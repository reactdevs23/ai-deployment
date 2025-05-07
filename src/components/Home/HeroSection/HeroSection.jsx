import {
  Button,
  HeaderWrapper,
  Heading,
  Section,
  SlidingTabs,
} from "@/components/common";
import classes from "./HeroSection.module.css";
import clsx from "clsx";
import { useState } from "react";
import {
  apiImg,
  createDeploymentImg,
  dashboradImg,
  patternImg,
  playgroundImg,
} from "@/images";
const tabs = [
  {
    name: "Dashboard",
    img: dashboradImg,
  },
  {
    name: "Create a Deployment",
    img: createDeploymentImg,
  },
  {
    name: "Deployment Details",
    img: apiImg,
  },
  {
    name: "Playground",
    img: playgroundImg,
  },
];
const HeroSection = () => {
  const [activeTab, setActiveTab] = useState({
    name: "Dashboard",
    img: dashboradImg,
  });
  return (
    <Section className={clsx(classes.wrapper, classes.mainWrapper)}>
      <HeaderWrapper
        xl5
        topHeading="AI Deployment Made Effortless"
        center
        heading="Deploy, scale, and serve your AI models — without DevOps drama."
        info="Say goodbye to infrastructure headaches. Whether you're pushing open-source models or custom-trained magic, our platform lets you deploy in seconds, scale automatically, and run predictions with ease."
      >
        <div className={classes.buttonContainer}>
          <Button to="/sign-up">Get Started Now</Button>
          <Button transparent to="/docs">
            View Docs
          </Button>
        </div>{" "}
      </HeaderWrapper>

      <div className={classes.imgContainer}>
        <SlidingTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />

        <img src={activeTab.img} alt={activeTab.name} className={classes.img} />
        <div className={classes.border}></div>
        <img className={classes.pattern} src={patternImg} alt="#" />
      </div>
    </Section>
  );
};
export default HeroSection;
