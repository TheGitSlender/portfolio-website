
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cloud, Shield, Database, Layout, Search } from 'lucide-react';

import { experiences } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container-main">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-[#121212] rounded-full px-4 py-1.5 w-fit border border-white/10 shadow-lg">
              <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] font-sans">// CAREER JOURNEY //</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.85] font-serif">
              Experience & <br /> History
            </h2>
          </div>

          <p className="text-gray-500 font-medium max-w-xs text-right hidden lg:block leading-relaxed">
            A chronicle of engineering impact across specialized domains in tech.
          </p>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-6 md:left-[60px] top-0 bottom-0 w-[4px] bg-gray-200/50" />

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {experiences.map((item, index) => (
              <div key={item.id} className="relative pl-16 md:pl-48 group">

                {/* Timeline Dot - Animated lighting effect */}
                <motion.div
                  initial={{ backgroundColor: "#e5e5e7", scale: 0.8 }}
                  whileInView={{ backgroundColor: "#ff3700", scale: 1 }}
                  viewport={{ once: false, amount: 0.5, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-4 md:left-[51px] top-12 w-5 md:w-6 h-5 md:h-6 rounded-full shadow-xl z-20 border-4 border-[var(--color-bg-primary)]"
                />

                {/* Year Label - Horizontal & Larger */}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.5, margin: "-20% 0px -20% 0px" }}
                  className="mb-4 lg:absolute lg:-left-40 lg:top-12 text-base font-black text-[#121212] whitespace-nowrap hidden lg:block uppercase tracking-tighter"
                >
                  {item.period.start} — {item.period.end}
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col md:flex-row gap-12 items-center hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)] transition-shadow duration-500"
                >
                  {/* Left Column: Info */}
                  <div className="flex-1 flex flex-col items-start gap-6">
                    {/* Tags */}
                    <div className="flex gap-2">
                      {item.skills && item.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-[9px] font-black tracking-widest text-gray-500 uppercase">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold font-serif leading-tight mb-2">
                        {item.role || item.title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-500 font-medium">
                        {item.company}
                      </p>
                    </div>

                    <div className="text-gray-500 text-base leading-relaxed max-w-2xl font-medium space-y-2">
                      {Array.isArray(item.description) ? (
                        item.description.map((point, i) => (
                          <p key={i}>• {point}</p>
                        ))
                      ) : (
                        <p>{item.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Illustration/Image Placeholder */}
                  <div className="w-full md:w-[320px] h-[320px] rounded-[32px] bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100 relative group-hover:border-[var(--color-accent-primary)]/20 transition-colors">
                    {/* Placeholder Abstract */}
                    {item.type === 'work' && <div className="p-12 opacity-40"><Terminal size={120} strokeWidth={1} /></div>}
                    {item.type === 'leadership' && <div className="p-12 opacity-40"><Search size={120} strokeWidth={1} /></div>}
                    {item.type === 'education' && <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center"><Layout size={100} className="text-gray-300" strokeWidth={1} /></div>}

                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
