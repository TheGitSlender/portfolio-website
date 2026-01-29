/**
 * Navbar
 *
 * Fixed navigation header with responsive mobile menu.
 * Shows backdrop blur and border on scroll.
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { navItems, ctaButton } from '../../data/navigation';
import { durations } from '../../config/animations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to hash target after navigating back to home
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isMobileMenuOpen
          ? 'bg-[var(--color-bg-primary)] py-4 border-b border-[var(--color-border-subtle)]'
          : isScrolled
            ? 'bg-[var(--color-bg-primary)]/80 backdrop-blur-md py-4 border-b border-[var(--color-border-subtle)]'
            : 'bg-transparent py-6'
        }
      `}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
          className="text-xl font-extrabold tracking-tighter uppercase text-[var(--color-text-primary)] z-50"
        >
          Hany El Atlassi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={`/${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button
            to={`/${ctaButton.href}`}
            variant="primary"
            className="text-sm px-6 py-2.5 rounded-full"
            onClick={(e) => handleNavClick(e, ctaButton.href)}
          >
            {ctaButton.label}
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--color-text-primary)] z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: durations.fast }}
            className="md:hidden fixed inset-0 top-0 bg-[var(--color-bg-primary)] z-40"
          >
            <div className="flex flex-col justify-center items-center h-full gap-8 px-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/${item.href}`}
                    className="text-3xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-4"
              >
                <Button
                  to={`/${ctaButton.href}`}
                  variant="primary"
                  className="px-10 py-4 text-lg"
                  onClick={(e) => handleNavClick(e, ctaButton.href)}
                >
                  {ctaButton.label}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
