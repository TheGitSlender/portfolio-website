
import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks, contactInfo } from '../../data/contact';
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
        <div className="bg-[var(--color-accent-primary)] rounded-[40px] p-8 md:p-12 lg:p-16 overflow-hidden relative">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: Heading & Intro */}
            <div className="flex flex-col gap-8">
              {/* Contact Badge (like the snippet) */}
              <div className="inline-flex items-center gap-3 bg-[#212121] rounded-full px-5 py-2 w-fit border border-white/5">
                <span className="text-[var(--color-accent-primary)] font-bold">//</span>
                <span className="text-white font-medium">Contact</span>
                <span className="text-[var(--color-accent-primary)] font-bold">//</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
                Let's talk.
              </h2>

              <p className="text-white/80 text-lg max-w-md">
                Got questions or ready to start your next project? Reach out and let's bring your ideas to life.
              </p>
            </div>

            {/* Right: Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4 w-full">
              {contactMethods.map((method, index) => {
                const isDark = ['LinkedIn', 'GitHub', 'Email'].includes(method.platform);

                return (
                  <motion.a
                    key={method.platform}
                    href={method.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDark ? 'bg-black text-white border-white/10' : 'bg-white text-[#121212] border-black/5'} p-6 rounded-3xl border group hover:shadow-xl transition-all relative overflow-hidden`}
                    whileHover={{ y: -5 }}
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
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
