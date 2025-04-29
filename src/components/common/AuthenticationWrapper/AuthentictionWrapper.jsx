import clsx from "clsx";
import classes from "./AuthentictionWrapper.module.css";

const AuthentictionWrapper = ({ className, children, img }) => {
  return (
    <section className={clsx(classes.wrapper, className)}>
      <div className={clsx(classes.formContainer, "formPttern")}>
        {children}
      </div>
      <div className={classes.imgContainer}>
        <img src={img} alt="#" className={classes.img} />
      </div>
    </section>
  );
};
export default AuthentictionWrapper;
