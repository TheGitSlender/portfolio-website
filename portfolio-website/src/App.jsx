/**
 * App Component
 *
 * Root application component that handles:
 * - Route definitions for all pages
 * - Layout wrapper for consistent page structure
 * - Scroll restoration on route change
 *
 * Routes:
 * - "/" : Home page (main portfolio)
 * - "/project/:id" : Individual project detail page
 * - "*" : 404 Not Found page
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

/**
 * ScrollToTop Component
 * Scrolls to top of page on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Main App Component
 */
function App() {
  const location = useLocation();

  return (
    <>
      {/* Scroll restoration on route change */}
      <ScrollToTop />

      {/* Main layout wrapper with header and footer */}
      <Layout>
        {/* AnimatePresence for page transition animations */}
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
    </>
  );
}

export default App;
