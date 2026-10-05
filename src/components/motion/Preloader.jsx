/**
 * Preloader
 *
 * First-visit intro: a counter runs 000 → 100 while a few words flick past,
 * then the ink panel lifts away with a liquid curved edge to reveal the hero.
 *
 * - `onReveal` fires as the curtain starts lifting (hero entrances sync to it)
 * - `onFinish` fires once the exit animation has completed
 *
 * App only mounts this on the first home-page visit of a session and never
 * for reduced motion.
 */

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { ease } from '../../config/animations';
import { personalInfo } from '../../data/personal';

const COUNT_DURATION = 2.1;
const HOLD_AFTER_COUNT = 250;
const CURVE_DEPTH = 240;

const Preloader = ({ onReveal, onFinish }) => {
  const { introWords, name, title, location } = personalInfo;
  const [visible, setVisible] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [viewport] = useState(() => ({ w: window.innerWidth, h: window.innerHeight }));
  const holdTimer = useRef(null);
  const lenis = useLenis();

  const count = useMotionValue(0);
  const counterText = useTransform(count, (v) => String(Math.round(v)).padStart(3, '0'));
  const progress = useTransform(count, [0, 100], [0, 1]);

  // Freeze scrolling while the curtain is down
  useEffect(() => {
    if (!visible) return undefined;
    lenis?.stop();
    document.documentElement.style.overflow = 'hidden';
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = '';
    };
  }, [visible, lenis]);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: COUNT_DURATION,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => {
        const next = Math.min(introWords.length - 1, Math.floor((v / 100) * introWords.length));
        setWordIndex(next);
      },
      onComplete: () => {
        holdTimer.current = setTimeout(() => {
          setVisible(false);
          onReveal();
        }, HOLD_AFTER_COUNT);
      },
    });

    return () => {
      controls.stop();
      clearTimeout(holdTimer.current);
    };
  }, [count, introWords.length, onReveal]);

  const { w, h } = viewport;
  const curvedPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h + CURVE_DEPTH} 0 ${h} L0 0`;
  const flatPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h} 0 ${h} L0 0`;
  const isLastWord = wordIndex === introWords.length - 1;

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] text-paper"
          exit={{ y: '-100%' }}
          transition={{ duration: 1.1, ease: ease.quart }}
          role="status"
          aria-label="Loading"
        >
          {/* Ink fill with a curved bottom edge that flattens as it lifts */}
          <svg
            className="absolute left-0 top-0 w-full"
            style={{ height: h + CURVE_DEPTH }}
            aria-hidden="true"
          >
            <motion.path
              initial={{ d: curvedPath }}
              animate={{ d: curvedPath }}
              exit={{ d: flatPath }}
              transition={{ duration: 1.1, ease: ease.quart }}
              fill="var(--color-ink)"
            />
          </svg>

          <motion.div
            className="container-main relative flex h-full flex-col justify-between py-6 md:py-8"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="eyebrow flex justify-between text-paper/60">
              <span>{name}</span>
              <span>Portfolio ©{new Date().getFullYear()}</span>
            </div>

            <div className="relative overflow-hidden pb-[0.1em]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={introWords[wordIndex]}
                  className={`block text-[clamp(3.5rem,13vw,12rem)] font-semibold leading-[0.95] tracking-[-0.05em] ${
                    isLastWord ? 'font-serif font-normal italic tracking-normal text-accent' : ''
                  }`}
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '-105%' }}
                  transition={{ duration: 0.55, ease: ease.expo }}
                >
                  {introWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="flex items-end justify-between gap-6">
              <p className="eyebrow max-w-[14rem] text-paper/60">
                {title}
                <br />
                {location}
              </p>
              <motion.span className="text-[clamp(3rem,9vw,8rem)] font-light leading-none tracking-[-0.04em] tabular-nums">
                {counterText}
              </motion.span>
            </div>

            <motion.div
              className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-accent"
              style={{ scaleX: progress }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
