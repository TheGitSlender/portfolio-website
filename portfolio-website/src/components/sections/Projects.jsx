
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { getFeaturedProjects } from '../../data/projects';
import { Link } from 'react-router-dom';

const Projects = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeader
            title="Selected Work."
            subtitle="Projects"
            className="mb-0"
          />
          <p className="text-[var(--color-text-secondary)] max-w-xs text-right hidden md:block">
            A selection of technical projects focusing on machine learning, security, and scalable cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Link to={`/project/${project.id}`} key={project.id} className="block group">
              <Card
                className="h-full p-0 overflow-hidden border-transparent group-hover:border-[var(--color-border-hover)]"
                hover={true}
              >
                {/* Image Placeholder - In real use, use project.thumbnail */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                  {/* Abstract Pattern Placeholder since we don't have real images yet */}
                  <div className="absolute inset-0 opacity-30 flex items-center justify-center">
                    <span className="text-6xl font-black text-white/5 select-none uppercase tracking-tighter">
                      {project.id.split('-')[0]}
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-tertiary)] border border-[var(--color-border-subtle)] px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
