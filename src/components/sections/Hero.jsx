/**
 * Hero Section
 *
 * Full-viewport opener: the oversized split name over the ambient dot field,
 * marked up with hand-drawn notes (see hero/HeroNotes), plus the statement,
 * CTAs and availability badge. Entrances wait for the preloader curtain;
 * scrolling away scales and fades the composition.
 */

import HeroLayout from './hero/HeroLayout';
import { HeroShell } from './hero/HeroParts';
import { FounderNote, IntroNote, Underline, WinNote } from './hero/HeroNotes';

const Hero = () => (
  <HeroShell>
    {(progress) => (
      <HeroLayout
        progress={progress}
        corner={<IntroNote />}
        lead={<FounderNote />}
        statementDecoration={<Underline />}
        introNote={<WinNote />}
      />
    )}
  </HeroShell>
);

export default Hero;
