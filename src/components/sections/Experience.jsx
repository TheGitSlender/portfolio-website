/**
 * Experience Section
 *
 * Displays work experience as a vertical timeline with animated progress line.
 * Each experience entry is shown as a TimelineCard component.
 */

import { motion } from 'framer-motion';
import TimelineCard from './TimelineCard';
import SectionBadge from '../ui/SectionBadge';
import AnimatedHeading from '../ui/AnimatedHeading';
import { experiences } from '../../data/experience';
import {
  staggerContainer,
  fadeFromRight,
  viewport,
  durations,
} from '../../config/animations';

// Experience images
import outlierImg from '../../assets/pictures/outlier_experience.webp';
import smartFactoryImg from '../../assets/pictures/3d_CV_experience.webp';
import presidentImg from '../../assets/pictures/president_experience.webp';

/**
 * Image mapping for experiences
 */
const experienceImages = {
  'scale-ai': outlierImg,
  '3d-smart-factory': smartFactoryImg,
  'ai-club-president': presidentImg,
};

const Experience = () => {
  return (
    <section id="experience" className="py-[var(--space-xl)] bg-[var(--color-bg-primary)]">
      <div className="container-main">
        {/* Header Section */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-[var(--space-lg)] gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="flex flex-col gap-6">
            <SectionBadge>// CAREER JOURNEY //</SectionBadge>
            <AnimatedHeading>
              Experience & <br /> History
            </AnimatedHeading>
          </div>

          <motion.p
            className="text-[var(--color-text-secondary)] font-medium max-w-xs text-right hidden lg:block leading-relaxed"
            variants={fadeFromRight}
          >
            A chronicle of engineering impact across specialized domains in tech.
          </motion.p>
        </motion.div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Background Timeline Line */}
          <div className="absolute left-4 md:left-[60px] top-0 bottom-0 w-[2px] md:w-[4px] bg-[var(--color-border-default)]/50" />

          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-4 md:left-[60px] top-0 w-[2px] md:w-[4px] bg-[var(--color-accent-primary)]"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-200px' }}
            transition={{ duration: durations.verySlow + 0.3, ease: 'easeOut' }}
          />

          {/* Experience Cards */}
          <div className="flex flex-col gap-[var(--space-md)] md:gap-[var(--space-lg)] relative z-10">
            {experiences.map((experience, index) => (
              <TimelineCard
                key={experience.id}
                experience={experience}
                index={index}
                imageSrc={experienceImages[experience.id]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
