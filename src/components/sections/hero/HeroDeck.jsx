/**
 * Hero option: Project deck
 *
 * Classic layout with a fanned stack of project cards beside the first
 * name. Every few seconds the top card flies off and joins the back of the
 * deck. Hover pauses and spreads the stack; the top card opens its project;
 * "Next" shuffles manually. On smaller screens the deck sits under the copy.
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import ClassicLayout from './ClassicLayout';
import { HeroShell } from './HeroParts';
import ProjectCover from '../../projects/ProjectCover';
import { getFeaturedProjects, getProjectTitleParts, getProjectNumber } from '../../../data/projects';
import { getAchievementForProject } from '../../../data/achievements';
import { ease } from '../../../config/animations';
import { useIntro } from '../../../hooks/IntroContext';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

const SHUFFLE_INTERVAL = 3800;
const VISIBLE = 4;
const projects = getFeaturedProjects();

// Resting pose of each card by depth (0 = top); `spread` is the hover pose
const pose = (depth, spread) => ({
  x: -depth * (spread ? 44 : 30),
  y: -depth * (spread ? 16 : 12),
  rotate: (spread ? [-2, -8, -14, -19] : [-3, -8, -13, -17])[depth],
  scale: 1 - depth * 0.05,
  opacity: depth < VISIBLE - 1 ? 1 : 0.6,
});

const Deck = ({ compact = false }) => {
  const { introDone } = useIntro();
  const prefersReducedMotion = useReducedMotion();
  const [order, setOrder] = useState(() => projects.map((_, i) => i));
  const [hovered, setHovered] = useState(false);

  const shuffle = () => setOrder((current) => [...current.slice(1), current[0]]);

  useEffect(() => {
    if (!introDone || hovered || prefersReducedMotion) return undefined;
    const id = setInterval(() => setOrder((current) => [...current.slice(1), current[0]]), SHUFFLE_INTERVAL);
    return () => clearInterval(id);
  }, [introDone, hovered, prefersReducedMotion]);

  const top = projects[order[0]];
  const { name, tagline } = getProjectTitleParts(top);
  const award = getAchievementForProject(top.id);
  const cardSize = compact ? 'h-[180px] w-[260px]' : 'h-[190px] w-[270px] xl:h-[210px] xl:w-[300px]';

  return (
    <motion.div
      className={`flex items-end gap-16 xl:gap-24 ${compact ? 'flex-col-reverse items-start' : 'h-full justify-end pb-8'}`}
      initial={{ opacity: 0, y: 30 }}
      animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, ease: ease.expo, delay: 0.9 }}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {/* Caption */}
      <div className="max-w-[15rem] pb-1">
        <p className="eyebrow text-fg-subtle">
          Selected work · <span className="text-accent">{getProjectNumber(top.id)}</span>/
          {String(projects.length).padStart(2, '0')}
        </p>
        <div className="mt-2 min-h-[4.5rem] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={top.id}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.45, ease: ease.expo }}
            >
              <p className="text-xl font-semibold leading-tight tracking-[-0.03em]">{name}</p>
              {tagline && (
                <p className="mt-0.5 font-serif text-base italic leading-snug text-fg-muted">{tagline}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          type="button"
          onClick={shuffle}
          className="group/next mt-3 inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
        >
          Next
          <ArrowRight
            size={15}
            className="transition-transform duration-500 ease-expo group-hover/next:translate-x-1"
          />
        </button>
      </div>

      {/* Stack */}
      <div className={`relative shrink-0 ${cardSize}`}>
        <AnimatePresence initial={false}>
          {order.slice(0, VISIBLE).map((projectIndex, depth) => {
            const project = projects[projectIndex];
            const isTop = depth === 0;
            return (
              <motion.div
                key={project.id}
                className="absolute inset-0 origin-bottom-right"
                style={{ zIndex: VISIBLE - depth }}
                initial={{ ...pose(VISIBLE - 1, false), opacity: 0 }}
                animate={pose(depth, hovered)}
                exit={{
                  x: 160,
                  y: -60,
                  rotate: 14,
                  opacity: 0,
                  transition: { duration: 0.6, ease: ease.expo },
                }}
                transition={{ type: 'spring', stiffness: 170, damping: 22 }}
                aria-hidden={isTop ? undefined : 'true'}
              >
                <Link
                  to={`/project/${project.id}`}
                  tabIndex={isTop ? undefined : -1}
                  data-cursor={isTop ? 'View' : undefined}
                  className={`group/card relative block h-full w-full overflow-hidden rounded-[1.25rem] border border-line bg-surface shadow-lift ${
                    isTop ? '' : 'pointer-events-none'
                  }`}
                >
                  <ProjectCover project={project} className="h-full w-full" />
                  {isTop && award && (
                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white">
                      <Trophy size={10} />
                      {award.place}
                    </span>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      {/* Screen-reader summary of the current card */}
      <span className="sr-only" aria-live="polite">
        {award ? `${name}, ${award.place}` : name}
      </span>
    </motion.div>
  );
};

const HeroDeck = () => (
  <HeroShell>
    {(progress) => <ClassicLayout progress={progress} corner={<Deck />} below={<Deck compact />} />}
  </HeroShell>
);

export default HeroDeck;
