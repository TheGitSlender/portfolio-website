/**
 * Projects Data
 *
 * Contains all project entries for the Projects section and detail pages.
 * Featured projects appear first in the grid.
 *
 * Each project includes:
 * - id: URL-friendly unique identifier (used in /project/:id route)
 * - featured: Boolean to highlight on homepage
 * - title: Project name
 * - shortDescription: Brief summary for card display
 * - fullDescription: Detailed description for project page
 * - category: Project category/domain
 * - tags: Array of topic tags
 * - thumbnail: Card image path
 * - images: Array of image paths for gallery
 * - highlights: Array of key achievements
 * - metrics: Array of measurable results
 * - technologies: Array of tech used
 * - links: Object with github, demo, paper URLs
 * - impact: Brief impact statement
 * - date: Year or date range
 * - duration: Project duration (optional)
 */

export const projects = [
  {
    id: "nids-ml",
    featured: true,
    title: "ML-Powered Network Intrusion Detection System",
    shortDescription: "Advanced SIEM-integrated threat detection using ensemble ML models with 95%+ detection rate.",
    fullDescription: `Led a 4-person team to build a comprehensive network intrusion detection system that leverages machine learning for real-time threat identification. The system integrates with Wazuh SIEM for enterprise-grade security monitoring and alerting.

We conducted extensive research comparing multiple ML approaches including RandomForest, XGBoost, and DistilBERT on the CICIDS2017 dataset containing 2.8 million network traffic records. The final ensemble model achieves over 95% detection accuracy while maintaining low false positive rates.

A research paper documenting our methodology and findings is currently in progress with guidance from university professors.`,
    category: "Machine Learning & Security",
    tags: ["Machine Learning", "Cybersecurity", "Wazuh SIEM", "XGBoost", "RandomForest", "NLP"],
    thumbnail: "/assets/images/projects/nids-thumbnail.jpg",
    images: [
      "/assets/images/projects/nids-1.jpg",
      "/assets/images/projects/nids-2.jpg",
    ],
    highlights: [
      "Compared RandomForest, XGBoost, and DistilBERT models on CICIDS2017 dataset",
      "Integrated with Wazuh SIEM for real-time security monitoring",
      "Research paper in progress with university professors",
      "Led a team of 4 engineers through full development lifecycle",
    ],
    metrics: [
      { label: "Dataset Size", value: "2.8M records" },
      { label: "Models Compared", value: "3" },
      { label: "Detection Rate", value: "95%+" },
      { label: "Team Size", value: "4 members" },
    ],
    technologies: ["Python", "Scikit-Learn", "XGBoost", "Wazuh", "DistilBERT", "Pandas"],
    links: {
      github: null,
      demo: null,
      paper: null,
    },
    impact: "Enhanced security posture for network monitoring systems through intelligent threat detection",
    date: "2024",
    duration: "4 months",
  },
  {
    id: "3d-segmentation",
    featured: true,
    title: "3D Point Cloud Segmentation with Transformer",
    shortDescription: "Deep learning for indoor scene understanding using Superpoint Transformer architecture.",
    fullDescription: `Implemented state-of-the-art Superpoint Transformer architecture for semantic segmentation of 3D point clouds during my internship at 3D Smart Factory. The project focused on indoor scene understanding for industrial applications.

Trained on the Stanford 3D Indoor Scenes Dataset (S3DIS), processing over 30GB of point cloud data. Achieved 90% overall accuracy and 70% mean Intersection over Union (mIoU), demonstrating strong performance on complex indoor environments.

Built an interactive Streamlit application for real-time inference visualization, allowing users to upload point clouds and see segmentation results instantly. Integrated Weights & Biases for comprehensive experiment tracking across multiple training runs.`,
    category: "Computer Vision & Deep Learning",
    tags: ["Computer Vision", "3D AI", "PyTorch", "Transformers", "Point Clouds"],
    thumbnail: "/assets/images/projects/3d-seg-thumbnail.jpg",
    images: [
      "/assets/images/projects/3d-seg-1.jpg",
      "/assets/images/projects/3d-seg-2.jpg",
    ],
    highlights: [
      "Achieved 90% overall accuracy and 70% mean IoU on S3DIS dataset",
      "Processed 30GB+ of Stanford 3D Indoor Scenes Dataset",
      "Built real-time Streamlit demo application for inference",
      "Integrated Weights & Biases for experiment tracking",
    ],
    metrics: [
      { label: "Accuracy", value: "90%" },
      { label: "Mean IoU", value: "70%" },
      { label: "Dataset Size", value: "30GB+" },
      { label: "Training Time", value: "48 hours" },
    ],
    technologies: ["PyTorch", "Lightning AI", "Streamlit", "Weights & Biases", "Linux", "CUDA"],
    links: {
      github: null,
      demo: null,
      paper: null,
    },
    impact: "Advanced indoor scene understanding capabilities for industrial 3D scanning applications",
    date: "2024",
    duration: "3 months",
  },
  {
    id: "ctf-achievements",
    featured: true,
    title: "Competitive Cybersecurity (CTF)",
    shortDescription: "Top-tier performance in global security competitions with consistent top rankings.",
    fullDescription: `Consistent high performer in Capture The Flag (CTF) cybersecurity competitions, demonstrating strong problem-solving abilities and deep technical knowledge across multiple security domains.

Achieved top 3% worldwide ranking in HackTheBox Forensics CTF, showcasing expertise in digital forensics, memory analysis, and evidence recovery. Regularly place in top 10-15 nationally across various CTF platforms and competitions.

Notable achievement includes 2nd place in ECPC 2023 (ENSAM Casablanca Programming Contest) in the C Programming category, demonstrating strong algorithmic thinking and low-level programming skills.`,
    category: "Cybersecurity & Problem Solving",
    tags: ["CTF", "Cybersecurity", "Forensics", "Problem Solving", "Competition"],
    thumbnail: "/assets/images/projects/ctf-thumbnail.jpg",
    images: [
      "/assets/images/projects/ctf-1.jpg",
    ],
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
      { label: "ECPC 2023", value: "2nd Place" },
    ],
    technologies: ["Linux", "Wireshark", "Volatility", "C", "Bash", "Python"],
    links: {
      github: null,
      demo: null,
      paper: null,
    },
    impact: "Demonstrated advanced problem-solving and security analysis skills in competitive environments",
    date: "2023-2024",
    duration: "Ongoing",
  },
];

// Helper to get featured projects
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

// Helper to get project by ID
export const getProjectById = (id) => projects.find((p) => p.id === id);

export default projects;
