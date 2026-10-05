/**
 * Hero option: ASCII sculpture
 *
 * Classic layout with a rotating ASCII-rendered torus knot beside the first
 * name, captioned like a figure in a paper. Drag to turn it.
 */

import { motion } from 'framer-motion';
import AsciiKnot from './AsciiKnot';
import ClassicLayout from './ClassicLayout';
import { HeroShell } from './HeroParts';
import { ease } from '../../../config/animations';
import { useIntro } from '../../../hooks/IntroContext';

const Caption = () => (
  <p className="eyebrow max-w-[12rem] text-fg-subtle">
    <span className="text-accent">Fig. 01</span> — (2,3) torus knot, rendered in ASCII. Drag to turn.
  </p>
);

const Sculpture = ({ compact = false }) => {
  const { introDone } = useIntro();
  return (
    <motion.div
      className={compact ? 'flex flex-col gap-3' : 'flex h-full items-end justify-end gap-6'}
      initial={{ opacity: 0 }}
      animate={{ opacity: introDone ? 1 : 0 }}
      transition={{ duration: 1.6, ease: ease.smooth, delay: 0.8 }}
    >
      {!compact && (
        <div className="pb-2">
          <Caption />
        </div>
      )}
      <div className={compact ? 'h-56 w-full' : '-mt-14 h-[calc(100%+3.5rem)] w-[min(100%,440px)] shrink-0'}>
        <AsciiKnot />
      </div>
      {compact && <Caption />}
    </motion.div>
  );
};

const HeroAscii = () => (
  <HeroShell>
    {(progress) => <ClassicLayout progress={progress} corner={<Sculpture />} below={<Sculpture compact />} />}
  </HeroShell>
);

export default HeroAscii;
