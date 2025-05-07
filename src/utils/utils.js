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
  const visiblePart = token.slice(0, 20); // Show only first 10 chars
  return `${visiblePart}${"x".repeat(token.length - 10)}`;
};
export const maskEmail = (email) => {
  if (!email) return "you****@email.com";
  const [username, domain] = email.split("@");
  return `${username.substring(0, 2)}****@${domain}`;
};
export const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};
export const maskDigits = (num) => {
  const str = String(num);
  return "****" + str.slice(-4);
};
export const getLocalStorage = (key, defaultValue) => {
  try {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Failed to save ${key} to localStorage`, e);
  }
};
