import clsx from "clsx";
import classes from "./Section.module.css";

const Section = ({ className, children }) => {
  return (
    <section className={clsx(classes.wrapper, className, "container")}>
      {children}
    </section>
  );
};
export default Section;
