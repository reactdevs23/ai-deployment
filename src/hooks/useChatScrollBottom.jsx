import { useEffect } from "react";

const useChatScrollBottom = (messages, chatEndRef) => {
  useEffect(() => {
    if (chatEndRef.current) {
      // Get the chat container element
      const chatContainer = chatEndRef.current.closest(".chatBox");
      const scrollHeight = chatContainer.scrollHeight;
      const clientHeight = chatContainer.clientHeight;

      // Calculate the scroll position, leaving 70px from the top
      const scrollPosition = scrollHeight - clientHeight + 70;

      // Scroll to the calculated position
      chatContainer.scrollTo({
        top: scrollPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  }, [messages, chatEndRef]); // The effect will run whenever `messages` or `chatEndRef` changes
};

export default useChatScrollBottom;
