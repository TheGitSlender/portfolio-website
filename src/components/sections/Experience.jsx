/**
 * Experience Section
 *
 * A centre-line timeline, newest first. Role cards alternate left and right
 * of the spine; an accent line draws down the spine as you scroll through
 * the section, and each node lights up when its role arrives.
 */

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ExperienceEntry from './ExperienceEntry';
import SectionIntro from '../ui/SectionIntro';
import { experiences } from '../../data/experience';
import { springs } from '../../config/animations';

const SPINE = 'absolute bottom-0 left-[11px] top-0 w-px md:left-1/2 md:-translate-x-1/2';

const Experience = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 0.6', 'end 0.6'] });
  const drawn = useSpring(scrollYProgress, springs.soft);

  return (
    <section id="experience" className="relative py-[clamp(5rem,10vw,9rem)]">
      <div className="container-main">
        <SectionIntro
          index="02"
          label="Experience"
          title="Where I've *shipped*"
          aside="Founder, engineer, intern, community lead. From AI security posture to card-payment operations, newest first."
        />

        <div ref={timelineRef} className="relative mt-[clamp(4rem,8vw,7rem)]">
          <div aria-hidden="true" className={`${SPINE} bg-line-strong`} />
          <motion.div aria-hidden="true" className={`${SPINE} origin-top bg-accent`} style={{ scaleY: drawn }} />

          <ol className="relative space-y-20 md:space-y-32">
            {experiences.map((experience, index) => (
              <ExperienceEntry key={experience.id} experience={experience} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
