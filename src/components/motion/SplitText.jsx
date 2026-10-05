/**
 * SplitText
 *
 * Kinetic heading: splits text into words (and optionally characters) that
 * rise out of overflow masks with a stagger. Words wrapped in *asterisks*
 * render in the italic serif accent.
 *
 * Screen readers get the plain string; the animated spans are aria-hidden.
 *
 * @param {string}  text      - Copy to animate (supports *emphasis*)
 * @param {string}  as        - Element to render (h1, h2, p, span...)
 * @param {'char'|'word'} by  - Split granularity
 * @param {boolean} play      - Explicit trigger; when omitted, plays in view
 * @param {number}  delay     - Seconds before the first piece moves
 * @param {number}  stagger   - Seconds between pieces
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ease, tf } from '../../config/animations';
import { parseEmphasis, stripEmphasis } from '../../utils/emphasis';

const pieceVariants = {
  hidden: { transform: tf('translateY(115%) rotate(4deg)') },
  visible: {
    transform: tf('translateY(0%) rotate(0deg)'),
    transition: { duration: 1.1, ease: ease.expo },
  },
};

const SplitText = ({
  text,
  as = 'span',
  by = 'char',
  className = '',
  emClassName = 'font-serif italic font-normal tracking-normal',
  play,
  delay = 0,
  stagger,
  once = true,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '0px 0px -12% 0px' });
  const active = play ?? inView;
  const Tag = motion[as];
  const words = parseEmphasis(text);
  const step = stagger ?? (by === 'char' ? 0.028 : 0.07);

  return (
    <Tag
      ref={ref}
      className={className}
      initial="hidden"
      animate={active ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: step, delayChildren: delay } },
      }}
    >
      <span className="sr-only">{stripEmphasis(text)}</span>
      <span aria-hidden="true">
        {words.map(({ word, em }, wordIndex) => (
          <span key={`${word}-${wordIndex}`}>
            <span
              className={`inline-block overflow-hidden whitespace-nowrap pb-[0.14em] -mb-[0.14em] align-top ${
                em ? `${emClassName} pr-[0.08em]` : ''
              }`}
            >
              {by === 'char' ? (
                [...word].map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block origin-bottom-left"
                    variants={pieceVariants}
                  >
                    {char}
                  </motion.span>
                ))
              ) : (
                <motion.span
                  className="inline-block origin-bottom-left"
                  variants={pieceVariants}
                >
                  {word}
                </motion.span>
              )}
            </span>
            {wordIndex < words.length - 1 && ' '}
          </span>
        ))}
      </span>
    </Tag>
  );
};

export default SplitText;
