import React, { useState, useRef } from "react";
import clsx from "clsx";
import { Button, TextArea } from "@/components/common";
import { BiUpArrowAlt } from "react-icons/bi";
import { imgIcon } from "@/images";
import classes from "./ChatInput.module.css";
import ImgUpload from "./ImgUpload";

const ChatInput = ({ sendMessage }) => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState({
    preview: null,
    file: null,
    uploading: false,
  });
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage({ preview: URL.createObjectURL(file), file, uploading: true });
      // Simulate upload delay
      setTimeout(
        () => setImage((prev) => ({ ...prev, uploading: false })),
        2000
      );
    }
  };

  const handleCancelUpload = () => {
    setImage({ preview: null, file: null, uploading: false });
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
      setImage({ preview: null, file: null, uploading: false });
    }
  };

  return (
    <div className={clsx(classes.wrapper, "playgroundContainer")}>
      <ImgUpload {...image} handleCancelUpload={handleCancelUpload} />

      <div className={classes.inputContainer}>
        <TextArea
          value={input}
          setValue={setInput}
          placeholder="Ask anything..."
          className={classes.input}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <div className={classes.buttonContainer}>
          <Button
            className={classes.imgUploadButton}
            onClick={() => fileInputRef.current?.click()}
          >
            <img src={imgIcon} alt="Upload" className={classes.imgIcon} />
          </Button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <Button onClick={handleSendMessage}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
