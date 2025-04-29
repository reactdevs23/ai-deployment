import { Outlet } from "react-router-dom";
import Footer from "../MainLayout/Footer/Footer";
import classes from "./LandingLayout";
const LandingLayout = () => {
  return (
    <main className={classes.wrapper}>
      <Outlet />
      <Footer />
    </main>
  );
};
export default LandingLayout;
