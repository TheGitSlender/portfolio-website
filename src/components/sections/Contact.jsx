
import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/contact';
import * as LucideIcons from 'lucide-react';

const Contact = () => {
  const contactMethods = socialLinks.map(link => ({
    ...link,
    icon: LucideIcons[link.icon] || LucideIcons.Mail,
    bg: `bg-[#000000]/5`, // Default bg for simplicity or could be expanded
  }));

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container-main">

        {/* Container matching the Framer reference style */}
        <motion.div
          className="bg-[var(--color-accent-primary)] rounded-[40px] p-8 md:p-12 lg:p-16 overflow-hidden relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: Heading & Intro */}
            <motion.div
              className="flex flex-col gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
              }}
            >
              {/* Contact Badge (like the snippet) */}
              <motion.div
                className="inline-flex items-center gap-3 bg-[#212121] rounded-full px-5 py-2 w-fit border border-white/5"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
              >
                <span className="text-[var(--color-accent-primary)] font-bold">//</span>
                <span className="text-white font-medium">Contact</span>
                <span className="text-[var(--color-accent-primary)] font-bold">//</span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight"
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
                  }}
                >
                  Let's talk.
                </motion.h2>
              </div>

              <motion.p
                className="text-white/80 text-lg max-w-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                Got questions or ready to start your next project? Reach out and let's bring your ideas to life.
              </motion.p>
            </motion.div>

            {/* Right: Contact Cards Grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
              }}
            >
              {contactMethods.map((method, index) => {
                const isDark = ['LinkedIn', 'GitHub', 'Email'].includes(method.platform);

                return (
                  <motion.a
                    key={method.platform}
                    href={method.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDark ? 'bg-black text-white border-white/10' : 'bg-white text-[#121212] border-black/5'} p-6 rounded-3xl border group hover:shadow-xl transition-all relative overflow-hidden`}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
                    }}
                    whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    {/* Progressive Dot Indicator */}
                    <div className="absolute top-6 right-6 flex gap-1">
                      {[0, 1, 2, 3].map((dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${dotIndex <= index
                            ? 'bg-[var(--color-accent-primary)]'
                            : (isDark ? 'bg-white/10' : 'bg-[#e5e5e5]')
                            }`}
                        />
                      ))}
                    </div>

                    <div className={`w-12 h-12 rounded-xl ${isDark ? 'bg-white/10' : `${method.bg} text-[var(--color-accent-primary)]`} flex items-center justify-center mb-6`}>
                      <method.icon size={24} color={isDark ? method.color : 'currentColor'} />
                    </div>

                    <h4 className={`${isDark ? '!text-white' : 'text-[#121212]'} font-bold text-lg mb-1`}>{method.platform}</h4>
                    <p className={`${isDark ? '!text-white/70' : 'text-gray-500'} text-sm font-medium truncate`}>{method.username || method.value}</p>
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
