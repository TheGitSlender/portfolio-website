/**
 * Not Found (404) Page
 *
 * Displayed when a user navigates to a route that doesn't exist.
 * Features:
 * - Friendly 404 message
 * - Link back to home page
 * - Consistent styling with rest of site
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

/**
 * Page transition animation variants
 */
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const NotFound = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex min-h-screen items-center justify-center px-4"
    >
      <div className="text-center">
        {/* 404 number */}
        <h1 className="text-8xl font-bold text-[--color-surface-border] md:text-9xl">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold text-[--color-primary-text] md:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-4 max-w-md text-[--color-primary-text-secondary]">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Navigation buttons */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[--color-accent-blue] px-6 py-3 font-medium text-white transition-all hover:bg-[--color-accent-blue-dark] hover:shadow-lg"
          >
            <Home size={20} />
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[--color-surface-border] px-6 py-3 font-medium text-[--color-primary-text] transition-all hover:border-[--color-accent-blue] hover:text-[--color-accent-blue]"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
