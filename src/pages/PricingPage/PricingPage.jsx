import ScrollToSectionNav from "@/components/common/ScrollToSectionNav/ScrollToSectionNav";
import classes from "./PricingPage.module.css";
import { HeaderWrapper, Line, PatternContainer } from "@/components/common";
import {
  PricingPlan,
  PrivateModels,
  PublicModels,
  Conclussion,
} from "@/components/Pricing";
import ModelsContainer from "@/components/Pricing/ModelsContainer/ModelsContainer";
import clsx from "clsx";
const imageModels = [
  { model: "PhotoReal V2", price: "$0.004 / image" },
  { model: "DreamArt AI", price: "$0.003 / image" },
  { model: "CartoonGen Pro", price: "$0.0025 / image" },
  { model: "StyleFusion XL", price: "$0.005 / image" },
  { model: "PortraitMaster", price: "$0.0036 / image" },
  { model: "ProductMockup AI", price: "$0.0042 / image" },
  { model: "ConceptScene Maker", price: "$0.0048 / image" },
];
const audioModels = [
  { model: "VoiceGen Pro", price: 0.004 },
  { model: "SoundFX Creator", price: 0.003 },
  { model: "MusicComposer AI", price: 0.0025 },
  { model: "Speech-to-Text Max", price: 0.005 },
  { model: "NoiseReducer Lite", price: 0.0036 },
  { model: "Voice Cloner X", price: 0.0042 },
  { model: "Podcast Enhancer", price: 0.0048 },
];

const videoModels = [
  { model: "VideoGen Pro", price: 0.004 },
  { model: "FrameFusion AI", price: 0.003 },
  { model: "MotionPaint", price: 0.0025 },
  { model: "Scene2Vid", price: 0.005 },
  { model: "AutoCut Editor", price: 0.0036 },
  { model: "LipSync AI", price: 0.0042 },
  { model: "Frame Interpolator", price: 0.0048 },
  { model: "StyleTransfer Video", price: 0.0048 },
];
const scroolToSectionNavs = [
  {
    title: "Pricing Plan",
    to: "pricingPlan",
  },
  { title: "Public Models", to: "publicModels" },

  { title: "Image Models", to: "imageModels" },
  { title: "Audio Models", to: "audioModels" },
  {
    title: "Video Models",
    to: "videoModels",
  },
  { title: "Private Models", to: "privateModels" },
  { title: "Conclusion", to: "conclusion", offset: -140 },
];
const PricingPage = () => {
  return (
    <PatternContainer>
      <div className={classes.wrapper}>
        <HeaderWrapper
          xl4
          className={clsx(classes.heading, classes.mainHeading)}
          heading="Pricing"
          info="Choose the Right Plan for You. Simple and transparent pricing, no hidden fees. You’re only charged for what you use—billed by the second. If nothing’s running, your cost drops to zero."
        />
        <Line />
        <div className={classes.mainContainer}>
          <div className={classes.container}>
            <PricingPlan id="pricingPlan" />
            <Line />
            <PublicModels id="publicModels" />

            <Line />
            <ModelsContainer
              id="imageModels"
              heading="# Image Models"
              models={imageModels}
            />
            <Line />
            <ModelsContainer
              id="audioModels"
              heading="# Audio Models"
              models={audioModels}
            />
            <Line />
            <ModelsContainer
              id="videoModels"
              heading="# Video Models"
              models={videoModels}
            />
            <Line />
            <PrivateModels id="privateModels" />
            <Line />
            <Conclussion id="conclusion" />
          </div>
          <ScrollToSectionNav
            className={clsx(classes.nav, classes.myNav)}
            items={scroolToSectionNavs}
            heading="CONTENT"
          />
        </div>
      </div>
    </PatternContainer>
  );
};
export default PricingPage;
