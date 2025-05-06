import { HeaderWrapper, PatternContainer, Text } from "@/components/common";
import classes from "./ReleasesPage.module.css";
import clsx from "clsx";
import ReleaseWrapper from "@/components/Releases/ReleaseWrapper/ReleaseWrapper";
import ScrollToSectionNav from "@/components/common/ScrollToSectionNav/ScrollToSectionNav";
import WantToReleaseUpdate from "@/components/Releases/WantToReleaseUpdate/WantToReleaseUpdate";
import CommingSoon from "@/components/Releases/CommingSoon/CommingSoon";
import VersionDropdown from "@/components/Releases/VersionDropdown/VersionDropdown";

const versions = [
  {
    id: "1.1.8",
    version: "v1.1.8",
    isLatest: true,
    releaseDate: "April 10, 2025",
    features: [
      "Added support for multi-region deployments",
      "Introduced real-time deployment logs viewer",
      "New usage analytics dashboard with chart view",
    ],
    improvements: [
      "Faster model boot-up with cold start optimization",
      "Updated API performance by reducing response latency",
      "Enhanced UI for the version history and deployment setup",
    ],
    fixes: [
      "Fixed a bug with token regeneration not invalidating old tokens",
      "Corrected an issue where logs would not stream in edge deployments",
    ],
  },
  {
    id: "1.1.7",
    version: "v1.1.7",
    releaseDate: "March 28, 2025",
    features: [
      "Added dark mode support for all dashboards",
      "Implemented bulk model deployment",
    ],
    improvements: [
      "Reduced memory usage during model inference",
      "Improved error messages for deployment failures",
    ],
    fixes: [
      "Resolved issue with API key rotation",
      "Fixed timeout errors on large file uploads",
    ],
  },
  {
    id: "1.1.6",
    version: "v1.1.6",
    releaseDate: "March 15, 2025",
    features: [
      "Added model performance benchmarking tool",
      "New webhook integration for deployment events",
    ],
    improvements: [
      "Optimized container startup sequence",
      "Reduced cold start times by 30%",
    ],
    fixes: [
      "Fixed authentication token expiration bug",
      "Resolved intermittent database connection issues",
    ],
  },
  {
    id: "1.1.5",
    version: "v1.1.5",
    releaseDate: "March 1, 2025",
    features: [
      "Introduced model version rollback capability",
      "Added regional deployment status indicators",
    ],
    improvements: [
      "Improved deployment status polling efficiency",
      "Enhanced model configuration validation",
    ],
    fixes: [
      "Fixed incorrect billing calculations for GPU usage",
      "Resolved UI rendering issues in Safari",
    ],
  },
  {
    id: "1.1.4",
    version: "v1.1.4",
    releaseDate: "February 15, 2025",
    features: [
      "Added support for custom metrics collection",
      "New CLI tool for local testing",
    ],
    improvements: [
      "Reduced deployment creation time by 20%",
      "Optimized model serving infrastructure",
    ],
    fixes: [
      "Fixed race condition in concurrent deployments",
      "Resolved logging configuration issues",
    ],
  },
  {
    id: "1.1.3",
    version: "v1.1.3",
    releaseDate: "February 1, 2025",
    features: [
      "Implemented automatic scaling for high-traffic models",
      "Added deployment health checks",
    ],
    improvements: [
      "Improved model cold start performance",
      "Enhanced security for API endpoints",
    ],
    fixes: [
      "Fixed intermittent 502 errors on API gateway",
      "Resolved model version display issues",
    ],
  },
  {
    id: "1.1.2",
    version: "v1.1.2",
    releaseDate: "January 20, 2025",
    features: [
      "Added support for custom domains",
      "New model performance monitoring",
    ],
    improvements: [
      "Reduced API response times",
      "Optimized resource allocation",
    ],
    fixes: [
      "Fixed authentication token refresh bug",
      "Resolved deployment status synchronization issue",
    ],
  },
  {
    id: "1.1.1",
    version: "v1.1.1",
    releaseDate: "January 10, 2025",
    features: [
      "Implemented deployment templates",
      "Added model version comparison",
    ],
    improvements: [
      "Improved error handling for failed deployments",
      "Enhanced deployment logs readability",
    ],
    fixes: [
      "Fixed billing calculation inaccuracies",
      "Resolved UI rendering performance issues",
    ],
  },
  {
    id: "1.1.0",
    version: "v1.1.0",
    releaseDate: "January 1, 2025",
    features: [
      "Initial public release of AI Deployment Platform",
      "Basic model deployment functionality",
    ],
    improvements: [
      "Core infrastructure established",
      "Basic monitoring and logging implemented",
    ],
    fixes: ["Various stability improvements", "Initial security hardening"],
  },
];

const ReleasesPage = () => {
  const scrollItems = versions.map((version) => ({
    title: version.version,
    to: version.id,

    isActive: version.isLatest,
  }));

  return (
    <div>
      <PatternContainer>
        <HeaderWrapper
          xl4
          center
          heading="Releases"
          info="Stay up to date with the latest improvements to the AI Deployment Platform. We're continuously working to bring you new features, performance upgrades, and important fixes."
          className={clsx(classes.heading, classes.mainHeading)}
        />
      </PatternContainer>

      <div className={classes.mainContainer}>
        <div className={clsx(classes.container, "container")}>
          <ScrollToSectionNav
            heading="Versions"
            items={scrollItems}
            className={classes.scrollNav}
          />
          <div className={classes.versionDropdown}>
            <Text xs primitive500>
              VERSIONS
            </Text>
            <VersionDropdown dropdownItems={scrollItems} />
          </div>

          <div className={classes.allReleases}>
            {versions.map((version) => (
              <ReleaseWrapper key={version.id} id={version.id} {...version} />
            ))}
          </div>

          <div className={classes.releaseUpdateAndComingSoon}>
            <WantToReleaseUpdate />
            <CommingSoon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReleasesPage;
