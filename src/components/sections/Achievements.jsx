/**
 * Achievements Section
 *
 * Hackathon wins and competition placements, each with a brief mention
 * of the project involved and a link to its detail page where one exists.
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, ArrowUpRight } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';
import AnimatedHeading from '../ui/AnimatedHeading';
import { achievements } from '../../data/achievements';
import { fadeUp, cardHover, viewport, indexedDelay } from '../../config/animations';

const Achievements = () => {
  return (
    <section id="achievements" className="py-[var(--space-xl)] bg-[var(--color-bg-primary)]">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-[var(--space-lg)] gap-8">
          <div className="max-w-3xl">
            <SectionBadge className="mb-6">// WINS & PLACEMENTS //</SectionBadge>
            <AnimatedHeading>
              Achievements.
            </AnimatedHeading>
          </div>
          <p className="text-[var(--color-text-secondary)] max-w-sm text-sm md:text-base font-medium leading-relaxed italic lg:text-right">
            Hackathon wins and competition placements, built under pressure.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const CardInner = (
              <>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent-primary)]/10 flex items-center justify-center text-[var(--color-accent-primary)] shrink-0">
                    <Trophy className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  {achievement.projectId && (
                    <span className="opacity-0 group-hover/achievement:opacity-100 transition-opacity duration-300 text-[var(--color-text-muted)]">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  )}
                </div>

                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-accent-primary)] mb-1 block">
                  {achievement.place}
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                  {achievement.event}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-default)]">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)]">
                    {achievement.project}
                  </span>
                  <span className="text-[10px] font-bold text-[var(--color-text-muted)]">
                    {achievement.date}
                  </span>
                </div>
              </>
            );

            const cardClass = 'group/achievement relative bg-[var(--color-surface-muted)] rounded-[2rem] p-8 border border-[var(--color-border-default)] h-full flex flex-col';

            return (
              <motion.div
                key={achievement.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={indexedDelay(index)}
                whileHover={cardHover}
              >
                {achievement.projectId ? (
                  <Link to={`/project/${achievement.projectId}`} className={`${cardClass} cursor-pointer hover:border-[var(--color-accent-primary)]/30 transition-colors`}>
                    {CardInner}
                  </Link>
                ) : (
                  <div className={cardClass}>{CardInner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
