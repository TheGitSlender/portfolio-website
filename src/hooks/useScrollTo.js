/**
 * useScrollTo Hook
 *
 * Smooth-scrolls to a selector, element, page offset in px, or 'top'. Uses the Lenis instance
 * when smooth scrolling is active, and native scrolling otherwise
 * (reduced motion), so callers never need to care which one is running.
 */

import { useCallback } from 'react';
import { useLenis } from 'lenis/react';

const easeInOutExpo = (t) => {
  if (t === 0 || t === 1) return t;
  return t < 0.5 ? 2 ** (20 * t - 10) / 2 : (2 - 2 ** (-20 * t + 10)) / 2;
};

export const useScrollTo = () => {
  const lenis = useLenis();

  return useCallback(
    (target, { immediate = false } = {}) => {
      const destination =
        target === 'top' ? 0 : typeof target === 'string' ? document.querySelector(target) : target;
      if (destination === null || destination === undefined) return;

      if (lenis) {
        // Lenis caches the max scroll and refreshes it on a debounce; after a
        // route change it can still hold the previous page's (shorter) limit
        // and would clamp the target. Re-measure first.
        lenis.resize();
        lenis.scrollTo(destination, { immediate, force: true, duration: 1.6, easing: easeInOutExpo });
        return;
      }

      if (typeof destination === 'number') {
        window.scrollTo({ top: destination, behavior: 'auto' });
      } else {
        destination.scrollIntoView({ behavior: 'auto' });
      }
    },
    [lenis]
  );
};

export default useScrollTo;
