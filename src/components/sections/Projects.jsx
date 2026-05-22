/**
 * Projects Section
 *
 * Section wrapper for the home page carousel.
 * The carousel itself lives in ProjectCarousel for reuse on ProjectDetail.
 */

import SectionHeader from '../ui/SectionHeader';
import ProjectCarousel from './ProjectCarousel';

const Projects = () => (
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

      <ProjectCarousel />
    </div>
  </section>
);

export default Projects;
