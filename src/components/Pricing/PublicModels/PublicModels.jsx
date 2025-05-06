import {
  Heading,
  ParagraphWrapper,
  SectionHeading,
  Text,
} from "@/components/common";
import classes from "./PublicModels.module.css";
const PublicModels = ({ ...rest }) => {
  return (
    <div className={classes.wrapper} {...rest}>
      <SectionHeading># Public Models</SectionHeading>
      <ParagraphWrapper>
        <Text base primitive700>
          Explore a library of powerful, ready-to-use AI models available for
          everyone. From generating text and images to transcribing audio and
          analyzing data — these models are built to help you prototype faster
          and build smarter. No setup required — just pick a model, run it, and
          get results instantly.
        </Text>
        <Text base primitive700>
          Whether you&apos;re a developer, researcher, or enthusiast, our public
          models are open and accessible, designed to kickstart your next AI
          project.
        </Text>
      </ParagraphWrapper>
      <div className={classes.infoContainer}>
        <Text sm blue500>
          This model costs approximately{" "}
          <span className={classes.highlight}>$0.0036</span> to run on Platform,
          or about 277 runs per <span className={classes.highlight}>$1</span> —
          though actual costs may vary based on your inputs. It runs on
          <span className={classes.highlight}> Nvidia L40S GPU</span> hardware,
          and predictions typically complete within{" "}
          <span className={classes.highlight}>4 seconds</span>.
        </Text>
      </div>
    </div>
  );
};
export default PublicModels;
