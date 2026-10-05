/**
 * Navbar
 *
 * Fixed header that slides away on scroll down and returns on scroll up.
 * Desktop: wordmark, live local time, rolling nav links, theme toggle, CTA.
 * Mobile: a full-screen ink menu that wipes down with staggered links.
 */

import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { ArrowUpRight } from 'lucide-react';
import RollText from '../motion/RollText';
import ThemeToggle from '../ui/ThemeToggle';
import LocalTime from './LocalTime';
import { navItems, ctaButton } from '../../data/navigation';
import { socialLinks } from '../../data/contact';
import { personalInfo } from '../../data/personal';
import { ease, tf } from '../../config/animations';
import { useIntro } from '../../hooks/IntroContext';
import { useSectionNav } from '../../hooks/useSectionNav';
import { useScrollTo } from '../../hooks/useScrollTo';

const HIDE_AFTER = 160;
const MENU_ID = 'mobile-menu';

const menuLinkVariants = {
  hidden: { y: '110%' },
  visible: (i) => ({
    y: '0%',
    transition: { duration: 0.9, ease: ease.expo, delay: 0.25 + i * 0.06 },
  }),
  exit: { y: '110%', transition: { duration: 0.4, ease: ease.quart } },
};

const MobileMenu = ({ onNavigate }) => {
  const navRef = useRef(null);

  // Move focus into the dialog when it opens
  useEffect(() => {
    navRef.current?.querySelector('a')?.focus({ preventScroll: true });
  }, []);

  return (
    <motion.div
      id={MENU_ID}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-40 flex flex-col bg-ink text-paper md:hidden"
      initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{
        clipPath: 'inset(0% 0% 100% 0%)',
        transition: { duration: 0.7, ease: ease.quart, delay: 0.15 },
      }}
      transition={{ duration: 0.8, ease: ease.quart }}
    >
      <nav
        ref={navRef}
        className="container-main flex flex-1 flex-col justify-center gap-1 pt-[var(--nav-h)]"
      >
        {[...navItems, ctaButton].map((item, i) => (
          <div key={item.href} className="overflow-hidden">
            <motion.a
              href={`/${item.href}`}
              onClick={(event) => onNavigate(event, item.href)}
              className="flex items-baseline gap-4 py-1 text-[clamp(2.75rem,12vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
              custom={i}
              variants={menuLinkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <span className="eyebrow text-accent">0{i + 1}</span>
              {item.label}
            </motion.a>
          </div>
        ))}
      </nav>

      <motion.div
        className="container-main flex flex-wrap items-end justify-between gap-6 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <div className="flex flex-col gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target={link.platform === 'Email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="eyebrow flex items-center gap-1 text-paper/70"
            >
              {link.platform} <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
        <p className="eyebrow text-right text-paper/50">
          {personalInfo.location}
          <br />
          <LocalTime />
        </p>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const { introDone } = useIntro();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const goToSection = useSectionNav();
  const scrollTo = useScrollTo();
  const lenis = useLenis();
  const { pathname } = useLocation();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > HIDE_AFTER);
    setScrolled(latest > 24);
  });

  // Freeze page scroll behind the open mobile menu; Escape closes it
  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    lenis?.stop();
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen, lenis]);

  const handleNavigate = (event, href) => {
    setMenuOpen(false);
    goToSection(event, href);
  };

  // On Home the logo scrolls to the top; elsewhere the Link navigates and
  // the page transition resets the scroll position.
  const handleLogoClick = (event) => {
    setMenuOpen(false);
    if (pathname !== '/') return;
    event.preventDefault();
    scrollTo('top');
  };

  const showBar = introDone && (!hidden || menuOpen);
  const solid = scrolled && !menuOpen;

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          menuOpen ? 'text-paper' : 'text-fg'
        }`}
        initial={{ transform: tf('translateY(-110%)') }}
        animate={{ transform: tf(showBar ? 'translateY(0%)' : 'translateY(-110%)') }}
        // Keyboard users tabbing into a hidden bar should see where they are
        onFocusCapture={() => setHidden(false)}
        transition={{ duration: 0.7, ease: ease.expo }}
      >
        <div
          className={`absolute inset-0 -z-10 border-b transition-all duration-500 ${
            solid ? 'border-line bg-bg/90 backdrop-blur-sm' : 'border-transparent bg-transparent'
          }`}
        />
        <div className="container-main flex h-[var(--nav-h)] items-center justify-between gap-6">
          {/* Wordmark */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="text-[15px] font-semibold tracking-[-0.02em] transition-colors hover:text-accent"
          >
            {personalInfo.name}
          </Link>

          {/* Local time */}
          <p className="eyebrow hidden items-center gap-2 text-current/60 lg:flex">
            <span>Casablanca, MA</span>
            <span className="h-px w-6 bg-current/30" />
            <LocalTime />
          </p>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                onClick={(event) => handleNavigate(event, item.href)}
                className="text-sm font-medium text-current/70 transition-colors hover:text-current"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href={`/${ctaButton.href}`}
              onClick={(event) => handleNavigate(event, ctaButton.href)}
              className="group/roll flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent hover:text-white"
            >
              <RollText>{ctaButton.label}</RollText>
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 items-center gap-3 rounded-full border border-current/20 px-4"
              aria-expanded={menuOpen}
              aria-controls={MENU_ID}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="eyebrow">{menuOpen ? 'Close' : 'Menu'}</span>
              <span className="relative h-2.5 w-4" aria-hidden="true">
                <motion.span
                  className="absolute left-0 top-0 h-px w-full bg-current"
                  animate={menuOpen ? { top: '50%', rotate: 45 } : { top: '0%', rotate: 0 }}
                  transition={{ duration: 0.4, ease: ease.expo }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 h-px w-full bg-current"
                  animate={menuOpen ? { bottom: '45%', rotate: -45 } : { bottom: '0%', rotate: 0 }}
                  transition={{ duration: 0.4, ease: ease.expo }}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>{menuOpen && <MobileMenu onNavigate={handleNavigate} />}</AnimatePresence>
    </>
  );
};

export default Navbar;
