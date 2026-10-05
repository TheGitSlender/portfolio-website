/**
 * useSectionNav Hook
 *
 * Click handler for in-page section links ('#experience'). On the home page
 * it smooth-scrolls; elsewhere it routes to '/#section' and lets Home scroll
 * once it mounts.
 */

import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollTo } from './useScrollTo';

export const useSectionNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const scrollTo = useScrollTo();

  return useCallback(
    (event, href) => {
      event?.preventDefault();
      if (pathname === '/') {
        scrollTo(href);
      } else {
        navigate(`/${href}`);
      }
    },
    [pathname, navigate, scrollTo]
  );
};

export default useSectionNav;
