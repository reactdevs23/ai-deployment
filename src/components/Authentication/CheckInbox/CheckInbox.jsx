import { Button, Header, Input, Text } from "@/components/common";
import AuthentictionWrapper from "@/components/common/AuthenticationWrapper/AuthentictionWrapper";
import { apiSkeletonImg } from "@/images";
import { useState } from "react";
import classes from "./CheckInbox.module.css";
import { Link, useNavigate } from "react-router-dom";
import { maskEmail } from "@/utils/utils";
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
        <Header center />
        <VerificationCode
          otp={OTP}
          setOTP={setOTP}
          otpInvalid={otpInvalid}
          setOtpInvalid={setOtpInvalid}
          onVerify={handleVerify}
          buttonText={buttonText}
        />

        <Button wFull onClick={handleVerify} disabled={OTP.length !== 6}>
          {buttonText ? buttonText : "Verify"}
        </Button>
      </div>
    </AuthentictionWrapper>
  );
};
export default CheckInbox;
