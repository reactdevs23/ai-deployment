import {
  Heading,
  ParagraphWrapper,
  SectionHeading,
  Text,
} from "@/components/common";
import classes from "./PrivateModels.module.css";
const PrivateModels = () => {
  return (
    <div className={classes.wrapper}>
      <SectionHeading># Private Models</SectionHeading>
      <ParagraphWrapper>
        <Text base primitive700>
          You aren’t limited to the public models on Platform: you can deploy
          your own custom models using Cog, our open-source tool for packaging
          machine learning models.
        </Text>
        <Text base primitive700>
          Unlike public models, most private models (except fast booting models)
          run on dedicated hardware, meaning you don&apos;t have to share a
          queue with anyone else. This ensures you&apos;re billed for the entire
          time the model is online: including setup time, idle time while
          waiting for requests, and active processing time. If you experience a
          surge in traffic, we automatically scale up and down to handle the
          demand.
        </Text>{" "}
        <Text base primitive700>
          For fast booting models, you will only be billed for the time the
          model is active and processing your requests. This means no charges
          for idle time, unlike other private models. Fast booting versions are
          clearly labeled in the model&apos;s version list.
        </Text>{" "}
        <Text base primitive700>
          Just like with public models, if you need more control over how a
          private model is run, you can use deployments.
        </Text>
      </ParagraphWrapper>
    </div>
  );
};
export default PrivateModels;
