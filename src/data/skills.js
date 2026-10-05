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
// SKILL DOMAINS (rendered as tabs)
// =============================================================================

/**
 * High-level skill domains with architecture and tools breakdown.
 * Rendered as tabs by the Skills section.
 */
export const skillDomains = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    shortTitle: 'AI',
    icon: 'Brain',
    architecture: [
      'Transformer Models & LLMs',
      'Federated & Meta-Learning (FedAvg, MAML, LoRA)',
      'Speech Recognition (Wav2Vec2, CTC)',
      'Computer Vision & 3D Point Clouds',
      'Natural Language Processing',
      'Reinforcement Learning',
    ],
    tools: [
      { name: 'PyTorch', icon: 'Cpu' },
      { name: 'TensorFlow', icon: 'Zap' },
      { name: 'Scikit-Learn', icon: 'Code' },
      { name: 'HuggingFace', icon: 'Globe' },
      { name: 'Flower (Federated Learning)', icon: 'Network' },
      { name: 'Lightning AI', icon: 'Zap' },
      { name: 'Weights & Biases', icon: 'Database' },
      { name: 'Streamlit', icon: 'Box' },
      { name: 'Pinecone', icon: 'Database' },
    ],
  },
  {
    id: 'agents',
    title: 'Voice & Agents',
    shortTitle: 'Agents',
    icon: 'Bot',
    architecture: [
      'Multi-Agent Orchestration (LangGraph)',
      'Real-Time Voice Pipelines (STT → LLM → TTS)',
      'Tool-Driven Investigation Agents',
      'On-Premise LLMs with Zero Egress',
      'Human-in-the-Loop & Audit Trails',
      'Prompt Caching over RAG for Cost',
    ],
    tools: [
      { name: 'LangGraph', icon: 'Code' },
      { name: 'LangChain', icon: 'Code' },
      { name: 'Ollama (local LLMs)', icon: 'Cpu' },
      { name: 'Claude API', icon: 'Bot' },
      { name: 'OpenAI Realtime', icon: 'Bot' },
      { name: 'Mistral AI', icon: 'Bot' },
      { name: 'Deepgram', icon: 'Mic' },
      { name: 'Pipecat', icon: 'Mic' },
      { name: 'LiveKit (WebRTC)', icon: 'Network' },
      { name: 'Cartesia', icon: 'Mic' },
      { name: 'ElevenLabs', icon: 'Mic' },
      { name: 'BM25 Retrieval', icon: 'Database' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Architectures',
    shortTitle: 'Cloud',
    icon: 'Cloud',
    architecture: [
      'Container Orchestration (Kubernetes)',
      'Infrastructure as Code (Terraform)',
      'GitOps Delivery (ArgoCD)',
      'Serverless Computing',
      'Edge Security (Kong, Cloudflare WAF)',
      'Sandboxed Code Execution (Judge0, gVisor)',
    ],
    tools: [
      { name: 'AWS', icon: 'Cloud' },
      { name: 'Kubernetes', icon: 'Box' },
      { name: 'Docker', icon: 'Box' },
      { name: 'Terraform', icon: 'Code' },
      { name: 'ArgoCD', icon: 'Zap' },
      { name: 'Git / GitHub CI/CD', icon: 'Code' },
      { name: 'Linux', icon: 'Terminal' },
      { name: 'Kong', icon: 'Network' },
      { name: 'Cloudflare', icon: 'Shield' },
      { name: 'GCP', icon: 'Cloud' },
      { name: 'n8n', icon: 'Zap' },
      { name: 'MongoDB / OracleDB', icon: 'Database' },
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    shortTitle: 'Security',
    icon: 'Shield',
    architecture: [
      'AI Security Posture (ISO 42001, NIST AI RMF, OWASP)',
      'Agent & MCP Server Security',
      'Prompt Injection Hardening',
      'OS, Memory & NTFS Forensics',
      'Network Traffic Analysis',
      'PCI-DSS-Constrained Systems',
      'Penetration Testing & Threat Modeling',
    ],
    tools: [
      { name: 'Volatility', icon: 'Cpu' },
      { name: 'Wireshark', icon: 'Network' },
      { name: 'Ghidra', icon: 'Code' },
      { name: 'Burp Suite', icon: 'Lock' },
      { name: 'Wazuh (Open Source SIEM)', icon: 'Terminal' },
      { name: 'Fortinet Security', icon: 'Shield' },
      { name: 'gVisor & seccomp', icon: 'Lock' },
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
