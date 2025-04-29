import { HeaderWrapper, Heading, Section, Text } from "@/components/common";
import classes from "./ScaleYourAi.module.css";
import clsx from "clsx";
import {
  autoMaticScalingImg,
  friendlyStuctureImg,
  logMonitoringImg,
  payWhatYouSeeImg,
} from "@/images";

const data = [
  {
    title: "Pay for What You Use",
    note: "No flat fees. No surprises.",
    description:
      "You’re only billed for the compute power your models actually use — with flexible pricing that adapts to your scale.",
    learnMore: { text: "Learn more about Pricing →", link: "" },
    img: payWhatYouSeeImg,
  },
  {
    title: "Automatic Scale",
    note: "Traffic spike? No problem.",
    description:
      "Our auto-scaler intelligently adjusts resources in real-time — scaling up to meet demand and down to zero when idle.",
    img: autoMaticScalingImg,
  },
  {
    title: "Friendly Structure",
    note: "Designed for developers and teams.",
    description:
      "Simple deployment flows, transparent pricing, and clear logs make scaling AI accessible — even if you’re not an ML ops expert.",
    img: friendlyStuctureImg,
  },
  {
    title: "Log Monitoring",
    note: "Stay in control..",
    description:
      "Track every prediction, error, and status update through real-time logs and metrics. Debug faster, optimize smarter.",
    img: logMonitoringImg,
  },
];
const ScaleYourAi = () => {
  return (
    <Section className={clsx(classes.wrapper, classes.mainWrapper)}>
      <HeaderWrapper
        center
        className={clsx(classes.header, classes.mainHeader)}
        xl5
        heading="Scale Your AI"
        info="Whether you're handling 10 users or 10 million, our platform grows with you. Deploy once — we’ll handle the rest."
      />
      <div className={classes.steps}>
        {data?.map((item, i) => (
          <div key={i} className={classes.step}>
            <div className={classes.infoContainer}>
              <Heading xxl blue600 medium className={classes.title}>
                {item.title}
              </Heading>
              <Text base primitive600>
                {item.note}
              </Text>
              <Text base primitive600>
                {item.description}
              </Text>
              <a href={item?.learnMore?.link}>
                <Text sm blue600>
                  {item?.learnMore?.text}
                </Text>
              </a>
            </div>
            <div className={classes.imgContainer}>
              <img src={item.img} alt={item.title} className={classes.img} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default ScaleYourAi;
