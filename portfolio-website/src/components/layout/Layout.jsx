/**
 * Layout Component
 *
 * Main layout wrapper that provides consistent structure across all pages.
 */

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-primary)]">
      {/* Sticky header navigation */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
