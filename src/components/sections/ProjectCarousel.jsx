import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import TiltCard from '../ui/TiltCard';
import { getFeaturedProjects } from '../../data/projects';
import { useReducedMotion } from '../../hooks/useReducedMotion';

import wazuhCarousel from '../../assets/pictures/wazuh_carousel.webp';
import segmentatorCarousel from '../../assets/pictures/3d_CV_carousel.webp';
import ctfCarousel from '../../assets/pictures/carousel_ctf.webp';
import medicoreCarousel from '../../assets/pictures/medicore_carousel.png';
import aegisCarousel from '../../assets/pictures/aegis_carousel.png';
import callpilotCarousel from '../../assets/pictures/callpilot_carousel.png';

const SCROLL_SPEED = 50; // px/s auto-scroll
const DRAG_THRESHOLD = 8; // px total movement to distinguish click from drag

const carouselImages = {
  'wazuh-llm': wazuhCarousel,
  '3d-segmentator': segmentatorCarousel,
  'ctf-achievements': ctfCarousel,
  'medicore': medicoreCarousel,
  'aegis': aegisCarousel,
  'callpilot': callpilotCarousel,
};

const ProjectCarousel = () => {
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();

  const featuredProjects = getFeaturedProjects();
  const duplicatedProjects = [...featuredProjects, ...featuredProjects];

  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [dragging, setDragging] = useState(false);

  const drag = useRef({
    active: false,
    lastX: 0,
    totalMoved: 0,
    projectId: null,
    isDragging: false, // true once DRAG_THRESHOLD crossed
  });

  useAnimationFrame((_, delta) => {
    if (drag.current.active || prefersReducedMotion || !trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    let next = x.get() - (SCROLL_SPEED * delta) / 1000;
    if (next <= -halfWidth) next += halfWidth;
    x.set(next);
  });

  const onWindowMove = useCallback((e) => {
    if (!drag.current.active || !trackRef.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = clientX - drag.current.lastX;
    drag.current.lastX = clientX;
    drag.current.totalMoved += Math.abs(delta);

    if (drag.current.totalMoved > DRAG_THRESHOLD) {
      if (!drag.current.isDragging) {
        drag.current.isDragging = true;
        setDragging(true);
      }
      const halfWidth = trackRef.current.scrollWidth / 2;
      let next = x.get() + delta;
      if (next <= -halfWidth) next += halfWidth;
      if (next > 0) next -= halfWidth;
      x.set(next);
    }
  }, [x]);

  const onWindowUp = useCallback(() => {
    const { totalMoved, projectId } = drag.current;
    drag.current.active = false;
    drag.current.isDragging = false;
    setDragging(false);

    if (totalMoved <= DRAG_THRESHOLD && projectId) {
      navigate(`/project/${projectId}`);
    }
  }, [navigate]);

  const handlePointerDown = useCallback((e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const wrapper = e.target.closest('[data-project-id]');

    drag.current = {
      active: true,
      lastX: e.clientX,
      totalMoved: 0,
      projectId: wrapper ? wrapper.dataset.projectId : null,
      isDragging: false,
    };

    window.addEventListener('pointermove', onWindowMove);
    window.addEventListener('pointerup', onWindowUp, { once: true });
  }, [onWindowMove, onWindowUp]);

  useEffect(() => {
    return () => {
      window.removeEventListener('pointermove', onWindowMove);
      window.removeEventListener('pointerup', onWindowUp);
    };
  }, [onWindowMove, onWindowUp]);

  return (
    <div className="relative bg-[var(--color-surface-card)] rounded-[2rem] p-6 md:p-10 border border-[var(--color-border-default)] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] overflow-hidden">
      <p className="flex items-center gap-1 mb-4 md:hidden text-[var(--color-text-muted)] text-[10px] font-black uppercase tracking-widest select-none">
        ← drag to explore →
      </p>

      <motion.div
        ref={trackRef}
        className={`flex gap-8 w-max select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ x, touchAction: 'pan-y' }}
        onPointerDown={handlePointerDown}
      >
        {duplicatedProjects.map((project, index) => (
          // Plain div carries data-project-id — guaranteed in the DOM
          <div
            key={`${project.id}-${index}`}
            data-project-id={project.id}
            className="w-[240px] sm:w-[270px] md:w-[300px] lg:w-[340px] shrink-0 h-[360px] md:h-[430px]"
          >
            <TiltCard className="h-full flex flex-col" intensity={6}>
              {/* Link kept for right-click → open in new tab; left-click handled via navigate() */}
              <Link
                to={`/project/${project.id}`}
                className="block group/card h-full"
                draggable={false}
                onClick={e => e.preventDefault()}
              >
                <Card
                  className="h-full !p-0 overflow-hidden !border-[var(--color-border-default)] group-hover/card:border-[var(--color-accent-primary)]/30 transition-all duration-500 flex flex-col group-hover/card:shadow-xl"
                  hover={false}
                >
                  <div className="aspect-[16/9] bg-[var(--color-text-primary)] relative overflow-hidden rounded-t-[24px]">
                    <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/0 transition-colors duration-500 z-10" />

                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-white px-2.5 py-1 rounded-full text-[#121212]">
                        {project.category.split(' & ')[0]}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-300 z-20">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    {carouselImages[project.id] ? (
                      <img
                        src={carouselImages[project.id]}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        draggable={false}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center px-4">
                        <span className="text-2xl md:text-3xl font-black text-white/[0.04] select-none uppercase tracking-tighter truncate">
                          {project.id.split('-')[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-sm md:text-base lg:text-lg font-bold text-[var(--color-text-primary)] group-hover/card:text-[var(--color-accent-primary)] transition-colors italic tracking-tight uppercase font-sans mb-3 leading-[1.2] line-clamp-3">
                      {project.title}
                    </h3>

                    <p className="text-[var(--color-text-secondary)] text-[11px] md:text-xs mb-6 leading-relaxed line-clamp-2 font-medium">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border-default)] mt-auto">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[8px] font-black uppercase tracking-widest text-[var(--color-text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </TiltCard>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectCarousel;
