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
    shortDescription: '1st Place, AgorAI Hackathon — evidence-based AI policy simulator for Moroccan policymakers, presented at UM6P AI for Impact alongside Yann LeCun and Eric Xing.',
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
      { title: '1st Place, AgorAI Hackathon', description: 'Won 1st place with Aegis, then presented at UM6P AI for Impact alongside Yann LeCun, Eric Xing, Google DeepMind researchers, and universities worldwide' },
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
      { label: 'Hackathon', value: '1st Place' },
    ],
    technologies: ['Python', 'FastAPI', 'Groq', 'Llama 3.3', 'BM25', 'React', 'Vite', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/TheGitSlender/Aegis',
      demo: null,
    },
    impact: 'Won 1st place at the AgorAI Hackathon and democratizes AI policy analysis for developing nations, enabling data-driven governance decisions without expensive consulting firms or cloud dependency.',
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
  {
    id: 'voicefl-maml',
    featured: true,
    title: 'VoiceFL-MAML — Federated Meta-Learning for Accented Speech Recognition',
    shortDescription: 'Federated meta-learning research project for personalizing speech recognition to underrepresented African accents without centralizing raw audio.',
    fullDescription: `Can a speech recognition model personalize to a new accent from just a handful of examples, without ever centralizing raw audio? This was a research project, not an engineering build: a controlled 4-condition study — pretrained, centralized fine-tuning, FedAvg, and FedLoRA-MAML — run on AfriSpeech-200 (375 speakers across 5 African accent groups), scored with 95% bootstrap confidence intervals across 77 held-out meta-test speakers.`,
    architectureDescription: `The core research challenge: PyTorch's nn.CTCLoss has no registered second derivative, which blocks true second-order MAML (model-agnostic meta-learning needs to differentiate through the inner-loop gradient step). I engineered a custom differentiable CTC loss in native PyTorch to unlock it. On the communication side, FedLoRA-MAML transmits only 320K LoRA parameters (rank-16 adapters on transformer layers 6–11) per round instead of the full 94.5M-parameter encoder — a ~295x reduction in per-round communication.`,
    category: 'Federated Learning & Speech AI',
    tags: ['Federated Learning', 'Meta-Learning', 'Speech Recognition', 'PyTorch', 'LoRA', 'Research'],
    thumbnail: '/assets/images/projects/voicefl-thumbnail.webp',
    carouselImage: null,
    detailImage: null,
    images: [],
    highlights: [
      { title: 'Custom Differentiable CTC Loss', description: 'Hand-built a second-order-differentiable CTC loss in native PyTorch to unlock true second-order MAML, since nn.CTCLoss has no registered second derivative' },
      { title: '~295x Communication Reduction', description: 'FedLoRA-MAML transmits only 320K rank-16 LoRA parameters per round instead of the full 94.5M-parameter encoder' },
      { title: 'Controlled 4-Condition Study', description: 'Benchmarked pretrained, centralized fine-tuning, FedAvg, and FedLoRA-MAML head-to-head on the same data and evaluation protocol' },
      { title: 'Statistically Rigorous Evaluation', description: '95% bootstrap confidence intervals across 77 held-out meta-test speakers on AfriSpeech-200 (375 speakers, 5 African accent groups)' },
    ],
    techStack: [
      { label: 'MODEL', value: 'Wav2Vec2 + LoRA' },
      { label: 'METHOD', value: 'FedLoRA-MAML' },
      { label: 'DATA', value: 'AfriSpeech-200' },
    ],
    metrics: [
      { label: 'Comm. Reduction', value: '~295x' },
      { label: 'Speakers', value: '375' },
      { label: 'Accent Groups', value: '5' },
    ],
    technologies: ['PyTorch', 'Wav2Vec2', 'LoRA', 'Flower', 'Meta-Learning', 'Python'],
    links: {
      github: 'https://github.com/TheGitSlender/Voice_FL',
      demo: null,
    },
    impact: 'A research project — not a production build — demonstrating that federated, personalized speech recognition for underrepresented African accents is both statistically viable and communication-efficient enough for real deployment.',
    date: '2025-2026',
    duration: 'Research Project',
  },
  {
    id: 'interviewforge',
    featured: true,
    title: 'InterviewForge — Voice AI Interview Platform',
    shortDescription: 'Real-time voice AI technical interview platform with sub-second turn-taking, sandboxed code execution, and cost-optimized knowledge grounding.',
    fullDescription: `Conducting a technical interview over voice means the AI has to listen, decide when the candidate is actually done talking, think, and speak back — all without the awkward silences or interruptions that make voice AI feel robotic. InterviewForge is a voice-first technical interview platform built around a 5-layer concurrent voice architecture: Deepgram Flux + Pipecat Smart Turn v3 (12ms CPU turn-detection) feed a gpt-4o-realtime-mini filler layer (~329ms) while Cartesia Sonic-3 (40–90ms time-to-first-byte) handles speech synthesis, all streamed over LiveKit WebRTC.`,
    architectureDescription: `Behind the voice layer sits a 7-agent LangGraph pipeline that conducts the interview, grounded in a Claude cached prefix instead of RAG (a ~90% cost reduction for repeated knowledge lookups). Candidate code runs in a Judge0 + gVisor sandbox with seccomp, cgroups, and zero network egress. The whole stack is deployed on Kubernetes behind Kong and Cloudflare WAF, with GitOps delivery via ArgoCD.`,
    category: 'Voice AI & Developer Tools',
    tags: ['Voice AI', 'LangGraph', 'LiveKit', 'Kubernetes', 'Sandboxed Execution'],
    thumbnail: '/assets/images/projects/interviewforge-thumbnail.webp',
    carouselImage: null,
    detailImage: null,
    images: [],
    highlights: [
      { title: '5-Layer Concurrent Voice Pipeline', description: 'Deepgram Flux + Pipecat Smart Turn v3 (12ms CPU) turn-detection, gpt-4o-realtime-mini filler (~329ms), Cartesia Sonic-3 (40-90ms TTFB) over LiveKit WebRTC' },
      { title: '7-Agent LangGraph Pipeline', description: 'Multi-agent interview orchestration grounded via a Claude cached prefix — a ~90% cost reduction versus a RAG pipeline' },
      { title: 'Sandboxed Code Execution', description: 'Judge0 + gVisor sandbox for candidate code, hardened with seccomp, cgroups, and zero network egress' },
      { title: 'Production-Grade Deployment', description: 'Kubernetes behind Kong and Cloudflare WAF, with GitOps delivery via ArgoCD' },
    ],
    techStack: [
      { label: 'VOICE', value: 'Deepgram + Cartesia' },
      { label: 'AGENTS', value: 'LangGraph' },
      { label: 'INFRA', value: 'Kubernetes' },
    ],
    metrics: [
      { label: 'Turn Detection', value: '12ms CPU' },
      { label: 'TTS Latency', value: '40-90ms' },
      { label: 'Cost Cut', value: '~90%' },
    ],
    technologies: ['Python', 'LangGraph', 'Deepgram', 'Cartesia', 'LiveKit', 'Judge0', 'Kubernetes', 'ArgoCD', 'Claude'],
    links: {
      github: null,
      demo: null,
    },
    impact: 'Delivers a natural, low-latency voice interview experience while keeping code execution secure and knowledge-grounding costs low enough to run at scale.',
    date: '2026',
    duration: 'Ongoing',
  },
  {
    id: 'jarvislfla7',
    featured: true,
    title: 'JarvisLfla7 — Voice AI Agronomist for Moroccan Farmers',
    shortDescription: '2nd Place + Best Pitch Award, HackAI 5th Edition (1337AI) — a voice-first AI agronomist that builds full farming plans and speaks Darija.',
    fullDescription: `Most AI farming tools assume literacy in a foreign language and reliable internet — neither is guaranteed for smallholder farmers in Morocco. JarvisLfla7 is a voice-first AI agronomist that speaks Darija, orchestrates a full farming plan (crop selection, irrigation, treatment schedules) from a conversation, and is hardened against hallucination through a 5-layer safety pipeline before any advice reaches the farmer.`,
    architectureDescription: `Farming recommendations pass through a 5-layer hallucination-hardening pipeline before being spoken back, since incorrect agronomic advice (wrong pesticide dosage, bad irrigation timing) has real-world consequences. Won 2nd Place and the Best Pitch Award at HackAI 5th Edition, hosted by 1337AI.`,
    category: 'Voice AI & AgTech',
    tags: ['Voice AI', 'Darija NLP', 'AgTech', 'Hallucination Mitigation', 'Hackathon'],
    thumbnail: '/assets/images/projects/jarvislfla7-thumbnail.webp',
    carouselImage: null,
    detailImage: null,
    images: [],
    highlights: [
      { title: '2nd Place + Best Pitch Award', description: 'HackAI 5th Edition, hosted by 1337AI' },
      { title: 'Darija-First Voice UX', description: 'Full conversations and farming plans delivered in Moroccan Darija, not French or English' },
      { title: '5-Layer Safety Pipeline', description: 'Hallucination-hardening pipeline validates agronomic advice before it reaches the farmer' },
      { title: 'End-to-End Farm Planning', description: 'Orchestrates a complete farming plan — crop selection, irrigation, treatment schedules — from a single voice conversation' },
    ],
    techStack: [
      { label: 'LANGUAGE', value: 'Darija NLP' },
      { label: 'SAFETY', value: '5-Layer Pipeline' },
      { label: 'INTERFACE', value: 'Voice-First' },
    ],
    metrics: [
      { label: 'Hackathon Rank', value: '2nd Place' },
      { label: 'Award', value: 'Best Pitch' },
      { label: 'Event', value: 'HackAI 5th Ed.' },
    ],
    technologies: ['Python', 'LLM', 'Voice AI', 'Darija NLP'],
    links: {
      github: null,
      demo: null,
    },
    impact: 'Makes expert-level farming guidance accessible to Moroccan farmers in their own dialect, without requiring literacy in French or English.',
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
