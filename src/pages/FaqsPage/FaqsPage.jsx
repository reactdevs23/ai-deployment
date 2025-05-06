import { HeaderWrapper, Line, PatternContainer } from "@/components/common";
import classes from "./FaqsPage.module.css";
import clsx from "clsx";
import Faq from "@/components/Faq/Faq";

// Deployments
const deployments = [
  {
    question: "How do I create a new deployment?",
    answer:
      "Go to the “Deployments” tab and click Create Deployment. You’ll need to select a model, choose hardware, and set scaling preferences.",
  },
  {
    question: "Can I deploy my own custom model?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "How do I update a deployment without downtime?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question:
      "What’s the difference between always-on and scale-to-zero deployments?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Can I monitor the deployment status?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

// Billing & Payments
const billingPayments = [
  {
    question: "How does billing work in this platform?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "When are I changed?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Can I view and download invoices?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "How do I change my payment method?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "What happens if my payment fails?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

// API & Tokens
const apiTokens = [
  {
    question: "How do I get my API token?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "How do I use the API to run a model?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Can I regenerate my API token?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Is the API token secure?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "What happens if my token is deleted?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

// Model Management
const modelManagement = [
  {
    question: "What model types are supported?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Can I upload pre-trained models?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "How do I manage different versions of a model?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Can I roll back to a previous model version?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Is there a list for model size?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

// Account & Security
const accountSecurity = [
  {
    question: "How do I update my email or password?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "How do I enable two-factor authentication (2FA)?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "What should I do if I suspect unauthorized access?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Is my data encrypted?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
const FaqsPage = () => {
  return (
    <div>
      {" "}
      <PatternContainer>
        <HeaderWrapper
          xl4
          center
          heading="Frequently Asked Questions"
          info="Got questions? We've got answers. Browse our FAQs to quickly find help with deployments, billing, API usage, and more."
          className={clsx(classes.heading, classes.mainHeading)}
        />
      </PatternContainer>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <Faq faqs={deployments} heading="Deployments" />
          <Line />
          <Faq faqs={billingPayments} heading="Billing & Payments" />
          <Line />
          <Faq faqs={apiTokens} heading="API & Tokens" />
          <Line />
          <Faq faqs={modelManagement} heading="Model Management" />
          <Line />
          <Faq faqs={accountSecurity} heading="Account & Security" />
        </div>
      </div>
    </div>
  );
};
export default FaqsPage;
