import { useState } from "react";
import classes from "./ContactForm.module.css";
import { Button, Heading, Input, Text } from "@/components/common";
import clsx from "clsx";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form method="post" onSubmit={submitHandler} className={classes.wrapper}>
      <div className={clsx(classes.container)}>
        <Heading xxl blue500 medium>
          Get In Touch
        </Heading>
        <Input
          label="Your Full Name"
          name="fullName"
          value={name}
          setValue={setName}
          placeholder="e.g. John Doe"
        />{" "}
        <Input
          label="Email address"
          name="email"
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="e.g. your-name@example.com"
        />
        <div className={classes.subjectContainer}>
          <Input
            label="Subject"
            name="subject"
            value={subject}
            setValue={setSubject}
            placeholder="Subject"
          />
          <Text xs primitive500>
            Summarize your issue, question, or feedback in 75 characters or
            less.
          </Text>
        </div>
        <Input
          className={classes.textArea}
          label="How can we help?"
          textarea
          value={message}
          setValue={setMessage}
          placeholder="How can we help?"
        />
      </div>{" "}
      <Button lsm type="submit" wFull className={classes.submitButton}>
        Submit
      </Button>
    </form>
  );
};
export default ContactForm;
