/**
 * About Section
 * Student.AI Light Theme
 */

import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';

const About = () => {
  const { bio, availability } = personalInfo;

  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Label */}
          <div className="lg:col-span-3">
            <span className="nav-pill">
                // ABOUT
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
              Engineering intelligence<br />
              <span className="text-[var(--color-text-secondary)]">into every system.</span>
            </h2>

            <div className="space-y-6 text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl font-medium">
              {bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Minimal Stats Row (Optional, simplified) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-100">
              <div>
                <span className="block text-4xl font-bold text-black mb-1">4+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Years Exp</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-black mb-1">12</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Projects</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-black mb-1">100%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Delivery</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
