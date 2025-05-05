import { SectionHeading } from "@/components/common";
import classes from "./ModelsContainer.module.css";
import ModelsTable from "./ModelsTable/ModelsTable";
const ModelsContainer = ({ models, heading }) => {
  return (
    <div className={classes.wrapper}>
      <SectionHeading>{heading}</SectionHeading>

      <ModelsTable data={models} />
    </div>
  );
};
export default ModelsContainer;
