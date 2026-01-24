/**
 * Contact & Social Links Data
 *
 * Contains all contact information and social media links.
 * Used in Contact section and Footer.
 *
 * Each social link includes:
 * - platform: Display name
 * - url: Full URL to profile
 * - icon: Lucide icon name (imported in components)
 * - color: Brand color (optional, for hover effects)
 */

export const contactInfo = {
  email: "elatlassi.hany@gmail.com",
  phone: "+212642909790",
  location: "Casablanca, Morocco",
};

export const socialLinks = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/el-atlassi-hany",
    icon: "Linkedin",
    color: "#0077B5",
    username: "el-atlassi-hany",
  },
  {
    platform: "GitHub",
    url: "https://github.com/thegitslender",
    icon: "Github",
    color: "#181717",
    username: "thegitslender",
  },
  {
    platform: "Email",
    url: "mailto:elatlassi.hany@gmail.com",
    icon: "Mail",
    color: "#EA4335",
    username: "elatlassi.hany@gmail.com",
  },
];

// Contact section content
export const contactContent = {
  heading: "Let's Connect",
  subheading: "Open to discussing opportunities, collaborations, or just having a chat. Feel free to reach out!",
  emailCTA: "Copy my email",
  emailCopiedMessage: "Email copied to clipboard!",
};

export default { contactInfo, socialLinks, contactContent };
