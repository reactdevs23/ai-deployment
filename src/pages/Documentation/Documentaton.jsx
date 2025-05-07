import { Heading, Line, PatternContainer } from "@/components/common";
import classes from "./Documentation.module.css";
import Overview from "@/components/Documentation/GettingStarted/Overview/Overview";
import ScrollToSectionNav from "@/components/common/ScrollToSectionNav/ScrollToSectionNav";
import clsx from "clsx";
import React, { useState } from "react";
import { sidebarIcon } from "@/images";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SidebarNav from "./SidebarNav/SidebarNav";

const navSections = [
  {
    heading: "GETTING STARTED",
    items: [
      { title: "Overview of the Platform", id: "overview" },
      { title: "Creating Your First Deployment", id: "firstDeployment" },
      { title: "Uploading a Model", id: "uploadModel" },
      { title: "Setting Up Billing", id: "billing" },
      { title: "Using the Dashboard", id: "dashboard" },
    ],
  },
  {
    heading: "DEPLOYMENTS",
    items: [
      { title: "Deployment Configuration Options", id: "deploymentConfig" },
      { title: "Hardware & Autoscaling Settings", id: "hardwareAutoscaling" },
      { title: "Monitoring Deployment Status", id: "monitoring" },
      { title: "Deployment Logs & Debugging", id: "logsDebugging" },
      { title: "Managing Deployment Versions", id: "versionManagement" },
    ],
  },
  {
    heading: "API REFERENCE",
    items: [
      { title: "Authentication with API Tokens", id: "apiAuthentication" },
      { title: "Running Predictions via API", id: "apiPredictions" },
      { title: "Input/Output Format Reference", id: "ioReference" },
      { title: "Error Codes & Troubleshooting", id: "errorHandling" },
      { title: "Rate Limits & Usage Tracking", id: "rateLimits" },
    ],
  },
  {
    heading: "MODEL MANAGEMENT",
    items: [
      { title: "Supported Model Formats", id: "modelFormats" },
      { title: "Version Control for Models", id: "modelVersioning" },
      { title: "Importing from GitHub or URL", id: "importModels" },
      { title: "Model Optimization Tips", id: "optimization" },
      { title: "Rollback & Restore Options", id: "rollback" },
    ],
  },
];

const Documentation = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className={clsx(classes.wrapper, "container")}>
      <div
        className={clsx(classes.mobileNavWrapper, sidebar && classes.active)}
      >
        <div
          className={classes.mobileNavHeader}
          onClick={() => setSidebar((prev) => !prev)}
        >
          <button className={classes.sidebarButton}>
            <img src={sidebarIcon} alt="#" className={classes.sidebarIcon} />
          </button>
          <Heading base primitive900 className={classes.navHeading}>
            Documentation Menu
          </Heading>
          <button className={classes.arrowButton}>
            {sidebar ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>
      <SidebarNav
        items={navSections}
        sidebar={sidebar}
        setSidebar={setSidebar}
      />

      <PatternContainer className={classes.outlet}>
        <Overview />
      </PatternContainer>
    </div>
  );
};

export default Documentation;
