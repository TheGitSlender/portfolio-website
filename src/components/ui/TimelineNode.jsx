/**
 * TimelineNode Component
 *
 * Formix-style: Dark theme timeline node.
 * Features alternating layout on desktop.
 */

import { motion } from 'framer-motion';

const TimelineNode = ({ experience, index = 0 }) => {
  const {
    role,
    company,
    location,
    period,
    current,
    description,
    skills,
  } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative mb-12 last:mb-0 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'
        }`}
    >
      {/* Connector Dot */}
      <div
        className={`absolute top-0 w-4 h-4 rounded-full border-2 border-[var(--color-bg-primary)] z-10 
          ${index % 2 === 0 ? '-left-[9px] md:-left-[9px]' : '-left-[9px] md:-right-[9px]'}
          ${current ? 'bg-[var(--color-accent-primary)] shadow-[var(--shadow-glow)]' : 'bg-[var(--color-border-subtle)]'}
        `}
      />

      {/* Date - Positioned opposite on desktop */}
      <div className={`text-sm text-[var(--color-text-tertiary)] mb-2 font-mono
        md:absolute md:top-0 ${index % 2 === 0 ? 'md:-left-[calc(100%+3rem)] md:text-right md:w-full' : 'md:-right-[calc(100%+3rem)] md:text-left md:w-full'}
      `}>
        {period.start} — {period.end}
      </div>

      <div className={`group p-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-hover)] transition-colors
         ${current ? 'border-[var(--color-accent-primary)]/30' : ''}
      `}>
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent-primary)] transition-colors">
          {role}
        </h3>
        <p className="text-[var(--color-text-primary)] font-medium mb-4">
          {company} <span className="text-[var(--color-text-tertiary)]">• {location}</span>
        </p>

        <ul className={`space-y-2 mb-4 text-[var(--color-text-secondary)] text-sm
           ${index % 2 !== 0 ? 'md:items-end' : ''}
        `}>
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
          {skills.map(skill => (
            <span key={skill} className="px-2 py-1 text-xs rounded border border-[var(--color-border-subtle)] text-[var(--color-text-tertiary)]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineNode;
