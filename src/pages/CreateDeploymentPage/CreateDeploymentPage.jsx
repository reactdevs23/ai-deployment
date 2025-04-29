import EstimatedCost from "@/components/CreateDeploymentPage/EstimatedCost/EstimatedCost";
import classes from "./CreateDeploymentPage.module.css";
import CreateDeploymentForm from "@/components/CreateDeploymentPage/CreateDeploymentForm/CreateDeploymentForm";
const CreateDeploymentPage = () => {
  return (
    <section className={classes.wrapper}>
      <CreateDeploymentForm />
      <EstimatedCost />
    </section>
  );
};
export default CreateDeploymentPage;
