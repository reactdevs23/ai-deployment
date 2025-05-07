import { Link, Outlet } from "react-router-dom";
import classes from "./AuthenticationLayout.module.css";
import { brandLogo } from "@/images";
import { Text } from "@/components/common";

const AuthenticationLayout = () => {
  const links = [
    { item: "Support", to: "/support" },
    { item: "Privacy Policy", to: "/privacy-policy" },
    { item: "Terms & Condition", to: "/terms-of-service" },
  ];
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.wrapper}>
        <Link to="/">
          <img src={brandLogo} alt="Logo" className={classes.logo} />
        </Link>
        <Outlet />

        <div className={classes.footer}>
          <Text className={classes.copyRight}>
            © 2025 <span className={classes.brandName}>Brand Name</span>
          </Text>
          <div className={classes.links}>
            {links.map(({ item, to }, i) => (
              <Link to={to} key={i} className={classes.link}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthenticationLayout;
