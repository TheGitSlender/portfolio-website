/**
 * Certifications Section
 *
 * Displays professional certifications and upcoming goals.
 * Features stacked cards with hover effects and progress tracking.
 */

import { motion } from 'framer-motion';
import { Cloud, BarChart, Shield, Cpu, Brain } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';
import AnimatedHeading from '../ui/AnimatedHeading';
import ProgressBar from '../ui/ProgressBar';
import { certifications, upcomingGoals } from '../../data/certifications';
import { fadeUp, cardHover, viewport, indexedDelay } from '../../config/animations';

/**
 * Decorative zigzag line for visual interest
 */
const ZigZagLine = ({ side = 'left' }) => {
  return (
    <div
      className={`
        absolute top-0 bottom-0 w-4 flex flex-col justify-between py-12
        ${side === 'left' ? '-left-8' : '-right-8'}
      `}
    >
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="h-4 w-[2px] bg-[var(--color-accent-primary)] rotate-45 mb-4"
        />
      ))}
    </div>
  );
};

/**
 * Icon mapping for certifications
 */
const IconMap = { Cloud, BarChart, Shield, Cpu, Brain };

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-[var(--color-bg-secondary)] relative overflow-hidden">
      <div className="container-main relative">
        {/* Header */}
        <div className="mb-24">
          <SectionBadge className="mb-8">// GLOBAL ACCOLADES //</SectionBadge>
          <AnimatedHeading>
            Certifications <br />
            <span className="text-[var(--color-accent-primary)]">& Accolades.</span>
          </AnimatedHeading>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-16">
          {/* Decorative Lines - Hidden on mobile */}
          <div className="hidden md:block">
            <ZigZagLine side="left" />
            <ZigZagLine side="right" />
          </div>

          {/* Certification Cards */}
          <div className="flex flex-col gap-8 md:gap-12">
            {certifications.map((cert, index) => {
              const Icon = IconMap[cert.icon] || Cloud;
              return (
                <motion.div
                  key={cert.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  transition={indexedDelay(index)}
                  whileHover={cardHover}
                  className={`
                    relative bg-[var(--color-surface-muted)] rounded-[2.5rem] p-10 md:p-12
                    border border-[var(--color-border-default)] flex flex-col md:flex-row
                    items-center gap-8 transition-all duration-300
                    cursor-pointer w-full
                    ${index % 2 === 0 ? 'md:-translate-x-8' : 'md:translate-x-8'}
                  `}
                >
                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-[var(--color-surface-card)] flex items-center justify-center shadow-md border border-[var(--color-border-subtle)] shrink-0">
                    <Icon
                      className="w-12 h-12 text-[var(--color-accent-primary)]"
                      strokeWidth={1.2}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-accent-primary)] mb-2 block">
                      {cert.title}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                      {cert.subtitle}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-2xl">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Goals */}
        <div className="mt-32 max-w-5xl mx-auto px-4 md:px-16">
          <div className="bg-[var(--color-surface-muted)] rounded-[2.5rem] p-12 border border-[var(--color-border-default)]">
            <h3 className="text-2xl font-bold mb-8 italic tracking-tight font-sans">
              Upcoming Goals
            </h3>
            {upcomingGoals.map((goal, i) => (
              <div key={i} className="space-y-6">
                <p className="text-[var(--color-text-secondary)] text-base leading-relaxed max-w-3xl">
                  {goal.description.split(/(\*\*.*?\*\*)/).map((part, index) =>
                    part.startsWith('**') && part.endsWith('**') ? (
                      <strong key={index} className="text-[var(--color-text-primary)] font-bold">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
                <ProgressBar
                  progress={goal.progress}
                  label="Training Progress"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
