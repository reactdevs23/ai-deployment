import { IoClose } from "react-icons/io5";
import { Heading, IconButton } from "..";
import classes from "./Modal.module.css";
import clsx from "clsx";
import { sidebarIcon } from "@/images";

const Modal = ({
  isActive,
  onClose,
  className,

  heading,
  children,
  parentRef,
  toggleSidebar,
  ...rest
}) => {
  return (
    <>
      {isActive && (
        <div
          className={clsx(isActive && classes.active, classes.modalOverlay)}
          onClick={onClose}
        />
      )}
      <div
        ref={parentRef}
        className={clsx(
          className,
          isActive && classes.active,

          classes.modal,
          "overflow"
        )}
        {...rest}
      >
        <div className={classes.header}>
          <div className={classes.heading}>
            {toggleSidebar && (
              <button className={classes.sidebarButton} onClick={toggleSidebar}>
                <img
                  src={sidebarIcon}
                  alt="#"
                  className={classes.sidebarIcon}
                />
              </button>
            )}
            <Heading primitive900 medium sm>
              {heading}
            </Heading>
          </div>
          <IconButton className={classes.closeButton} onClick={onClose}>
            <IoClose className={classes.closeIcon} />
          </IconButton>
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
