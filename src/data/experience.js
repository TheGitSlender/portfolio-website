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
    company: "Scale AI (Outlier.ai)",
    companyUrl: "https://scale.com",
    location: "San Francisco, California (Remote)",
    period: {
      start: "Oct 2024",
      end: "Present",
    },
    current: true,
    description: [
      "Design and evaluate complex coding challenges to train and improve AI models",
      "Analyze and rate AI-generated code solutions for correctness, efficiency, and best practices",
      "Debug and refactor AI code outputs to meet production-quality standards",
      "Collaborate with AI research teams to enhance model performance through high-quality training data",
    ],
    skills: ["Python", "C/C++", "Java", "Code Review", "AI Training Data"],
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
      "Implemented and trained Superpoint Transformer for 3D point cloud segmentation",
      "Achieved 90% overall accuracy and 70% mean IoU on Stanford 3D Indoor Scenes Dataset",
      "Processed and managed 30GB+ of point cloud data for model training",
      "Built real-time Streamlit demo application for model inference visualization",
      "Integrated Weights & Biases for comprehensive experiment tracking and analysis",
    ],
    skills: ["PyTorch", "Lightning AI", "3D Computer Vision", "Streamlit", "W&B", "Linux"],
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
      end: "Present",
    },
    current: true,
    description: [
      "Lead a community of 200+ members passionate about artificial intelligence",
      "Organize workshops, hackathons, and hands-on AI/ML training sessions",
      "Mentor students on AI projects and career development in tech",
      "Coordinate with industry partners for guest lectures and collaboration opportunities",
    ],
    skills: ["Leadership", "Public Speaking", "Event Organization", "Mentoring", "AI/ML"],
    type: "leadership",
  },
];

export default experiences;
