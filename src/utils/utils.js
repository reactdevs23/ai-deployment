import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import hljs from "highlight.js";
const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default ScrollToTop;
export const detectLanguage = (code) => {
  const result = hljs.highlightAuto(code);
  return result.language || "text"; // Default to "text" if no language is detected
};

export const copyToClipboard = (value) => {
  // Copy deposit address to clipboard
  navigator.clipboard.writeText(value);
};
// utils.js
export function convertMBtoGB(mb) {
  return `${mb / 1024} GB`;
}
export const maskToken = (token) => {
  if (!token) return "";
  const visiblePart = token.slice(0, 10); // Show only first 10 chars
  return `${visiblePart}${"*".repeat(token.length - 10)}`;
};
export const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};
