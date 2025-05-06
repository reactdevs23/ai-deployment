import { Heading, Line, Text } from "../../common";
import ListWrapper from "./ListWrapper/ListWrapper";
import classes from "./ReleaseWrapper.module.css";

const ReleaseWrapper = ({
  heading,
  isLatest,
  releaseDate,
  version,
  features = [],
  improvements = [],
  fixes = [],
  ...rest
}) => {
  const hasFeatures = features.length > 0;
  const hasImprovements = improvements.length > 0;
  const hasFixes = fixes.length > 0;

  return (
    <div className={classes.wrapper} {...rest}>
      <div className={classes.header}>
        <Heading xxl2 regular blue500>
          {isLatest && "Latest "} Release {version}
        </Heading>
        <Text primitive700 className={classes.releaseDate}>
          Released: {releaseDate}
        </Text>
      </div>

      <Line />

      {hasFeatures && (
        <ListWrapper heading="✨ New Features:" list={features} />
      )}
      {hasImprovements && (
        <ListWrapper heading="🔧 Improvements:" list={improvements} />
      )}
      {hasFixes && <ListWrapper heading="🐞 Fixes:" list={fixes} />}
    </div>
  );
};

export default ReleaseWrapper;
