
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Cloud, Shield } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { personalInfo } from '../../data/personal';

const Hero = () => {
  const { title, tagline } = personalInfo;

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="container-main grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
            AI Engineer <br />
            <span className="text-[var(--color-text-secondary)]">&</span> <br />
            <span className="relative inline-block">
              <span className="relative z-10">Cybersecurity </span>
              <span className="absolute -bottom-1 left-0 w-full h-4 bg-[var(--color-accent-primary)] -rotate-1 rounded-sm opacity-100" />
            </span> <br />
            Specialist.
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-lg leading-relaxed">
            {tagline}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Button to="#projects" variant="primary" icon={ArrowRight}>
              View Projects
            </Button>
            <Button variant="secondary" icon={Download}>
              Resume
            </Button>
          </div>

          {/* Social Proof / Tiny extras */}
          <div className="flex items-center gap-4 pt-8 text-sm text-[var(--color-text-tertiary)]">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-[var(--color-bg-primary)] bg-gradient-to-br from-gray-700 to-gray-900 grid place-items-center text-xs text-white`}>
                  {i}
                </div>
              ))}
            </div>
            <p>Collaborated with research labs & tech corps</p>
          </div>
        </motion.div>

        {/* Right Column: Bento Visuals */}
        <div className="relative h-[500px] hidden lg:block">
          <div className="grid grid-cols-2 gap-4 h-full">

            {/* Card 1: AI/Code */}
            <Card className="col-span-2 row-span-1 bg-[var(--color-bg-secondary)] flex items-center justify-between p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-secondary)] to-transparent z-10" />
              <div className="z-20">
                <h3 className="text-2xl font-bold mb-2">NeuralShield AI</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">Adversarial Defense for LLMs</p>
              </div>
              <Terminal className="w-32 h-32 text-[var(--color-border-subtle)] absolute right-4 bottom-4 opacity-20 group-hover:text-[var(--color-accent-primary)] group-hover:opacity-40 transition-all duration-500" />
            </Card>

            {/* Card 2: Cloud */}
            <Card className="col-span-1 row-span-1 flex flex-col justify-center items-center text-center p-6 gap-4 bg-[#1e1e1e]">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-primary)]/10 flex items-center justify-center text-[var(--color-accent-primary)]">
                <Cloud className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white">Cloud-Native <br />Architecture</h4>
            </Card>

            {/* Card 3: Security */}
            <Card className="col-span-1 row-span-1 flex flex-col justify-center items-center text-center p-6 gap-4 bg-[#0F3025] border-emerald-900/50">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white">Cybersecurity <br />Specialist</h4>
            </Card>

            {/* Card 4: Stats */}
            <Card className="col-span-2 py-6 px-10 flex items-center justify-between bg-white border border-[var(--color-border-subtle)] shadow-xl z-20">
              <div>
                <h5 className="text-3xl font-bold text-[var(--color-text-primary)]">95%</h5>
                <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Detection Rate</p>
              </div>
              <div className="h-full w-px bg-[var(--color-border-subtle)]" />
              <div>
                <h5 className="text-3xl font-bold text-[var(--color-text-primary)]">4+</h5>
                <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="h-full w-px bg-[var(--color-border-subtle)]" />
              <div>
                <h5 className="text-3xl font-bold text-[var(--color-text-primary)]">Top 3%</h5>
                <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Global CTF</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
