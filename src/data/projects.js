// ... (previous imports if any)

export const projects = [
  {
    id: "wazuh-llm",
    featured: true,
    title: "ML-Powered Network Intrusion Detection",
    shortDescription: "Enterprise-grade security monitoring with automated threat analysis using LLMs on AWS Serverless.",
    fullDescription: `Can transformer models actually beat classical ML for cybersecurity? And more importantly, can you deploy them in production with acceptable latency?
    These were the questions we needed to answer. I personally led a 4-person team comparing RandomForest, XGBoost, and DistilBERT for detecting network attacks. I handled the transformer implementation and cloud deployment.`,
    architectureDescription: "Wazuh SIEM communicates with the stremalit app containing RandomForest and XGBoost, whilst DistilBERT was deployed on a simple AWS serverless architecture with API Gateway and Lambda function. Streamlit speaks to the LLM, Wazuh speaks to streamlit alone, ensuring transparency. ",
    category: "Cybersecurity & Cloud AI",
    tags: ["WAZUH", "SIEM", "LLM", "AWS", "Serverless", "Security Automation"],
    thumbnail: "/assets/images/projects/wazuh-thumbnail.jpg",
    images: [],
    highlights: [
      { title: "Integrated SIEM & AI", description: "Integrated Wazuh SIEM with DistilBERT and classical ML models for real-time threat interpretation" },
      { title: "Serverless Architecture", description: "Architected using AWS Lambda for a cheaper, fully serverless workflow" },
      { title: "Threat Analysis", description: "Reduced incident response time by providing natural language summaries of complex logs" },
      { title: "Automated Isolation", description: "Implemented automated isolation protocols for high-fidelity alerts" }
    ],
    techStack: [
      { label: "SIEM", value: "Wazuh" },
      { label: "AI MODEL", value: "DistilBERT" },
      { label: "CLOUD", value: "AWS Lambda" }
    ],
    metrics: [
      { label: "Response Time", value: "-60%" },
      { label: "Architecture", value: "Serverless" },
      { label: "Platform", value: "AWS" },
    ],
    technologies: ["Wazuh", "AWS Lambda", "PyTorch", "Python"],
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
    fullDescription: `Built a system that understands 3D indoor spaces from point cloud data (walls, floors, furniture, etc.). I used the Superpoint Transformer architecture, processed 30GB+ of data, hit 90% accuracy and 70% mean IoU. I then showcased the project in a real-time web app where you upload a scan and get instant segmentation.`,
    architectureDescription: `The challenge was making transformers work efficiently on millions of 3D points. Solution: hierarchical processing that groups points into "superpoints" before running expensive attention mechanisms.`,
    category: "Computer Vision & 3D AI",
    tags: ["3D AI", "Transformers", "Point Clouds", "PyTorch", "Computer Vision"],
    thumbnail: "/assets/images/projects/3d-seg-thumbnail.jpg",
    images: [],
    highlights: [
      { title: "Transformer Architecture", description: "Utilized Superpoint Transformer architecture for high-resolution semantic segmentation" },
      { title: "Large-Scale Processing", description: "Optimized for large-scale indoor and outdoor point cloud datasets" },
      { title: "Benchmark Excellence", description: "Achieved state-of-the-art performance on S3DIS and ScanNet benchmarks" },
      { title: "Real-time Visualization", description: "Integrated with a custom visualization engine for real-time spatial inspection" }
    ],
    techStack: [
      { label: "ARCHITECTURE", value: "Transformers" },
      { label: "FRAMEWORK", value: "PyTorch" },
      { label: "DATA", value: "Open3D" }
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
    shortDescription: "Top-tier performance in global security competitions with top rankings.",
    fullDescription: `Top 3% worldwide in HackTheBox Forensics CTF. Consistently top 10-15 nationally in various competitions. Mostly focused on digital forensics, analyzing memory dumps, disk images, network traffic to investigate simulated cyber crimes. Also reverse engineering, web exploitation, and Linux privilege escalation.`,
    architectureDescription: "Turns out thinking like an attacker makes you way better at building defensive AI systems. My intrusion detection work directly benefited from understanding how real attacks unfold.",
    category: "Cybersecurity & Problem Solving",
    tags: ["CTF", "Cybersecurity", "Forensics", "Problem Solving", "Competition"],
    thumbnail: "/assets/images/projects/ctf-thumbnail.jpg",
    images: [],
    highlights: [
      { title: "Global Ranking", description: "Top 3% worldwide in HackTheBox Forensics CTF" },
      { title: "National Excellence", description: "Top 10-15 national ranking in various competitions" },
      { title: "Programming Proficiency", description: "2nd Place in ECPC 2023 (C Programming)" },
      { title: "Forensics Depth", description: "Specialization in forensics and network analysis" },
    ],
    techStack: [
      { label: "OS", value: "Linux" },
      { label: "REVERSE", value: "Ghidra" },
      { label: "FORENSICS", value: "Volatility" }
    ],
    metrics: [
      { label: "Global Rank", value: "Top 3%" },
      { label: "National Rank", value: "Top 10-15" },
      { label: "Competitions", value: "10+" },
    ],
    technologies: ["Linux", "Ghidra", "Volatility", "C", "Bash", "Python"],
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

