import { IoClose } from "react-icons/io5";
import classes from "./IconButton.module.css";
import clsx from "clsx";
const IconButton = ({ className, children, onClick, ...rest }) => {
  return (
    <button
      className={clsx(classes.button, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
export default IconButton;
