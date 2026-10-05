/**
 * ScrollRevealText
 *
 * A statement that "reads itself": each word brightens from faint to full
 * opacity as the paragraph scrolls through the viewport. Supports *emphasis*.
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { parseEmphasis } from '../../utils/emphasis';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const EM_CLASS = 'font-serif italic font-normal tracking-normal text-accent';

const Word = ({ word, em, progress, range }) => {
  const opacity = useTransform(progress, range, [0.14, 1]);

  return (
    <motion.span style={{ opacity }} className={`mr-[0.24em] inline-block ${em ? EM_CLASS : ''}`}>
      {word}
    </motion.span>
  );
};

const ScrollRevealText = ({ text, className = '' }) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.5'],
  });
  const words = parseEmphasis(text);

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map(({ word, em }, index) =>
        prefersReducedMotion ? (
          <span key={index} className={`mr-[0.24em] inline-block ${em ? EM_CLASS : ''}`}>
            {word}
          </span>
        ) : (
          <Word
            key={index}
            word={word}
            em={em}
            progress={scrollYProgress}
            range={[index / words.length, (index + 1) / words.length]}
          />
        )
      )}
    </p>
  );
};

export default ScrollRevealText;
