import SummaryWrapper from "@/components/DashBoard/SummaryWrapper/SummaryWrapper";
import classes from "./Dashboard.module.css";
import { Button, Heading, Line, Text } from "@/components/common";
import { FaArrowRight } from "react-icons/fa6";
import Models from "@/components/DashBoard/Models/Models";
import ActivityTable from "@/components/DashBoard/ActivityTable/ActivityTable";

const modelsSummary = [
  {
    label: "Total Models",
    value: "7",
  },
  {
    label: "In Live",
    value: "3",
  },
  {
    label: "Offline",
    value: "1",
  },
  {
    label: "Last Updated",
    value: "April 10, 2025",
  },
];
const deploymentSummary = [
  {
    label: "Active Deployments",
    value: "4",
  },
  {
    label: "Hardware Utilization",
    value: "63% (GPU)",
  },
  {
    label: "Total Predictions",
    value: "127,305",
  },
  {
    label: "Est. Daily Cost",
    value: "$12.45",
  },
];
const usagesSnapshot = [
  {
    label: "Total Predictions",
    value: "14,732",
  },
  {
    label: "Avg Response Time",
    value: "132ms",
  },
  {
    label: "Peak Traffic",
    value: "Wed, 5PM",
  },
  {
    label: "Most Used Model",
    value: "sentiment-analyzer",
  },
];
const Dashboard = () => {
  return (
    <main className={classes.wrapper}>
      <div className={classes.summaryWrapper}>
        <div className={classes.welCome}>
          <Heading regular lg primitive700>
            Welcome back, <span className={classes.name}>Imam!</span>
          </Heading>
          <Text sm primitive600 className={classes.welComeMessage}>
            Here&apos;s an overview of your AI deployment activity, model
            performance, and system usage—all in one place.
          </Text>
        </div>
        <SummaryWrapper title="Models Summary" items={modelsSummary} />
        <SummaryWrapper title="Deployment Summary" items={deploymentSummary}>
          <Line />
          <Button sm arrowButton>
            Manage Deployments <FaArrowRight />
          </Button>
        </SummaryWrapper>
        <SummaryWrapper
          title={
            <span>
              Usage Snapshot{" "}
              <span className={classes.duration}>(Last 7 Days)</span>
            </span>
          }
          items={usagesSnapshot}
        />
        <div className={classes.buttonContainer}>
          <Button sm wFull to="/create-deployment">
            Create a Deployment
          </Button>{" "}
          <Button sm wFull transparent to="/docs">
            View Documentation
          </Button>
        </div>
      </div>
      <div className={classes.modelAndActionTable}>
        <Models />
        <ActivityTable />
      </div>
    </main>
  );
};
export default Dashboard;
