import { useEffect, useState } from "react";

const useDropdownPosition = (isActive, triggerRef, dropdownRef, parentRef) => {
  const [dropdownPosition, setDropdownPosition] = useState("bottom");

  useEffect(() => {
    if (isActive && triggerRef?.current && dropdownRef?.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;

      let spaceBelow, spaceAbove;

      if (parentRef?.current) {
        const parentRect = parentRef.current.getBoundingClientRect();
        spaceBelow = parentRect.bottom - triggerRect.bottom;
        spaceAbove = triggerRect.top - parentRect.top;
      } else {
        spaceBelow = window.innerHeight - triggerRect.bottom;
        spaceAbove = triggerRect.top;
      }

      if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        setDropdownPosition("top");
      } else {
        setDropdownPosition("bottom");
      }
    }
  }, [isActive, parentRef, triggerRef, dropdownRef]);

  return dropdownPosition;
};

export default useDropdownPosition;
