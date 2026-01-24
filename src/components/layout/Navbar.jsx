
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const navItems = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#experience' },
    { label: 'Stack', href: '#skills' },
];

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

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[var(--color-bg-primary)]/80 backdrop-blur-md py-4 border-b border-[var(--color-border-subtle)]'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container-main flex items-center justify-between">
                <Link to="/" className="text-xl font-extrabold tracking-tighter uppercase text-[var(--color-text-primary)]">
                    TheSlender
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map(item => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    <Button
                        to="#contact"
                        variant="primary"
                        className="text-sm px-6 py-2.5 rounded-full"
                    >
                        Get in touch
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[var(--color-text-primary)]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[var(--color-bg-secondary)] border-b border-[var(--color-border-subtle)] overflow-hidden"
                    >
                        <div className="container-main py-6 flex flex-col gap-4">
                            {navItems.map(item => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-lg font-bold text-[var(--color-text-primary)]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button to="#contact" variant="primary" className="w-full justify-center">
                                Get in touch
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
