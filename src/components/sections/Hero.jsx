/**
 * Hero Section
 *
 * Renders one of several hero options (see ./hero/). While the owner is
 * choosing, the option comes from `?hero=<id>` (default: Classic) and a
 * temporary floating picker — shown in local development only — switches
 * between them; options cross-fade on change.
 */

import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import HeroClassic from './hero/HeroClassic';
import HeroAnnotated from './hero/HeroAnnotated';
import HeroDeck from './hero/HeroDeck';
import HeroAscii from './hero/HeroAscii';
import HeroVoice from './hero/HeroVoice';
import HeroOptionPicker from './hero/HeroOptionPicker';

const HERO_OPTIONS = [
  { id: 'classic', label: 'Classic', Component: HeroClassic },
  { id: 'annotated', label: 'Annotated', Component: HeroAnnotated },
  { id: 'deck', label: 'Project deck', Component: HeroDeck },
  { id: 'ascii', label: 'ASCII', Component: HeroAscii },
  { id: 'voice', label: 'Voice wave', Component: HeroVoice },
];

const Hero = () => {
  const [params, setParams] = useSearchParams();
  const active = HERO_OPTIONS.find((option) => option.id === params.get('hero')) ?? HERO_OPTIONS[0];
  const { Component } = active;

  const select = (id) => {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set('hero', id);
        return next;
      },
      { replace: true },
    );
  };

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Component />
        </motion.div>
      </AnimatePresence>
      {/* Comparison tool: dev only, so the live site just shows the chosen option */}
      {import.meta.env.DEV && (
        <HeroOptionPicker options={HERO_OPTIONS} activeId={active.id} onSelect={select} />
      )}
    </>
  );
};

export default Hero;
