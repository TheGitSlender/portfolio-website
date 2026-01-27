import { useState, useRef, useCallback } from 'react';

/**
 * Hook for 3D tilt effect on hover
 * Creates a subtle perspective tilt following the cursor
 *
 * @param {number} intensity - Tilt angle in degrees (default: 10)
 * @returns {object} - { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave }
 */
export const useTilt = (intensity = 10) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Get mouse position relative to element (0 to 1)
    const x = (e.clientX - rect.left) / width;
    const y = (e.clientY - rect.top) / height;

    // Convert to -1 to 1 range
    const normalizedX = (x - 0.5) * 2;
    const normalizedY = (y - 0.5) * 2;

    setTilt({
      rotateX: normalizedY * -intensity,
      rotateY: normalizedX * intensity,
    });
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return {
    ref,
    rotateX: tilt.rotateX,
    rotateY: tilt.rotateY,
    handleMouseMove,
    handleMouseLeave,
  };
};

export default useTilt;
