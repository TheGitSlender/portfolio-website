
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cloud, Shield, Database, Layout, Search } from 'lucide-react';

import { experiences } from '../../data/experience';
import outlierImg from '../../assets/pictures/outlier_experience.png';
import smartFactoryImg from '../../assets/pictures/3d_CV_experience.jpg';
import presidentImg from '../../assets/pictures/president_experience.png';

const Experience = () => {
  return (
    <section id="experience" className="py-[var(--space-xl)] bg-[var(--color-bg-primary)]">
      <div className="container-main">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-[var(--space-lg)] gap-8">
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
          <div className="absolute left-4 md:left-[60px] top-0 bottom-0 w-[2px] md:w-[4px] bg-gray-200/50" />

          <div className="flex flex-col gap-[var(--space-md)] md:gap-[var(--space-lg)] relative z-10">
            {experiences.map((item, index) => (
              <div key={item.id} className="relative pl-10 md:pl-40 lg:pl-56 group">

                {/* Timeline Dot */}
                <motion.div
                  initial={{ backgroundColor: "#e5e5e7", scale: 0.8 }}
                  whileInView={{ backgroundColor: "#ff3700", scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-[9px] md:left-[51px] top-12 md:top-8 w-4 md:w-6 h-4 md:h-6 rounded-full shadow-xl z-20 border-2 md:border-4 border-[var(--color-bg-primary)]"
                />

                {/* Year Label - Positioned between timeline and card */}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-4 md:absolute md:left-20 lg:left-26 md:top-8 lg:top-10 text-xs md:text-sm lg:text-base font-black text-[#121212] uppercase tracking-tighter flex flex-col items-center gap-2"
                >
                  <span>{item.period.end}</span>
                  <span className="text-[var(--color-accent-primary)]">↑</span>
                  <span>{item.period.start}</span>
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-white rounded-[24px] md:rounded-[40px] p-6 md:p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col-reverse md:flex-row gap-8 items-center hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)] transition-shadow duration-500 max-w-5xl"
                >
                  {/* Info */}
                  <div className="flex-1 flex flex-col items-start gap-6 w-full">
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      {item.skills && item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] px-3 py-1 bg-gray-100 rounded-full font-black tracking-widest text-gray-500 uppercase transition-transform hover:scale-105"
                        >
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

                    <div className="text-gray-500 text-base leading-relaxed max-w-2xl font-medium">
                      <p>{item.description}</p>
                    </div>
                  </div>

                  {/* Illustration/Image */}
                  <div className="w-full md:flex-initial aspect-video md:aspect-square md:w-[clamp(180px,15vw+50px,280px)] rounded-[20px] md:rounded-[32px] bg-white flex items-center justify-center overflow-hidden border border-gray-100 relative group-hover:border-[var(--color-accent-primary)]/20 transition-colors">
                    {item.id === 'scale-ai' && (
                      <img
                        src={outlierImg}
                        alt="Outlier.ai Experience"
                        className="w-full h-full object-cover"
                      />
                    )}
                    {item.id === '3d-smart-factory' && (
                      <img
                        src={smartFactoryImg}
                        alt="3D Smart Factory Experience"
                        className="w-full h-full object-cover"
                      />
                    )}
                    {item.id === 'ai-club-president' && (
                      <img
                        src={presidentImg}
                        alt="AI Club President"
                        className="w-full h-full object-cover"
                      />
                    )}
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
