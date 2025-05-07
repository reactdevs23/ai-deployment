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
      { title: "Overview of the Platform", to: "overview", offset: -80 },
      { title: "Creating Your First Deployment", to: "firstDeployment" },
      { title: "Uploading a Model", to: "uploadModel" },
      { title: "Setting Up Billing", to: "billing" },
      { title: "Using the Dashboard", to: "dashboard" },
    ],
  },
  {
    heading: "DEPLOYMENTS",
    items: [
      { title: "Deployment Configuration Options", to: "deploymentConfig" },
      { title: "Hardware & Autoscaling Settings", to: "hardwareAutoscaling" },
      { title: "Monitoring Deployment Status", to: "monitoring" },
      { title: "Deployment Logs & Debugging", to: "logsDebugging" },
      { title: "Managing Deployment Versions", to: "versionManagement" },
    ],
  },
  {
    heading: "API REFERENCE",
    items: [
      { title: "Authentication with API Tokens", to: "apiAuthentication" },
      { title: "Running Predictions via API", to: "apiPredictions" },
      { title: "Input/Output Format Reference", to: "ioReference" },
      { title: "Error Codes & Troubleshooting", to: "errorHandling" },
      { title: "Rate Limits & Usage Tracking", to: "rateLimits" },
    ],
  },
  {
    heading: "MODEL MANAGEMENT",
    items: [
      { title: "Supported Model Formats", to: "modelFormats" },
      { title: "Version Control for Models", to: "modelVersioning" },
      { title: "Importing from GitHub or URL", to: "importModels" },
      { title: "Model Optimization Tips", to: "optimization" },
      { title: "Rollback & Restore Options", to: "rollback" },
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
        <Overview id="overview" />
      </PatternContainer>
    </div>
  );
};

export default Documentation;
