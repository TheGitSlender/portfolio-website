/**
 * Projects Section
 *
 * Section header plus the shared ProjectCarousel, which runs full-bleed
 * across the viewport. The carousel itself is reused on project pages.
 */

import { ArrowUpRight, MoveHorizontal } from 'lucide-react';
import ProjectCarousel from '../projects/ProjectCarousel';
import SectionIntro from '../ui/SectionIntro';
import { getFeaturedProjects } from '../../data/projects';
import { getSocialLink } from '../../data/contact';

const github = getSocialLink('GitHub');

const Projects = () => (
  <section id="projects" className="relative py-[clamp(5rem,10vw,9rem)]">
    <div className="container-main">
      <SectionIntro
        index="03"
        label="Selected work"
        title="Things I've *built*"
        aside="Voice AI, federated research, agents and security tooling. Hackathon winners and long-haul builds alike."
      />
    </div>

    <div className="mt-[clamp(3rem,6vw,5rem)]">
      <ProjectCarousel />
    </div>

    <div className="container-main mt-10 flex flex-wrap items-center justify-between gap-4">
      <p className="eyebrow flex items-center gap-3 text-fg-subtle">
        <MoveHorizontal size={14} className="text-accent" />
        Drag to explore ·{' '}
        <span className="text-fg">{String(getFeaturedProjects().length).padStart(2, '0')}</span> projects
      </p>
      {github && (
        <a
          href={github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
        >
          More on GitHub
          <ArrowUpRight size={15} />
        </a>
      )}
    </div>
  </section>
);

export default Projects;
