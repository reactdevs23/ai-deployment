import { SectionHeading } from "@/components/common";
import classes from "./ModelsContainer.module.css";
import ModelsTable from "./ModelsTable/ModelsTable";
const ModelsContainer = ({ models, heading, ...rest }) => {
  return (
    <div className={classes.wrapper} {...rest}>
      <SectionHeading>{heading}</SectionHeading>

      <ModelsTable data={models} />
    </div>
  );
};
export default ModelsContainer;
