import { Heading, Text, Wrapper } from "@/components/common";
import classes from "./WithDeploymentYouCan.module.css";
import clsx from "clsx";

const WithDeploymentYouCan = () => {
  const data = [
    {
      title: "Roll Out Model Versions ",
      description:
        "Seamlessly release new versions of your model without editing your application code.",
    },
    {
      title: "Auto-Scale & Scale to Zero",
      description:
        "Automatically adjust resources based on traffic — and scale to zero to save costs when idle.",
    },
    {
      title: "Keep Models Always-On",
      description:
        "Avoid cold starts by keeping instances running 24/7 for ultra-fast predictions.",
    },
    {
      title: "Customize Compute",
      description:
        "Choose the right hardware (CPU, GPU, memory) to meet your performance and budget needs.",
    },
    {
      title: "Monitor Model Instances",
      description:
        "Track whether your instances are idle, setting up, or actively processing predictions.",
    },
    {
      title: "Track Predictions in Real Time",
      description:
        "Get insights into prediction traffic, latency, and usage directly from your deployment dashboard.",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <Heading xl primitive900 medium>
        With Deployments, You Can:
      </Heading>
      <div className={classes.items}>
        {data.map((item, i) => (
          <Wrapper
            key={i}
            className={clsx(classes.container, classes.mainContainer)}
          >
            <Heading sm medium primitive600>
              ✅ {item.title}
            </Heading>
            <Text sm primitive600>
              {item.description}
            </Text>
          </Wrapper>
        ))}
      </div>
    </section>
  );
};
export default WithDeploymentYouCan;
