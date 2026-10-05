/**
 * TickerTape
 *
 * Two crossing tapes of focus areas that scroll in opposite directions and
 * react to scroll velocity, bridging the hero into the About section.
 */

import VelocityMarquee from '../motion/VelocityMarquee';
import { personalInfo } from '../../data/personal';

const TAPE_TEXT = 'text-[clamp(1.6rem,3.6vw,3.25rem)] font-semibold uppercase tracking-[-0.03em]';

const TickerTape = () => (
  <section aria-label="Focus areas" className="relative h-[clamp(11rem,22vw,18rem)] overflow-hidden">
    <div className="absolute left-[-5%] top-1/2 w-[110%] -translate-y-1/2 rotate-[4deg] bg-ink py-3 text-paper md:py-4">
      <VelocityMarquee items={personalInfo.focusAreas} baseVelocity={1.6} itemClassName={TAPE_TEXT} />
    </div>
    <div className="absolute left-[-5%] top-1/2 w-[110%] -translate-y-1/2 -rotate-[4deg] bg-accent py-3 text-white shadow-glow md:py-4">
      <VelocityMarquee items={personalInfo.focusAreas} baseVelocity={-1.6} itemClassName={TAPE_TEXT} />
    </div>
  </section>
);

export default TickerTape;
