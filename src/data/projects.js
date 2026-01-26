// ... (previous imports if any)

export const projects = [
  {
    id: "wazuh-llm",
    featured: true,
    title: "WAZUH SIEM with LLM Integration",
    shortDescription: "Enterprise-grade security monitoring with automated threat analysis using LLMs on AWS Serverless.",
    fullDescription: "Built a robust WAZUH SIEM implementation integrated with Large Language Models for automated security analysis. The architecture leverages AWS Serverless components to ensure scalability and cost-efficiency while providing deep insights into security events.",
    category: "Cybersecurity & Cloud AI",
    tags: ["WAZUH", "SIEM", "LLM", "AWS", "Serverless", "Security Automation"],
    thumbnail: "/assets/images/projects/wazuh-thumbnail.jpg",
    images: [],
    highlights: [
      "Integrated Wazuh SIEM with OpenAI/Anthropic LLMs for real-time threat interpretation",
      "Architected using AWS Lambda, SQS, and Bedrock for a fully serverless workflow",
      "Reduced incident response time by providing natural language summaries of complex logs",
      "Implemented automated isolation protocols for high-fidelity alerts"
    ],
    metrics: [
      { label: "Response Time", value: "-60%" },
      { label: "Architecture", value: "Serverless" },
      { label: "Platform", value: "AWS" },
    ],
    technologies: ["Wazuh", "AWS Lambda", "Bedrock", "Python", "Terraform", "SQS"],
    links: {
      github: null,
      demo: null,
    },
    impact: "Revolutionized security operations by bridging the gap between raw telemetry and actionable intelligence.",
    date: "2024",
    duration: "4 months",
  },
  {
    id: "3d-segmentator",
    featured: true,
    title: "3D Scene Segmentator",
    shortDescription: "Advanced semantic segmentation for complex 3D environments using Transformer architectures.",
    fullDescription: "Developed a state-of-the-art 3D scene segmentation system designed for industrial and architectural applications. The model effectively categorizes complex point cloud data into meaningful semantic layers, enabling automated spatial analysis.",
    category: "Computer Vision & 3D AI",
    tags: ["3D AI", "Transformers", "Point Clouds", "PyTorch", "Computer Vision"],
    thumbnail: "/assets/images/projects/3d-seg-thumbnail.jpg",
    images: [],
    highlights: [
      "Utilized Superpoint Transformer architecture for high-resolution semantic segmentation",
      "Optimized for large-scale indoor and outdoor point cloud datasets",
      "Achieved state-of-the-art performance on S3DIS and ScanNet benchmarks",
      "Integrated with a custom visualization engine for real-time spatial inspection"
    ],
    metrics: [
      { label: "Mean IoU", value: "72.4%" },
      { label: "Inference", value: "Real-time" },
      { label: "Backend", value: "PyTorch" },
    ],
    technologies: ["PyTorch", "CUDA", "Open3D", "Lightning AI", "Transformers"],
    links: {
      github: null,
      demo: null,
    },
    impact: "Provided a powerful tool for automated digital twinning and architectural documentation.",
    date: "2024",
    duration: "3 months",
  },
  {
    id: "ctf-achievements",
    featured: true,
    title: "Competitive Cybersecurity (CTF)",
    shortDescription: "Top-tier performance in global security competitions with consistent top rankings.",
    fullDescription: "Consistent high performer in Capture The Flag (CTF) cybersecurity competitions, demonstrating strong problem-solving abilities and deep technical knowledge across multiple security domains. Achieved top 3% worldwide ranking in HackTheBox Forensics CTF.",
    category: "Cybersecurity & Problem Solving",
    tags: ["CTF", "Cybersecurity", "Forensics", "Problem Solving", "Competition"],
    thumbnail: "/assets/images/projects/ctf-thumbnail.jpg",
    images: [],
    highlights: [
      "Top 3% worldwide in HackTheBox Forensics CTF",
      "Top 10-15 national ranking in various competitions",
      "2nd Place in ECPC 2023 (C Programming)",
      "Specialization in forensics and network analysis",
    ],
    metrics: [
      { label: "Global Rank", value: "Top 3%" },
      { label: "National Rank", value: "Top 10-15" },
      { label: "Competitions", value: "10+" },
    ],
    technologies: ["Linux", "Wireshark", "Volatility", "C", "Bash", "Python"],
    links: {
      github: null,
      demo: null,
    },
    impact: "Demonstrated advanced problem-solving and security analysis skills in competitive environments.",
    date: "2023-2024",
    duration: "Ongoing",
  },
];


// Helper to get featured projects
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

// Helper to get project by ID
export const getProjectById = (id) => projects.find((p) => p.id === id);

// Helper to get next project ID for navigation
export const getNextProjectId = (currentId) => {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex].id;
};

export default projects;

