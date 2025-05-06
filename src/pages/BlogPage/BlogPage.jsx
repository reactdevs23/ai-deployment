import { HeaderWrapper, PatternContainer } from "@/components/common";
import classes from "./BlogPage.module.css";
import clsx from "clsx";
import ScrollToSectionNav from "@/components/common/ScrollToSectionNav/ScrollToSectionNav";
import AllBlog from "@/components/Blog/AllBlog/AllBlog";
import StayUpdated from "@/components/Blog/StayUpdated/StayUpdated";
import SlidingScrollToNav from "@/components/common/SlidingScrollToSectionNav/SlidingScrollToSectionNav";
const scroolToSectionNavs = [
  {
    title: "All Blog",
    to: "allBlog",
  },
  { title: "Deployment Guides", to: "deploymentGuides" },

  { title: "AI Infrastructure", to: "aiInfrastructure" },
  { title: "Product Updates", to: "productUpdates" },
  {
    title: "Case Studies",
    to: "caseStudies",
  },
  { title: "Engineering Deep Dives", to: "engineeringDeepDives" },
  { title: "Platform Tips", id: "platformTips" },
];
const BlogPage = () => {
  return (
    <div className={classes.wrapper}>
      <PatternContainer>
        <HeaderWrapper
          xl4
          center
          heading="Blog"
          info="Insights, updates, and stories from the team behind your AI deployment platform. Discover best practices, platform updates, and deep dives into the world of AI infrastructure."
          className={clsx(classes.heading, classes.mainHeading)}
        />
      </PatternContainer>

      <div className={classes.mainContainer}>
        <div className={clsx(classes.container, "container")}>
          <SlidingScrollToNav
            items={scroolToSectionNavs}
            heading="CATEGORIES"
            className={clsx(classes.slidingNavs, classes.nav)}
          />
          <ScrollToSectionNav
            items={scroolToSectionNavs}
            heading="CATEGORIES"
            className={clsx(classes.scrollToSectionNav, classes.nav)}
          />
          <AllBlog id="allBlog" />
          <StayUpdated />
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
