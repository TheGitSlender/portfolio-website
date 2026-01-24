
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cloud, Shield, Database, Layout, Search } from 'lucide-react';

const expData = [
  {
    id: 1,
    title: "Senior AI Architect",
    company: "Leading Innovation Lab @ Cyberdyne Systems",
    period: "2023—PRESENT",
    description: "Spearheading the development of autonomous security protocols and large-scale generative models for threat detection. Managed a team of 12 engineers to deliver zero-day vulnerability scanning at 10x speed.",
    tags: ["AI", "LEADERSHIP"],
    icon: Terminal,
    color: "#ff3700",
    image: null // Placeholder
  },
  {
    id: 2,
    title: "Cloud Security Engineer",
    company: "Global Infrastructure Hub",
    period: "2021—2023",
    description: "Architected multi-cloud environments across AWS and GCP with a focus on high-availability and military-grade encryption standards. Automated 95% of security auditing processes using custom ML agents.",
    tags: ["CLOUD"],
    icon: Cloud,
    color: "#ffb088",
    image: null
  },
  {
    id: 3,
    title: "Machine Learning Developer",
    company: "DeepData Analytics",
    period: "2019—2021",
    description: "Early-stage engineer building computer vision models for autonomous vehicles. Specialized in data pipeline optimization and hyper-parameter tuning for real-time edge computing.",
    tags: ["AI", "CLOUD"],
    icon: Database,
    color: "#ffb088",
    image: null
  }
];

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
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.85] font-serif">
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
            {expData.map((item, index) => (
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
                  className="mb-4 lg:absolute lg:-left-24 lg:top-12 text-base font-black text-[#121212] whitespace-nowrap hidden lg:block uppercase tracking-tighter"
                >
                  {item.period}
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
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-[9px] font-black tracking-widest text-gray-500 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-500 font-medium">
                        {item.company}
                      </p>
                    </div>

                    <p className="text-gray-500 text-lg leading-relaxed max-w-2xl font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Column: Illustration/Image Placeholder */}
                  <div className="w-full md:w-[320px] h-[320px] rounded-[32px] bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100 relative group-hover:border-[var(--color-accent-primary)]/20 transition-colors">
                    {/* Placeholder Abstract (Matching the image hint) */}
                    {item.id === 1 && <div className="p-12 opacity-40"><item.icon size={120} strokeWidth={1} /></div>}
                    {item.id === 2 && <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black opacity-90" />}
                    {item.id === 3 && <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center"><Layout size={100} className="text-gray-300" strokeWidth={1} /></div>}

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
