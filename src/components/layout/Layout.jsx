/**
 * Layout Component
 *
 * Persistent chrome around every route: scroll progress, cursor follower,
 * film grain, navbar and footer. Pages swap inside <main>.
 */

import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from '../motion/Cursor';
import ScrollProgress from '../motion/ScrollProgress';

const Layout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-bg">
      <ScrollProgress />
      <Cursor />
      <div className="grain" aria-hidden="true" />

      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
