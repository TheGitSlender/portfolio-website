/**
 * Contact & Social Links Data
 *
 * Contact information, social links and copy for the Contact section
 * and Footer.
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
// SOCIAL LINKS
// =============================================================================

export const socialLinks = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/el-atlassi-hany',
    username: 'el-atlassi-hany',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/thegitslender',
    username: 'thegitslender',
  },
  {
    platform: 'Email',
    url: 'mailto:elatlassi.hany@gmail.com',
    username: 'elatlassi.hany@gmail.com',
  },
];

export const getSocialLink = (platform) => socialLinks.find((link) => link.platform === platform);

// =============================================================================
// CONTACT SECTION CONTENT
// =============================================================================

export const contactContent = {
  heading: "Let's build something *secure.*",
  subheading:
    'Open to roles, collaborations, and conversations about AI security. Based in Casablanca, open to relocation.',
  primaryCTA: 'Get in touch',
  emailCTA: 'Copy my email',
  emailCopiedMessage: 'Email copied to clipboard!',
};

export default { contactInfo, socialLinks, contactContent, getSocialLink };
