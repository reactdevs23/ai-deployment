// CodeBlock.js
import CopyButton from "@/components/common/CopyButton/CopyButton";
import classes from "./CodeBlock.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can choose other styles too!
import { customTheme } from "@/utils/codeBlockCustomTheme";

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
