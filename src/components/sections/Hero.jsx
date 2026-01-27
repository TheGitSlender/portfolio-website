import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../ui/Button';
import { personalInfo } from '../../data/personal';

const ProfileCard = () => {
  return (
    <div className="relative w-full aspect-square max-w-[480px] flex items-center justify-center">
      {/* Concentric Rings (Subtle) */}
      <div className="absolute inset-0 border border-gray-300 rounded-full scale-[1.3] opacity-40" />
      <div className="absolute inset-0 border border-gray-300 rounded-full scale-[1.1] opacity-70" />
      <div className="absolute inset-0 border border-gray-300 rounded-full scale-[0.9] opacity-90" />

      {/* Profile Image - High quality placeholder */}
      <div className="relative w-4/5 h-4/5 rounded-full bg-white overflow-hidden border border-gray-100 z-10 shadow-xl">
        <img
          src="/home/theslender/.gemini/antigravity/brain/40107bce-a010-4c10-8cad-90b3ab1b0d7e/profile_placeholder_1769444240686.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Collab Badge - Interactive Hover */}
      <motion.div
        className="absolute bottom-[5%] left-[5%] z-20 cursor-pointer"
        initial={{ rotate: -12 }}
        whileHover={{
          scale: 1.1,
          rotate: 0,
          zIndex: 50,
          transition: { type: "spring", stiffness: 300, damping: 15 }
        }}
      >
        <div className="bg-[#ff3700] text-white rounded-full p-4 flex items-center justify-center text-center w-[clamp(80px,8vw+40px,120px)] aspect-square shadow-[0_10px_20px_rgba(255,55,0,0.3)]">
          <span className="text-[clamp(8px,1vw,10px)] font-black leading-tight uppercase tracking-widest">
            Open for <br /> COLLAB
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const { title, tagline } = personalInfo;

  return (
    <section className="relative pt-[var(--space-lg)] pb-[var(--space-xl)] overflow-hidden">
      <div className="container-main grid lg:grid-cols-[1.2fr_1fr] gap-[var(--space-md)] lg:gap-[var(--space-lg)] items-center">

        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-[var(--space-sm)]"
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
            AI Specialist<br />
            <span className="text-[var(--color-text-secondary)]">&</span> <br />
            <span className="relative inline-block">
              <span className="relative z-10 ">Cloud Engineer</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-[clamp(0.5rem,1.5vw,1rem)] bg-[var(--color-accent-primary)] -rotate-1 rounded-sm opacity-100" />
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-[var(--color-text-secondary)] max-w-lg leading-relaxed font-medium">
            {tagline}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button href="#projects" variant="primary" icon={ArrowRight}>
              View Projects
            </Button>
            <Button variant="secondary" icon={Download}>
              Resume
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Balanced Profile Visual */}
        <div className="flex items-center justify-center lg:justify-center">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
