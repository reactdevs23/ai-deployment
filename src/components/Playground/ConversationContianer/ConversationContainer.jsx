import React, { useState } from "react";
import classes from "./ConversationContainer.module.css";
import clsx from "clsx";
import { Text } from "@/components/common";
import ResponseMessage from "./Response/ResponseMessage";

import ChatInput from "./ChatInput/ChatInput";
import ResponseHeader from "./Response/ResponseHeader/ResponseHeader";
import WelComeMessage from "../WelComeMessage/WelComeMessage";
import { scrollToBottom } from "@/utils/utils";

const ConversationContainer = () => {
  const [messages, setMessages] = useState([
    { role: "user", content: "Hi!" },
    { role: "assistant", content: "Hello! How can I help you?" },
    { role: "user", content: "Tell me a joke." },
    {
      role: "assistant",
      content:
        "Why don’t scientists trust atoms? Because they make up everything!",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (inputMessage) => {
    if (!inputMessage.trim()) return;

    const userMessage = { role: "user", content: inputMessage };
    const assistantMessage = {
      role: "assistant",
      content: "", // empty until "response" is ready
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
      assistantMessage,
    ]);

    setLoading(true);
    setTimeout(scrollToBottom, 0);

    // Simulate assistant response after delay
    setTimeout(() => {
      const updatedAssistantMessage = {
        role: "assistant",
        content: `You said: "${inputMessage}", how can I assist you further?`,
      };

      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), // remove the empty assistant message
        updatedAssistantMessage,
      ]);

      setLoading(false);
    }, 1500);
  };

  return (
    <div className={clsx(classes.wrapper)}>
      <WelComeMessage />

      {messages.map((msg, index) => {
        const isLastMessage = index === messages.length - 1;

        return (
          <div
            key={index}
            className={clsx(classes.messages, isLastMessage && classes.hScreen)}
          >
            {msg.role === "user" && (
              <Text primitive700 sm className={classes.userMessage}>
                {msg.content.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </Text>
            )}

            {msg.role === "assistant" && (
              <div className={classes.responseContainer}>
                <ResponseHeader />
                <ResponseMessage msg={msg} />
              </div>
            )}
          </div>
        );
      })}

      <ChatInput sendMessage={sendMessage} loading={loading} />
    </div>
  );
};

export default ConversationContainer;
