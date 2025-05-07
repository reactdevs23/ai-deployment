import { useState } from "react";
import classes from "./Billing.module.css";
import BillingMethods from "./BillingMethods/BillingMethods";
import BillingHistory from "./BillingHistory/BillingHistory";

const STEPS = {
  BILLING_METHODS: 1,
  BILLING_HISTORY: 2,
};

const Billing = () => {
  const [step, setStep] = useState(STEPS.BILLING_METHODS);
  return (
    <>
      {STEPS.BILLING_METHODS === step && <BillingMethods setStep={setStep} />}
      {STEPS.BILLING_HISTORY === step && <BillingHistory setStep={setStep} />}
    </>
  );
};
export default Billing;
