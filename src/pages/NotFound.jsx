/**
 * Not Found (404) Page
 *
 * Displayed when a user navigates to a route that doesn't exist.
 */

import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/motion/PageTransition';
import SplitText from '../components/motion/SplitText';
import RollText from '../components/motion/RollText';
import Reveal from '../components/motion/Reveal';

const NotFound = () => {
  return (
    <PageTransition>
      <section className="container-main flex min-h-[100svh] flex-col items-center justify-center pb-16 pt-[var(--nav-h)] text-center">
        <SplitText
          as="h1"
          text="404"
          play
          delay={0.3}
          stagger={0.08}
          className="text-outline text-[clamp(8rem,32vw,24rem)] font-semibold leading-[0.85] tracking-[-0.06em] text-accent"
        />
        <SplitText
          as="p"
          by="word"
          text="Lost in the *signal.*"
          play
          delay={0.6}
          className="mt-6 text-[clamp(1.75rem,4vw,3.5rem)] font-semibold tracking-[-0.04em]"
        />
        <Reveal delay={0.9} className="flex flex-col items-center">
          <p className="mt-4 max-w-md text-fg-muted">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="group/roll flex items-center gap-2 rounded-full bg-fg px-6 py-3 font-medium text-bg transition-colors hover:bg-accent hover:text-white"
            >
              <ArrowLeft size={16} />
              <RollText>Back home</RollText>
            </Link>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
};

export default NotFound;
