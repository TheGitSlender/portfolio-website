/**
 * ImageReveal
 *
 * Wipes an image in from the bottom (clip-path) while it settles from a
 * slight zoom. The image keeps its natural aspect ratio and ends uncropped,
 * which suits product screenshots (use ParallaxImage for photos).
 */

import { motion } from 'framer-motion';
import { ease, viewportOnce, tf } from '../../config/animations';

const ImageReveal = ({ src, alt, className = '', imgClassName = '' }) => (
  <motion.div
    className={`relative overflow-hidden ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={{
      hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
      visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.4, ease: ease.expo } },
    }}
  >
    <motion.img
      src={src}
      alt={alt}
      draggable={false}
      decoding="async"
      className={`block h-auto w-full ${imgClassName}`}
      variants={{
        hidden: { transform: tf('scale(1.12)') },
        visible: { transform: tf('scale(1)'), transition: { duration: 1.8, ease: ease.expo } },
      }}
    />
  </motion.div>
);

export default ImageReveal;
