import {
  Button,
  HeaderWrapper,
  Heading,
  Section,
  Text,
} from "@/components/common";
import classes from "./ModelSharedByCommunity.module.css";
import clsx from "clsx";
import { modlesSharedByCommunity } from "@/assets/data";

const ModleSharedByCommunity = () => {
  return (
    <Section className={clsx(classes.wrapper, classes.mainWrapper)}>
      <HeaderWrapper
        xl5
        center
        heading="Thousands of models shared by our community"
        info="Discover the latest AI models on DeployIQ — not just demos, but fully functional with production-ready APIs. We believe AI should be accessible, not locked in papers or prototypes. Bring your models to life and share them with the world on DeployIQ."
      >
        <div className={classes.buttonContainer}>
          <Button>Explore Models</Button>
          <Button transparent>View Docs</Button>
        </div>
      </HeaderWrapper>

      <div className={classes.models}>
        {modlesSharedByCommunity?.map((model, i) => (
          <div className={classes.model} key={i}>
            <Heading base medium blue600>
              {model.name}
            </Heading>

            <Text sm primitive600 className={classes.info}>
              {model.info.length > 59
                ? model.info.slice(0, 59) + "..."
                : model.info}
            </Text>
            <Text sm green medium className={classes.run}>
              {model.run} run
            </Text>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default ModleSharedByCommunity;
