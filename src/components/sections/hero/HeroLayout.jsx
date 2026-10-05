/**
 * HeroLayout
 *
 * The hero composition (oversized split name, statement, CTAs, badge) with
 * optional slots for decorations in the empty areas:
 *
 * - corner: right of the first name, as tall as that line (desktop)
 * - lead:   left of the right-aligned surname, as tall as that line (desktop)
 * - statementDecoration: drawn around the rotating phrase
 * - introNote: positioned relative to the CTA block
 *
 * Each name line is measured (ResizeObserver) and exposed as CSS variables
 * (--first-w, --last-w, --line-h), so slots track font loading and resizes.
 */

import { useLayoutEffect, useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import SplitText from '../../motion/SplitText';
import { HeroBadge, HeroIntro, HeroReveal, HeroStatement } from './HeroParts';
import { personalInfo } from '../../../data/personal';
import { useIntro } from '../../../hooks/IntroContext';

const SLOT_GAP = '3rem';

const HeroLayout = ({
  progress,
  corner = null,
  lead = null,
  statementDecoration = null,
  introNote = null,
}) => {
  const { introDone } = useIntro();
  const wrapperRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const nameY = useTransform(progress, [0, 1], ['0%', '40%']);
  const hasSlots = Boolean(corner || lead);

  useLayoutEffect(() => {
    if (!hasSlots) return undefined;
    const wrapper = wrapperRef.current;
    const measure = () => {
      wrapper.style.setProperty('--first-w', `${firstRef.current.offsetWidth}px`);
      wrapper.style.setProperty('--last-w', `${lastRef.current.offsetWidth}px`);
      wrapper.style.setProperty('--line-h', `${firstRef.current.parentElement.offsetHeight}px`);
    };
    const observer = new ResizeObserver(measure);
    [wrapper, firstRef.current, lastRef.current].forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [hasSlots]);

  return (
    <div className="flex flex-1 flex-col justify-center pb-[7vh] pt-10">
      <motion.div ref={wrapperRef} style={{ y: nameY }} className="relative">
        <h1 className="text-[clamp(3.75rem,15.2vw,15rem)] font-semibold leading-[0.84] tracking-[-0.06em]">
          <span className="block">
            <span ref={firstRef} className="inline-block">
              <SplitText text={personalInfo.firstName} play={introDone} delay={0.1} stagger={0.045} />
            </span>
          </span>
          <span className="block md:text-right">
            <span ref={lastRef} className="inline-block">
              <SplitText text={personalInfo.lastName} play={introDone} delay={0.3} stagger={0.045} />
            </span>
          </span>
        </h1>

        {corner && (
          <div
            className="absolute right-0 top-0 hidden lg:block"
            style={{ left: `calc(var(--first-w, 40%) + ${SLOT_GAP})`, height: 'var(--line-h, 45%)' }}
          >
            {corner}
          </div>
        )}
        {lead && (
          <div
            className="absolute left-0 hidden lg:block"
            style={{
              top: 'var(--line-h, 50%)',
              right: `calc(var(--last-w, 60%) + ${SLOT_GAP})`,
              height: 'var(--line-h, 45%)',
            }}
          >
            {lead}
          </div>
        )}
      </motion.div>

      <HeroReveal className="mt-10 grid items-end gap-8 md:mt-14 md:grid-cols-12">
        <HeroStatement className="md:col-span-6" decoration={statementDecoration} />
        <HeroIntro className="md:col-span-5 md:col-start-7 lg:col-span-4 lg:col-start-8">
          {introNote}
        </HeroIntro>
        <HeroBadge
          progress={progress}
          className="hidden justify-self-end md:col-span-1 md:col-start-12 md:block"
        />
      </HeroReveal>
    </div>
  );
};

export default HeroLayout;
