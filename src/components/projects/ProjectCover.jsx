/**
 * ProjectCover
 *
 * The project's cover image, or, for projects without one yet, a generated
 * cover: ink panel, dot grid, a drifting accent glow placed by the project
 * id, and the outlined project name cropped off the bottom edge.
 *
 * Hover zoom is triggered by an ancestor with the `group/card` class.
 */

import { getProjectCover } from '../../assets/media';
import { getProjectTitleParts } from '../../data/projects';

const hash = (text) => [...text].reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) % 997, 7);

const GeneratedCover = ({ project }) => {
  const { name } = getProjectTitleParts(project);
  const seed = hash(project.id);
  const glowStyle = {
    left: `${10 + (seed % 45)}%`,
    top: `${(seed * 7) % 40}%`,
    animationDelay: `-${seed % 14}s`,
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div
        className="absolute h-[110%] w-[110%] animate-[drift_14s_ease-in-out_infinite] rounded-full opacity-70 will-change-transform [background:radial-gradient(closest-side,var(--color-accent),transparent)]"
        style={glowStyle}
      />
      <span className="eyebrow absolute right-5 top-5 max-w-[60%] text-right text-paper/60 transition-opacity duration-300 group-hover/card:opacity-0">
        {project.category}
      </span>
      <span className="text-outline absolute -bottom-[0.18em] left-4 whitespace-nowrap text-[clamp(4rem,9vw,8.5rem)] font-semibold leading-none tracking-[-0.02em] text-paper/80 transition-transform duration-[1.4s] ease-expo group-hover/card:-translate-y-[0.08em]">
        {name}
      </span>
    </div>
  );
};

const ProjectCover = ({ project, className = '' }) => {
  const src = getProjectCover(project.id);

  return (
    <div className={`relative isolate overflow-hidden bg-surface-muted ${className}`}>
      {src ? (
        <img
          src={src}
          alt={project.title}
          loading="lazy"
          draggable={false}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-expo group-hover/card:scale-[1.06]"
        />
      ) : (
        <GeneratedCover project={project} />
      )}
    </div>
  );
};

export default ProjectCover;
