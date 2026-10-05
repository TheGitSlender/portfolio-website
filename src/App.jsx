/**
 * App Component
 *
 * Root application component that handles:
 * - Smooth scrolling (Lenis) and reduced-motion aware animation defaults
 * - The first-visit preloader and the intro state hero entrances wait on
 * - Route definitions with stair-wipe page transitions
 *
 * Routes:
 * - "/" : Home page (main portfolio)
 * - "/project/:id" : Individual project detail page
 * - "*" : 404 Not Found page
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';

// Layout & motion shell
import Layout from './components/layout/Layout';
import SmoothScroll from './components/motion/SmoothScroll';
import Preloader from './components/motion/Preloader';
import { IntroContext } from './hooks/IntroContext';

// Pages
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

// Favicon
import logo from './assets/pictures/logo.png';

const INTRO_KEY = 'intro-seen';

/**
 * The preloader plays once per session, only when landing on the home page,
 * and never for users who prefer reduced motion.
 */
const shouldPlayIntro = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (window.location.pathname !== '/') return false;
  try {
    return sessionStorage.getItem(INTRO_KEY) !== '1';
  } catch {
    return true;
  }
};

function App() {
  const location = useLocation();
  const [showPreloader, setShowPreloader] = useState(shouldPlayIntro);
  const [introDone, setIntroDone] = useState(() => !showPreloader);

  const handleReveal = useCallback(() => {
    setIntroDone(true);
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      // Storage blocked: the intro will simply play again next visit
    }
  }, []);

  const handlePreloaderFinish = useCallback(() => setShowPreloader(false), []);

  // Page transitions own scroll position; stop the browser restoring it
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  const intro = useMemo(() => ({ introDone }), [introDone]);

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <IntroContext.Provider value={intro}>
          {/* React 19 document metadata */}
          <link rel="icon" type="image/png" href={logo} />

          {showPreloader && <Preloader onReveal={handleReveal} onFinish={handlePreloaderFinish} />}

          <Layout>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                {/* Home page - main portfolio */}
                <Route path="/" element={<Home />} />

                {/* Project detail page - dynamic route */}
                <Route path="/project/:id" element={<ProjectDetail />} />

                {/* 404 Not Found - catches all unmatched routes */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Layout>
        </IntroContext.Provider>
      </SmoothScroll>
    </MotionConfig>
  );
}

export default App;
