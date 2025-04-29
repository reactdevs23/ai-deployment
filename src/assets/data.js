import { lumaImg, nvidiaImg, idogramAiImg, recraftAiImg } from "@/images";

const generateImages = [
  {
    img: recraftAiImg,
    name: "recraft-ai / recraft-v3-svg",
    info: "Recraft V3 SVG (code-named red_panda) is a text-to-image model with the ability to generate high quality SVG images including logotypes, and icons. The model supports a wide list of styles.",
    run: "123k",
  },

  {
    img: nvidiaImg,
    name: "nvidia / sana",
    info: "A fast image model with wide artistic range and resolutions up to 4096x4096",
    run: "123k",
  },
  {
    img: idogramAiImg,
    name: "ideogram-ai / ideogram-v2",
    info: "An excellent image model with state of the art inpainting, prompt comprehension and text rendering",
    run: "123k",
  },
  {
    img: nvidiaImg,
    name: "Luma / photon",
    info: "High-quality image generation model optimized for creative professional workflows and ultra-high fidelity outputs",
    run: "123k",
  },
];
const generateVideos = [
  {
    img: nvidiaImg,
    name: "nvidia / sana",
    info: "A fast image model with wide artistic range and resolutions up to 4096x4096",
    run: "123k",
  },
  {
    img: recraftAiImg,
    name: "recraft-ai / recraft-v3-svg",
    info: "Recraft V3 SVG (code-named red_panda) is a text-to-image model with the ability to generate high quality SVG images including logotypes, and icons. The model supports a wide list of styles.",
    run: "123k",
  },
  {
    img: idogramAiImg,
    name: "ideogram-ai / ideogram-v2",
    info: "An excellent image model with state of the art inpainting, prompt comprehension and text rendering",
    run: "123k",
  },
  {
    img: nvidiaImg,
    name: "Luma / photon",
    info: "High-quality image generation model optimized for creative professional workflows and ultra-high fidelity outputs",
    run: "123k",
  },
];
const modlesSharedByCommunity = [
  {
    name: "nvidia / sana",
    info: "A fast image model with wide artistic range and resolutions up to 4096x4096",
    run: "123M",
  },
  {
    name: "recraft-ai / recraft-v3-svg",
    info: "Recraft V3 SVG (code-named red_panda) is a text-to-image model with the ability to generate high quality SVG images including logotypes, and icons. The model supports a wide list of styles.",
    run: "123M",
  },
  {
    name: "ideogram-ai / ideogram-v2",
    info: "An excellent image model with state of the art inpainting, prompt comprehension and text rendering",
    run: "123M",
  },
  {
    name: "Luma / photon",
    info: "High-quality image generation model optimized for creative professional workflows and ultra-high fidelity outputs",
    run: "123M",
  },
  {
    name: "nvidia / sana",
    info: "A fast image model with wide artistic range and resolutions up to 4096x4096",
    run: "123M",
  },
  {
    name: "recraft-ai / recraft-v3-svg",
    info: "Recraft V3 SVG (code-named red_panda) is a text-to-image model with the ability to generate high quality SVG images including logotypes, and icons. The model supports a wide list of styles.",
    run: "123M",
  },
  {
    name: "ideogram-ai / ideogram-v2",
    info: "An excellent image model with state of the art inpainting, prompt comprehension and text rendering",
    run: "123M",
  },
  {
    name: "Luma / photon",
    info: "High-quality image generation model optimized for creative professional workflows and ultra-high fidelity outputs",
    run: "123M",
  },
];
const deploymentData = [
  {
    title: "Create Deployment",
    description:
      "Start by uploading your model or selecting one from your existing models. Customize the deployment with:",
    points: [
      "A unique name",
      "Preferred hardware (CPU, GPU, etc.)",
      "Scaling rules (autoscale, always-on, or scale to zero)",
    ],
    note: "Once set, click Deploy — and your model will be live on a private, production-ready API.",
  },
  {
    title: "Run Models",
    description:
      "Start by uploading your model or selecting one from your existing models. Customize the deployment with:",
    points: [
      "A unique name",
      "Preferred hardware (CPU, GPU, etc.)",
      "Scaling rules (autoscale, always-on, or scale to zero)",
    ],
    note: "Once set, click Deploy — and your model will be live on a private, production-ready API.",
  },
  {
    title: "Test with Playground",
    description:
      "Try out your deployment instantly in our interactive Playground — no code required.",
    paragraphs: [
      "Enter sample inputs, view prediction outputs, and debug on the spot before going live.",
      "Perfect for testing, demos, or team collaboration.",
    ],
  },
];

export { generateImages, generateVideos, modlesSharedByCommunity };
