/**
 * Work Experience Data
 *
 * Contains all professional experience entries for the Experience section.
 * Displayed as a timeline with connecting lines.
 *
 * Each experience includes:
 * - id: Unique identifier
 * - role: Job title
 * - company: Company name
 * - companyUrl: Link to company website (optional)
 * - location: Work location
 * - period: Start and end dates
 * - current: Boolean for current position
 * - description: Array of bullet points
 * - skills: Array of relevant skills/technologies
 * - type: "work", "leadership", or "education"
 */

export const experiences = [
  {
    id: "scale-ai",
    role: "AI Trainer",
    company: "Outlier.ai - Alignerr",
    location: "San Francisco, California (Remote)",
    period: {
      start: "Oct 2024",
      end: "Present",
    },
    current: true,
    description: `I design coding challenges that break AI models, then evaluate and fix their responses. Think of it as quality control for autonomous coding systems, finding edge cases, identifying logic flaws, and refactoring messy code into production-grade solutions across Python, C/C++, and Java.
The interesting part? Seeing exactly where state-of-the-art models struggle. That knowledge shapes how I architect my own ML systems.`,
    skills: ["Python", "C/C++", "Java", "Debugging", "AI Research"],
    type: "work",
  },
  {
    id: "3d-smart-factory",
    role: "Machine Learning Intern",
    company: "3D Smart Factory",
    companyUrl: null,
    location: "Casablanca, Morocco",
    period: {
      start: "Jul 2024",
      end: "Sep 2024",
    },
    current: false,
    description: `Implemented Superpoint Transformer for 3D point cloud segmentation. Mainly training AI to understand indoor scenes from laser scans.
Processed 30GB+ of Stanford's 3D dataset, achieved 90% accuracy and 70% mean IoU across 13 object classes. Built a real-time Streamlit demo where you upload a 3D scan and get instant segmentation results.
The cool part was handling 3D data with transformer architectures to work efficiently on indoor factory environments.
`,
    skills: ["PyTorch", "Lightning AI", "3D Computer Vision", "Streamlit", "Weights & Biases", "Linux"],
    type: "work",
  },
  {
    id: "ai-club-president",
    role: "President",
    company: "AI Club - ENSAM Casablanca",
    companyUrl: null,
    location: "Casablanca, Morocco",
    period: {
      start: "Sep 2023",
      end: "Jun 2025",
    },
    description: `
Leading 200+ students through hands-on ML workshops, Python, computer vision, NLP, deployment. Getting through the theory, while building actual projects.
Also coordinate team projects and run monthly technical sessions on everything from reinforcement learning to MLOps.`,
    skills: ["Leadership", "Python", "Machine Learning", "Strategic Planning"],
  },
];

export default experiences;
