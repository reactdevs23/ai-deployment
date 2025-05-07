import classes from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";
import { Button, Text } from "@/components/common";
import clsx from "clsx";
import {
  dashboardActiveIcon,
  dashboardIcon,
  deploymentActiveIcon,
  deploymentIcon,
  discordIcon,
  Logo,
  modelsActiveIcon,
  modelsIcon,
  supportActiveIcon,
  supportIcon,
  twiterIcon,
  youtubeIcon,
} from "@/images";
import { MdClose } from "react-icons/md";

const navItems = [
  {
    icons: [dashboardActiveIcon, dashboardIcon],
    navItem: "Dashboard",
    to: "/dashboard",
  },
  {
    icons: [modelsActiveIcon, modelsIcon],
    navItem: "Models",
    to: "/models",
  },
  {
    icons: [deploymentActiveIcon, deploymentIcon],
    navItem: "Deployments",
    to: "/deployments",
  },
  {
    icons: [supportActiveIcon, supportIcon],
    navItem: "Support",
    to: "/support",
  },
];

const socialLinks = [
  {
    icon: twiterIcon,
    to: "#",
  },
  {
    icon: discordIcon,
    to: "#",
  },
  {
    icon: youtubeIcon,
    to: "#",
  },
];
const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <>
      <aside
        className={clsx(classes.sidebar, sidebar ? classes.showSidebar : "")}
      >
        <div className={classes.navItems}>
          {navItems.map((el, i) => (
            <NavLink
              to={el.to}
              key={i}
              className={({ isActive }) =>
                isActive
                  ? [classes.navItem, classes.navActive].join(" ")
                  : classes.navItem
              }
              onClick={() => {
                setSidebar(false);
              }}
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? el.icons[0] : el.icons[1]}
                    className={classes.navIcon}
                    alt={el.navItem}
                  />
                  <span>{el.navItem}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
        <div className={classes.line}></div>
        <div className={classes.box}>
          <div className={classes.content}>
            <div>
              <Text lxs primitive500>
                Amount Due
              </Text>
              <Text sm blue500 medium>
                $23.56
              </Text>
            </div>{" "}
            <div className={classes.line}></div>
            <div>
              <Text lxs primitive500>
                Due Date:
              </Text>

              <Text sm primitive700 medium>
                April 10, 2025
              </Text>
            </div>{" "}
            <div className={classes.line}></div>
            <div>
              <Text lxs primitive500>
                Your Current Balance:
              </Text>
              <Text sm primitive700 medium>
                $123.45
              </Text>
            </div>
          </div>
          <Button wFull className={classes.button}>
            Pay Now
          </Button>
        </div>
        <div className={classes.youHaveBox}>
          <Text sm blue500>
            You have:
          </Text>
          <div className={classes.line}></div>
          <Text lxs primitive500 className={classes.item}>
            <span className={classes.highlight}>0</span>{" "}
            <span>Deployments</span>
          </Text>{" "}
          <div className={classes.line}></div>
          <Text lxs primitive500 className={classes.item}>
            <span className={classes.highlight}>0</span> <span>Models</span>
          </Text>
        </div>

        <div className={classes.links}>
          <Link to="/terms-of-use" className={classes.link}>
            Terms of Use
          </Link>
          <Link to="/privacy-policy" className={classes.link}>
            Privacy Policy
          </Link>
        </div>
        <div className={classes.line}></div>

        <div className={classes.socialInfo}>
          <Link to="/" className={classes.logo}>
            <Logo color="#3981F8" />
          </Link>
          <Text primitive600 xs>
            © 2025, ScalaNodes
          </Text>
          <div className={classes.socialItems}>
            {socialLinks.map((social, i) => (
              <a href="#" target="_blank" key={i}>
                <img src={social.icon} alt="#" className={classes.socialIcon} />
              </a>
            ))}
          </div>
        </div>
      </aside>

      <div
        className={clsx(classes.overlay, sidebar && classes.active)}
        onClick={() => setSidebar(false)}
      >
        <button className={classes.closeIcon}>
          <MdClose />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
