import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../ui/Button';
import { personalInfo } from '../../data/personal';
import profilePic from '../../assets/pictures/pfp.jpeg';
import resumePdf from '../../assets/resume/Hany_El_Atlassi_CV.pdf';

const ProfileCard = () => {
  return (
    <div className="relative w-full aspect-square max-w-[480px] flex items-center justify-center">
      {/* Concentric Rings with Floating Animation */}
      <motion.div
        className="absolute inset-0 border border-gray-300 rounded-full scale-[1.3] opacity-40"
        animate={{
          rotate: 360,
          scale: [1.3, 1.35, 1.3],
        }}
        transition={{
          rotate: { duration: 40, ease: "linear", repeat: Infinity },
          scale: { duration: 8, ease: "easeInOut", repeat: Infinity },
        }}
      />
      <motion.div
        className="absolute inset-0 border border-gray-300 rounded-full scale-[1.1] opacity-70"
        animate={{
          rotate: -360,
          scale: [1.1, 1.15, 1.1],
        }}
        transition={{
          rotate: { duration: 30, ease: "linear", repeat: Infinity },
          scale: { duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.5 },
        }}
      />
      <motion.div
        className="absolute inset-0 border border-gray-300 rounded-full scale-[0.9] opacity-90"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Profile Image with Subtle Float */}
      <motion.div
        className="relative w-4/5 h-4/5 rounded-full bg-white overflow-hidden border border-gray-100 z-10 shadow-xl"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      >
        <img
          src={profilePic}
          alt="Hany El Atlassi"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Collab Badge - Interactive Hover */}
      <motion.div
        className="absolute bottom-[5%] left-[5%] z-20 cursor-pointer"
        initial={{ rotate: -12, scale: 0 }}
        animate={{ rotate: -12, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Hero = () => {
  const { tagline } = personalInfo;

  return (
    <section className="relative pt-[var(--space-lg)] pb-[var(--space-xl)] overflow-hidden">
      <div className="container-main grid lg:grid-cols-[1.2fr_1fr] gap-[var(--space-md)] lg:gap-[var(--space-lg)] items-center">

        {/* Left Column: Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-[var(--space-sm)]"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121212] border border-white/10 shadow-lg">
            <div className="relative h-2 w-2">
              <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-[var(--color-accent-primary)]"></div>
              <div className="absolute inset-0 animate-ping rounded-full bg-[var(--color-accent-primary)]"></div>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Available for Collaboration
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
            AI Specialist<br />
            <span className="text-[var(--color-text-secondary)]">&</span> <br />
            <span className="relative inline-block">
              <span className="relative z-10 ">Cloud Engineer</span>
              <motion.span
                className="absolute bottom-1 md:bottom-2 left-0 w-full h-[clamp(0.5rem,1.5vw,1rem)] bg-[var(--color-accent-primary)] -rotate-1 rounded-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="text-[var(--color-text-secondary)] max-w-lg leading-relaxed font-medium">
            {tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <Button href="#projects" variant="primary" icon={ArrowRight}>
              View Projects
            </Button>
            <Button href={resumePdf} download="Hany_El_Atlassi_CV.pdf" variant="secondary" icon={Download}>
              Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Balanced Profile Visual */}
        <motion.div
          className="flex items-center justify-center lg:justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
