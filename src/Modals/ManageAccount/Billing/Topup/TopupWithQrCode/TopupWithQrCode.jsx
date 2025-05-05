import { Button, Text } from "@/components/common";
import classes from "./TopupWithQrCode.module.css";
import { copyToClipboard } from "@/utils/utils";
import { useState } from "react";
import QRCode from "react-qr-code";

const WALLET_ADDRESS = "TQ9eH2QmNg8X1j4mFbUvVVuJ2nEY7HaHqS";

const TopupWithQrCode = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(WALLET_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className={classes.wrapper}>
      <Text primitive600 sm>
        Send your desired amount to the wallet address below to instantly top-up
        your credits.
      </Text>

      <div className={classes.qrContainer}>
        <QRCode value={WALLET_ADDRESS} size={128} />
      </div>

      <div className={classes.addressContainer}>
        <Text primitive600 lsx>
          <span className={classes.or}>or,</span> copy this address:
        </Text>
        <Text primitive800 className={classes.address}>
          {WALLET_ADDRESS}
        </Text>
        <Button blue50 className={classes.copyButton} onClick={handleCopy}>
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </div>
  );
};

export default TopupWithQrCode;
