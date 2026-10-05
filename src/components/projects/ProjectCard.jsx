/**
 * ProjectCard
 *
 * Cover, index, award ribbon, name, tagline and tech for one project.
 * Used by ProjectCarousel (home + project pages). The cursor follower
 * shows "View" over it. Extra props (onClick, tabIndex...) go to the Link.
 */

import { Link } from 'react-router-dom';
import { ArrowUpRight, Trophy } from 'lucide-react';
import ProjectCover from './ProjectCover';
import { getProjectTitleParts, getProjectNumber } from '../../data/projects';
import { getAchievementForProject } from '../../data/achievements';

const ProjectCard = ({ project, className = '', coverClassName = 'aspect-[4/3]', ...linkProps }) => {
  const { name, tagline } = getProjectTitleParts(project);
  const award = getAchievementForProject(project.id);

  return (
    <Link
      to={`/project/${project.id}`}
      data-cursor="View"
      className={`group/card flex flex-col ${className}`}
      draggable={false}
      {...linkProps}
    >
      <div className="relative">
        <ProjectCover project={project} className={`rounded-[1.25rem] ${coverClassName}`} />
        <span className="absolute left-4 top-4 rounded-full bg-paper px-3 py-1 font-mono text-[10px] text-ink">
          {getProjectNumber(project.id)}
        </span>
        {award && (
          <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white">
            <Trophy size={11} />
            {award.place} · {award.event.split(' (')[0]}
          </span>
        )}
        <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-all duration-500 ease-expo group-hover/card:translate-y-0 group-hover/card:opacity-100">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-[clamp(1.5rem,2.2vw,2.1rem)] font-semibold leading-tight tracking-[-0.035em] transition-colors duration-300 group-hover/card:text-accent">
            {name}
          </h3>
          {tagline && (
            <p className="mt-1 font-serif text-lg italic leading-snug text-fg-muted md:text-xl">{tagline}</p>
          )}
        </div>
        <span className="eyebrow shrink-0 pt-2 text-fg-subtle">{project.date}</span>
      </div>

      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-fg-muted">{project.shortDescription}</p>

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
        {project.technologies.slice(0, 4).map((tech) => (
          <li key={tech} className="eyebrow text-[10px] text-fg-subtle">
            {tech}
          </li>
        ))}
      </ul>
    </Link>
  );
};

export default ProjectCard;
