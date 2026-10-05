/**
 * Hero option: Annotated
 *
 * Classic layout marked up by hand: accent margin notes and arrows that
 * draw themselves after the name lands ("hi, that's me", founder @ Axon,
 * the top hackathon win), plus a scribbled underline under the rotating
 * phrase. Notes tilt a little on hover; the Axon note links out.
 */

import { motion } from 'framer-motion';
import ClassicLayout from './ClassicLayout';
import { HeroShell } from './HeroParts';
import { heroNotes } from '../../../data/hero';
import { experiences } from '../../../data/experience';
import { achievements } from '../../../data/achievements';
import { ease } from '../../../config/animations';
import { useIntro } from '../../../hooks/IntroContext';

const founder = experiences.find((exp) => exp.type === 'founder');
const topWin = achievements[0];

const stroke = (delay, duration = 0.9) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration, ease: ease.smooth, delay }, opacity: { duration: 0.01, delay } },
  },
});

const write = (delay) => ({
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: ease.expo, delay } },
});

const PATH_PROPS = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  vectorEffect: 'non-scaling-stroke',
};

/** Plays its children's variants once the intro has finished (strokes are aria-hidden) */
const Ink = ({ children, className = '', as = 'div' }) => {
  const { introDone } = useIntro();
  const Tag = motion[as];
  return (
    <Tag className={`text-accent ${className}`} initial="hidden" animate={introDone ? 'visible' : 'hidden'}>
      {children}
    </Tag>
  );
};

/** Right of "Hany": a looping arrow back to the name + "hi, that's me" */
const IntroNote = () => (
  <Ink className="flex h-full items-center gap-2">
    <svg aria-hidden="true" viewBox="0 0 170 100" className="h-24 w-40 shrink-0 -scale-x-100 rotate-6">
      <motion.path
        {...PATH_PROPS}
        variants={stroke(1.3)}
        d="M8 20 C 40 6, 66 18, 60 40 C 55 58, 32 54, 38 36 C 46 14, 96 24, 124 50 C 136 61, 148 72, 160 84"
      />
      <motion.path {...PATH_PROPS} variants={stroke(2.1, 0.25)} d="M160 84 L 143 82 M160 84 L 156 67" />
    </svg>
    <motion.p
      variants={write(1.6)}
      whileHover={{ rotate: 2, scale: 1.04 }}
      className="-rotate-[4deg] font-hand text-[clamp(1.9rem,2.6vw,2.6rem)] font-semibold leading-none"
    >
      {heroNotes.intro}
    </motion.p>
  </Ink>
);

/** Left of "El Atlassi": founder note with an arrow pointing at the name */
const FounderNote = () => (
  <Ink className="flex h-full items-center justify-end gap-3">
    <motion.a
      href={founder.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      variants={write(1.9)}
      whileHover={{ rotate: -1, scale: 1.04 }}
      className="block rotate-[-3deg] text-right font-hand leading-[0.95]"
    >
      <span className="block text-[clamp(1.9rem,2.6vw,2.6rem)] font-semibold">
        {founder.role.toLowerCase()} @ {founder.company}
      </span>
      <span className="block text-[clamp(1.2rem,1.5vw,1.5rem)] opacity-80">({heroNotes.founderSuffix})</span>
    </motion.a>
    <svg aria-hidden="true" viewBox="0 0 120 60" className="h-14 w-28 shrink-0">
      <motion.path {...PATH_PROPS} variants={stroke(2.2, 0.7)} d="M6 42 C 30 18, 64 14, 110 30" />
      <motion.path {...PATH_PROPS} variants={stroke(2.85, 0.25)} d="M110 30 L 95 22 M110 30 L 98 41" />
    </svg>
  </Ink>
);

/** Scribbled double underline under the rotating phrase */
const Underline = () => (
  <Ink as="span" className="pointer-events-none absolute -bottom-2 left-0 right-0 block h-4">
    <svg aria-hidden="true" viewBox="0 0 300 16" preserveAspectRatio="none" className="h-full w-full">
      <motion.path
        {...PATH_PROPS}
        variants={stroke(1.4, 0.8)}
        d="M3 9 C 60 3, 130 12, 200 6 S 270 5, 297 8"
      />
      <motion.path
        {...PATH_PROPS}
        strokeWidth={1.4}
        variants={stroke(1.9, 0.6)}
        d="M24 14 C 90 9, 170 15, 240 11"
      />
    </svg>
  </Ink>
);

/** Under the buttons: the top win, with an arrow up to "See the work" */
const WinNote = () => (
  <Ink className="pointer-events-none absolute left-6 top-full mt-2 hidden items-start gap-1 md:flex">
    <svg aria-hidden="true" viewBox="0 0 60 50" className="h-11 w-14 shrink-0">
      <motion.path {...PATH_PROPS} variants={stroke(2.5, 0.6)} d="M46 44 C 30 40, 14 28, 12 8" />
      <motion.path {...PATH_PROPS} variants={stroke(3.05, 0.2)} d="M12 8 L 5 20 M12 8 L 21 18" />
    </svg>
    <motion.p
      variants={write(2.7)}
      className="mt-5 -rotate-2 whitespace-nowrap font-hand text-[1.45rem] font-semibold leading-none"
    >
      {heroNotes.winPrefix} {topWin.place.toLowerCase()} @ {topWin.event.split(' ')[0]}
    </motion.p>
  </Ink>
);

const HeroAnnotated = () => (
  <HeroShell>
    {(progress) => (
      <ClassicLayout
        progress={progress}
        corner={<IntroNote />}
        lead={<FounderNote />}
        statementDecoration={<Underline />}
        introNote={<WinNote />}
      />
    )}
  </HeroShell>
);

export default HeroAnnotated;
