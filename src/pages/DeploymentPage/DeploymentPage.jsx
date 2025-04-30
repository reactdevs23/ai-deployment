import StartDeploying from "@/components/Deployment/StartDeploying/StartDeploying";
import classes from "./DeploymentPage.module.css";
import WhatAreDeployments from "@/components/Deployment/WhatAreDeployments/WhatAreDeployments";
import WithDeploymentYouCan from "@/components/Deployment/WithDeploymentYouCan/WithDeploymentYouCan";

const DeploymentPage = () => {
  return (
    <main className={classes.wrapper}>
      <StartDeploying />
      <WhatAreDeployments />
      <WithDeploymentYouCan />
    </main>
  );
};
export default DeploymentPage;
