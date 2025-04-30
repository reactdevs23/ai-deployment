import { Input, Text } from "@/components/common";
import classes from "./CreateDeploymentForm.module.css";
import { useState } from "react";
import { handleKeyDown } from "@/hooks";
import Dropdown from "../Dropdown/Dropdown";
import HardwareDropdown from "../HardwareDropdown/HardwareDropdown";
const allModels = [
  "sentiment-analyzer",
  "text-generator-gpt2",
  "vision-transformer",
  "fraud-detector",
];
const allVersions = [
  "v3.1.0",
  "v2.0.1",
  "v1.2.0",
  "v1.0.0",
  "v2.0.1",

  "v1.2.0",
  "v1.0.0",
];
const hardwareItems = [
  {
    name: "CPU",
    specification: "4x CPU, 16GB RAM",
    price: 0.0001,
  },
  {
    name: "Nvidia A100 (80GB) GPU",
    specification: "10x CPU, 80GB GPU, 144GB RAM",
    price: 0.0014,
  },
  {
    name: "2x Nvidia A100 (80GB) GPU",
    specification: "20x CPU, 160GB GPU, 288GB RAM",
    price: 0.0028,
  },
  {
    name: "4x Nvidia A100 (80GB) GPU",
    specification: "40x CPU, 320GB GPU, 576GB RAM",
    price: 0.0112,
  },
];
const CreateDeploymentForm = () => {
  const [deploymentName, setDeploymentName] = useState("");

  const [minimumInstances, setMinimumInstances] = useState("");
  const [MaximumInstances, setMaximumInstances] = useState("");

  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

  const [showVersionDropdown, setShowVersionDropdown] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState("");

  const [showHardwareDropdown, setShowHardwareDropdown] = useState(false);
  const [selectedHardware, setSelectedHardware] = useState("");
  return (
    <div className={classes.formContainer}>
      <div className={classes.inputWrapper}>
        <Text primitive600 medium lxs>
          Deployment name
        </Text>
        <Input
          name="deploymentName"
          value={deploymentName}
          setValue={setDeploymentName}
          placeholder="e.g. app-1-text-generator"
        />
        <Text xs primitive600 medium>
          Give your deployment a name—use lowercase letters and dashes to keep
          it code-friendly.
        </Text>
      </div>
      <Dropdown
        label="Model"
        placholder="Select a model"
        dropdownItems={allModels}
        isActive={showModelDropdown}
        setIsActive={setShowModelDropdown}
        selectedValue={selectedModel}
        setSelectedValue={setSelectedModel}
        onSelect={(val) => setSelectedModel(val)}
      />
      <Dropdown
        label="Version"
        placholder="Select a version"
        dropdownItems={allVersions}
        isActive={showVersionDropdown}
        setIsActive={setShowVersionDropdown}
        selectedValue={selectedVersion}
        setSelectedValue={setSelectedVersion}
        onSelect={(val) => setSelectedVersion(val)}
      />
      <HardwareDropdown
        label="Hardware"
        placholder="Select hardware"
        dropdownItems={hardwareItems}
        isActive={showHardwareDropdown}
        setIsActive={setShowHardwareDropdown}
        selectedValue={selectedHardware}
        setSelectedValue={setSelectedHardware}
        onSelect={(val) => setSelectedHardware(val)}
      />
      <div className={classes.inputWrapper}>
        <div className={classes.labelContainer}>
          <Text primitive600 medium lxs>
            Minimum Instances
          </Text>
          <Text primitive600 lxs>
            0 min / 0 min
          </Text>
        </div>
        <Input
          onKeyDown={handleKeyDown}
          type="number"
          name="minimamInstances"
          value={minimumInstances}
          setValue={setMinimumInstances}
          placeholder="0"
        />
        <Text xs primitive600 medium>
          Keep one or more instance running at all times to avoid cold boots.
        </Text>
      </div>
      <div className={classes.inputWrapper}>
        <div className={classes.labelContainer}>
          <Text primitive600 medium lxs>
            Maximum Instances
          </Text>
          <Text primitive600 lxs>
            0 min / 0 min
          </Text>
        </div>
        <Input
          onKeyDown={handleKeyDown}
          type="number"
          name="maximamInstances"
          value={MaximumInstances}
          setValue={setMaximumInstances}
          placeholder="1"
        />
        <Text xs primitive600 medium>
          Limit the number of concurrent predictions to run at once.{" "}
        </Text>
      </div>
    </div>
  );
};
export default CreateDeploymentForm;
