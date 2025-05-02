import { Heading, Loader, Text } from "@/components/common";
import classes from "./ResponseHeader.module.css";
import { secondLogo } from "@/images";

const ResponseHeader = ({ isLoading }) => {
  return (
    <div className={classes.wrapper}>
      <img src={secondLogo} alt="#" className={classes.logo} />
      <div className={classes.infoContainer}>
        <Heading primitive900 sm medium className={classes.heading}>
          Model Name
          {isLoading && <Loader />}
        </Heading>
        <Text primitive600 xs>
          1.33 sec • Llama 3.3 70B
        </Text>
      </div>
    </div>
  );
};
export default ResponseHeader;
