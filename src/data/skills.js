/**
 * Skills Data
 *
 * Contains all skills organized by category for the Skills section.
 * Each category contains an array of skills with proficiency levels.
 *
 * Proficiency levels:
 * - "beginner": Just started learning
 * - "intermediate": Comfortable using
 * - "advanced": Deep knowledge and experience
 * - "expert": Mastery level
 *
 * Icons are Lucide icon names or can be custom (handled in component).
 */

export const skillCategories = [
  {
    name: "AI/ML Frameworks & Libraries",
    icon: "Brain",
    skills: [
      { name: "PyTorch", proficiency: "advanced" },
      { name: "TensorFlow", proficiency: "intermediate" },
      { name: "Scikit-Learn", proficiency: "advanced" },
      { name: "Lightning AI", proficiency: "intermediate" },
      { name: "Keras", proficiency: "intermediate" },
      { name: "Hugging Face", proficiency: "intermediate" },
      { name: "OpenCV", proficiency: "advanced" },
      { name: "Pandas", proficiency: "advanced" },
      { name: "NumPy", proficiency: "advanced" },
    ],
  },
  {
    name: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "Python", proficiency: "advanced" },
      { name: "C/C++", proficiency: "intermediate" },
      { name: "Java", proficiency: "intermediate" },
      { name: "SQL", proficiency: "intermediate" },
      { name: "Bash", proficiency: "intermediate" },
      { name: "JavaScript", proficiency: "intermediate" },
    ],
  },
  {
    name: "AI/ML Specializations",
    icon: "Sparkles",
    skills: [
      { name: "Computer Vision", proficiency: "advanced" },
      { name: "3D Computer Vision", proficiency: "intermediate" },
      { name: "Deep Learning", proficiency: "advanced" },
      { name: "CNNs / RNNs", proficiency: "advanced" },
      { name: "Transformers", proficiency: "intermediate" },
      { name: "NLP", proficiency: "intermediate" },
      { name: "Reinforcement Learning", proficiency: "intermediate" },
      { name: "Point Cloud Processing", proficiency: "intermediate" },
    ],
  },
  {
    name: "Development Tools",
    icon: "Wrench",
    skills: [
      { name: "Git/GitHub", proficiency: "advanced" },
      { name: "Linux", proficiency: "advanced" },
      { name: "Jupyter", proficiency: "advanced" },
      { name: "VS Code", proficiency: "advanced" },
      { name: "Streamlit", proficiency: "intermediate" },
      { name: "Weights & Biases", proficiency: "intermediate" },
      { name: "Docker", proficiency: "intermediate" },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: "Cloud",
    skills: [
      { name: "AWS", proficiency: "intermediate" },
      { name: "Google Cloud", proficiency: "beginner" },
      { name: "Docker", proficiency: "intermediate" },
      { name: "CUDA", proficiency: "intermediate" },
    ],
  },
  {
    name: "Cybersecurity",
    icon: "Shield",
    skills: [
      { name: "Network Security", proficiency: "intermediate" },
      { name: "Digital Forensics", proficiency: "advanced" },
      { name: "Wazuh SIEM", proficiency: "intermediate" },
      { name: "Wireshark", proficiency: "advanced" },
      { name: "CTF Competitions", proficiency: "advanced" },
    ],
  },
  {
    name: "Languages",
    icon: "Globe",
    skills: [
      { name: "English", proficiency: "fluent", flag: "🇬🇧" },
      { name: "French", proficiency: "fluent", flag: "🇫🇷" },
      { name: "Arabic", proficiency: "native", flag: "🇲🇦" },
    ],
  },
];

// Helper to get all skills as flat array
export const getAllSkills = () => {
  return skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      category: category.name,
    }))
  );
};

// Helper to get skills by proficiency
export const getSkillsByProficiency = (level) => {
  return getAllSkills().filter((skill) => skill.proficiency === level);
};

export default skillCategories;
