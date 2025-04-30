import EstimatedCost from "@/components/CreateDeployment/EstimatedCost/EstimatedCost";
import classes from "./CreateDeploymentPage.module.css";
import CreateDeploymentForm from "@/components/CreateDeployment/CreateDeploymentForm/CreateDeploymentForm";
const CreateDeploymentPage = () => {
  return (
    <section className={classes.wrapper}>
      <CreateDeploymentForm />
      <EstimatedCost />
    </section>
  );
};
export default CreateDeploymentPage;
