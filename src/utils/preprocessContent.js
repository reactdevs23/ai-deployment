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

  // Step 2: Process <think> tags and wrap each word with <u> (underline)
  processedContent = processedContent.replace(
    /<think>([\s\S]*?)<\/think>|<think>([\s\S]*)/g,
    (_, p1, p2) => {
      const contentToWrap = p1 || p2; // Use p1 if </think> exists, otherwise p2
      if (!contentToWrap.trim()) return ""; // Skip empty content

      // Split content into words (including punctuation and spaces)
      return contentToWrap
        .split(/(\b)/) // Split by word boundaries
        .map((word) =>
          word.trim() ? `<u class="underline">${word}</u>` : word
        ) // Wrap with <u> for underline
        .join("");
    }
  );

  // Step 3: Handle *only single backticks* (`content`) as italic
  processedContent = processedContent.replace(
    /(?<!`)`([^`]+)`(?!`)/g, // Ensure it's a single backtick, not part of `code` or ``code``
    (_, p1) => `<i>${p1}</i>`
  );

  // Step 4: Handle single asterisks (*content*) as italic
  processedContent = processedContent.replace(
    /(?<!\\)\*([^*]+)\*/g,
    (_, p1) => `<i>${p1}</i>`
  );

  // Step 5: Handle double asterisks (**content**) as bold
  processedContent = processedContent.replace(
    /(?<!\\)\*\*([^*]+)\*\*/g,
    (_, p1) => `<b>${p1}</b>`
  );

  return processedContent;
};
