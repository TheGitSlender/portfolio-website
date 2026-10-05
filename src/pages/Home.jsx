/**
 * Home Page
 *
 * Composes the portfolio sections. When arriving with a hash ("/#projects"
 * from a project page), it jumps to that section while the page-transition
 * curtain still covers the screen.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageTransition from '../components/motion/PageTransition';
import Hero from '../components/sections/Hero';
import TickerTape from '../components/sections/TickerTape';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Achievements from '../components/sections/Achievements';
import Skills from '../components/sections/Skills';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';
import { useScrollTo } from '../hooks/useScrollTo';

const HASH_SCROLL_DELAY = 80;

const Home = () => {
  const { hash } = useLocation();
  const scrollTo = useScrollTo();

  useEffect(() => {
    if (!hash) return undefined;
    // Let pinned/sticky sections measure themselves before jumping
    const id = setTimeout(() => scrollTo(hash, { immediate: true }), HASH_SCROLL_DELAY);
    return () => clearTimeout(id);
  }, [hash, scrollTo]);

  return (
    <PageTransition>
      <Hero />
      <TickerTape />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Certifications />
      <Contact />
    </PageTransition>
  );
};

export default Home;
