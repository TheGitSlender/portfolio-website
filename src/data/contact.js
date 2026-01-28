/**
 * Contact & Social Links Data
 *
 * Contains all contact information, social media links, and platform styling.
 * Used in Contact section and Footer.
 */

// =============================================================================
// CONTACT INFO
// =============================================================================

export const contactInfo = {
  email: 'elatlassi.hany@gmail.com',
  phone: '+212642909790',
  location: 'Casablanca, Morocco',
};

// =============================================================================
// PLATFORM STYLES
// =============================================================================

/**
 * Visual styling for each platform.
 * Used to determine dark/light cards and icon colors.
 */
export const platformStyles = {
  LinkedIn: {
    isDark: true,
    color: '#0077B5',
    bgClass: 'bg-black',
    textClass: 'text-white',
    borderClass: 'border-white/10',
  },
  GitHub: {
    isDark: true,
    color: '#8B5CF6',
    bgClass: 'bg-black',
    textClass: 'text-white',
    borderClass: 'border-white/10',
  },
  Email: {
    isDark: true,
    color: '#EA4335',
    bgClass: 'bg-black',
    textClass: 'text-white',
    borderClass: 'border-white/10',
  },
  Twitter: {
    isDark: false,
    color: '#1DA1F2',
    bgClass: 'bg-white',
    textClass: 'text-[var(--color-text-primary)]',
    borderClass: 'border-black/5',
  },
};

/**
 * Get platform style by name, with fallback
 */
export const getPlatformStyle = (platform) => {
  return platformStyles[platform] || {
    isDark: false,
    color: 'var(--color-accent-primary)',
    bgClass: 'bg-white',
    textClass: 'text-[var(--color-text-primary)]',
    borderClass: 'border-black/5',
  };
};

// =============================================================================
// SOCIAL LINKS
// =============================================================================

export const socialLinks = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/el-atlassi-hany',
    icon: 'Linkedin',
    color: '#0077B5',
    username: 'el-atlassi-hany',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/thegitslender',
    icon: 'Github',
    color: '#8B5CF6',
    username: 'thegitslender',
  },
  {
    platform: 'Email',
    url: 'mailto:elatlassi.hany@gmail.com',
    icon: 'Mail',
    color: '#EA4335',
    username: 'elatlassi.hany@gmail.com',
  },
];

// =============================================================================
// CONTACT SECTION CONTENT
// =============================================================================

export const contactContent = {
  heading: "Let's Connect",
  subheading: 'Open to discussing opportunities, collaborations, or just having a chat. Feel free to reach out!',
  emailCTA: 'Copy my email',
  emailCopiedMessage: 'Email copied to clipboard!',
};

export default { contactInfo, socialLinks, contactContent, platformStyles, getPlatformStyle };
