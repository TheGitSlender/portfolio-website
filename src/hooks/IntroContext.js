/**
 * IntroContext
 *
 * Tells components whether the first-visit preloader has finished lifting,
 * so hero entrances can start in sync with the curtain.
 */

import { createContext, useContext } from 'react';

export const IntroContext = createContext({ introDone: true });

export const useIntro = () => useContext(IntroContext);

export default IntroContext;
