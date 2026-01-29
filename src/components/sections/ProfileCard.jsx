/**
 * ProfileCard
 *
 * Animated profile image with concentric rotating rings and collaboration badge.
 * Used in the Hero section to display the profile picture.
 * Rings scale down on mobile to avoid overlapping adjacent content.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { springs, float, ringRotate } from '../../config/animations';
import profilePic from '../../assets/pictures/pfp.webp';

const ProfileCard = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Smaller rings on mobile to stay within bounds
  const outerScale = isMobile ? [1.1, 1.13, 1.1] : [1.3, 1.35, 1.3];
  const middleScale = isMobile ? [1.0, 1.03, 1.0] : [1.1, 1.15, 1.1];

  return (
    <div className={`relative w-full aspect-square flex items-center justify-center ${isMobile ? 'max-w-[480px] overflow-hidden' : 'max-w-[560px]'}`}>
      {/* Outer Ring - Slow rotation with breathing scale */}
      <motion.div
        className="absolute inset-0 border border-[var(--color-ring)] rounded-full opacity-40"
        animate={{
          rotate: 360,
          scale: outerScale,
        }}
        transition={{
          rotate: { duration: 40, ease: 'linear', repeat: Infinity },
          scale: { duration: 8, ease: 'easeInOut', repeat: Infinity },
        }}
      />

      {/* Middle Ring - Counter-rotation */}
      <motion.div
        className="absolute inset-0 border border-[var(--color-ring)] rounded-full opacity-70"
        animate={{
          rotate: -360,
          scale: middleScale,
        }}
        transition={{
          rotate: { duration: 30, ease: 'linear', repeat: Infinity },
          scale: { duration: 6, ease: 'easeInOut', repeat: Infinity, delay: 0.5 },
        }}
      />

      {/* Inner Ring */}
      <motion.div
        className="absolute inset-0 border border-[var(--color-ring)] rounded-full opacity-90 scale-[0.9]"
        animate={ringRotate(50)}
      />

      {/* Profile Image with Float */}
      <motion.div
        className="relative w-4/5 h-4/5 rounded-full bg-[var(--color-surface-card)] overflow-hidden border border-[var(--color-border-default)] z-10 shadow-xl"
        animate={float}
      >
        <img
          src={profilePic}
          alt="Hany El Atlassi"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Collaboration Badge */}
      <motion.div
        className="absolute bottom-[5%] left-[5%] z-20 cursor-pointer"
        initial={{ rotate: -12, scale: 0 }}
        animate={{ rotate: -12, scale: 1 }}
        transition={{ ...springs.badge, delay: 0.5 }}
        whileHover={{
          scale: 1.1,
          rotate: 0,
          zIndex: 50,
          transition: { ...springs.badge },
        }}
      >
        <div className="bg-[var(--color-accent-primary)] text-white rounded-full p-4 flex items-center justify-center text-center w-[clamp(80px,8vw+40px,120px)] aspect-square shadow-[0_10px_20px_rgba(255,55,0,0.3)]">
          <span className="text-[clamp(8px,1vw,10px)] font-black leading-tight uppercase tracking-widest">
            Open for <br /> COLLAB
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
