import { Heading, Text } from "@/components/common";
import classes from "./ModelName.module.css";
import { copyIcon } from "@/images";
import { copyToClipboard } from "@/utils/utils";
import CopyButton from "@/components/common/CopyButton/CopyButton";
const Header = ({ heading, domain }) => {
  return (
    <div className={classes.header}>
      <div className={classes.titleAndDomain}>
        <Heading xxl medium primitive900>
          {heading}
        </Heading>
        <Text className={classes.domain} xs primitive700>
          {domain}
        </Text>
      </div>
      <CopyButton textToCopy={domain} />
    </div>
  );
};
export default Header;
