import Hardware from "@/components/DeploymentDetails/Settings/Hardware/Hardware";
import Instances from "@/components/DeploymentDetails/Settings/Instances/Instances";
import Verision from "@/components/DeploymentDetails/Settings/Verision/Verision";
import classes from "./Settings.module.css";
import PricingSummary from "@/components/DeploymentDetails/Settings/PricingSummary/PricingSummary";
const Settings = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Verision />
        <Hardware />
        <Instances />
      </div>
      <PricingSummary />
    </div>
  );
};
export default Settings;
