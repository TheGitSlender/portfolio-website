/**
 * ExperienceEntry
 *
 * One role on the experience timeline. On desktop the role card sits on one
 * side of the centre spine and its dates + visual on the other, alternating
 * each entry; the meta column stays pinned while the card scrolls past. On
 * mobile everything stacks to the right of a left-hand spine.
 *
 * The node on the spine lights up as the entry reaches the middle of the
 * viewport; the card slides in from its own side.
 */

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ScanRadar, MetricCompare } from './ExperienceVisuals';
import { getExperienceImage } from '../../assets/media';
import { ease, viewportOnce, tf } from '../../config/animations';

const themes = {
  founder: {
    card: 'bg-ink text-paper border-accent/25 dark:bg-ink-soft',
    muted: 'text-paper/65',
    subtle: 'text-paper/45',
    chip: 'border-white/15 text-paper/75',
  },
  default: {
    card: 'bg-surface text-fg border-line',
    muted: 'text-fg-muted',
    subtle: 'text-fg-subtle',
    chip: 'border-line-strong text-fg-muted',
  },
};

const Chips = ({ items, className }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((item) => (
      <li
        key={item}
        className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${className}`}
      >
        {item}
      </li>
    ))}
  </ul>
);

const Node = ({ current }) => (
  <motion.span
    aria-hidden="true"
    className="absolute left-[11px] top-9 z-10 flex h-[22px] w-[22px] -translate-x-1/2 items-center justify-center rounded-full border border-line-strong bg-bg md:left-1/2"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '0px 0px -40% 0px' }}
    variants={{
      hidden: { transform: tf('scale(0.6)') },
      visible: { transform: tf('scale(1)'), transition: { type: 'spring', stiffness: 260, damping: 16 } },
    }}
  >
    <motion.span
      className={`relative h-2.5 w-2.5 rounded-full bg-accent ${current ? 'pulse-dot' : ''}`}
      variants={{
        hidden: { transform: tf('scale(0)') },
        visible: { transform: tf('scale(1)'), transition: { duration: 0.5, ease: ease.expo, delay: 0.1 } },
      }}
    />
  </motion.span>
);

const Visual = ({ experience }) => {
  const image = getExperienceImage(experience.id);

  if (experience.type === 'founder') {
    return (
      <div className="rounded-[1.5rem] border border-accent/25 bg-ink p-7 text-paper dark:bg-ink-soft">
        <ScanRadar />
        {experience.standards && (
          <div className="mt-6">
            <p className="eyebrow mb-3 text-paper/45">Aligned with</p>
            <Chips items={experience.standards} className="border-accent/40 text-accent" />
          </div>
        )}
      </div>
    );
  }
  if (experience.metric) return <MetricCompare metric={experience.metric} />;
  if (image) {
    return (
      <div className="group/img aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-line bg-surface">
        <img
          src={image}
          alt={experience.company}
          loading="lazy"
          draggable={false}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-expo group-hover/img:scale-105"
        />
      </div>
    );
  }
  return null;
};

const Period = ({ period, className = '' }) => (
  <span className={className}>
    {period.start} — {period.end}
  </span>
);

const ExperienceEntry = ({ experience, index }) => {
  const cardOnLeft = index % 2 === 0;
  const theme = experience.type === 'founder' ? themes.founder : themes.default;
  const { company, companyUrl, role, period, location, summary, highlights, skills, typeLabel, current } =
    experience;
  const number = String(index + 1).padStart(2, '0');

  return (
    <li className="relative grid gap-6 pl-12 md:grid-cols-2 md:gap-x-28 md:pl-0">
      <Node current={current} />

      {/* Role card */}
      <motion.article
        className={`relative overflow-hidden rounded-[1.75rem] border p-7 shadow-card transition-shadow duration-500 hover:shadow-lift md:row-start-1 md:p-9 ${
          cardOnLeft ? 'md:col-start-1' : 'md:col-start-2'
        } ${theme.card}`}
        initial={{ opacity: 0, transform: tf(`translateX(${cardOnLeft ? -60 : 60}px)`) }}
        whileInView={{ opacity: 1, transform: tf('translateX(0px)') }}
        viewport={viewportOnce}
        transition={{ duration: 1.1, ease: ease.expo }}
      >
        {experience.type === 'founder' && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-[90px]"
          />
        )}

        <div className="eyebrow relative flex flex-wrap items-center gap-3">
          <span className="text-accent">{number}</span>
          <span className={`rounded-full border px-3 py-1 ${theme.chip}`}>{typeLabel}</span>
          {current && (
            <span className="flex items-center gap-2 text-accent">
              <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-accent" />
              Now
            </span>
          )}
          <Period period={period} className={`w-full md:hidden ${theme.subtle}`} />
        </div>

        <h3 className="relative mt-7 text-[clamp(2.2rem,3.8vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-current">
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-start gap-2 transition-colors hover:text-accent"
            >
              {company}
              <ArrowUpRight className="mt-[0.1em] h-[0.45em] w-[0.45em] transition-transform duration-500 ease-expo group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
            </a>
          ) : (
            company
          )}
        </h3>
        <p className="relative mt-2 font-serif text-[clamp(1.35rem,2vw,1.85rem)] italic text-accent">
          {role}
        </p>
        <p className="relative mt-5 text-base leading-relaxed">{summary}</p>
        <ul className="relative mt-4 space-y-3">
          {highlights.map((highlight) => (
            <li key={highlight} className={`flex gap-3 text-[15px] leading-relaxed ${theme.muted}`}>
              <span className="mt-[0.75em] h-px w-4 shrink-0 bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>
        <div className="relative mt-6">
          <Chips items={skills} className={theme.chip} />
        </div>
      </motion.article>

      {/* Dates + visual, pinned beside the card on desktop */}
      <motion.div
        className={`flex flex-col gap-6 md:sticky md:top-[calc(var(--nav-h)+2rem)] md:row-start-1 md:self-start ${
          cardOnLeft ? 'md:col-start-2' : 'md:col-start-1 md:items-end md:text-right'
        }`}
        initial={{ opacity: 0, transform: tf('translateY(40px)') }}
        whileInView={{ opacity: 1, transform: tf('translateY(0px)') }}
        viewport={viewportOnce}
        transition={{ duration: 1.1, ease: ease.expo, delay: 0.15 }}
      >
        <div className="hidden pt-6 md:block">
          <p className="eyebrow text-accent">
            {number} · {typeLabel}
          </p>
          <p className="mt-4 text-[clamp(2.25rem,3.6vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            {period.start}
            <span className="text-fg-subtle"> —</span>
            <br />
            <span className={current ? 'font-serif font-normal italic tracking-normal text-accent' : ''}>
              {period.end}
            </span>
          </p>
          {location && <p className="eyebrow mt-4 text-fg-subtle">{location}</p>}
        </div>
        <div className="w-full max-w-md">
          <Visual experience={experience} />
        </div>
      </motion.div>
    </li>
  );
};

export default ExperienceEntry;
