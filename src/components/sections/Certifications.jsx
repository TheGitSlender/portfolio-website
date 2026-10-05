/**
 * Certifications Section
 *
 * Certificate cards with a pointer-following spotlight, plus the current
 * learning goal with a progress bar that fills on view.
 */

import { useRef } from 'react';
import { motion } from 'framer-motion';
import SectionIntro from '../ui/SectionIntro';
import Reveal from '../motion/Reveal';
import Counter from '../motion/Counter';
import { getIcon } from '../ui/icons';
import { certifications, upcomingGoals } from '../../data/certifications';
import { ease, viewportOnce, tf } from '../../config/animations';

const renderBold = (text) =>
  text.split(/(\*\*.*?\*\*)/).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-semibold text-fg">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );

const SpotlightCard = ({ children, className = '' }) => {
  const ref = useRef(null);

  const handleMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    ref.current.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      className={`group/spot relative overflow-hidden rounded-[1.5rem] border border-line bg-surface transition-[border-color,transform] duration-500 ease-expo hover:-translate-y-1 hover:border-accent/40 ${className}`}
    >
      <div className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100" />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-[clamp(5rem,10vw,9rem)]">
      <div className="container-main">
        <SectionIntro index="06" label="Certifications" title="Always *learning*" />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = getIcon(cert.icon);
            return (
              <Reveal key={cert.id} delay={index * 0.08} className="h-full">
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col p-7 md:p-8">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-mono text-xs text-fg-subtle">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="eyebrow mt-10 text-accent">{cert.title}</p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.03em]">{cert.subtitle}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-fg-muted">{cert.description}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {upcomingGoals.map((goal, i) => (
          <Reveal key={i} className="mt-5">
            <div className="grid gap-8 rounded-[1.5rem] border border-dashed border-line-strong p-7 md:grid-cols-12 md:items-center md:p-10">
              <div className="md:col-span-7">
                <p className="eyebrow mb-3 flex items-center gap-2 text-fg-subtle">
                  <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-accent" />
                  In progress
                </p>
                <p className="text-lg leading-relaxed text-fg-muted">{renderBold(goal.description)}</p>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow text-fg-subtle">Training progress</span>
                  <Counter value={`${goal.progress}%`} className="text-3xl font-semibold tracking-[-0.04em]" />
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-line">
                  <motion.div
                    className="h-full origin-left rounded-full bg-accent"
                    style={{ width: `${goal.progress}%` }}
                    initial={{ transform: tf('scaleX(0)') }}
                    whileInView={{ transform: tf('scaleX(1)') }}
                    viewport={viewportOnce}
                    transition={{ duration: 1.8, ease: ease.expo }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
