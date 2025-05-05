import {
  Button,
  Heading,
  ParagraphWrapper,
  SectionHeading,
  Text,
} from "@/components/common";
import classes from "./Conclussion.module.css";
const Conclussion = () => {
  return (
    <div className={classes.wrapper}>
      <SectionHeading># Conclusion</SectionHeading>
      <ParagraphWrapper>
        <Text base primitive700>
          Platform offers the flexibility and power to elevate your AI projects
          with both public and custom models. Whether you&apos;re looking to
          leverage cutting-edge technology through our public models or deploy
          your own unique solutions with full control, Platform makes it simple
          to integrate machine learning into your workflows.
        </Text>
        <Text base primitive700>
          Ready to get started? Explore our models today and see how Platform
          can transform your AI-driven projects. Start building now and unlock
          the full potential of your machine learning needs with Platform!
        </Text>{" "}
      </ParagraphWrapper>
      <Button className={classes.button}>Let’s create a deployment</Button>
    </div>
  );
};
export default Conclussion;
