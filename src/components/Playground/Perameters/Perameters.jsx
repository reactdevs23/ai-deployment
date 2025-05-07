import {
  Heading,
  Input,
  InputRangeSlider,
  Line,
  Text,
} from "@/components/common";
import classes from "./Perameters.module.css";
import { useEffect, useState } from "react";
import { llamaLogo } from "@/images";
import ModelDropdown from "./ModelDropdown/ModelDropdown";
import Switch from "@/components/common/Switch/Switch";
import MaxToken from "./MaxToken/MaxToken";
import clsx from "clsx";
import { MdClose } from "react-icons/md";
import { getLocalStorage, setLocalStorage } from "@/utils/utils";

const models = [
  { logo: llamaLogo, name: "llama", platform: "platform / llama-7b" },
  { logo: llamaLogo, name: "llama", platform: "platform / llama-7b" },
  { logo: llamaLogo, name: "llama", platform: "platform / llama-7b" },
  { logo: llamaLogo, name: "llama", platform: "platform / llama-7b" },
];

const Perameters = ({ sidebar, setSidebar }) => {
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [selectedModel, setSelectedModel] = useState(() =>
    getLocalStorage("selectedModel", models[0])
  );
  const [temperature, setTemperature] = useState(() =>
    getLocalStorage("temperature", 0)
  );
  const [maxToken, setMaxToken] = useState(() =>
    getLocalStorage("maxToken", 0)
  );
  const [stream, setStream] = useState(() => getLocalStorage("stream", true));
  const [jsonMode, setJsonMode] = useState(() =>
    getLocalStorage("jsonMode", false)
  );
  const [moderation, setModeration] = useState(() =>
    getLocalStorage("moderation", false)
  );
  const [topP, setTopP] = useState(() => getLocalStorage("topP", 0));
  const [seed, setSeed] = useState(() => getLocalStorage("seed", ""));
  const [stopSequence, setStopSequence] = useState(() =>
    getLocalStorage("stopSequence", "")
  );

  // Persist values on change
  useEffect(() => setLocalStorage("temperature", temperature), [temperature]);
  useEffect(() => setLocalStorage("maxToken", maxToken), [maxToken]);
  useEffect(() => setLocalStorage("stream", stream), [stream]);
  useEffect(() => setLocalStorage("jsonMode", jsonMode), [jsonMode]);
  useEffect(() => setLocalStorage("moderation", moderation), [moderation]);
  useEffect(() => setLocalStorage("topP", topP), [topP]);
  useEffect(() => setLocalStorage("seed", seed), [seed]);
  useEffect(
    () => setLocalStorage("stopSequence", stopSequence),
    [stopSequence]
  );
  useEffect(
    () => setLocalStorage("selectedModel", selectedModel),
    [selectedModel]
  );

  useEffect(() => {
    if (window.innerWidth >= 1200) {
      setSidebar(true);
    }
  }, [setSidebar]);

  return (
    <>
      <aside
        className={clsx(
          classes.wrapper,
          sidebar && classes.showSidebar,
          !sidebar && classes.hideSidebar
        )}
      >
        <div className={classes.header}>
          <Heading base primitive800 medium>
            Perameters
          </Heading>
          <button
            className={classes.closeButton}
            onClick={() => setSidebar(false)}
          >
            <Text lxs primitive400 medium>
              Close
            </Text>
          </button>
        </div>

        <Line />

        <ModelDropdown
          label="Models"
          className={classes.dropdown}
          dropdownItems={models}
          isActive={showModelDropdown}
          setIsActive={setShowModelDropdown}
          selectedValue={selectedModel}
          setSelectedValue={setSelectedModel}
          onSelect={(val) => setSelectedModel(val)}
        />

        <Line />

        <div className={classes.configure}>
          <Text primitive900 sm medium>
            Configure
          </Text>

          <InputRangeSlider
            label="Temperature"
            value={temperature}
            setValue={setTemperature}
            min={-1}
            max={1}
          />

          <MaxToken
            label="Max. Tokens"
            value={maxToken}
            setValue={setMaxToken}
            maxValue={1024}
          />

          <Switch label="Stream" isChecked={stream} setIsChecked={setStream} />
          <Switch
            label="JSON Mode"
            isChecked={jsonMode}
            setIsChecked={setJsonMode}
          />
        </div>

        <Line />

        <div className={classes.advance}>
          <Text primitive900 sm medium>
            Advance
          </Text>

          <Switch
            label="Moderation: llamaguard"
            isChecked={moderation}
            setIsChecked={setModeration}
          />

          <InputRangeSlider
            label="Top-P"
            value={topP}
            setValue={setTopP}
            min={-1}
            max={1}
          />

          <div className={classes.spaeBetween}>
            <Text primitive800 sm>
              Seed
            </Text>
            <Input
              type="number"
              wrapperClassName={classes.seedInput}
              value={seed}
              setValue={setSeed}
            />
          </div>

          <Input
            type="number"
            wrapperClassName={classes.input}
            label="Stop sequence"
            value={stopSequence}
            setValue={setStopSequence}
          />
        </div>
      </aside>

      <div
        className={clsx(classes.overlay, sidebar && classes.active)}
        onClick={() => setSidebar(false)}
      >
        <button className={classes.closeIcon}>
          <MdClose />
        </button>
      </div>
    </>
  );
};

export default Perameters;
