import { MdClose } from "react-icons/md";
import classes from "./Overlay.module.css";
import clsx from "clsx";
const Overlay = ({ sidebar, onClose }) => {
  return (
    <div
      className={clsx(classes.overlay, sidebar && classes.sidebarActive)}
      onClick={onClose}
    >
      <button className={classes.closeIcon} onClick={onClose}>
        <MdClose />
      </button>
    </div>
  );
};
export default Overlay;
