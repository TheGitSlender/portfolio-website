/**
 * Hero Section
 *
 * The main hero/landing section with animated title, tagline,
 * CTA buttons, and profile card visualization.
 */

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../ui/Button';
import ProfileCard from './ProfileCard';
import { personalInfo } from '../../data/personal';
import resumePdf from '../../assets/resume/Hany_El_Atlassi_CV.pdf';
import {
  staggerContainer,
  fadeUp,
  easings,
  durations,
} from '../../config/animations';

const Hero = () => {
  const { tagline } = personalInfo;

  return (
    <section className="relative pt-[var(--space-lg)] pb-[var(--space-xl)] overflow-hidden">
      <div className="container-main grid lg:grid-cols-[1.2fr_1fr] gap-[var(--space-md)] lg:gap-[var(--space-lg)] items-center">
        {/* Left Column: Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-[var(--space-sm)]"
        >
          {/* Availability Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121212] border border-white/10 shadow-lg"
          >
            <div className="relative h-2 w-2">
              <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-[var(--color-accent-primary)]" />
              <div className="absolute inset-0 animate-ping rounded-full bg-[var(--color-accent-primary)]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Available for Collaboration
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]"
          >
            AI Specialist<br />
            <span className="text-[var(--color-text-secondary)]">&</span> <br />
            <span className="relative inline-block">
              <span className="relative z-10">Cloud Engineer</span>
              <motion.span
                className="absolute bottom-1 md:bottom-2 left-0 w-full h-[clamp(0.5rem,1.5vw,1rem)] bg-[var(--color-accent-primary)] -rotate-1 rounded-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: durations.slow - 0.2,
                  delay: 0.8,
                  ease: easings.default,
                }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-[var(--color-text-secondary)] max-w-lg leading-relaxed font-medium"
          >
            {tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Button href="#projects" variant="primary" icon={ArrowRight}>
              View Projects
            </Button>
            <Button
              href={resumePdf}
              download="Hany_El_Atlassi_CV.pdf"
              variant="secondary"
              icon={Download}
            >
              Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Card */}
        <motion.div
          className="flex items-center justify-center lg:justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: durations.slow,
            delay: 0.3,
            ease: easings.default,
          }}
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
