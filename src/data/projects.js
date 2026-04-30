/**
 * Projects Data
 *
 * Contains all project information for the portfolio.
 * Includes carousel and detail image mappings for easy reference.
 */

// =============================================================================
// IMAGE MAPPINGS
// =============================================================================

/**
 * Carousel image filenames by project ID.
 * Actual imports happen in the component to keep data files clean.
 */
export const carouselImageMap = {
  'wazuh-llm': 'wazuh_carousel.webp',
  '3d-segmentator': '3d_CV_carousel.webp',
  'ctf-achievements': 'carousel_ctf.webp',
  'medicore': 'medicore_carousel.png',
  'aegis': 'aegis_carousel.png',
  'callpilot': 'callpilot_carousel.png',
};

/**
 * Detail page image filenames by project ID.
 */
export const detailImageMap = {
  'wazuh-llm': 'llm_project_details.webp',
  '3d-segmentator': '3d_CV_projectdetails.webp',
  'ctf-achievements': 'ctf_project_details.webp',
  'medicore': 'medicore_consultation.png',
  'aegis': 'aegis_page.png',
  'callpilot': 'callpilot_mainpage.png',
};

// =============================================================================
// PROJECTS DATA
// =============================================================================

export const projects = [
  {
    id: 'wazuh-llm',
    featured: true,
    title: 'ML-Powered Network Intrusion Detection',
    shortDescription: 'Enterprise-grade security monitoring with automated threat analysis using LLMs on AWS Serverless.',
    fullDescription: `Can transformer models actually beat classical ML for cybersecurity? And more importantly, can you deploy them in production with acceptable latency?
    These were the questions we needed to answer. I personally led a 4-person team comparing RandomForest, XGBoost, and DistilBERT for detecting network attacks. I handled the transformer implementation and cloud deployment.`,
    architectureDescription: 'Wazuh SIEM communicates with the stremalit app containing RandomForest and XGBoost, whilst DistilBERT was deployed on a simple AWS serverless architecture with API Gateway and Lambda function. Streamlit speaks to the LLM, Wazuh speaks to streamlit alone, ensuring transparency. ',
    category: 'Cybersecurity & Cloud AI',
    tags: ['WAZUH', 'SIEM', 'LLM', 'AWS', 'Serverless', 'Security Automation'],
    thumbnail: '/assets/images/projects/wazuh-thumbnail.webp',
    carouselImage: 'wazuh_carousel.webp',
    detailImage: 'llm_project_details.webp',
    images: [],
    highlights: [
      { title: 'Integrated SIEM & AI', description: 'Integrated Wazuh SIEM with DistilBERT and classical ML models for real-time threat interpretation' },
      { title: 'Serverless Architecture', description: 'Architected using AWS Lambda for a cheaper, fully serverless workflow' },
      { title: 'Threat Analysis', description: 'Reduced incident response time by providing natural language summaries of complex logs' },
      { title: 'Automated Isolation', description: 'Implemented automated isolation protocols for high-fidelity alerts' },
    ],
    techStack: [
      { label: 'SIEM', value: 'Wazuh' },
      { label: 'AI MODEL', value: 'DistilBERT' },
      { label: 'CLOUD', value: 'AWS Lambda' },
    ],
    metrics: [
      { label: 'Response Time', value: '-60%' },
      { label: 'Architecture', value: 'Serverless' },
      { label: 'Platform', value: 'AWS' },
    ],
    technologies: ['Wazuh', 'AWS Lambda', 'PyTorch', 'Python'],
    links: {
      github: null,
      demo: null,
    },
    impact: 'Revolutionized security operations by bridging the gap between raw telemetry and actionable intelligence.',
    date: '2024',
    duration: '4 months',
  },
  {
    id: '3d-segmentator',
    featured: true,
    title: '3D Scene Segmentator',
    shortDescription: 'Advanced semantic segmentation for complex 3D environments using Transformer architectures.',
    fullDescription: `Built a system that understands 3D indoor spaces from point cloud data (walls, floors, furniture, etc.). I used the Superpoint Transformer architecture, processed 30GB+ of data, hit 90% accuracy and 70% mean IoU. I then showcased the project in a real-time web app where you upload a scan and get instant segmentation.`,
    architectureDescription: `The challenge was making transformers work efficiently on millions of 3D points. Solution: hierarchical processing that groups points into "superpoints" before running expensive attention mechanisms.`,
    category: 'Computer Vision & 3D AI',
    tags: ['3D AI', 'Transformers', 'Point Clouds', 'PyTorch', 'Computer Vision'],
    thumbnail: '/assets/images/projects/3d-seg-thumbnail.webp',
    carouselImage: '3d_CV_carousel.webp',
    detailImage: '3d_CV_projectdetails.webp',
    images: [],
    highlights: [
      { title: 'Transformer Architecture', description: 'Utilized Superpoint Transformer architecture for high-resolution semantic segmentation' },
      { title: 'Large-Scale Processing', description: 'Optimized for large-scale indoor and outdoor point cloud datasets' },
      { title: 'Benchmark Excellence', description: 'Achieved state-of-the-art performance on S3DIS and ScanNet benchmarks' },
      { title: 'Real-time Visualization', description: 'Integrated with a custom visualization engine for real-time spatial inspection' },
    ],
    techStack: [
      { label: 'ARCHITECTURE', value: 'Transformers' },
      { label: 'FRAMEWORK', value: 'PyTorch' },
      { label: 'DATA', value: 'Open3D' },
    ],
    metrics: [
      { label: 'Mean IoU', value: '72.4%' },
      { label: 'Inference', value: 'Real-time' },
      { label: 'Backend', value: 'PyTorch' },
    ],
    technologies: ['PyTorch', 'CUDA', 'Open3D', 'Lightning AI', 'Transformers'],
    links: {
      github: null,
      demo: null,
    },
    impact: 'Provided a powerful tool for automated digital twinning and architectural documentation.',
    date: '2024',
    duration: '3 months',
  },
  {
    id: 'ctf-achievements',
    featured: true,
    title: 'Competitive Cybersecurity (CTF)',
    shortDescription: 'Top-tier performance in global security competitions with top rankings.',
    fullDescription: `Top 3% worldwide in HackTheBox Forensics CTF. Consistently top 10-15 nationally in various competitions. Mostly focused on digital forensics, analyzing memory dumps, disk images, network traffic to investigate simulated cyber crimes. Also reverse engineering, web exploitation, and Linux privilege escalation.`,
    architectureDescription: "Turns out thinking like an attacker makes you way better at building defensive AI systems. My intrusion detection work directly benefited from understanding how real attacks unfold.",
    category: 'Cybersecurity & Problem Solving',
    tags: ['CTF', 'Cybersecurity', 'Forensics', 'Problem Solving', 'Competition'],
    thumbnail: '/assets/images/projects/ctf-thumbnail.webp',
    carouselImage: 'carousel_ctf.webp',
    detailImage: 'ctf_project_details.webp',
    images: [],
    highlights: [
      { title: 'Global Ranking', description: 'Top 3% worldwide in HackTheBox Forensics CTF' },
      { title: 'National Excellence', description: 'Top 10-15 national ranking in various competitions' },
      { title: 'Programming Proficiency', description: '2nd Place in ECPC 2023 (C Programming)' },
      { title: 'Forensics Depth', description: 'Specialization in forensics and network analysis' },
    ],
    techStack: [
      { label: 'OS', value: 'Linux' },
      { label: 'REVERSE', value: 'Ghidra' },
      { label: 'FORENSICS', value: 'Volatility' },
    ],
    metrics: [
      { label: 'Global Rank', value: 'Top 3%' },
      { label: 'National Rank', value: 'Top 10-15' },
      { label: 'Competitions', value: '10+' },
    ],
    technologies: ['Linux', 'Ghidra', 'Volatility', 'C', 'Bash', 'Python'],
    links: {
      github: null,
      demo: null,
    },
    impact: 'Demonstrated advanced problem-solving and security analysis skills in competitive environments.',
    date: '2023-2024',
    duration: 'Ongoing',
  },
  {
    id: 'medicore',
    featured: true,
    title: 'MediCore — Clinical AI Safety Assistant',
    shortDescription: 'Real-time medication safety checking during ward rounds using voice AI and Mistral OCR — 10th place worldwide at Mistral AI Hackathon.',
    fullDescription: `Medication errors are among the most preventable causes of patient harm. During fast-paced ward rounds, doctors juggle handwritten charts, verbal histories, and prescriptions — making safety conflicts easy to miss.
    MediCore eliminates this gap: upload a patient chart (PDF, handwritten, or photo), and Mistral OCR extracts all entities (allergies, medications, diagnosis). A voice session then opens with an ElevenLabs AI agent that has full patient context. When the doctor mentions a drug, the system instantly evaluates safety against the patient's allergies and current medications using Mistral Large, and responds in real time.`,
    architectureDescription: `Chart upload triggers a two-step Mistral pipeline: OCR (mistral-ocr-latest) extracts text from any format, then Mistral Large (temperature=0) parses structured entities. A UUID session is created and passed to ElevenLabs Conversational AI via WebSocket proxy. Mid-conversation, ElevenLabs webhooks hit /check-safety with the drug name; the backend evaluates and returns {is_safe, issue, recommendation} before the agent continues speaking.`,
    category: 'Healthcare AI & Voice',
    tags: ['Healthcare AI', 'Voice AI', 'OCR', 'FastAPI', 'React', 'ElevenLabs', 'Mistral AI'],
    thumbnail: '/assets/images/projects/medicore-thumbnail.webp',
    carouselImage: 'wazuh_carousel.webp',
    detailImage: 'llm_project_details.webp',
    images: [],
    highlights: [
      { title: '10th Place Worldwide', description: 'Top 10 finish at the Mistral AI Hackathon out of global submissions' },
      { title: 'Real-Time Safety Verdicts', description: 'Deterministic LLM evaluation of drug safety mid-conversation, before the doctor finishes speaking' },
      { title: 'Multi-Format Chart OCR', description: 'Handles PDFs, handwritten notes, photos, and scanned documents via Mistral OCR' },
      { title: 'Voice-First Clinical UX', description: 'Bidirectional WebSocket proxy to ElevenLabs gives doctors a natural conversation with full patient context' },
    ],
    techStack: [
      { label: 'AI', value: 'Mistral Large' },
      { label: 'VOICE', value: 'ElevenLabs' },
      { label: 'BACKEND', value: 'FastAPI' },
    ],
    metrics: [
      { label: 'Hackathon Rank', value: 'Top 10' },
      { label: 'Scope', value: 'Worldwide' },
      { label: 'Latency', value: 'Real-time' },
    ],
    technologies: ['Python', 'FastAPI', 'Mistral AI', 'ElevenLabs', 'React', 'TypeScript', 'Vite'],
    links: {
      github: 'https://github.com/mar1shell/MediCore',
      demo: null,
    },
    impact: 'Automates medication safety validation at the point of prescription, reducing the risk of preventable drug errors during ward rounds.',
    date: '2026',
    duration: 'Hackathon',
  },
  {
    id: 'aegis',
    featured: true,
    title: 'Aegis — AI Policy Intelligence Platform',
    shortDescription: 'Evidence-based AI policy simulator for Moroccan policymakers — selected to present at AI Spring School alongside Yann LeCun and Michael Jordan.',
    fullDescription: `Policymakers in developing nations lack accessible tools to understand AI governance, study international precedents, and predict policy impacts before committing to legislation. Aegis fills that gap for Morocco.
    The platform combines a RAG-powered concept chatbot (with Morocco-specific context), a searchable library of 8 international case studies (EU AI Act, Singapore, Rwanda, etc.), and an impact simulator: describe a proposed policy, and the system finds the 5 most similar real-world policies, aggregates their outcomes, GDP-adjusts the metrics to Morocco's context, and generates a narrative analysis across 5 impact dimensions.`,
    architectureDescription: `Fully local inference stack — no cloud lock-in. BM25 full-text search over JSON data files (concepts, case studies, Morocco context) loaded at startup. RAG retrieves relevant policy concepts, then Groq Llama-3.3-70B generates responses in <2 seconds. The impact simulator uses deterministic similarity scoring and weighted metric aggregation before an LLM generates the narrative. Frontend is React 19 + Vite deployed on Vercel; backend is FastAPI.`,
    category: 'AI Policy & Governance',
    tags: ['AI Policy', 'RAG', 'LLM', 'FastAPI', 'React', 'Governance', 'Morocco'],
    thumbnail: '/assets/images/projects/aegis-thumbnail.webp',
    carouselImage: '3d_CV_carousel.webp',
    detailImage: '3d_CV_projectdetails.webp',
    images: [],
    highlights: [
      { title: 'AI Spring School Selection', description: 'Selected to present at a 500+ attendee venue with Yann LeCun, Michael Jordan, and Joëlle Barral (Google DeepMind) as speakers' },
      { title: 'Evidence-Based Impact Simulation', description: 'Predicts 5 policy impact dimensions using GDP-adjusted outcomes from 8 validated international case studies' },
      { title: 'Morocco-Contextualized RAG', description: "Chatbot explains AI policy concepts tailored to Morocco's legal, economic, and language context" },
      { title: 'Fully Local Inference', description: '<2s response times with Groq Llama-3.3-70B — no cloud dependency after startup' },
    ],
    techStack: [
      { label: 'LLM', value: 'Llama 3.3-70B' },
      { label: 'SEARCH', value: 'BM25 RAG' },
      { label: 'BACKEND', value: 'FastAPI' },
    ],
    metrics: [
      { label: 'Case Studies', value: '8 Nations' },
      { label: 'Response Time', value: '<2s' },
      { label: 'Venue', value: '500+ Attendees' },
    ],
    technologies: ['Python', 'FastAPI', 'Groq', 'Llama 3.3', 'BM25', 'React', 'Vite', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/TheGitSlender/Aegis',
      demo: null,
    },
    impact: 'Democratizes AI policy analysis for developing nations, enabling data-driven governance decisions without expensive consulting firms or cloud dependency.',
    date: '2026',
    duration: '2 months',
  },
  {
    id: 'callpilot',
    featured: true,
    title: 'CallPilot — AI Voice Appointment Agent',
    shortDescription: 'Voice-driven appointment booking that autonomously calls up to 15 providers in parallel, scores availability, and syncs to Google Calendar.',
    fullDescription: `Booking appointments still means spending 15-30 minutes on hold, calling providers one by one. CallPilot eliminates that entirely.
    Speak your appointment need to an ElevenLabs voice agent; it searches nearby providers via Google Places, launches up to 15 parallel inquiry calls simultaneously to gather availability and insurance info, scores each provider across 5 dimensions, and presents you with the best options. Confirm your pick — it makes the booking call and creates your Google Calendar event automatically.`,
    architectureDescription: `Three-tier system: React/Expo web+mobile frontend, ElevenLabs Conversational AI orchestrator (with injected dynamic variables per call), and a FastAPI backend. The backend manages a campaign state machine (CREATED → SEARCHING → CALLING → SCORING → PRESENTING → BOOKED), calls Google Places/Distance Matrix/Calendar APIs, and broadcasts real-time updates to the client via WebSocket. Scoring is deterministic (no LLM) — weighted by availability (40%), distance (20%), rating (15%), time match (10%), insurance (10%), call success (15%). Deployed on Google Cloud Run.`,
    category: 'AI Agents & Voice',
    tags: ['Voice AI', 'AI Agents', 'ElevenLabs', 'FastAPI', 'Google APIs', 'React Native', 'WebSockets'],
    thumbnail: '/assets/images/projects/callpilot-thumbnail.webp',
    carouselImage: 'carousel_ctf.webp',
    detailImage: 'ctf_project_details.webp',
    images: [],
    highlights: [
      { title: 'Parallel Inquiry Swarm', description: 'Launches up to 15 simultaneous provider calls via ElevenLabs Batch Calling API — no sequential waiting' },
      { title: 'Smart Scoring Algorithm', description: 'Deterministic weighted ranking (availability, distance, rating, time match, insurance) returns a match % per provider' },
      { title: 'Full Calendar Integration', description: 'Automatically creates Google Calendar events post-booking — zero manual data entry' },
      { title: 'Web + Mobile', description: 'React web app + Expo React Native mobile app share the same backend and ElevenLabs voice SDK' },
    ],
    techStack: [
      { label: 'VOICE', value: 'ElevenLabs' },
      { label: 'MOBILE', value: 'React Native' },
      { label: 'BACKEND', value: 'FastAPI' },
    ],
    metrics: [
      { label: 'Parallel Calls', value: 'Up to 15' },
      { label: 'APIs', value: 'Google Suite' },
      { label: 'Interface', value: 'Web + Mobile' },
    ],
    technologies: ['Python', 'FastAPI', 'ElevenLabs', 'React', 'React Native', 'Expo', 'Google Cloud', 'SQLite', 'WebSockets'],
    links: {
      github: 'https://github.com/mar1shell/CallPilot',
      demo: null,
    },
    impact: 'Reduces appointment booking from 15-30 minutes of manual phone calls to a single voice conversation, with intelligent provider selection and automatic calendar sync.',
    date: '2026',
    duration: 'Hackathon',
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all featured projects
 */
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

/**
 * Get a project by its ID
 */
export const getProjectById = (id) => projects.find((p) => p.id === id);

/**
 * Get the next project ID for navigation (circular)
 */
export const getNextProjectId = (currentId) => {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex].id;
};

/**
 * Get the previous project ID for navigation (circular)
 */
export const getPrevProjectId = (currentId) => {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  return projects[prevIndex].id;
};

export default projects;
