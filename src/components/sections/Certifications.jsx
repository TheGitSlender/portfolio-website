import { motion } from 'framer-motion';
import { Cloud, BarChart, Shield, Cpu, Brain, ExternalLink } from 'lucide-react';
import { certifications, upcomingGoals } from '../../data/certifications';



const ZigZagLine = ({ side = 'left' }) => {
  return (
    <div className={`absolute top-0 bottom-0 w-4 flex flex-col justify-between py-12 ${side === 'left' ? '-left-8' : '-right-8'}`}>
      {[...Array(20)].map((_, i) => (
        <div key={i} className="h-4 w-[2px] bg-[var(--color-accent-primary)] rotate-45 mb-4" />
      ))}
    </div>
  );
};


const Certifications = () => {
  const IconMap = { Cloud, BarChart, Shield, Cpu, Brain };

  return (
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
      <div className="container-main relative">
        {/* Header */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 bg-[#121212] rounded-full px-4 py-1.5 w-fit border border-white/10 shadow-lg mb-8">
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] font-sans">// GLOBAL ACCOLADES //</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-4">
            Certifications <br />
            <span className="text-[var(--color-accent-primary)]">& Accolades.</span>
          </h2>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-16">
          {/* Vertical Stripped Lines - Hidden on mobile */}
          <div className="hidden md:block">
            <ZigZagLine side="left" />
            <ZigZagLine side="right" />
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
            {certifications.map((cert, index) => {
              const Icon = IconMap[cert.icon] || Cloud;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    zIndex: 50,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.1)"
                  }}
                  className={`relative bg-[#F8F9FA] rounded-[2.5rem] p-10 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-8 transition-all duration-300 cursor-pointer w-full ${index % 2 === 0 ? 'md:-translate-x-8' : 'md:translate-x-8'
                    }`}
                >
                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-50 shrink-0">
                    <Icon className="w-12 h-12 text-[var(--color-accent-primary)]" strokeWidth={1.2} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-accent-primary)] mb-2 block">
                      {cert.title}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{cert.subtitle}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                      {cert.description}
                    </p>
                  </div>


                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Goals */}
        <div className="mt-32 max-w-5xl mx-auto px-4 md:px-16">
          <div className="bg-[#F8F9FA] rounded-[2.5rem] p-12 border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 italic tracking-tight font-sans">Upcoming Goals</h3>
            {upcomingGoals.map((goal, i) => (
              <div key={i} className="space-y-6">
                <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
                  {goal.description.split(/(\*\*.*?\*\*)/).map((part, index) =>
                    part.startsWith('**') && part.endsWith('**') ? (
                      <strong key={index} className="text-black font-bold">{part.slice(2, -2)}</strong>
                    ) : (
                      part
                    )
                  )}
                </p>


                <div className="relative pt-4">
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${goal.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-[var(--color-accent-primary)]"
                    />
                  </div>
                  <div className="flex justify-between mt-3">
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Training Progress</span>
                    <span className="text-[11px] font-black text-[var(--color-accent-primary)] uppercase tracking-widest">{goal.progress}% Complete</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
