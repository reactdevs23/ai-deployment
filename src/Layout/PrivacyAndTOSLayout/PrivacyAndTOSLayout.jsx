import { Outlet } from "react-router-dom";
import classes from "./PrivacyAndTOSLayout.module.css";
import clsx from "clsx";
import SideNavs from "@/components/common/SideNavs/SideNavs";
import SlidingNav from "@/components/common/SlidingNav/SlidingNav";

const navItems = [
  { title: "Privacy Policy", to: "/privacy-policy" },
  { title: "Terms of Use", to: "/terms-of-use" },
  { title: "Terms of Service", to: "/terms-of-service" },
];
const PrivacyAndTOSLayout = () => {
  return (
    <div className={clsx(classes.wrapper, "container")}>
      <SideNavs
        items={navItems}
        heading="TERMS & POLICIES"
        className={classes.sideNav}
      />
      <SlidingNav
        items={navItems}
        heading="TERMS & POLICIES"
        className={classes.slidingNav}
      />
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </div>
  );
};
export default PrivacyAndTOSLayout;
