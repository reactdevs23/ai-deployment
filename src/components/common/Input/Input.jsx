import React, { memo, useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import clsx from "clsx";

import classes from "./Input.module.css";

const Input = memo(
  React.forwardRef(
    (
      {
        value,
        setValue,
        search,
        placeholder,
        onKeyDown,
        onChange,
        type,
        className,
        readonly,
        noIcon,
        label,
        name,
        textarea,
        sm,
        ctrlK,
        wrapperClassName,
      },
      ref
    ) => {
      const [showPassword, setShowPassword] = useState(false);
      const [isFocused, setIsFocused] = useState(false); // To track if input is focused

      const handleFocus = () => {
        setIsFocused(true);
      };

      const handleBlur = () => {
        setIsFocused(false);
      };
      // Handle change event
      const handleChange = (e) => {
        if (onChange) {
          onChange(e); // Call the passed onChange function
        } else {
          setValue(e.target.value); // Default behavior if onChange is not provided
        }
      };

      // Handle 'Ctrl + P' keydown event
      useEffect(() => {
        if (ctrlK) {
          const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === "k") {
              e.preventDefault();
              ref.current?.focus(); // Focus the input field
            }
          };

          window.addEventListener("keydown", handleKeyDown);
          return () => {
            window.removeEventListener("keydown", handleKeyDown);
          };
        }
      }, [ctrlK, ref]);

      return (
        <div className={clsx(classes.inputWrapper, wrapperClassName)}>
          {label && (
            <label htmlFor="input" className={classes.label}>
              {label}
            </label>
          )}
          <div
            className={clsx(
              classes.inputContainer,
              textarea && classes.textareaContainer,
              isFocused && classes.focused,
              className,
              search && classes.searchIconInputContainer,
              sm && classes.sm,
              ctrlK && classes.ctrlK
            )}
          >
            {search && !noIcon && <LuSearch className={classes.searchIcon} />}
            {textarea ? (
              <textarea
                ref={ref}
                name={name}
                value={value}
                onChange={handleChange}
                className={clsx(classes.input, classes.textarea)}
                placeholder={placeholder}
                required
                readOnly={readonly}
                rows={1}
                cols={10}
                id="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
              ></textarea>
            ) : (
              <input
                id="input"
                ref={ref}
                name={name}
                type={showPassword ? "text" : type || "text"}
                onKeyDown={onKeyDown}
                value={value}
                onChange={handleChange}
                className={classes.input}
                placeholder={placeholder}
                required
                readOnly={readonly}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            )}
            {ctrlK && (
              <button className={classes.ctrlKContainer}>ctrl + k</button>
            )}
            {type === "password" && (
              <>
                {showPassword ? (
                  <FaRegEye
                    className={classes.eye}
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className={classes.eye}
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
              </>
            )}

            {search && value && !ctrlK && (
              <MdClose className={classes.close} onClick={() => setValue("")} />
            )}
          </div>
        </div>
      );
    }
  )
);

export default Input;
