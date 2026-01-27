/**
 * Personal Information Data
 *
 * Contains all personal/bio information for the portfolio:
 * - Name, title, tagline
 * - Full bio text
 * - Contact information
 * - Availability status
 * - Quick stats for About section
 *
 * Update this file to change personal information across the site.
 */

export const personalInfo = {
  // Basic Info
  name: "Hany El Atlassi",
  title: "AI Engineer | Cybersecurity & Cloud Engineering Student",

  // Hero tagline (1-2 sentences)
  tagline: "I'm Hany, an AI Engineer building intelligent systems at the intersection of machine learning, cybersecurity, and cloud infrastructure. Currently a 4th student at ENSAM Casablanca in my penultimate year, I strive to learn more about the MLOps field everyday. Feel fee to reach out anytime!",

  // Full bio for About section (2-3 paragraphs)
  bio: `I'm a fourth-year Cybersecurity & Cloud Engineering student at ENSAM Casablanca with a deep passion for artificial intelligence. My journey spans computer vision, reinforcement learning, and deep learning, where I've worked on projects ranging from 3D point cloud segmentation to network intrusion detection systems.

As the President of the AI Club at ENSAM, I lead a community of over 200 members, organizing workshops, hackathons, and collaborative projects that bridge the gap between theoretical knowledge and practical application. My experience includes working as an AI Trainer at Scale AI and completing a machine learning internship focused on 3D computer vision.

Beyond AI, I'm an active participant in cybersecurity competitions, consistently ranking in the top 3% worldwide in CTF challenges. This polyvalent background allows me to approach problems from multiple angles, combining security-first thinking with cutting-edge AI solutions.`,

  // Contact Information
  email: "elatlassi.hany@gmail.com",
  phone: "+212642909790",
  location: "Casablanca, Morocco",

  // Profile photo path (update when actual photo is added)
  photo: "/assets/images/profile.jpg",

  // Availability status
  availability: {
    status: "open", // "open", "limited", "unavailable"
    message: "Open to opportunities",
    seeking: ["AI/ML Engineering", "Internships", "Consulting", "Speaking"],
  },

  // Quick stats for About section
  // These appear as animated counters
  stats: [
    {
      value: "4+",
      label: "Years Experience",
      description: "University & practical experience in AI/ML",
    },
    {
      value: "200+",
      label: "AI Club Members",
      description: "Led and mentored as Club President",
    },
    {
      value: "Top 3%",
      label: "CTF Ranking",
      description: "Worldwide in HTB Forensics CTF",
    },
    {
      value: "90%",
      label: "ML Accuracy",
      description: "Achieved in 3D segmentation project",
    },
  ],
};

export default personalInfo;
