import { HeaderWrapper, Heading, Section, Text } from "@/components/common";
import clsx from "clsx";
import classes from "./WhyChooseUs.module.css";
import {
  autoScalingImg,
  deployInMinutesImg,
  readyApiImg,
  workWithAnyModel,
} from "@/images";
const facilities = [
  {
    title: "Deploy in Minutes,Not Days",
    description:
      "No YAML files. No Docker nightmares. Upload your model and deploy with a few clicks or a simple API call — it's that fast.",
    img: deployInMinutesImg,
  },
  {
    title: "Auto-Scaling,On Your Terms",
    description:
      "Handle traffic spikes like a pro. Our intelligent autoscaler ramps up when needed and scales to zero when idle — saving you money.",
    img: autoScalingImg,
  },
  {
    title: "Private, Production - Ready APIs",
    description:
      "Every deployment gets a secure, fixed endpoint — perfect for connecting your models directly to apps, bots, websites, or internal tools.",
    img: readyApiImg,
  },
  {
    title: "Works With Any Model",
    description:
      "Bring your PyTorch, TensorFlow, Hugging Face, ONNX, or custom-trained model — we support them all.",
    img: workWithAnyModel,
  },
];
const WhyChooseUs = () => {
  return (
    <Section
      className={clsx(classes.wrapper, classes.mainWrapper, "sectionPattern")}
    >
      <HeaderWrapper
        center
        className={clsx(classes.header, classes.mainHeader)}
        xl4
        heading="Why Choose Us?"
        info="We’re not just another AI deployment tool — we’re your launchpad for seamless, scalable, and stress-free model operations. Here’s what sets us apart:"
      />
      <div className={classes.facilities}>
        {facilities?.map((facility, i) => (
          <div className={classes.facility} key={i}>
            <div className={classes.infoContainer}>
              <Heading xxl blue600 medium className={classes.title}>
                {facility.title}
              </Heading>
              <Text base primitive600>
                {facility.description}
              </Text>
            </div>
            <img
              src={facility.img}
              alt={facility.title}
              className={classes.img}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
export default WhyChooseUs;
