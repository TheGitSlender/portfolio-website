/**
 * Contact Section
 *
 * Displays contact information with animated cards for each platform.
 * Features a prominent accent background with two-column layout.
 */

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { socialLinks, getPlatformStyle } from '../../data/contact';
import {
  staggerContainer,
  fadeInScale,
  textReveal,
  fadeUp,
  hoverLift,
  easings,
  durations,
} from '../../config/animations';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container-main">
        {/* Main Container */}
        <motion.div
          className="bg-[var(--color-accent-primary)] rounded-[40px] p-8 md:p-12 lg:p-16 overflow-hidden relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: durations.slow, ease: easings.default }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Heading & Intro */}
            <motion.div
              className="flex flex-col gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Contact Badge */}
              <motion.div
                className="inline-flex items-center gap-3 bg-[#212121] rounded-full px-5 py-2 w-fit border border-white/5"
                variants={fadeInScale}
              >
                <span className="text-[var(--color-accent-primary)] font-bold">//</span>
                <span className="text-white font-medium">Contact</span>
                <span className="text-[var(--color-accent-primary)] font-bold">//</span>
              </motion.div>

              {/* Heading with Text Reveal */}
              <div className="overflow-hidden">
                <motion.h2
                  className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight"
                  variants={textReveal}
                >
                  Let's talk.
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p
                className="text-white/80 text-lg max-w-md"
                variants={fadeUp}
              >
                Got questions or ready to start your next project? Reach out and let's bring your ideas to life.
              </motion.p>
            </motion.div>

            {/* Right: Contact Cards Grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4 w-full"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => {
                const Icon = LucideIcons[link.icon] || LucideIcons.Mail;
                const style = getPlatformStyle(link.platform);

                return (
                  <motion.a
                    key={link.platform}
                    href={link.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      ${style.bgClass} ${style.textClass} ${style.borderClass}
                      p-6 rounded-3xl border group hover:shadow-xl
                      transition-all relative overflow-hidden
                    `}
                    variants={fadeUp}
                    whileHover={{ ...hoverLift, scale: 1.02 }}
                  >
                    {/* Progressive Dot Indicator */}
                    <div className="absolute top-6 right-6 flex gap-1">
                      {[0, 1, 2, 3].map((dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`
                            h-1.5 w-1.5 rounded-full transition-colors duration-300
                            ${dotIndex <= index
                              ? 'bg-[var(--color-accent-primary)]'
                              : style.isDark ? 'bg-white/10' : 'bg-[#e5e5e5]'
                            }
                          `}
                        />
                      ))}
                    </div>

                    {/* Icon Container */}
                    <div
                      className={`
                        w-12 h-12 rounded-xl flex items-center justify-center mb-6
                        ${style.isDark
                          ? 'bg-white/10'
                          : 'bg-black/5 text-[var(--color-accent-primary)]'
                        }
                      `}
                    >
                      <Icon
                        size={24}
                        color={style.isDark ? link.color : 'currentColor'}
                      />
                    </div>

                    {/* Text Content */}
                    <h4
                      className={`font-bold text-lg mb-1 ${style.isDark ? '!text-white' : ''}`}
                    >
                      {link.platform}
                    </h4>
                    <p
                      className={`text-sm font-medium truncate ${style.isDark ? '!text-white/70' : 'text-gray-500'}`}
                    >
                      {link.username}
                    </p>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
