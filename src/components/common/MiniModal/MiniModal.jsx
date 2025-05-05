import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { Button, Header, Heading, IconButton } from "..";
import classes from "./MiniModal.module.css";
import clsx from "clsx";
import { sidebarIcon } from "@/images";

const MiniModal = ({
  isActive,
  onCancel,
  onSave,
  className,

  children,
  onClose,

  ...rest
}) => {
  return createPortal(
    <>
      {isActive && (
        <div
          className={clsx(isActive && classes.active, classes.modalOverlay)}
          onClick={onClose}
        />
      )}
      <div
        className={clsx(
          className,
          isActive && classes.active,

          classes.modal,
          "overflow"
        )}
        {...rest}
      >
        {children}
      </div>
    </>,
    document.body
  );
};

export default MiniModal;
