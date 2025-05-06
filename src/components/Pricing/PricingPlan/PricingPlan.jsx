import { Heading } from "@/components/common";
import AdditonalHardwareTable from "./AdditonalHardwareTable/AdditonalHardwareTable";
import HardwareTable from "./HardwareTable/HardwareTable";
import classes from "./PricingPlan.module.css";
const hardwareData = [
  {
    hardware: { name: "CPU", model: "cpu" },
    price: {
      persec: "$0.000100/sec",
      perhour: "$0.36/hr",
    },
    gpu: "",
    cpu: "4x",
    gpuvsram: "",
    ram: "8GB",
  },
  {
    hardware: { name: "Nvidia L40S GPU", model: "gpu-l40s" },
    price: {
      persec: "$0.000975/sec",
      perhour: "$3.51/hr",
    },
    gpu: "1x",
    cpu: "10x",
    gpuvsram: "48GB",
    ram: "65GB",
  },
  {
    hardware: { name: "Nvidia T4 GPU  ", model: "gpu-t4" },
    price: {
      persec: "$0.000225/sec",
      perhour: "$0.81/hr",
    },
    gpu: "1x",
    cpu: "4x",
    gpuvsram: "16GB",
    ram: "16GB",
  },
];
const additonalHardwareData = [
  {
    hardware: { name: "Nvidia H100 GPU", model: "gpu-h100" },
    price: {
      persec: "$0.001525/sec",
      perhour: "$5.49/hr",
    },
    description:
      "Flux fine-tunes on H100s, with extra capacity reserved for committed contracts.",
  },
  {
    hardware: { name: "Nvidia A100 GPU", model: "gpu-a100" },
    price: {
      persec: "$0.001075/sec",
      perhour: "$3.87/hr",
    },
    description:
      "Used for fine-tuning on larger datasets, available in limited capacity.",
  },
  {
    hardware: { name: "Nvidia A10 GPU", model: "gpu-a10" },
    price: {
      persec: "$0.00035/sec",
      perhour: "$1.26/hr",
    },
    description: "Commonly used for training small-to-medium models.",
  },
  {
    hardware: { name: "Nvidia A40 GPU", model: "gpu-a40" },
    price: {
      persec: "$0.00045/sec",
      perhour: "$1.62/hr",
    },
    description: "Good for both training and inference workloads.",
  },
];

const PricingPlan = ({ ...rest }) => {
  return (
    <div {...rest} className={classes.wrapper}>
      <Heading lxl blue500 regular>
        # Pricing Plan
      </Heading>
      <HardwareTable data={hardwareData} />
      <AdditonalHardwareTable data={additonalHardwareData} />
    </div>
  );
};
export default PricingPlan;
