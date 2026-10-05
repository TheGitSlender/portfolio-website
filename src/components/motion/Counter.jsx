/**
 * Counter
 *
 * Counts the numeric part of a stat up from zero when it scrolls into view,
 * keeping any prefix/suffix ("Top 3%", "~295×", "200+"). Values with no
 * number render as-is.
 */

import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const NUMERIC = /^(\D*?)(\d+(?:\.\d+)?)(.*)$/;

const Counter = ({ value, duration = 1.8, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const prefersReducedMotion = useReducedMotion();
  const match = String(value).match(NUMERIC);
  const hasNumber = Boolean(match);
  const target = match ? parseFloat(match[2]) : 0;
  const decimals = match?.[2].includes('.') ? match[2].split('.')[1].length : 0;

  const count = useMotionValue(0);
  const display = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!hasNumber || !inView) return undefined;
    if (prefersReducedMotion) {
      count.set(target);
      return undefined;
    }
    const controls = animate(count, target, { duration, ease: [0.25, 1, 0.5, 1] });
    return () => controls.stop();
  }, [inView, prefersReducedMotion, target, duration, count, hasNumber]);

  if (!match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {match[1]}
        <motion.span>{display}</motion.span>
        {match[3]}
      </span>
    </span>
  );
};

export default Counter;
