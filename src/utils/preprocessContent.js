export const preprocessContent = (content) => {
  if (!content || typeof content !== "string") return content;

  const htmlEntities = {
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
  };

  // Step 1: Decode HTML entities
  let processedContent = content.replace(
    /(&lt;|&gt;|&amp;)/g,
    (match) => htmlEntities[match] || match
  );

  // Step 2: Extract code blocks so we don't mess with them
  const codeBlockRegex = /```[\s\S]*?```/g;
  const codeBlocks = [];
  processedContent = processedContent.replace(codeBlockRegex, (match) => {
    codeBlocks.push(match);
    return `[[CODE_BLOCK_${codeBlocks.length - 1}]]`;
  });

  // Step 3: Process <think> tags and wrap each word with <u> (underline)
  processedContent = processedContent.replace(
    /<think>([\s\S]*?)<\/think>|<think>([\s\S]*)/g,
    (_, p1, p2) => {
      const contentToWrap = p1 || p2;
      if (!contentToWrap.trim()) return "";

      return contentToWrap
        .split(/(\b)/)
        .map((word) =>
          word.trim() ? `<u class="underline">${word}</u>` : word
        )
        .join("");
    }
  );

  // Step 4: Handle single backticks as italic (but only outside code blocks)
  processedContent = processedContent.replace(
    /(?<!`)`([^`]+)`(?!`)/g,
    (_, p1) => `<i>${p1}</i>`
  );

  // Step 5: Handle *italic* and **bold**
  processedContent = processedContent.replace(
    /(?<!\\)\*\*([^*]+)\*\*/g,
    (_, p1) => `<b>${p1}</b>`
  );

  processedContent = processedContent.replace(
    /(?<!\\)\*([^*]+)\*/g,
    (_, p1) => `<i>${p1}</i>`
  );

  // Step 6: Put back the untouched code blocks
  processedContent = processedContent.replace(
    /\[\[CODE_BLOCK_(\d+)\]\]/g,
    (_, index) => codeBlocks[Number(index)]
  );

  return processedContent;
};
