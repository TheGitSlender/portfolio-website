
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Cloud, Shield } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { personalInfo } from '../../data/personal';

const Hero = () => {
  const { title, tagline } = personalInfo;

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="container-main grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">

        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121212] border border-white/10 shadow-lg">
            <div className="relative h-2 w-2">
              <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-[var(--color-accent-primary)]"></div>
              <div className="absolute inset-0 animate-ping rounded-full bg-[var(--color-accent-primary)]"></div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Available for Collaboration
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold">
            AI <br />
            Engineer <br />
            <span className="text-[var(--color-text-secondary)]">&</span> <br />
            <span className="relative inline-block">
              <span className="relative z-10">Cybersecurity </span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-4 md:h-8 bg-[var(--color-accent-primary)] -rotate-1 rounded-sm opacity-100" />
            </span> <br />
            Specialist.
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-lg leading-relaxed font-medium">
            Engineering secure, intelligent systems at the intersection of Cloud Infrastructure and Deep Learning.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button to="#projects" variant="primary" icon={ArrowRight}>
              View Projects
            </Button>
            <Button variant="secondary" icon={Download}>
              Resume
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Complex Bento Visuals */}
        <div className="relative h-[600px] hidden lg:block">
          <div className="grid grid-cols-2 gap-4 h-full">

            {/* Top Row */}
            <div className="flex flex-col gap-4">
              {/* Image 1: Landscape (Pins) */}
              <div className="h-2/5 w-full rounded-[32px] bg-[#121212] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full opacity-40 bg-gradient-to-br from-gray-700 to-black" />
              </div>
              {/* Vertical Card 2: AI Research (Pinkish/Tall) */}
              <div className="h-3/5 w-full rounded-[32px] bg-[#f9e9e2] p-8 flex flex-col justify-end relative overflow-hidden border border-black/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-10">
                  <Terminal className="w-full h-full text-black" />
                </div>
                <h3 className="text-4xl font-black text-[var(--color-accent-primary)] leading-none uppercase tracking-tighter">
                  AI <br />
                  Research
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Vertical Card 3: Cloud Native (Dark/Tall) */}
              <div className="h-3/5 w-full rounded-[32px] bg-[#0a0a0a] p-8 flex flex-col items-center justify-center text-center gap-6 border border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-primary)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <Cloud className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                  Cloud-Native <br /> Architectures
                </h4>
              </div>
              {/* Image 4: Wave/Green (Landscape) */}
              <div className="h-2/5 w-full rounded-[32px] bg-[#112a21] flex items-center justify-center overflow-hidden border border-white/5">
                <div className="w-full h-full opacity-60 bg-gradient-to-tr from-emerald-900 to-transparent" />
                <Shield className="w-12 h-12 text-emerald-500 absolute opacity-20" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
