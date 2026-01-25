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
    name: "AI/ML Frameworks",
    icon: "Brain",
    skills: [
      { name: "PyTorch", proficiency: "advanced" },
      { name: "TensorFlow", proficiency: "advanced" },
      { name: "Scikit-Learn", proficiency: "advanced" },
      { name: "Lightning AI", proficiency: "advanced" },
      { name: "Keras", proficiency: "intermediate" },
    ],
  },
  {
    name: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "Python", proficiency: "advanced" },
      { name: "C/C++", proficiency: "advanced" },
      { name: "Java", proficiency: "advanced" },
      { name: "SQL", proficiency: "intermediate" },
      { name: "Bash", proficiency: "intermediate" },
      { name: "NoSQL", proficiency: "beginner" },
    ],
  },
  {
    name: "AI/ML Specializations",
    icon: "Sparkles",
    skills: [
      { name: "Computer Vision", proficiency: "advanced" },
      { name: "3D Computer Vision", proficiency: "advanced" },
      { name: "Deep Learning", proficiency: "advanced" },
      { name: "CNNs / RNNs", proficiency: "advanced" },
      { name: "NLP", proficiency: "intermediate" },
    ],
  },
  {
    name: "Development Tools",
    icon: "Wrench",
    skills: [
      { name: "Git/GitHub", proficiency: "advanced" },
      { name: "Linux", proficiency: "advanced" },
      { name: "Anaconda", proficiency: "intermediate" },
      { name: "Streamlit", proficiency: "advanced" },
      { name: "Jupyter", proficiency: "advanced" },
    ],
  },
  {
    name: "Systems & Security",
    icon: "Shield",
    skills: [
      { name: "OS/Memory Forensics", proficiency: "intermediate" },
      { name: "Network Analysis", proficiency: "intermediate" },
      { name: "NTFS Artifacts", proficiency: "intermediate" },
      { name: "Linux Bash Workflows", proficiency: "advanced" },
    ],
  },
  {
    name: "Languages",
    icon: "Globe",
    skills: [
      { name: "English", proficiency: "Fluent", flag: "🇬🇧" },
      { name: "French", proficiency: "Fluent", flag: "🇫🇷" },
      { name: "Arabic", proficiency: "Native", flag: "🇲🇦" },
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
