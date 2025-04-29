import { Button, Header, Input, Text } from "@/components/common";
import AuthentictionWrapper from "@/components/common/AuthenticationWrapper/AuthentictionWrapper";
import { apiSkeletonImg } from "@/images";
import { useState } from "react";
import classes from "./CheckInbox.module.css";
import { Link, useNavigate } from "react-router-dom";
import VerificationCode from "../VerificationCode/VerificationCode";
const CheckInbox = ({ img, setStep, buttonText, to }) => {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const [otpInvalid, setOtpInvalid] = useState(false);
  const predefinedOTP = "123456";

  const handleVerify = () => {
    if (OTP.length === 6 && !isNaN(OTP) && OTP === predefinedOTP) {
      setOtpInvalid(false);
      setStep && setStep(3);
      to && navigate(to);
    } else {
      setOtpInvalid(true);
    }
  };

  return (
    <AuthentictionWrapper img={img}>
      <div className={classes.wrapper}>
        <Header
          heading="Check Your Inbox"
          info={
            <span>
              We’ve sent a 6-digit code to{" "}
              <b className={classes.bold}>yo**ur@email.com</b> — Enter the code
              below to complete sign-in.
            </span>
          }
        />{" "}
        <VerificationCode
          otp={OTP}
          setOTP={setOTP}
          otpInvalid={otpInvalid}
          setOtpInvalid={setOtpInvalid}
          onVerify={handleVerify}
          buttonText={buttonText}
        />
      </div>
    </AuthentictionWrapper>
  );
};
export default CheckInbox;
