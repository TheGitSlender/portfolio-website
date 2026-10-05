/**
 * Achievements Section
 *
 * An editorial ranking list: oversized placements, hairlines that draw in,
 * and an accent fill that sweeps up behind the hovered row while the cursor
 * becomes a "View" badge.
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionIntro from '../ui/SectionIntro';
import { achievements } from '../../data/achievements';
import { fadeUp, lineDraw, viewportOnce } from '../../config/animations';

const AchievementRow = ({ achievement }) => (
  <motion.li
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="relative"
  >
    <motion.span variants={lineDraw} className="absolute inset-x-0 top-0 h-px origin-left bg-line-strong" />
    <Link
      to={`/project/${achievement.projectId}`}
      data-cursor="View"
      data-cursor-variant="ink"
      className="group/row relative grid grid-cols-12 items-center gap-x-4 gap-y-3 overflow-hidden py-7 md:py-9"
    >
      <span className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-700 ease-expo group-hover/row:scale-y-100" />

      <div className="relative col-span-12 flex items-baseline gap-3 transition-[translate,color] duration-700 ease-expo group-hover/row:translate-x-4 group-hover/row:text-white md:col-span-4">
        <span className="text-[clamp(2.75rem,6.5vw,6rem)] font-semibold leading-none tracking-[-0.06em]">
          {achievement.rank}
        </span>
        <span className="eyebrow text-fg-subtle transition-colors group-hover/row:text-white/75">
          {achievement.rankLabel}
        </span>
      </div>

      <div className="relative col-span-12 transition-[translate,color] duration-700 ease-expo group-hover/row:text-white md:col-span-5">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-current md:text-2xl">
          {achievement.event}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-fg-muted transition-colors group-hover/row:text-white/80">
          {achievement.description}
        </p>
      </div>

      <p className="relative col-span-9 font-serif text-xl italic leading-snug transition-colors group-hover/row:text-white md:col-span-2">
        {achievement.project}
        <ArrowUpRight
          size={16}
          className="ml-1.5 inline-block align-[-0.1em] transition-transform duration-500 ease-expo group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5"
        />
      </p>

      <span className="eyebrow relative col-span-3 text-right text-fg-subtle transition-colors group-hover/row:text-white/75 md:col-span-1">
        {achievement.date}
      </span>
    </Link>
  </motion.li>
);

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-[clamp(5rem,10vw,9rem)]">
      <div className="container-main">
        <SectionIntro
          index="04"
          label="Achievements"
          title="Wins under *pressure*"
          aside="Hackathons and competitions, from a stage with Yann LeCun to the HackTheBox leaderboard."
        />

        <ul className="relative mt-[clamp(3rem,6vw,5rem)] border-b border-line-strong">
          {achievements.map((achievement) => (
            <AchievementRow key={achievement.id} achievement={achievement} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
