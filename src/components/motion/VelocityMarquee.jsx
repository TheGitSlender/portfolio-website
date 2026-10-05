/**
 * VelocityMarquee
 *
 * Infinite ticker whose speed and direction follow the scroll: scrolling down
 * pushes it forward, scrolling up reverses it, and fast scrolls add a skew.
 * Content is repeated 4x and wrapped every 25% so the loop is seamless.
 *
 * @param {string[]} items        - Words to repeat
 * @param {number}   baseVelocity - % of one copy per second (sign = direction)
 */

import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { wrap } from '../../config/animations';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const COPIES = 4;

const VelocityMarquee = ({ items, baseVelocity = -2, className = '', itemClassName = '' }) => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { margin: '100px 0px' });
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const skewX = useTransform(smoothVelocity, [-2500, 0, 2500], [7, 0, -7]);
  const x = useTransform(baseX, (v) => `${wrap(-100 / COPIES, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion || !inView) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);

    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;

    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="flex w-max will-change-transform" style={{ x, skewX }}>
        {Array.from({ length: COPIES }, (_, copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy > 0}>
            {items.map((item) => (
              <span key={`${copy}-${item}`} className={`flex items-center ${itemClassName}`}>
                {item}
                <span className="mx-[0.6em] font-serif text-[0.8em] italic opacity-70">✦</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VelocityMarquee;
