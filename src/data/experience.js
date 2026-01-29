/**
 * Work Experience Data
 *
 * Contains all professional experience entries for the Experience section.
 * Displayed as a timeline with connecting lines.
 */

// =============================================================================
// IMAGE MAPPINGS
// =============================================================================

/**
 * Experience image filenames by experience ID.
 * Actual imports happen in the component to keep data files clean.
 */
export const experienceImageMap = {
  'scale-ai': 'outlier_experience.webp',
  '3d-smart-factory': '3d_CV_experience.webp',
  'ai-club-president': 'president_experience.webp',
};

// =============================================================================
// EXPERIENCE DATA
// =============================================================================

export const experiences = [
  {
    id: 'scale-ai',
    role: 'AI Trainer',
    company: 'Outlier.ai - Alignerr',
    companyUrl: null,
    location: 'San Francisco, California (Remote)',
    period: {
      start: 'Oct 2024',
      end: 'Present',
    },
    current: true,
    description: `I design coding challenges that break AI models, then evaluate and fix their responses. Think of it as quality control for autonomous coding systems, finding edge cases, identifying logic flaws, and refactoring messy code into production-grade solutions across Python, C/C++, and Java.
The interesting part? Seeing exactly where state-of-the-art models struggle. That knowledge shapes how I architect my own ML systems.`,
    skills: ['Python', 'C/C++', 'Java', 'Debugging', 'AI Research'],
    type: 'work',
    image: 'outlier_experience.webp',
  },
  {
    id: '3d-smart-factory',
    role: 'Machine Learning Intern',
    company: '3D Smart Factory',
    companyUrl: null,
    location: 'Casablanca, Morocco',
    period: {
      start: 'Jul 2024',
      end: 'Sep 2024',
    },
    current: false,
    description: `Implemented Superpoint Transformer for 3D point cloud segmentation. Mainly training AI to understand indoor scenes from laser scans. Processed 30GB+ of Stanford's 3D dataset, achieved 90% accuracy and 70% mean IoU across 13 object classes. Built a real-time Streamlit demo where you upload a 3D scan and get instant segmentation results. The cool part was handling 3D data with transformer architectures to work efficiently on indoor factory environments.`,
    skills: ['PyTorch', 'Lightning AI', '3D Computer Vision', 'Streamlit', 'Weights & Biases', 'Linux'],
    type: 'work',
    image: '3d_CV_experience.webp',
  },
  {
    id: 'ai-club-president',
    role: 'President',
    company: 'AI Club - ENSAM Casablanca',
    companyUrl: null,
    location: 'Casablanca, Morocco',
    period: {
      start: 'Sep 2023',
      end: 'Jun 2025',
    },
    current: false,
    description: `
Leading 200+ students through hands-on ML workshops, Python, computer vision, NLP, deployment. Getting through the theory, while building actual projects.
Also coordinate team projects and run monthly technical sessions on everything from reinforcement learning to MLOps.`,
    skills: ['Leadership', 'Python', 'Machine Learning', 'Strategic Planning'],
    type: 'leadership',
    image: 'president_experience.webp',
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get current/active experiences
 */
export const getCurrentExperiences = () => experiences.filter((exp) => exp.current);

/**
 * Get experience by ID
 */
export const getExperienceById = (id) => experiences.find((exp) => exp.id === id);

/**
 * Get experiences by type
 */
export const getExperiencesByType = (type) => experiences.filter((exp) => exp.type === type);

export default experiences;
