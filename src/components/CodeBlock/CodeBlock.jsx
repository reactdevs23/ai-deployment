// CodeBlock.js
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can choose other styles too!
const code = `
const axios = require('axios');

const API_TOKEN = 'YOUR_API_KEY_HERE';
const ENDPOINT = 'https://api.domain.com/sentiment-analyzer';

async function runModel(inputText) {
  try {
    const response = await axios.post(
      ENDPOINT,
      { text: inputText },
      {
        headers: {
          'Authorization': \`Bearer \${API_TOKEN}\`
        }
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
`;
const customTheme = {
  'code[class*="language-"]': {
    color: "#333",
    background: "#fafafa",
    fontFamily: "Fira Code, monospace",
    fontSize: "14px",
  },
  comment: { color: "#6a737d", fontStyle: "italic" },
  keyword: { color: "#d73a49" },
  string: { color: "#032f62" },
  function: { color: "#005cc5" },
  variable: { color: "#e36209" },
  number: { color: "#005cc5" },
  operator: { color: "#d73a49" },
};

const CodeBlock = ({ language = "javascript" }) => {
  return (
    <SyntaxHighlighter language={language} style={customTheme}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
