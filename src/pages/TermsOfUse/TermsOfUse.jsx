import { Button, HeaderWrapper, Line, Text } from "@/components/common";
import classes from "./TermsOfUse.module.css";
import clsx from "clsx";
import ContentWrapper from "@/components/PrivacyPolicy/ContentWrapper/ContentWrapper";
const termsofuseData = [
  {
    title: "Information We Collect",
    description: "We collect the following types of data:",
    infolist: [
      "Account information – name, email, username, and contact details.",
      "Usage Data – logic, deployment activity, and interactions within the platform.",
      "Billing Details – payment method, transaction history, and finances.",
      "Device & Location – browser type, IP address, and geolocation for security and analytics.",
    ],
    note: null,
    actions: [],
  },
  {
    title: "How We Use Your Data",
    description: "We use your information to:",
    infolist: [
      "Provide and improve our services",
      "Authenticate and secure your account",
      "Process payments and manage subscriptions",
      "Analyze usage for performance and improvements",
      "Send updates, support responses, and billing alerts",
    ],
    note: null,
    actions: [],
  },
  {
    title: "Data Protection",
    description: "We take data security seriously:",
    infolist: [
      "All sensitive data is encrypted in transit and at rest.",
      "Access to user data is limited to authorised personnel only.",
      "We regularly audit our infrastructure and comply with industry standards.",
    ],
    note: null,
    actions: [],
  },
  {
    title: "Third-Party Services",
    description:
      "We may share limited data with trusted third parties such as:",
    infolist: [
      "Payment processors (e.g., Scripts)",
      "Analytics providers (e.g., Google Analytics)",
      "Authentication tools (e.g., OAuth, SSO)",
    ],
    note: "We never sell or rent your personal information.",
    actions: [],
  },
  {
    title: "Your Rights & Choices",
    description: "You can:",
    infolist: [
      "Access and update your profile information",
      "Download a copy of your account data",
      "Revise access tokens or limited services",
      "Opt-out of marketing communications at any time",
    ],
    note: null,
    actions: [
      {
        label: "Request Data Export",
        type: "export",
      },
      {
        label: "Delete My Account",
        type: "delete",
      },
    ],
  },
  {
    title: "Children's Privacy",
    description:
      "Our services are not intended for individuals under 13 years of age.",
    infolist: [],
    note: "We do not knowingly collect personal data from children.",
    actions: [],
  },
  {
    title: "Updates to This Policy",
    description: "We may update this Privacy Policy from time to time.",
    infolist: [],
    note: "We'll notify you about significant changes through email or in-app notifications.",
    actions: [],
  },
];
const TermsOfUse = () => {
  const handleAction = (actionType) => {
    switch (actionType) {
      case "export":
        console.log("Exporting data...");

        break;
      case "delete":
        console.log("Deleting account...");

        break;
      default:
        break;
    }
  };
  return (
    <>
      <HeaderWrapper
        xl4
        heading="Terms of Use"
        info='Your access to our platform matters. These Terms of Use ("Terms") govern your use of [Platform Name]&apos;s services, features, and content. By accessing or using our platform, you agree to comply with these Terms and all applicable laws.'
        className={clsx(classes.heading, classes.mainHeading)}
      >
        <Text primitive600 base>
          Last Updated:
          <span className={classes.highlight}> April 11, 2025</span>
        </Text>
      </HeaderWrapper>

      <Line />
      {termsofuseData?.map((data, i) => (
        <ContentWrapper {...data} key={i} index={i}>
          {data?.actions?.length > 0 && (
            <div className="action-buttons">
              {data.actions.map((action, i) => (
                <Button
                  className={classes.actionButton}
                  arrowButton
                  key={i}
                  onClick={() => handleAction(action.type)}
                >
                  [{action.label}]
                </Button>
              ))}
            </div>
          )}
        </ContentWrapper>
      ))}
    </>
  );
};
export default TermsOfUse;
