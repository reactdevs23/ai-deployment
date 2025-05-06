import {
  Button,
  HeaderWrapper,
  Line,
  PatternContainer,
  Text,
} from "@/components/common";

import classes from "./SupportPage.module.css";
import clsx from "clsx";
import SupportBox from "@/components/Support/SupportBox/SupportBox";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GettingStartedSupport from "@/components/Support/GettingStartedSupport/GettingStartedSupport";
import CommunityAndResources from "@/components/Support/CommunityAndResources/CommunityAndResources";
const helpCenterServices = [
  "Deployments",
  "Billing & Payments",
  "API Usage",
  "Model Management",
  "Account & Security",
];
const gettingStartServices = [
  {
    service: "How to Deploy Your First Model",
    link: "#",
  },
  {
    service: "Understanding API Tokens",
    link: "#",
  },
  {
    service: "Setting Up Auto-Scaling",
    link: "#",
  },
  {
    service: "Version Control for Models",
    link: "#",
  },
  {
    service: "Cost Estimation & Billing Explained",
    link: "#",
  },
];
const videoTutorialTopics = [
  "Deploying a model in under 5 minutes",
  "Managing and scaling deployments",
  "Debugging with real-time logs",
  "Using the platform’s analytics dashboard",
];
const systemStatus = [
  "✅ All systems operational",
  "🔄 No scheduled maintenance",
];
const communityResources = [
  {
    title: "Documentation",
    description: (
      <>
        Explore our comprehensive{" "}
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className={classes.underLine}
        >
          Developer Docs{" "}
        </a>
        to understand APIs, endpoints, authentication, and deployment
        configuration.
      </>
    ),
  },
  {
    title: "Changelog",
    description: "See what's new and what's next",
  },
  {
    title: "Feature Requests",
    description: "Help shape the roadmap",
  },
];
const SupportPage = () => {
  return (
    <PatternContainer>
      <div className={classes.wrapper}>
        <HeaderWrapper
          xl4
          heading="Support"
          info="Need help getting started, troubleshooting a deployment, or understanding billing? You're in the right place. Explore resources, guides, and FAQs to get the assistance you need."
          className={clsx(classes.heading, classes.mainHeading)}
        >
          <Text primitive600 base>
            Published on:{" "}
            <span className={classes.highlight}> February 7, 2025</span>
          </Text>
        </HeaderWrapper>
        <Line />
        <SupportBox
          title="Help Center"
          services={helpCenterServices}
          description={
            <span>
              Browse our categorized{" "}
              <Link className={classes.link} to="/faqs">
                FAQs
              </Link>{" "}
              and get quick answers to common questions related to:
            </span>
          }
        >
          <Button transparent lsm className={classes.button}>
            Contact Us <FaArrowRight className={classes.arrow} />
          </Button>
        </SupportBox>
        <Line />
        <GettingStartedSupport
          title="Getting Started"
          services={gettingStartServices}
          description="New to the platform? Check out our step-by-step guides and tutorials:"
        >
          <Button transparent lsm className={classes.button}>
            View All Guides <FaArrowRight className={classes.arrow} />
          </Button>
        </GettingStartedSupport>
        <Line />
        <SupportBox
          title="Video Tutorials"
          services={videoTutorialTopics}
          description="Prefer to watch and learn? Our short videos walk you through the most-used features:"
        >
          {" "}
          <Button transparent lsm className={classes.button}>
            Watch Tutorials <FaArrowRight className={classes.arrow} />
          </Button>
        </SupportBox>
        <Line />
        <SupportBox
          title="System Status"
          services={systemStatus}
          description="Check real-time updates about platform availability, performance, and maintenance."
        />{" "}
        <Line />
        <CommunityAndResources
          services={communityResources}
          title="Community & Resources"
          description="Join our growing developer community for tips, updates, and peer support:"
        >
          <Button transparent lsm className={classes.button}>
            Read Documentation
            <FaArrowRight className={classes.arrow} />
          </Button>
        </CommunityAndResources>
      </div>
    </PatternContainer>
  );
};
export default SupportPage;
