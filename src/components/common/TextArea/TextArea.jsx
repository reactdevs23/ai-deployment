import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import classes from "./TextArea.module.css";

const TextArea = ({
  value,
  setValue,
  placeholder,
  className,
  name,
  onKeyDown,
}) => {
  const textareaRef = useRef(null);

  // Adjust height based on content
  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "32px"; // Reset height to auto
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        220
      )}px`; // Max height 220px
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <textarea
      ref={textareaRef}
      name={name}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        adjustHeight(); // Adjust height on user input
      }}
      className={clsx(classes.textArea, className, "overflow")}
      placeholder={placeholder}
      rows={1}
      required={true}
      onKeyDown={onKeyDown}
    />
  );
};

export default TextArea;
