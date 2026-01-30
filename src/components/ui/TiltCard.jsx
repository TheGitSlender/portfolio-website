import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

/**
 * TiltCard - Wrapper component that adds 3D tilt effect on hover
 */
const TiltCard = ({ children, className = '', intensity = 8, style }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = (e.clientX - rect.left) / width;
    const y = (e.clientY - rect.top) / height;

    const normalizedX = (x - 0.5) * 2;
    const normalizedY = (y - 0.5) * 2;

    setTilt({
      rotateX: normalizedY * -intensity,
      rotateY: normalizedX * intensity,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformPerspective: 1000, transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
