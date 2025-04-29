import { Heading, Section, Text } from "@/components/common";
import classes from "./StartDeployingSmarter.module.css";
import clsx from "clsx";
import { startDeployingImg } from "@/images";

const data = [
  {
    title: "Use Cases",
    points: [
      "ML-powered SaaS apps",
      "Generative AI workflows",
      "Real-time vision & NLP tasks",
      "Internal tools & research prototypes",
      "Client-facing AI features",
    ],
    note: "If it runs a model, we help you run it better.",
  },
  {
    title: "Developer Experience You’ll Love",
    points: [
      "Token-based Auth",
      "Model Versioning",
      "Testing Sandbox",
      "Full API Access",
      "Transparent Cost Controls",
    ],
  },
];
const StartDeployingSmarter = () => {
  return (
    <Section className={clsx(classes.wrapper, classes.mainWrapper)}>
      <Heading className={classes.heading} regular primitive700 xl3>
        <span className="highlight">Start Deploying Smarter Today:</span> No
        DevOps. No waiting. Just models that run — beautifully. Built for ML
        engineers, devs, and product teams.
      </Heading>
      <div className={classes.container}>
        <div className={classes.steps}>
          {data?.map((item, i) => (
            <div className={classes.step} key={i}>
              <Heading xxl blue600 medium className={classes.title}>
                {item.title}
              </Heading>

              <ul className={classes.points}>
                {item.points.map((point, idx) => (
                  <li key={idx} className={classes.point}>
                    <Text lg primitive600>
                      {point}
                    </Text>
                  </li>
                ))}
              </ul>

              {item.note && (
                <Text lg primitive600>
                  {item.note}
                </Text>
              )}
            </div>
          ))}
        </div>
        <div className={clsx(classes.imgContainer, "sectionPattern")}>
          <img
            src={startDeployingImg}
            alt="Start Deploying"
            className={classes.img}
          />
        </div>
      </div>
    </Section>
  );
};
export default StartDeployingSmarter;
