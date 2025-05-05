import { Button, Dropdown, Heading, Input } from "@/components/common";
import classes from "./TopupYourBalance.module.css";
import { useState } from "react";
import clsx from "clsx";
import TopupWithQrCode from "../TopupWithQrCode/TopupWithQrCode";

const methods = ["Top-up by Crypto", "Method 2"];
const TopupYourBalance = ({ onClose, setStep }) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [amount, setAmount] = useState("");

  const handleTopup = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <>
      <div className={classes.wrapper}>
        <Heading lg primitive900 medium textCenter className={classes.heading}>
          Top-up your balance{" "}
        </Heading>
        <div className={classes.inputWrapper}>
          <Dropdown
            label="Select Method"
            dropdownItems={methods}
            isActive={showDropdown}
            setIsActive={setShowDropdown}
            selectedValue={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            onSelect={(val) => setSelectedMethod(val)}
          />
          {selectedMethod === "Top-up by Crypto" && <TopupWithQrCode />}
          {selectedMethod !== "Top-up by Crypto" && (
            <Input
              placeholder="Enter amount"
              value={amount}
              setValue={setAmount}
            />
          )}
        </div>
      </div>{" "}
      <div className={classes.buttonContainer}>
        <Button
          primitive100
          sm
          wFull
          className={clsx(classes.cancelButton, classes.button)}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          sm
          wFull
          className={clsx(classes.topupButton, classes.button)}
          onClick={handleTopup}
        >
          Topup
        </Button>
      </div>
    </>
  );
};
export default TopupYourBalance;
