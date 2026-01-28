/**
 * TimelineCard
 *
 * A card component for displaying experience entries in a timeline.
 * Shows role, company, description, skills, and an optional image.
 *
 * @param {object} experience - Experience data object
 * @param {number} index - Index for staggered animation delay
 * @param {string} imageSrc - Optional image source
 */

import { motion } from 'framer-motion';
import {
  cardEntrance,
  fastStaggerContainer,
  fadeInScale,
  hoverLift,
  viewport,
  indexedDelay,
} from '../../config/animations';

const TimelineCard = ({ experience, index, imageSrc }) => {
  const { role, title, company, description, skills, period } = experience;

  return (
    <div className="relative pl-10 md:pl-40 lg:pl-56 group">
      {/* Timeline Dot */}
      <motion.div
        initial={{ backgroundColor: '#e5e5e7', scale: 0.8 }}
        whileInView={{ backgroundColor: 'var(--color-accent-primary)', scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute left-[9px] md:left-[51px] top-12 md:top-8 w-4 md:w-6 h-4 md:h-6 rounded-full shadow-xl z-20 border-2 md:border-4 border-[var(--color-bg-primary)]"
        style={{ backgroundColor: 'var(--color-accent-primary)' }}
      />

      {/* Year Label */}
      <motion.div
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-4 md:absolute md:left-20 lg:left-26 md:top-8 lg:top-10 text-xs md:text-sm lg:text-base font-black text-[var(--color-text-primary)] uppercase tracking-tighter flex flex-col items-center gap-2"
      >
        <span>{period.end}</span>
        <span className="text-[var(--color-accent-primary)]">↑</span>
        <span>{period.start}</span>
      </motion.div>

      {/* Card */}
      <motion.div
        variants={cardEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={indexedDelay(index, 0.15)}
        whileHover={hoverLift}
        className="bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col-reverse md:flex-row gap-8 items-center hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)] transition-shadow duration-500 max-w-5xl cursor-default"
      >
        {/* Info Section */}
        <div className="flex-1 flex flex-col items-start gap-6 w-full">
          {/* Skills Tags */}
          {skills && skills.length > 0 && (
            <motion.div
              className="flex flex-wrap items-center gap-2"
              variants={fastStaggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="text-[10px] px-3 py-1 bg-gray-100 rounded-full font-black tracking-widest text-gray-500 uppercase transition-transform hover:scale-105 hover:bg-[var(--color-accent-primary)]/10"
                  variants={fadeInScale}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Title & Company */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold font-serif leading-tight mb-2">
              {role || title}
            </h3>
            <p className="text-base md:text-lg text-gray-500 font-medium">
              {company}
            </p>
          </div>

          {/* Description */}
          <div className="text-gray-500 text-base leading-relaxed max-w-2xl font-medium">
            <p>{description}</p>
          </div>
        </div>

        {/* Image Section */}
        {imageSrc && (
          <div className="w-full md:flex-initial aspect-video md:aspect-square md:w-[clamp(180px,15vw+50px,280px)] rounded-[20px] md:rounded-[2rem] bg-white flex items-center justify-center overflow-hidden border border-gray-100 relative group-hover:border-[var(--color-accent-primary)]/20 transition-colors">
            <img
              src={imageSrc}
              alt={`${company} Experience`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TimelineCard;
