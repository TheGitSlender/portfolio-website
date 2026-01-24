/**
 * Certifications & Awards Data
 *
 * Contains all certifications, courses, and awards.
 * Displayed in a grid with visual distinction between types.
 *
 * Each entry includes:
 * - id: Unique identifier
 * - type: "certification" or "award"
 * - title: Certificate/award name
 * - issuer: Issuing organization
 * - date: Completion date or year
 * - status: "completed" or "in-progress"
 * - description: Brief description
 * - credentialUrl: Link to verify (optional)
 * - skills: Related skills (optional)
 */

export const certifications = [
  {
    id: "ibm-ai-engineering",
    type: "certification",
    title: "IBM AI Engineering Professional Certificate",
    issuer: "IBM / Coursera",
    date: "2024",
    status: "completed",
    description: "Comprehensive certification covering Deep Learning fundamentals, Computer Vision, and AI model deployment.",
    credentialUrl: null,
    skills: ["Deep Learning", "Computer Vision", "TensorFlow", "Keras"],
  },
  {
    id: "deep-learning-specialization",
    type: "certification",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    date: "2024",
    status: "completed",
    description: "5-course specialization covering neural networks, CNNs, RNNs, and optimization techniques by Andrew Ng.",
    credentialUrl: null,
    skills: ["Neural Networks", "CNNs", "RNNs", "Optimization"],
  },
  {
    id: "rl-specialization",
    type: "certification",
    title: "Reinforcement Learning Specialization",
    issuer: "University of Alberta / Coursera",
    date: "In Progress",
    status: "in-progress",
    description: "Foundational RL concepts including multi-armed bandits, dynamic programming, and temporal difference learning.",
    credentialUrl: null,
    skills: ["Reinforcement Learning", "Dynamic Programming", "Policy Gradient"],
  },
  {
    id: "gcp-ml",
    type: "certification",
    title: "Advanced Machine Learning on Google Cloud",
    issuer: "Google Cloud",
    date: "In Progress",
    status: "in-progress",
    description: "Production ML systems on Google Cloud Platform including MLOps and model serving.",
    credentialUrl: null,
    skills: ["GCP", "MLOps", "Model Deployment"],
  },
  {
    id: "mckinsey-forward",
    type: "certification",
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    date: "January 2026",
    status: "completed",
    description: "Structured problem-solving, communication, and digital fluency training from McKinsey.",
    credentialUrl: null,
    skills: ["Problem Solving", "Communication", "Digital Fluency"],
  },
  {
    id: "ecpc-2023",
    type: "award",
    title: "ECPC 2023 - 2nd Place",
    issuer: "ENSAM Casablanca",
    date: "2023",
    status: "completed",
    description: "2nd place in ENSAM Casablanca Programming Contest - C Programming category.",
    credentialUrl: null,
    skills: ["C Programming", "Algorithms", "Problem Solving"],
  },
  {
    id: "htb-forensics",
    type: "award",
    title: "HTB Forensics CTF - Top 3% Worldwide",
    issuer: "HackTheBox",
    date: "2024",
    status: "completed",
    description: "Achieved top 3% worldwide ranking in HackTheBox Forensics CTF competition.",
    credentialUrl: null,
    skills: ["Digital Forensics", "CTF", "Security Analysis"],
  },
];

// Helper to get certifications only
export const getCertificationsOnly = () =>
  certifications.filter((c) => c.type === "certification");

// Helper to get awards only
export const getAwardsOnly = () =>
  certifications.filter((c) => c.type === "award");

// Helper to get in-progress items
export const getInProgress = () =>
  certifications.filter((c) => c.status === "in-progress");

export default certifications;
