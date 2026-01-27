/**
 * About Section
 * Student.AI Light Theme
 */

import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';

const About = () => {
  const { bio, availability } = personalInfo;

  return (
    <section id="about" className="py-[var(--space-xl)] bg-white border-t border-gray-100">
      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-[var(--space-md)] lg:gap-[var(--space-lg)] items-start">

          {/* Label */}
          <div className="lg:col-span-3">
            <span className="nav-pill">
                // ABOUT
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <h2 className="text-[var(--text-4xl)] md:text-[var(--text-5xl)] lg:text-[var(--text-6xl)] font-black tracking-tighter mb-[var(--space-md)] leading-tight">
              Engineering intelligence<br />
              <span className="text-[var(--color-text-secondary)]">into every system.</span>
            </h2>

            <div className="space-y-[var(--space-sm)] text-[var(--color-text-secondary)] leading-relaxed max-w-3xl font-medium">
              {bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Minimal Stats Row (Optional, simplified) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-md)] mt-[var(--space-lg)] pt-[var(--space-lg)] border-t border-gray-100">
              {personalInfo.stats && personalInfo.stats.map((stat, index) => (
                <div key={index}>
                  <span className="block text-[var(--text-4xl)] font-bold text-black mb-1">{stat.value}</span>
                  <span className="text-[var(--text-xs)] font-bold uppercase tracking-widest text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
