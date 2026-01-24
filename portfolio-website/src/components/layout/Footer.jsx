/**
 * Footer Component
 *
 * Formix-style: Light minimalist footer.
 */

import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]">
      <div className="container-main py-12 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left: Copyright */}
        <p className="text-sm text-[var(--color-text-secondary)] font-medium">
          &copy; {currentYear} Hany El Atlassi. All rights reserved.
        </p>

        {/* Right: Socials */}
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/el-atlassi-hany" target="_blank" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--color-accent-orange)] transition-colors">LinkedIn</a>
          <a href="https://github.com/thegitslender" target="_blank" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--color-accent-orange)] transition-colors">GitHub</a>
          <a href="mailto:elatlassi.hany@gmail.com" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--color-accent-orange)] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
