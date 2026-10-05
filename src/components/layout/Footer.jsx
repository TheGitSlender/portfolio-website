/**
 * Footer
 *
 * Ink footer: link columns, live local time, back-to-top, and an oversized
 * wordmark whose letters rise in as the footer scrolls into view.
 */

import { ArrowUp, ArrowUpRight } from 'lucide-react';
import SplitText from '../motion/SplitText';
import LocalTime from './LocalTime';
import { personalInfo } from '../../data/personal';
import { socialLinks } from '../../data/contact';
import { navItems } from '../../data/navigation';
import { useSectionNav } from '../../hooks/useSectionNav';
import { useScrollTo } from '../../hooks/useScrollTo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const goToSection = useSectionNav();
  const scrollTo = useScrollTo();

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="container-main grid gap-12 pb-10 pt-20 md:grid-cols-12 md:pt-28">
        <div className="md:col-span-5">
          <p className="eyebrow mb-5 text-paper/40">Status</p>
          <p className="flex items-center gap-3 text-2xl font-medium tracking-[-0.02em] md:text-3xl">
            <span className="pulse-dot relative h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
            {personalInfo.availability.message}
          </p>
        </div>

        <nav className="md:col-span-2" aria-label="Footer">
          <p className="eyebrow mb-5 text-paper/40">Index</p>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={`/${item.href}`}
                  onClick={(event) => goToSection(event, item.href)}
                  className="text-paper/80 transition-colors hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="eyebrow mb-5 text-paper/40">Elsewhere</p>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target={link.platform === 'Email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-paper/80 transition-colors hover:text-paper"
                >
                  {link.platform}
                  <ArrowUpRight size={14} className="opacity-50" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 md:col-span-2 md:items-end">
          <div className="md:text-right">
            <p className="eyebrow mb-5 text-paper/40">Local time</p>
            <LocalTime className="font-mono text-sm text-paper/80" />
          </div>
          <button
            type="button"
            onClick={() => scrollTo('top')}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-paper/20 transition-colors duration-300 hover:border-accent hover:bg-accent"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="container-main pb-[2.2vw]">
        <SplitText
          as="p"
          text={personalInfo.name}
          stagger={0.035}
          className="select-none whitespace-nowrap text-[clamp(2.5rem,14.2vw,13rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-paper"
        />
      </div>

      <div className="container-main eyebrow flex flex-col justify-between gap-2 border-t border-paper/10 py-6 text-paper/40 sm:flex-row">
        <span>
          © {currentYear} {personalInfo.name}
        </span>
        <span>Designed & built in Casablanca</span>
      </div>
    </footer>
  );
};

export default Footer;
