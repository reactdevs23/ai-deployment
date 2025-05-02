import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loading}>
      <div className={classes.inside}></div>
    </div>
  );
};
export default Loader;
