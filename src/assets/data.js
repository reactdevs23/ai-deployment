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
const setupLogs = [
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Error",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Error",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Error",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Error",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Successful",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
  {
    date: "4 Apr 2025",
    deploymentId: "#1234567890",
    status: "Error",
    completedIn: "24 seconds",
    logs: [
      {
        time: "12:02:01",
        icon: "🚀",
        description: " Starting deployment for ",
        modelName: "sentiment-analyzer",
      },
      {
        time: "12:02:05",
        icon: "🏗️",
        description:
          "️️️ Allocating 1x GPU instance Allocating 1x GPU instance",
      },
      {
        time: "12:02:09",
        icon: "📦",
        description: " Pulling model artifact: v1.2.0",
      },
      {
        time: "12:02:13",
        icon: "🔍",
        description:
          "Validating model inputs and outputs Validating model inputs and outputs",
      },
      {
        time: "12:02:25",
        icon: "✅",
        description: "Model loaded successfully",
      },
      {
        time: "12:02:37",
        icon: "🔐",
        description: "Configuring secure API endpoint...",
      },
      {
        time: "12:02:50",
        icon: "🟢",
        description:
          "Deployment is live at https://api.domain.com/sentiment-analyzer",
      },
    ],
  },
];

export { generateImages, generateVideos, modlesSharedByCommunity, setupLogs };
