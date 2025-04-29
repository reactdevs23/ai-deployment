import { Heading, Text, Wrapper } from "@/components/common";
import clsx from "clsx";
import classes from "./DeploymentsListPage.module.css";
const models = [
  {
    name: "sentiment-analyzer",
    domain: "api.domain.com/sentiment-analyzer",
    version: "v1.2.0",
    harware: {
      name: "CPU",
      specification: "4x Cpu, 8GB RAM",
    },
    instances: "2",
    status: "Active",
  },
  {
    name: "vision-transformer",
    domain: "api.domain.com/vision-transformer",
    version: "v3.1.0",
    harware: {
      name: "Nvidia A100 (80GB) GPU",
      specification: "10x CPU, 80GB GPU, 144GB RAM",
    },
    instances: "0",
    status: "Idle",
  },
  {
    name: "fraud-detector",
    domain: "api.domain.com/fraud-detector",
    version: "v0.9.4-beta",
    harware: {
      name: "2x Nvidia A100 (80GB) GPU",
      specification: "20x CPU, 160GB GPU, 288GB RAM",
    },
    instances: "1-4 (Auto)",
    status: "Scaling",
  },
];
const DeploymentsListPage = () => {
  return (
    <section className={classes.wrapper}>
      {models.map((el, i) => (
        <div className={clsx(classes.item, classes.singleModel)} key={i}>
          <Heading base medium primitive800>
            {el.name ?? "-"}
          </Heading>
          <div className={classes.domainAndVersion}>
            <Text className={classes.domain} xs primitive700>
              {el.domain ?? "-"}
            </Text>
            <Text className={classes.version} xs primitive700>
              {el.version ?? "-"}
            </Text>
          </div>
          <div className={classes.spaceBetween}>
            <Text xs primitive500 medium>
              INSTANCES
            </Text>
            <Text sm primitive800 medium>
              {el.instances ?? "-"}
            </Text>
          </div>
          <div className={classes.spaceBetween}>
            <Text lxs primitive700>
              Status
            </Text>
            <Text
              className={clsx(
                classes.status,
                el.status?.toLowerCase() === "active" && classes.active,
                ["idle", "scaling", "failed"].includes(
                  el.status?.toLowerCase()
                ) && classes.offline
              )}
              lxs
              medium
            >
              {el.status?.toLowerCase() === "live" && "✅"}
              {el.status?.toLowerCase() === "offline" && "🛑"}
              {el.status ?? "-"}
            </Text>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DeploymentsListPage;
