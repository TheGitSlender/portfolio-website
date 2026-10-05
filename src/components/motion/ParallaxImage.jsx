/**
 * ParallaxImage
 *
 * Image that wipes in from the bottom (clip-path) when it enters view, then
 * drifts against the scroll inside its frame for depth.
 *
 * @param {number} speed - Drift as a fraction of the frame height
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ease, viewportOnce } from '../../config/animations';

const ParallaxImage = ({ src, alt, className = '', imgClassName = '', speed = 0.1 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={viewportOnce}
      transition={{ duration: 1.4, ease: ease.expo }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        decoding="async"
        style={{ y, scale: 1 + speed * 2.4 }}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
      />
    </motion.div>
  );
};

export default ParallaxImage;
