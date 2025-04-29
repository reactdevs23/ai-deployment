import CreateDeployment from "@/components/DeploymentPage/CreateDeployment/CreateDeployment";
import classes from "./DeploymentPage.module.css";
import WhatAreDeployments from "@/components/DeploymentPage/WhatAreDeployments/WhatAreDeployments";
import WithDeploymentYouCan from "@/components/DeploymentPage/WithDeploymentYouCan/WithDeploymentYouCan";

const DeploymentPage = () => {
  return (
    <main className={classes.wrapper}>
      <CreateDeployment />
      <WhatAreDeployments />
      <WithDeploymentYouCan />
    </main>
  );
};
export default DeploymentPage;
