/**
 * Hero building blocks.
 *
 * HeroShell owns the full-viewport section, the ambient dot field, the meta
 * row and the scroll-away (scale + fade). It passes the section's scroll
 * progress to its children for parallax.
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import CircularBadge from '../CircularBadge';
import DotField from '../DotField';
import SplitText from '../../motion/SplitText';
import RotatingWords from '../../motion/RotatingWords';
import RollText from '../../motion/RollText';
import { personalInfo } from '../../../data/personal';
import { experiences } from '../../../data/experience';
import { ease, fadeUp, stagger } from '../../../config/animations';
import { useIntro } from '../../../hooks/IntroContext';
import { useScrollTo } from '../../../hooks/useScrollTo';

const founderRole = experiences.find((exp) => exp.type === 'founder');

const MetaRow = () => {
  const { introDone } = useIntro();
  return (
    <motion.div
      className="flex items-start justify-between gap-6"
      variants={stagger(0.1, 0.5)}
      initial="hidden"
      animate={introDone ? 'visible' : 'hidden'}
    >
      <motion.p
        variants={fadeUp}
        className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/90 px-4 py-2"
      >
        <span className="pulse-dot relative h-2 w-2 rounded-full bg-accent" />
        <span className="eyebrow text-fg">{personalInfo.availability.message}</span>
      </motion.p>
      {founderRole && (
        <motion.p variants={fadeUp} className="eyebrow hidden text-right text-fg-muted md:block">
          {founderRole.role}, {founderRole.company}
          <br />
          {founderRole.badges?.[1]}
        </motion.p>
      )}
    </motion.div>
  );
};

export const HeroShell = ({ children }) => {
  const { introDone } = useIntro();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pb-8 pt-[calc(var(--nav-h)+1.5rem)]"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 2, ease: ease.smooth, delay: 0.4 }}
      >
        <DotField />
      </motion.div>

      <motion.div
        style={{ scale, opacity }}
        className="container-main relative z-10 flex flex-1 origin-top flex-col"
      >
        <MetaRow />
        {typeof children === 'function' ? children(scrollYProgress) : children}
      </motion.div>
    </section>
  );
};

/** "AI & Security Engineer building <rotating phrase>" */
export const HeroStatement = ({ className = '', decoration = null }) => {
  const { introDone } = useIntro();
  return (
    <motion.p
      variants={fadeUp}
      className={`text-[clamp(1.35rem,2.4vw,2.1rem)] font-medium leading-[1.15] tracking-[-0.03em] ${className}`}
    >
      {personalInfo.heroStatement}
      <br />
      <span className="relative inline-block">
        <RotatingWords
          words={personalInfo.heroRotatingWords}
          play={introDone}
          className="font-serif font-normal italic tracking-normal text-accent"
        />
        {decoration}
      </span>
    </motion.p>
  );
};

/** Tagline + "See the work" button */
export const HeroIntro = ({ className = '', showTagline = true, children = null }) => {
  const scrollTo = useScrollTo();
  return (
    <motion.div variants={fadeUp} className={`relative ${className}`}>
      {children}
      {showTagline && (
        <p className="mb-6 max-w-md text-[15px] leading-relaxed text-fg-muted">{personalInfo.tagline}</p>
      )}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="/#projects"
          onClick={(event) => {
            event.preventDefault();
            scrollTo('#projects');
          }}
          className="group/roll flex items-center gap-3 rounded-full bg-accent py-2 pl-6 pr-2 font-medium text-white shadow-glow"
        >
          <RollText>See the work</RollText>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-expo group-hover/roll:-rotate-45">
            <ArrowDownRight size={16} />
          </span>
        </a>
      </div>
    </motion.div>
  );
};

/** Spinning "Open to work" badge that scrolls to About */
export const HeroBadge = ({ progress, className = '' }) => {
  const scrollTo = useScrollTo();
  const rotate = useTransform(progress, [0, 1], [0, 240]);
  return (
    <motion.div variants={fadeUp} className={className}>
      <button
        type="button"
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to about"
        className="block w-24 text-fg lg:w-28"
      >
        <CircularBadge text="Open to work • Open to relocation • " rotate={rotate} />
      </button>
    </motion.div>
  );
};

/** Stagger wrapper for the copy blocks under the name */
export const HeroReveal = ({ children, className = '', delay = 0.9 }) => {
  const { introDone } = useIntro();
  return (
    <motion.div
      className={className}
      variants={stagger(0.12, delay)}
      initial="hidden"
      animate={introDone ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};
