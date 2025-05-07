import { Button, Heading, Line } from "@/components/common";
import classes from "./Overview.module.css";
import OverviewofThePlatform from "./OverviwofThePlatform/OverviewofThePlatform";
import PlatformWorkflow from "./PlatformWorkflow/PlatformWorkflow";
import WhatIsThisPlatform from "./WhatIsThisPlatform/WhatIsThisPlatform";
import { FaAngleRight } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import ScrollToSectionNav from "@/components/common/ScrollToSectionNav/ScrollToSectionNav";
import clsx from "clsx";
import KeyFeatures from "./KeyFeatures/KeyFeatures";

const overviewInfo = [
  "Welcome to your AI Deployment Platform — a powerful, scalable, and developer-friendly environment designed to help you deploy, manage, and monitor machine learning models in production with ease.",
  "Welcome to your AI Deployment Platform — a powerful, scalable, and developer-friendly environment designed to help you deploy, manage, and monitor machine learning models in production with ease.",
];

const aboutPlatformList = [
  "Deploy your ML/DL models with just a few clicks or API calls",
  "Automatically scale deployments based on demand",
  "Host private endpoints for running predictions",
  "Monitor performance, usage, and system health in real time",
  "Manage versions and rollbacks without code changes",
  "Choose and customize the hardware your model runs on",
];
const features = [
  {
    icon: "🚀", // Rocket for deploymen
    title: "One-Click Deployments",
    description:
      "Upload your model and deploy it to production instantly — no complex DevOps setup required.",
  },
  {
    icon: "🔒",
    title: "Private API Endpoints",
    description:
      "Each deployment comes with a secure, unique endpoint that you can call from your app or backend.",
  },
  {
    icon: "🔄",
    title: "Version Management",
    description:
      "Maintain multiple versions of a model and deploy updates with rollback options — zero downtime.",
  },
  {
    icon: "⚖️",
    title: "Autoscaling & Always-On Modes",
    description:
      "Scale to zero to save cost when idle or keep instances always warm for low-latency inference.",
  },
  {
    icon: "📊",
    title: "Real-Time Monitoring",
    description:
      "Track predictions, system status, error rates, and latency through a clean visual dashboard.",
  },
  {
    icon: "🔑",
    title: "Token-Based Access",
    description:
      "API tokens make secure access simple. Regenerate and revoke as needed from your account settings.",
  },
];
const platformWorkflow = [
  {
    title: "Sign Up & Set Up Billing",
    description:
      "Create your account and connect a payment method to unlock deployments.",
  },
  {
    title: "Upload or Select a Model",
    description:
      "Bring your own model or deploy from a library of prebuilt open-source models.",
  },
  {
    title: "Configure Your Deployment",
    description:
      "Choose your hardware type, scaling behavior, and deployment name.",
  },
  {
    title: "Deploy & Monitor",
    description:
      "Hit “Deploy” and watch as your model spins up. Monitor it live from the dashboard.",
  },
  {
    title: "Call the API",
    description:
      "Start sending predictions using your private API endpoint with secure tokens.",
  },
  {
    title: "Update, Scale, and Optimize",
    description:
      "Create new versions, adjust configurations, and view analytics as your usage grows.",
  },
];
const sectionIds = [
  { title: "Overview", to: "overview", offset: -150 },
  { title: "What Is This Platform?", to: "whatIsThisPlatform" },
  { title: "Key Features", to: "keyFeatures" },
  { title: "Platform Workflow", to: "platformWorkflow" },
];
const Overview = ({ ...rest }) => {
  return (
    <>
      <div className={classes.wrapper} {...rest}>
        <Heading base blue500>
          Getting Started:
        </Heading>
        <div className={classes.container}>
          <OverviewofThePlatform
            id="overview"
            heading="Overview of the Platform"
            list={overviewInfo}
          />
          <Line />
          <WhatIsThisPlatform
            id="whatIsThisPlatform"
            heading="What Is This Platform?"
            descripton="The AI Deployment Platform is a cloud-based system that allows you to:"
            list={aboutPlatformList}
            note="It’s built for developers, researchers, and teams who want reliable, fast, and secure AI model deployment workflows — without worrying about infrastructure."
          />
          <Line />
          <KeyFeatures
            id="keyFeatures"
            heading="Key Features"
            list={features}
          />
          <Line />
          <PlatformWorkflow
            id="platformWorkflow"
            heading="Platform Workflow Overview"
            list={platformWorkflow}
          />
          <Line />
          <Button arrowButton sm className={classes.button}>
            Creating Your First Deployment{" "}
            <MdKeyboardArrowRight className={classes.arrow} />
          </Button>
        </div>
      </div>
      <ScrollToSectionNav
        type2
        heading="CONTENT"
        items={sectionIds}
        className={clsx(classes.nav, classes.scrollNav)}
      />
    </>
  );
};
export default Overview;
