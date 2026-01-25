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
    description: [
      "Design and evaluate complex coding challenges in Python, C/C++, and Java to assess AI model capabilities and identify failure modes",
      "Analyze and rate AI-generated code solutions, providing detailed feedback on logic flaws, edge cases, and optimization opportunities",
      "Debug and refactor AI-generated code to production-quality standards, contributing to model training data improvement",
      "Collaborate with AI research teams to enhance autonomous code generation systems through iterative feedback and quality assessment",
    ],
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
    description: [
      "Implemented and trained Superpoint Transformer for 3D point cloud segmentation using PyTorch and Lightning AI on Linux",
      "Preprocessed 30GB+ of 3D point cloud data from Stanford 3D Indoor Scenes Dataset, optimizing data pipeline for training efficiency",
      "Achieved 90% overall accuracy and 70% mean IoU in 3D indoor scene segmentation, exceeding baseline performance",
      "Developed and deployed a real-time web application using Streamlit, enabling interactive 3D segmentation model demonstration",
      "Integrated comprehensive experiment tracking with Weights & Biases for performance monitoring and model optimization",
    ],
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
    description: [
      "Lead Python and Machine Learning workshops for 200+ technology enthusiasts, fostering technical skill development",
      "Managed cross-functional teams developing projects in classical ML, computer vision, and Python development",
      "Developed proof-of-concept for AI-powered autonomous drone system for industrial inspection applications",
    ],
    skills: ["Leadership", "Python", "Machine Learning", "Strategic Planning"],
  },
];

export default experiences;
