/**
 * useMediaQuery Hook
 *
 * Subscribes to a CSS media query and returns whether it currently matches.
 * Built on useSyncExternalStore so the value is correct on the first render.
 *
 * @param {string} query - e.g. '(min-width: 1024px)'
 * @returns {boolean}
 */

import { useCallback, useSyncExternalStore } from 'react';

export const useMediaQuery = (query) => {
  const subscribe = useCallback(
    (onChange) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
};

/** True on devices with a precise, hover-capable pointer (mouse/trackpad) */
export const useFinePointer = () => useMediaQuery('(hover: hover) and (pointer: fine)');

export default useMediaQuery;
