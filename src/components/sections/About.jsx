/**
 * About Section
 *
 * A statement that reveals word by word as it scrolls, a parallax portrait,
 * supporting bio and quick facts, and a row of counting stats.
 */

import { motion } from 'framer-motion';
import ScrollRevealText from '../motion/ScrollRevealText';
import ParallaxImage from '../motion/ParallaxImage';
import Counter from '../motion/Counter';
import Reveal from '../motion/Reveal';
import { Eyebrow } from '../ui/SectionIntro';
import { personalInfo } from '../../data/personal';
import { portrait } from '../../assets/media';
import { lineDraw, stagger, fadeUp, viewportOnce } from '../../config/animations';

const About = () => {
  const { manifesto, bio, facts, stats, name } = personalInfo;

  return (
    <section id="about" className="relative py-[clamp(6rem,12vw,11rem)]">
      <div className="container-main grid gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Portrait column */}
        <div className="flex flex-col gap-8 lg:col-span-3">
          <Reveal>
            <Eyebrow index="01" label="About" className="text-fg-muted" />
          </Reveal>
          <ParallaxImage
            src={portrait}
            alt={name}
            className="aspect-[4/5] w-full max-w-[320px] rounded-[1.5rem] bg-surface-muted"
            imgClassName="object-[50%_25%]"
          />
        </div>

        {/* Statement & details */}
        <div className="lg:col-span-9 lg:pl-8">
          <ScrollRevealText
            text={manifesto}
            className="text-[clamp(1.75rem,3.7vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.035em]"
          />

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-5">
              {bio.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="text-[15px] leading-relaxed text-fg-muted md:text-base">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <motion.dl
              className="self-start"
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {facts.map((fact) => (
                <motion.div
                  key={fact.label}
                  variants={fadeUp}
                  className="flex items-baseline justify-between gap-6 border-t border-line py-4 last:border-b"
                >
                  <dt className="eyebrow text-fg-subtle">{fact.label}</dt>
                  <dd className="text-right font-medium">{fact.value}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        className="container-main mt-[clamp(5rem,9vw,8rem)] grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="relative pt-6">
            <motion.span variants={lineDraw} className="absolute inset-x-0 top-0 h-px origin-left bg-line-strong" />
            <Counter
              value={stat.value}
              className="block text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.05em]"
            />
            <p className="mt-4 font-medium">{stat.label}</p>
            <p className="mt-1 max-w-[16rem] text-sm leading-relaxed text-fg-muted">{stat.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
