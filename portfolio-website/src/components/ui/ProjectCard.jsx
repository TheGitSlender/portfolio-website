/**
 * ProjectCard Component
 *
 * Formix-style: Bento Grid Card.
 * Uses 'bento-card' class for styling.
 * Supports variable sizes via className prop.
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Badge from './Badge';

const ProjectCard = ({ project, index = 0, className = "" }) => {
  const {
    id,
    title,
    shortDescription,
    category,
    tags,
    thumbnail,
  } = project;

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bento-card group flex flex-col ${className}`}
    >
      <Link to={`/project/${id}`} className="flex-1 flex flex-col h-full relative">

        {/* Image Container - Grows to fill space depending on card size */}
        <div className="relative flex-1 min-h-[200px] overflow-hidden">
          {thumbnail ? (
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src={thumbnail}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-secondary)]" />
          )}

          {/* Overlay Gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent opacity-80" />

          {/* Top Right Action */}
          <div className="absolute top-4 right-4 bg-[var(--color-glass-bg)] backdrop-blur-md p-2 rounded-full border border-[var(--color-glass-border)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="text-white w-5 h-5" />
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-6 z-10 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-subtle)]">
          <div className="mb-3">
            <span className="text-xs font-mono text-[var(--color-accent-primary)] uppercase tracking-wider">{category}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors">
            {title}
          </h3>

          <p className="text-[var(--color-text-secondary)] text-sm line-clamp-2 mb-4">
            {shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-[var(--color-text-tertiary)] bg-[var(--color-bg-tertiary)] rounded-md border border-[var(--color-border-subtle)]">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </Link>
    </motion.article>
  );
};

export default ProjectCard;
