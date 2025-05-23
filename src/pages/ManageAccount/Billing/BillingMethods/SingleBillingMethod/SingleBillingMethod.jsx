import { ActionDropdown, Heading, IconButton, Text } from "@/components/common";
import classes from "./SingleBillingMethod.module.css";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { maskDigits } from "@/utils/utils";

const SingleBillingMethod = ({
  logo,
  cardName,
  cardHolder,
  cardNumber,
  parentRef,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  return (
    <>
      <div className={classes.cardContainer}>
        <div className={classes.cardInfo}>
          <div className={classes.logoAndName}>
            <img src={logo} alt="#" className={classes.logo} />
            <Heading sm primitive700 medium>
              {cardName}
            </Heading>
          </div>
          <div className={classes.cardHolderAndCardNumber}>
            <Text lxx primitive600 className={classes.cardHolder}>
              {cardHolder}
            </Text>
            <Text className={classes.cardNumber}>{maskDigits(cardNumber)}</Text>
          </div>
        </div>

        <ActionDropdown
          parentRef={parentRef}
          dropdownItems={["Delete"]}
          isActive={isDropdownOpen}
          setIsActive={setIsDropdownOpen}
          selectedValue={selectedAction}
          onSelect={(val) => setSelectedAction(val)}
        >
          {" "}
          <IconButton
            onClick={(e) => setIsDropdownOpen(true)}
            className={classes.actionButton}
          >
            <HiDotsVertical />
          </IconButton>
        </ActionDropdown>
      </div>
    </>
  );
};
export default SingleBillingMethod;
