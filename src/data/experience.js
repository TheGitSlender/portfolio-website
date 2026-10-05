/**
 * Work Experience Data
 *
 * Rendered as stacking cards in the Experience section, newest first.
 * Images are resolved by id in `src/assets/media.js` to keep this file clean.
 *
 * Optional fields:
 * - badges:    short context pills shown next to the role
 * - standards: frameworks the work aligns with (rendered as chips)
 * - metric:    a headline result shown instead of an image
 */

export const experiences = [
  {
    id: 'axon',
    role: 'Founder',
    company: 'Axon',
    companyUrl: 'https://axonsecurity.tech',
    location: 'Pre-seed',
    period: {
      start: '2026',
      end: 'Present',
    },
    current: true,
    type: 'founder',
    typeLabel: 'Founder',
    summary:
      'Founding an agentless, AI-native security posture management platform for the AI infrastructure organisations run.',
    highlights: [
      'Continuously discovers, analyses, and secures models, data, MCP servers, agent architectures, and the cloud and data posture beneath them.',
      'Surfaces vulnerabilities and misconfigurations before and during deployment.',
      "Pre-seed, building the MVP within HackNation's Venture Lab (out of MIT).",
    ],
    badges: ['Pre-seed', 'HackNation Venture Lab · MIT'],
    standards: ['ISO 42001', 'NIST AI RMF', 'OWASP'],
    skills: ['AI Security', 'Posture Management', 'MCP Servers', 'Agent Architectures', 'Cloud Posture'],
  },
  {
    id: 'app-attijari',
    role: 'AI/ML Engineering Intern',
    company: 'Attijari Payment',
    companyUrl: null,
    location: 'Casablanca, Morocco (On-site)',
    period: {
      start: 'Jul 2026',
      end: 'Sep 2026',
    },
    current: false,
    type: 'work',
    typeLabel: 'Internship',
    summary:
      'Built an on-premise AI agent that triages incident tickets in card-payment operations (monétique) by verified urgency, P1 to P4.',
    highlights: [
      'A local LLM (qwen3:8b via Ollama) investigates the operational database read-only, isolates root cause, and drafts a diagnosis and resolution plan for human-in-the-loop validation.',
      'Zero external API calls (PCI-DSS constraint), locked down by a read-only DB role and 36 automated security tests.',
      'Tool-driven investigation (read-only SQL guard, BM25 retrieval, full audit trail) lifted triage accuracy to 94%, vs 65% for the same model with no tools.',
    ],
    metric: {
      value: '94%',
      baseline: '65%',
      label: 'Triage accuracy',
      caption: 'Same model, with tools vs. without',
    },
    skills: ['Ollama', 'Local LLMs', 'AI Agents', 'BM25', 'SQL', 'PCI-DSS'],
  },
  {
    id: '3d-smart-factory',
    role: 'Machine Learning Intern',
    company: '3D Smart Factory',
    companyUrl: null,
    location: 'Casablanca, Morocco',
    period: {
      start: 'Jun 2024',
      end: 'Sep 2024',
    },
    current: false,
    type: 'work',
    typeLabel: 'Internship',
    summary:
      'Implemented Superpoint Transformer for 3D point cloud segmentation, end to end from raw data preprocessing to a deployed real-time Streamlit demo.',
    highlights: [
      "Trained on 30 GB+ of Stanford's 3D Indoor Scenes, reaching 90% accuracy and 70% mean IoU across 13 object classes.",
      'Made transformer attention tractable on millions of points by grouping them into superpoints first.',
    ],
    skills: ['PyTorch', 'Lightning AI', '3D Computer Vision', 'Streamlit', 'Weights & Biases'],
  },
  {
    id: 'ai-club-president',
    role: 'President',
    company: 'CIAM AI Club',
    companyUrl: null,
    location: 'ENSAM Casablanca',
    period: {
      start: 'Sep 2023',
      end: 'Jun 2025',
    },
    current: false,
    type: 'leadership',
    typeLabel: 'Leadership',
    summary: "Grew and ran ENSAM's AI community to 200+ members.",
    highlights: [
      'Organised weekly technical workshops, from Python and computer vision to NLP and deployment.',
      'Coordinated student participation in national AI competitions.',
    ],
    skills: ['Leadership', 'Teaching', 'Machine Learning', 'Community Building'],
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
