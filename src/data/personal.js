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
  title: "ML Engineer | AI & Cloud Engineer",

  // Hero tagline (1-2 sentences)
  tagline: "I'm Hany, an ML Engineer building and deploying AI systems on AWS — voice pipelines, multi-agent orchestration, federated learning, and the security infrastructure underneath. Final-year Cybersecurity & Cloud Engineering student at ENSAM Casablanca, open to opportunities and relocation. Feel free to reach out anytime!",

  // Full bio for About section (2-3 paragraphs)
  bio: `I'm an AI & Cloud engineer with hands-on experience building and deploying ML systems on AWS: voice pipelines, multi-agent orchestration, federated learning, and the security infrastructure underneath it. I'm in my final (5th) year of the Cybersecurity & Cloud Engineering program at ENSAM Casablanca (2022–2027, GPA 3.7/4.0), where my academic specialization gives me a security-first lens on everything I build.

My journey spans computer vision, reinforcement learning, and deep learning, with projects ranging from 3D point cloud segmentation to network intrusion detection, federated meta-learning for speech recognition, and multi-agent orchestration systems for operational automation. As the President of the AI Club at ENSAM, I led a community of over 200 members through workshops, hackathons, and collaborative projects bridging theory and practice.

Beyond AI, I'm an active participant in cybersecurity competitions, consistently ranking in the top 3% worldwide in CTF challenges. This polyvalent background lets me approach problems from multiple angles, combining security-first thinking with cutting-edge AI solutions — and I'm open to relocating for the right opportunity.`,

  // Contact Information
  email: "elatlassi.hany@gmail.com",
  phone: "+212642909790",
  location: "Casablanca, Morocco",

  // Profile photo path (update when actual photo is added)
  photo: "/assets/images/profile.webp",

  // Availability status
  availability: {
    status: "open", // "open", "limited", "unavailable"
    message: "Open to opportunities, including relocation",
    seeking: ["AI/ML Engineering", "Internships", "Consulting", "Speaking"],
  },

  // Quick stats for About section
  // These appear as animated counters
  stats: [
    {
      value: "5+",
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
