/**
 * Footer Component
 *
 * Formix-style: Light minimalist footer.
 */


import { personalInfo } from '../../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]">
      <div className="container-main py-12 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Copyright */}
        <p className="text-sm text-[var(--color-text-secondary)] font-medium">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
