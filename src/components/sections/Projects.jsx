import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { getFeaturedProjects } from '../../data/projects';
import { Link } from 'react-router-dom';

const Projects = () => {
  const featuredProjects = getFeaturedProjects();
  // Double the list for a seamless loop [A, B, C, A, B, C]
  const duplicatedProjects = [...featuredProjects, ...featuredProjects];

  return (
    <section id="projects" className="py-16 bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
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
          className="relative bg-[#4f4f4f] rounded-[32px] p-6 md:p-10 border border-white/5 overflow-hidden"
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
              <div
                key={`${project.id}-${index}`}
                className="min-w-[260px] md:min-w-[320px] lg:min-w-[380px] shrink-0"
              >
                <Link to={`/project/${project.id}`} className="block group/card h-full">
                  <Card
                    className="h-full p-0 overflow-hidden border-gray-100 group-hover/card:border-[var(--color-accent-primary)]/30 bg-white transition-all duration-500 rounded-[20px]"
                    hover={false}
                  >
                    <div className="aspect-[16/10] bg-[#121212] relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/0 transition-colors duration-500 z-10" />

                      {/* Project Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] bg-white px-2.5 py-1 rounded-full text-black">
                          {project.category.split(' & ')[0]}
                        </span>
                      </div>

                      {/* Arrow Icon */}
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-300 z-20">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>

                      {/* Background Visual */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full text-center">
                          <span className="text-3xl font-black text-white/[0.04] select-none uppercase tracking-tighter block mb-1">
                            {project.id.split('-')[0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[var(--color-text-primary)] group-hover/card:text-[var(--color-accent-primary)] transition-colors italic tracking-tighter uppercase font-sans mb-2">
                        {project.title}
                      </h3>

                      <p className="text-[var(--color-text-secondary)] text-[11px] mb-4 leading-relaxed line-clamp-2 font-medium">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="text-[7px] font-black uppercase tracking-widest text-gray-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
