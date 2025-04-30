// CodeBlock.js
import CopyButton from "@/components/common/CopyButton/CopyButton";
import classes from "./CodeBlock.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can choose other styles too!

const code = `// File: run-model.js

const axios = require('axios');

// Replace with your actual API token and endpoint
const API_TOKEN = 'YOUR_API_KEY_HERE';
const ENDPOINT = 'https://api.domain.com/sentiment-analyzer';

async function runModel(inputText) {
  try {
    const response = await axios.post(
      ENDPOINT,
      { text: inputText },
      {
        headers: {
          'Authorization': \`Bearer \${API_TOKEN}\`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Model Prediction:', response.data);
  } catch (error) {
    console.error('Error running model:', error.response?.data || error.message);
  }
}

// Example usage
runModel("This product is absolutely amazing!");
`;

const customTheme = {
  'pre[class*="language-"]': {
    background: "transparent",
    padding: "10px 14px",
    overflow: "auto",
    borderRadius: "0px",
  },
  'code[class*="language-"]': {
    color: "#1F2937",
    fontFamily: "Inconsolata, monospace",
    fontSize: "14px",
    lineHeight: "142.86%",
  },
  comment: { color: "#9ca3af", fontStyle: "italic" },
  keyword: { color: "#3996D0" },
  string: { color: "#22A77E" },
  "template-string": { color: "#22863a" },
  function: { color: "#BA2037" },
  "attr-name": { color: "#005cc5" },
  variable: { color: "#DB2A79" },
  'variable[class*="language-"]': { color: "#DB2A79" },
  identifier: { color: "#DB2A79" },
  number: { color: "#005cc5" },
  operator: { color: "#1F2937" },
  punctuation: { color: "#24292e" },
};

const CodeBlock = ({ language = "javascript" }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.copyButton}>
        <CopyButton textToCopy={code} />
      </div>

      <SyntaxHighlighter language={language} style={customTheme}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
