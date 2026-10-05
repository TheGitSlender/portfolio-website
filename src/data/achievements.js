/**
 * Achievements Data
 *
 * Hackathon wins and competition placements. Each entry links to the
 * fuller project write-up (via projectId) where one exists.
 *
 * `rank` + `rankLabel` drive the oversized placement typography.
 */

export const achievements = [
  {
    id: 'agorai-1st',
    rank: '1st',
    rankLabel: 'Place',
    place: '1st Place',
    event: 'AgorAI Hackathon',
    project: 'Aegis',
    projectId: 'aegis',
    description: 'AI policy impact simulator for Moroccan AI regulation, presented at UM6P AI for Impact alongside Yann LeCun, Eric Xing, and Google DeepMind researchers.',
    date: '2026',
  },
  {
    id: 'hackai-2nd',
    rank: '2nd',
    rankLabel: 'Place + Best Pitch',
    place: '2nd Place + Best Pitch',
    event: 'HackAI 5th Edition (1337AI)',
    project: 'JarvisLfla7',
    projectId: 'jarvislfla7',
    description: 'Voice-first AI agronomist for Moroccan farmers: full farming plans, a 5-layer safety pipeline, answers in Darija.',
    date: '2026',
  },
  {
    id: 'mistral-top10',
    rank: 'Top 10',
    rankLabel: 'Worldwide',
    place: 'Top 10 Worldwide',
    event: 'Mistral AI Worldwide Hackathon',
    project: 'MediCore',
    projectId: 'medicore',
    description: 'AI clinical safety assistant built on Mistral OCR and a real-time voice pipeline.',
    date: '2026',
  },
  {
    id: 'htb-ctf',
    rank: 'Top 3%',
    rankLabel: 'Worldwide',
    place: 'Top 3% Worldwide',
    event: 'HackTheBox CTF',
    project: 'Competitive Cybersecurity',
    projectId: 'ctf-achievements',
    description: 'Plus top 10–15 nationally across multiple Moroccan CTF competitions.',
    date: '2023–2024',
  },
  {
    id: 'ecpc-2nd',
    rank: '2nd',
    rankLabel: 'Place',
    place: '2nd Place',
    event: 'ECPC 2023 (C Programming)',
    project: 'Competitive Cybersecurity',
    projectId: 'ctf-achievements',
    description: 'National competitive programming placement.',
    date: '2023',
  },
];

/**
 * First (most notable) achievement tied to a project, if any
 */
export const getAchievementForProject = (projectId) =>
  achievements.find((achievement) => achievement.projectId === projectId);

export default achievements;
