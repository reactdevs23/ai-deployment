import { Button, Header, Input } from "@/components/common";
import classes from "./ApiToken.module.css";
import React, { useState } from "react";
import clsx from "clsx";
import SingleToken from "./SingleToken/SingleToken";
const tokens = [
  {
    id: "1",
    name: "Default",
    token: "sk-live-12c4b8a9b8d8sk-live-12c4b8a9b8d8",
  },
  {
    id: "2",
    name: "Token One",
    token: "sk-live-12c4b8a9b8d8sk-live-12c4b8a9b8d8",
  },
  {
    id: "3",
    name: "Token Two",
    token: "sk-live-12c4b8a9b8d8sk-live-12c4b8a9b8d8",
  },
];
const ApiToken = () => {
  const [tokenName, setTokenName] = useState("");
  return (
    <>
      <Header
        small
        heading="API Token"
        description="Securely authenticate your requests to the deployment API. Use your token in headers to access private model endpoints, run predictions, and manage deployments."
      />
      <div className={classes.inputWrapper}>
        <Input
          className={clsx(classes.input, classes.myInput)}
          name="token name"
          value={tokenName}
          setValue={setTokenName}
          placeholder="Enter token name"
        />
        <Button sm className={classes.createButton}>
          Create
        </Button>
      </div>
      <div className={classes.tokens}>
        {tokens?.map((tokenInfo) => (
          <SingleToken {...tokenInfo} key={tokenInfo?.id} />
        ))}
      </div>
    </>
  );
};
export default ApiToken;
