import { HeaderWrapper, Line, PatternContainer } from "@/components/common";
import classes from "./ContactUsPage.module.css";
import clsx from "clsx";
import ContactForm from "@/components/ContactUs/ContactForm/ContactForm";
import FollowUs from "@/components/ContactUs/FollowUs/FollowUs";
import Support from "@/components/ContactUs/Support/Support";

const ContactUsPage = () => {
  return (
    <PatternContainer>
      <div className={classes.wrapper}>
        {" "}
        <HeaderWrapper
          xl4
          heading="Contact Us"
          info="Have a question, need assistance, or just want to say hello? We're here to help. Reach out to the right team below and we'll get back to you as soon as possible."
          className={clsx(classes.heading, classes.mainHeading)}
        />
        <Line />
        <div className={classes.container}>
          <ContactForm />
          <div className={classes.supportAndFollow}>
            <Support /> <Line />
            <FollowUs />
          </div>
        </div>
      </div>
    </PatternContainer>
  );
};
export default ContactUsPage;
