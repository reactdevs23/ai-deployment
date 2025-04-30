import { Button, Heading, Line, Text } from "@/components/common";
import classes from "./DeploymentDetailsLayout.module.css";
import { copyToClipboard } from "@/utils/utils";
import { copyIcon } from "@/images";
import ModelName from "@/components/DeploymentDetails/ModelName/ModelName";
import ModelInfo from "@/components/DeploymentDetails/ModelInfo/ModelInfo";
import { FaArrowRight } from "react-icons/fa";
import ModelDetails from "@/components/DeploymentDetails/ModelDetails/ModelDetails";
import { Outlet } from "react-router-dom";
import NavItems from "@/components/DeploymentDetails/NavItems/NavItems";

const modelInfo = [
  { label: "Status", value: "Active" },
  { label: "Model", value: "platform / llama-7b" },
  { label: "Version", value: "03D3A482" },
  { label: "Created On", value: "March 12, 2025" },
  { label: "Last Updated", value: "April 9, 2025" },
  { label: "Environment", value: "Production" },
];
const hardwareDetails = [
  { label: "Compute", value: "2x CPU" },
  { label: "RAM", value: "8GB" },
];
const scalingDetails = [
  { label: "Min Instances", value: "1" },
  { label: "Max Instances", value: "4" },
  { label: "Scale to Zero", value: "Enabled" },
];
const performanceDetails = [
  { label: "Requests (24h)", value: "18,320" },
  { label: "Average Latency", value: "127 ms" },
  { label: "Success Rate", value: "99.7%" },
  { label: "Current Load", value: "2/4 instances active" },
];
const DeploymentDetailsLayout = () => {
  return (
    <main className={classes.main}>
      <div className={classes.modelDetails}>
        <ModelName
          heading="sentiment-analyzer"
          domain="    api.domain.com/sentiment-analyzer"
        />
        <Line />
        <ModelInfo items={modelInfo} />
        <Line />
        <ModelDetails
          heading="HARDWARE"
          title="CPU Based"
          items={hardwareDetails}
        />
        <Line />
        <ModelDetails heading="SCALING" items={scalingDetails} />
        <Line />
        <ModelDetails heading="PERFORMANCE METRICS" items={performanceDetails}>
          <Button arrowButton lxs>
            View Full Metrics <FaArrowRight />
          </Button>
        </ModelDetails>
      </div>
      <div className={classes.outletWrapper}>
        <NavItems />
        <div className={classes.outlet}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};
export default DeploymentDetailsLayout;
