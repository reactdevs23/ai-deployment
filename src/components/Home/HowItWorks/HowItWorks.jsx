import { HeaderWrapper, Heading, Section, Text } from "@/components/common";
import classes from "./HowItWorks.module.css";
import clsx from "clsx";
import { deploymentImg, runModelImg, testWithPlaygroundImg } from "@/images";
const data = [
  {
    title: "Create Deployment",
    description:
      "Start by uploading your model or selecting one from your existing models. Customize the deployment with:",
    points: [
      "A unique name",
      "Preferred hardware (CPU, GPU, etc.)",
      "Scaling rules (autoscale, always-on, or scale to zero)",
    ],
    notes: [
      "Once set, click Deploy — and your model will be live on a private, production-ready API.",
    ],
    img: deploymentImg,
  },
  {
    title: "Run Models",
    description:
      "Start by uploading your model or selecting one from your existing models. Customize the deployment with:",
    points: [
      "A unique name",
      "Preferred hardware (CPU, GPU, etc.)",
      "Scaling rules (autoscale, always-on, or scale to zero)",
    ],
    notes: [
      "Once set, click Deploy — and your model will be live on a private, production-ready API.",
    ],
    img: runModelImg,
  },
  {
    title: "Test with Playground",

    notes: [
      "Try out your deployment instantly in our interactive Playground — no code required.",
      "Enter sample inputs, view prediction outputs, and debug on the spot before going live.",
      "Perfect for testing, demos, or team collaboration.",
    ],
    img: testWithPlaygroundImg,
  },
];

const HowItWorks = () => {
  return (
    <Section className={clsx(classes.wrapper, classes.mainWrapper)}>
      <HeaderWrapper
        className={clsx(classes.header, classes.mainHeader)}
        xl4
        heading="How it works"
        info="Bring your machine learning model from your laptop to a production-ready API — all in a few easy steps."
      />
      <div className={classes.steps}>
        {data?.map((item, i) => (
          <div className={classes.step} key={i}>
            <div className={classes.infoContainer}>
              <Heading xxl blue600 medium className={classes.title}>
                {item.title}
              </Heading>

              {item.description && (
                <Text lg primitive600>
                  {item.description}
                </Text>
              )}

              {item.points && (
                <ul className={classes.points}>
                  {item.points.map((point, idx) => (
                    <li key={idx} className={classes.point}>
                      <Text lg primitive600>
                        {point}
                      </Text>
                    </li>
                  ))}
                </ul>
              )}

              {item.notes && (
                <div className={classes.notes}>
                  {item.notes.map((note, idx) => (
                    <Text lg primitive600 key={idx}>
                      {note}
                    </Text>
                  ))}
                </div>
              )}
            </div>
            <div className={clsx(classes.imgContainer, "sectionPattern")}>
              <img src={item.img} alt={item.title} className={classes.img} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default HowItWorks;
