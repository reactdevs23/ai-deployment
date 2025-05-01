import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  a11yDark,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCheck } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";

import { TfiReload } from "react-icons/tfi";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDislike } from "react-icons/bi";
import classes from "./ResponseMessage.module.css"; // Your CSS module
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Text } from "@/components/common";
import { HiOutlineDownload } from "react-icons/hi";
import { copyToClipboard, detectLanguage } from "@/utils/utils";
import { preprocessContent } from "@/utils/preprocessContent";

const ResponseMessage = ({ msg }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  // Custom renderer for code blocks
  const renderCodeBlock = ({ node, inline, className, children, ...props }) => {
    const codeContent = String(children).replace(/\n$/, "");

    // Extract language from markdown code block (e.g., ```python)
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : detectLanguage(codeContent); // Fallback to detection

    return !inline ? (
      <CodeBlock
        code={codeContent}
        language={language}
        handleCopy={handleCopy}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  };

  return (
    <div className={classes.wrapper}>
      {/* Markdown Content */}
      <div className={classes.markdownContainer}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{ code: renderCodeBlock }}
        >
          {preprocessContent(msg.content)}
        </ReactMarkdown>
      </div>

      {/* Action Buttons */}
      <div className={classes.actionContainer}>
        {[
          {
            icon: copied ? (
              <FaCheck className={classes.checkMark} />
            ) : (
              <LuCopy />
            ),
            onClick: () => handleCopy(msg.content),
          },
          { icon: <BiDislike />, onClick: () => {} },
          { icon: <AiOutlineExpandAlt />, onClick: () => {} },
          { icon: <TfiReload />, onClick: () => {} },

          { icon: <RiDeleteBin6Line />, onClick: () => {} },
        ].map((action, index) => (
          <button
            key={index}
            className={classes.actionButton}
            onClick={action.onClick}
          >
            {action.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

// CodeBlock component to handle individual code block rendering
const CodeBlock = ({ code, language }) => {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  // Handle copying to clipboard (preserving formatting)
  const handleCopy = (code) => {
    copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className={classes.codeBlockWrapper}>
      <div className={classes.codeHeader}>
        <Text sm primitive50 className={classes.language}>
          {language}
        </Text>
        <div className={classes.copyAndDownload}>
          <button
            className={classes.copyButton}
            onClick={() => handleCopy(code)}
          >
            {copied ? <FaCheck /> : <LuCopy />}
          </button>
          <button className={classes.downloadButton}>
            <HiOutlineDownload />
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        className={classes.customSyntaxHighlighter}
        language={language}
        PreTag="div"
        style={{
          ...atomDark, // Use atomOneDark for better token separation
          'code[class*="language-"]': {
            color: "#E6E6E6", // Adjust default text color
          },
          backgroundColor: "var(--Primitive-900)",
          "span.token.keyword": { color: "#A9E246" },
          "span.token.function": { color: "#A6E22E" },
          "span.token.variable": { color: "#FD971F" },
          "span.token.string": { color: "#E6DB74" },
          "span.token.operator": { color: "#FA417B" },
          "span.token.comment": { color: "#75715E", fontStyle: "italic" },
        }}
        ref={codeRef} // Attach ref to the SyntaxHighlighter
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default ResponseMessage;
