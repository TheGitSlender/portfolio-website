/**
 * SectionIntro
 *
 * Shared section header: numbered mono eyebrow, a kinetic split-text title
 * (supports *emphasis*), and an optional aside aligned to the baseline.
 *
 * @param {string} index - Section number, e.g. '02'
 * @param {string} label - Eyebrow label
 * @param {string} title - Heading copy
 * @param {node}   aside - Optional supporting copy
 */

import SplitText from '../motion/SplitText';
import Reveal from '../motion/Reveal';

export const Eyebrow = ({ index, label, className = '' }) => (
  <p className={`eyebrow flex items-center gap-3 ${className}`}>
    <span className="text-accent">({index})</span>
    <span className="h-px w-10 bg-current opacity-30" />
    <span>{label}</span>
  </p>
);

const SectionIntro = ({ index, label, title, aside, className = '' }) => (
  <div className={`grid gap-8 lg:grid-cols-12 lg:items-end ${className}`}>
    <div className="lg:col-span-8">
      <Reveal>
        <Eyebrow index={index} label={label} className="mb-6 text-fg-muted" />
      </Reveal>
      <SplitText
        as="h2"
        text={title}
        className="text-[clamp(2.75rem,7.4vw,7rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
      />
    </div>
    {aside && (
      <Reveal
        delay={0.2}
        className="max-w-sm text-base leading-relaxed text-fg-muted lg:col-span-4 lg:justify-self-end lg:text-right"
      >
        {aside}
      </Reveal>
    )}
  </div>
);

export default SectionIntro;
