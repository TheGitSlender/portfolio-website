/**
 * Skills Data
 *
 * Contains all skills organized by category for the Skills section.
 * Includes both detailed skill categories and domain-level groupings.
 */

// =============================================================================
// SKILL CATEGORIES (Detailed breakdown)
// =============================================================================

export const skillCategories = [
  {
    name: 'AI/ML Frameworks',
    icon: 'Brain',
    skills: [
      { name: 'PyTorch', proficiency: 'advanced' },
      { name: 'TensorFlow', proficiency: 'advanced' },
      { name: 'Scikit-Learn', proficiency: 'advanced' },
      { name: 'LangGraph', proficiency: 'advanced' },
      { name: 'LangChain', proficiency: 'advanced' },
      { name: 'Flower (Federated Learning)', proficiency: 'intermediate' },
      { name: 'Lightning AI', proficiency: 'advanced' },
      { name: 'Keras', proficiency: 'intermediate' },
    ],
  },
  {
    name: 'Programming Languages',
    icon: 'Code',
    skills: [
      { name: 'Python', proficiency: 'advanced' },
      { name: 'C/C++', proficiency: 'advanced' },
      { name: 'Java', proficiency: 'advanced' },
      { name: 'SQL', proficiency: 'intermediate' },
      { name: 'Bash', proficiency: 'intermediate' },
      { name: 'NoSQL', proficiency: 'beginner' },
    ],
  },
  {
    name: 'AI/ML Specializations',
    icon: 'Sparkles',
    skills: [
      { name: 'Computer Vision', proficiency: 'advanced' },
      { name: '3D Computer Vision', proficiency: 'advanced' },
      { name: 'Deep Learning', proficiency: 'advanced' },
      { name: 'CNNs / RNNs', proficiency: 'advanced' },
      { name: 'NLP', proficiency: 'intermediate' },
      { name: 'Federated Learning', proficiency: 'advanced' },
      { name: 'Multi-Agent Systems', proficiency: 'advanced' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', proficiency: 'advanced' },
      { name: 'Kubernetes', proficiency: 'intermediate' },
      { name: 'Docker', proficiency: 'advanced' },
      { name: 'Terraform', proficiency: 'intermediate' },
      { name: 'ArgoCD', proficiency: 'intermediate' },
    ],
  },
  {
    name: 'Development Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git/GitHub', proficiency: 'advanced' },
      { name: 'Linux', proficiency: 'advanced' },
      { name: 'Anaconda', proficiency: 'intermediate' },
      { name: 'Streamlit', proficiency: 'advanced' },
      { name: 'Jupyter', proficiency: 'advanced' },
    ],
  },
  {
    name: 'Systems & Security',
    icon: 'Shield',
    skills: [
      { name: 'OS/Memory Forensics', proficiency: 'intermediate' },
      { name: 'Network Analysis', proficiency: 'intermediate' },
      { name: 'NTFS Artifacts', proficiency: 'intermediate' },
      { name: 'Linux Bash Workflows', proficiency: 'advanced' },
      { name: 'Prompt Injection Hardening', proficiency: 'intermediate' },
    ],
  },
  {
    name: 'Languages',
    icon: 'Globe',
    skills: [
      { name: 'English', proficiency: 'Fluent', flag: '🇬🇧' },
      { name: 'French', proficiency: 'Fluent', flag: '🇫🇷' },
      { name: 'Arabic', proficiency: 'Native', flag: '🇲🇦' },
    ],
  },
];

// =============================================================================
// SKILL DOMAINS (For accordion display)
// =============================================================================

/**
 * High-level skill domains with architecture and tools breakdown.
 * Used by the DomainAccordion component in the Skills section.
 */
export const skillDomains = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: 'Brain',
    architecture: [
      'Transformer Models & LLMs',
      'Multi-Agent Orchestration',
      'Federated Learning',
      'Computer Vision Pipelines',
      'Natural Language Processing',
      'Reinforcement Learning',
    ],
    tools: [
      { name: 'PyTorch', icon: 'Cpu' },
      { name: 'TensorFlow', icon: 'Zap' },
      { name: 'HuggingFace', icon: 'Globe' },
      { name: 'LangGraph', icon: 'Code' },
      { name: 'LangChain', icon: 'Code' },
      { name: 'Flower', icon: 'Database' },
      { name: 'Lightning AI', icon: 'Zap' },
      { name: 'Pinecone', icon: 'Database' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Architectures',
    icon: 'Cloud',
    architecture: [
      'Container Orchestration',
      'Distributed Systems',
      'Multi-Cloud Strategy',
      'Serverless Computing',
      'GitOps Workflows',
    ],
    tools: [
      { name: 'AWS', icon: 'Cloud' },
      { name: 'Kubernetes', icon: 'Box' },
      { name: 'Docker', icon: 'Box' },
      { name: 'Terraform', icon: 'Code' },
      { name: 'ArgoCD', icon: 'Zap' },
      { name: 'GIT CI/CD', icon: 'Code' },
      { name: 'n8n', icon: 'Zap' },
      { name: 'GCP', icon: 'Cloud' },
      { name: 'MongoDB/ OracleDB', icon: 'Database' },
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    icon: 'Shield',
    architecture: [
      'OS & Memory Forensics',
      'Network Traffic Analysis',
      'Penetration Testing',
      'Threat Modeling',
      'Prompt Injection Hardening',
    ],
    tools: [
      { name: 'Fortinet Security', icon: 'Shield' },
      { name: 'Volatility', icon: 'Cpu' },
      { name: 'Wazuh (Open Source SIEM)', icon: 'Terminal' },
      { name: 'Ghidra', icon: 'Code' },
      { name: 'Burp Suite', icon: 'Lock' },
      { name: 'Wireshark', icon: 'Network' },
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all skills as a flat array with category info
 */
export const getAllSkills = () => {
  return skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      category: category.name,
    }))
  );
};

/**
 * Get skills filtered by proficiency level
 */
export const getSkillsByProficiency = (level) => {
  return getAllSkills().filter((skill) => skill.proficiency === level);
};

/**
 * Get a specific domain by ID
 */
export const getDomainById = (id) => {
  return skillDomains.find((domain) => domain.id === id);
};

export default skillCategories;
