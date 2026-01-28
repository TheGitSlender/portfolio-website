import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Card from '../ui/Card';
import TiltCard from '../ui/TiltCard';
import SectionHeader from '../ui/SectionHeader';
import { getFeaturedProjects } from '../../data/projects';
import { Link } from 'react-router-dom';

// Carousel images
import wazuhCarousel from '../../assets/pictures/wazuh_carousel.jpg';
import segmentatorCarousel from '../../assets/pictures/3d_CV_carousel.png';
import ctfCarousel from '../../assets/pictures/carousel_ctf.png';

const carouselImages = {
  'wazuh-llm': wazuhCarousel,
  '3d-segmentator': segmentatorCarousel,
  'ctf-achievements': ctfCarousel,
};

const Projects = () => {
  const featuredProjects = getFeaturedProjects();
  // Double the list for a seamless loop [A, B, C, A, B, C]
  const duplicatedProjects = [...featuredProjects, ...featuredProjects];

  return (
    <section id="projects" className="py-[var(--space-xl)] bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[var(--space-lg)] gap-8">
          <SectionHeader
            title="Selected Work."
            subtitle="// Projects //"
            className="mb-0"
          />
          <p className="text-[var(--color-text-secondary)] max-w-xs text-right hidden md:block italic font-medium text-sm">
            Continuous technical innovation across security and AI.
          </p>
        </div>

        {/* Carousel Viewport - Themed Grey Container */}
        <div
          className="relative bg-white rounded-[32px] p-6 md:p-10 border border-gray-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] overflow-hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Carousel Track - Uses translateX for GPU acceleration & smoothness */}
          <motion.div
            className="flex gap-8 w-max"
            animate={{
              x: [0, "-50%"]
            }}
            transition={{
              duration: 25, // Adjust for speed
              ease: "linear",
              repeat: Infinity
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <TiltCard
                key={`${project.id}-${index}`}
                className="w-[260px] md:w-[300px] lg:w-[340px] shrink-0 flex flex-col h-full"
                intensity={6}
              >
                <Link to={`/project/${project.id}`} className="block group/card h-full">
                  <Card
                    className="h-full p-0 overflow-hidden border-gray-100 group-hover/card:border-[var(--color-accent-primary)]/30 bg-white transition-all duration-500 rounded-[24px] flex flex-col group-hover/card:shadow-xl"
                    hover={false}
                  >
                    <div className="aspect-[16/9] bg-[#121212] relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/0 transition-colors duration-500 z-10" />

                      {/* Project Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-white px-2.5 py-1 rounded-full text-black">
                          {project.category.split(' & ')[0]}
                        </span>
                      </div>

                      {/* Arrow Icon */}
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-300 z-20">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>

                      {/* Background Visual */}
                      {carouselImages[project.id] ? (
                        <img
                          src={carouselImages[project.id]}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full text-center px-4">
                            <span className="text-2xl md:text-3xl font-black text-white/[0.04] select-none uppercase tracking-tighter block mb-1 truncate">
                              {project.id.split('-')[0]}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <h3 className="text-sm md:text-base lg:text-lg font-bold text-[var(--color-text-primary)] group-hover/card:text-[var(--color-accent-primary)] transition-colors italic tracking-tight uppercase font-sans mb-3 leading-[1.2] line-clamp-3">
                        {project.title}
                      </h3>

                      <p className="text-[var(--color-text-secondary)] text-[11px] md:text-xs mb-6 leading-relaxed line-clamp-2 font-medium">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 mt-auto">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="text-[8px] font-black uppercase tracking-widest text-gray-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
