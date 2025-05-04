import { Button, Header, Input, Text } from "@/components/common";
import classes from "./BillingMethods.module.css";
import React, { useState } from "react";
import clsx from "clsx";
import SingleBill from "./SingleBillingMethod/SingleBillingMethod";
import { masterCardLogo, visaCardLogo } from "@/images";
const data = [
  {
    id: "1",
    logo: masterCardLogo,
    cardName: "MasterCard",
    cardHolder: "IMAM HOSSAIN",
    cardNumber: "54214126",
  },
  {
    id: "2",
    logo: visaCardLogo,
    cardName: "Visa",
    cardHolder: "IMAM HOSSAIN",
    cardNumber: "45234126",
  },
];
const BillingMethods = ({ parentRef, setStep }) => {
  const [showTopupModal, setShowTopupModal] = useState(false);

  const handleTopup = () => {
    setShowTopupModal(true);
  };
  return (
    <>
      <div className={classes.headerWrapper}>
        <div className={classes.headerInfo}>
          <Header
            small
            heading="Billing"
            description="Manage your payment information, view usage, and download invoices — everything you need to keep your AI deployments running smoothly."
          />
          <Button sm className={clsx(classes.addButton, classes.button)}>
            Add a Billing Method
          </Button>
        </div>
        <div className={classes.topupContainer}>
          <div className={classes.content}>
            <Text lsx primitive700>
              Your Balance
            </Text>
            <Text base blue500 medium>
              $123.45
            </Text>
          </div>
          <Button
            sm
            wFull
            className={classes.topupButton}
            onClick={handleTopup}
          >
            Top-up
          </Button>
        </div>
      </div>

      <div className={classes.cards}>
        {data?.map((cardInfo) => (
          <SingleBill
            {...cardInfo}
            key={cardInfo?.id}
            parentRef={parentRef}
            onClick={() => setStep((prev) => prev + 1)}
          />
        ))}
      </div>
    </>
  );
};
export default BillingMethods;
