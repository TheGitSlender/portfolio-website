/**
 * CircularBadge
 *
 * Text set on a circle that spins slowly around an arrow. Extra rotation
 * can be driven from outside (e.g. scroll progress) via the `rotate` value.
 */

import { useId } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const CircularBadge = ({ text, rotate = 0, className = '' }) => {
  const pathId = useId();

  return (
    <motion.div className={`relative aspect-square ${className}`} style={{ rotate }}>
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full animate-[spin_18s_linear_infinite]"
        aria-hidden="true"
      >
        <defs>
          <path id={pathId} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-current font-mono text-[15px] uppercase" letterSpacing="4.2">
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex h-[38%] w-[38%] items-center justify-center rounded-full bg-accent text-white">
        <ArrowDown className="h-1/2 w-1/2" strokeWidth={1.5} />
      </span>
    </motion.div>
  );
};

export default CircularBadge;
