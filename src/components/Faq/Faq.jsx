import React, { useState } from "react";

import classes from "./Faq.module.css";

import clsx from "clsx";
import { Heading, Text } from "@/components/common";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faq = ({ faqs, heading }) => {
  const [active, setActive] = useState(3);

  return (
    <div className={classes.wrapper}>
      <Heading xxl2 medium blue500>
        {heading}
      </Heading>
      <div className={classes.faqWrapper}>
        {faqs.map((faq, index) => (
          <div
            className={clsx(
              classes.faqContainer,
              active === index && classes.activeFaqContainer
            )}
            key={index}
            onClick={() => setActive(index)}
          >
            <div className={classes.questionWrapper}>
              <Heading xl blue500 medium>
                {faq.question}
              </Heading>
              {active === index ? (
                <FiMinus className={classes.icon} />
              ) : (
                <FiPlus className={classes.icon} />
              )}
            </div>
            {active === index && (
              <Text lg primitive600 className={classes.answer}>
                {faq.answer}
              </Text>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
