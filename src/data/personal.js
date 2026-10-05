/**
 * Personal Information Data
 *
 * Name, positioning, bio copy, quick facts and stats used across the site.
 *
 * Copy supports a markdown-lite emphasis marker: wrap words in *asterisks*
 * to render them in the italic serif accent (see utils/emphasis.js).
 */

export const personalInfo = {
  // Basic Info
  name: 'Hany El Atlassi',
  firstName: 'Hany',
  lastName: 'El Atlassi',
  title: 'AI & Security Engineer',

  // Hero
  heroStatement: 'AI & Security Engineer building',
  heroRotatingWords: [
    'secure AI infrastructure.',
    'multi-agent systems.',
    'real-time voice AI.',
    'federated learning systems.',
  ],
  tagline:
    'I build and deploy ML systems end to end: voice pipelines, multi-agent orchestration, federated learning, and the security infrastructure underneath all of it.',

  // Preloader words (last one gets the accent)
  introWords: ['Design', 'Build', 'Secure', 'Ship.'],

  // Marquee tape
  focusAreas: [
    'AI Security',
    'Multi-Agent Systems',
    'Real-Time Voice AI',
    'Federated Learning',
    'Cloud & Kubernetes',
    'Digital Forensics',
  ],

  // About: scroll-revealed statement
  manifesto:
    'I build AI systems that *actually ship* — voice pipelines, multi-agent orchestration, federated learning — and the *security underneath* all of it. Right now I am founding *Axon,* an agentless security posture platform for the AI infrastructure organisations run.',

  // About: supporting paragraphs
  bio: [
    "I'm a final-year Cybersecurity & Cloud Engineering student at ENSAM Casablanca (2022–2027, GPA 3.7/4.0), working where machine learning meets security. This summer I built an on-premise incident-triage agent for card-payment operations at Attijari Payment; now I'm building Axon inside HackNation's Venture Lab (out of MIT).",
    'Along the way: 3D point cloud segmentation, federated meta-learning for accented speech, real-time voice agents, and hackathon wins from AgorAI to HackAI. I grew ENSAM’s AI club to 200+ members, and I still play CTFs, because thinking like an attacker makes for better defensive AI.',
  ],

  // About: quick facts
  facts: [
    { label: 'Based in', value: 'Casablanca, Morocco' },
    { label: 'Studying', value: 'Cybersecurity & Cloud Eng., ENSAM' },
    { label: 'Speaks', value: 'English, French, Arabic' },
    { label: 'Status', value: 'Open to work & relocation' },
  ],

  // Contact Information
  email: 'elatlassi.hany@gmail.com',
  phone: '+212642909790',
  location: 'Casablanca, Morocco',
  timeZone: 'Africa/Casablanca',

  // Availability status
  availability: {
    status: 'open', // "open", "limited", "unavailable"
    message: 'Open to work & relocation',
    seeking: ['AI/ML Engineering', 'AI Security', 'Consulting', 'Speaking'],
  },

  // Quick stats for the About section (animated counters)
  stats: [
    {
      value: '94%',
      label: 'Triage accuracy',
      description: 'Tool-driven incident agent at Attijari Payment, vs 65% without tools',
    },
    {
      value: '~295×',
      label: 'Less traffic',
      description: 'Per federated round in VoiceFL-MAML, by sending only LoRA adapters',
    },
    {
      value: 'Top 3%',
      label: 'HackTheBox',
      description: 'Worldwide, plus top 10–15 nationally in Moroccan CTFs',
    },
    {
      value: '200+',
      label: 'AI club members',
      description: 'Grew and led the CIAM AI Club at ENSAM',
    },
  ],
};

export default personalInfo;
