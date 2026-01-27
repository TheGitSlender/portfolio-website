import { useState, useRef, useCallback } from 'react';

/**
 * Hook for magnetic hover effect
 * Elements subtly follow the cursor when hovered
 *
 * @param {number} intensity - How strongly the element follows cursor (default: 0.3)
 * @returns {object} - { ref, x, y, handleMouseMove, handleMouseLeave }
 */
export const useMagnetic = (intensity = 0.3) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * intensity;
    const deltaY = (e.clientY - centerY) * intensity;

    setPosition({ x: deltaX, y: deltaY });
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    x: position.x,
    y: position.y,
    handleMouseMove,
    handleMouseLeave,
  };
};

export default useMagnetic;
