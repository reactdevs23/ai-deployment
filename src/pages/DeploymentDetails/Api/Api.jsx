import { Header } from "@/components/common";
import classes from "./Api.module.css";
import CopyWrapper from "@/components/common/CopyWrapper/CopyWrapper";
import CodeBlock from "./CodeBlock/CodeBlock";
import { maskToken } from "@/utils/utils";

const Api = () => {
  const endpointUrl = "api.domain.com/sentiment-analyzer";
  const platformName = "npm install platform-name";
  const apiToken = "abc_d19abc_d19abc_d19abc_d19abc_d19abc_d19";
  return (
    <div className={classes.wrapper}>
      <Header
        heading="API Access"
        description="Use this API endpoint to run predictions from your deployed model. You can integrate this into your app or use it directly during development."
      />
      <CopyWrapper
        medium
        primitive700
        label="End-point URL"
        textToCopy={endpointUrl}
      >
        {endpointUrl}
      </CopyWrapper>
      <CopyWrapper
        medium
        label="Install the Node.js client:"
        textToCopy={`npm install ${platformName}`}
      >
        $ npm install {platformName}
      </CopyWrapper>

      <CopyWrapper
        textToCopy={`PLARTFORM_API_TOKEN=${"abc_d19abc_d19abc_d19abc_d19abc_d19abc_d19"}`}
        label={
          <span>
            Next, <b className={classes.highlight}>copy your API token</b>and
            authenticate by setting it as an environment variable:
          </span>
        }
        notes="This is your default API_TOKEN. Keep it to yourself."
      >
        $ export {maskToken(apiToken).slice(0, 30)}
      </CopyWrapper>

      <CodeBlock />
    </div>
  );
};
export default Api;
