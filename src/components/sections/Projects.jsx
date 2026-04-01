/**
 * Projects Section
 *
 * Displays featured projects in an infinite scrolling carousel.
 * Supports drag/swipe interaction — scrolls left and right infinitely.
 * Auto-scroll pauses while the user is dragging.
 */

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import TiltCard from '../ui/TiltCard';
import SectionHeader from '../ui/SectionHeader';
import { getFeaturedProjects } from '../../data/projects';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Carousel images
import wazuhCarousel from '../../assets/pictures/wazuh_carousel.webp';
import segmentatorCarousel from '../../assets/pictures/3d_CV_carousel.webp';
import ctfCarousel from '../../assets/pictures/carousel_ctf.webp';
import medicoreCarousel from '../../assets/pictures/medicore_carousel.png';
import aegisCarousel from '../../assets/pictures/aegis_carousel.png';
import callpilotCarousel from '../../assets/pictures/callpilot_carousel.png';

/** Auto-scroll speed in pixels per second */
const SCROLL_SPEED = 50;

/** Minimum pointer movement (px) to count as a drag vs a click */
const DRAG_THRESHOLD = 4;

const carouselImages = {
  'wazuh-llm': wazuhCarousel,
  '3d-segmentator': segmentatorCarousel,
  'ctf-achievements': ctfCarousel,
  'medicore': medicoreCarousel,
  'aegis': aegisCarousel,
  'callpilot': callpilotCarousel,
};

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();
  const featuredProjects = getFeaturedProjects();
  // Duplicate for seamless infinite loop
  const duplicatedProjects = [...featuredProjects, ...featuredProjects];

  const trackRef = useRef(null);
  const x = useMotionValue(0);

  // isDragging is a ref so useAnimationFrame reads it synchronously
  const isDragging = useRef(false);
  // hasDragged distinguishes a click from a drag to block accidental navigation
  const hasDragged = useRef(false);
  const pointer = useRef({ lastX: 0 });
  const [dragging, setDragging] = useState(false);

  // Auto-scroll: pauses when the user is dragging or prefers reduced motion
  useAnimationFrame((_, delta) => {
    if (isDragging.current || prefersReducedMotion || !trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    let next = x.get() - (SCROLL_SPEED * delta) / 1000;
    if (next <= -halfWidth) next += halfWidth;
    x.set(next);
  });

  // --- Pointer handlers ---
  // Using raw pointer events instead of Framer Motion drag so we can teleport x
  // mid-drag for seamless infinite wrapping in both directions.

  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    pointer.current.lastX = e.clientX;
    isDragging.current = true;
    hasDragged.current = false;
    setDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    const delta = e.clientX - pointer.current.lastX;
    pointer.current.lastX = e.clientX;

    if (Math.abs(delta) > DRAG_THRESHOLD) hasDragged.current = true;

    const halfWidth = trackRef.current.scrollWidth / 2;
    let next = x.get() + delta;
    // Seamless wrap in both directions — no jump, happens each frame
    if (next <= -halfWidth) next += halfWidth;
    if (next > 0) next -= halfWidth;
    x.set(next);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    setDragging(false);
  };

  const handleCardClick = (e) => {
    if (hasDragged.current) {
      e.preventDefault();
      hasDragged.current = false;
    }
  };

  return (
    <section id="projects" className="py-[var(--space-xl)] bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="container-main">
        {/* Header */}
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

        {/* Carousel Container */}
        <div className="relative bg-[var(--color-surface-card)] rounded-[2rem] p-6 md:p-10 border border-[var(--color-border-default)] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Drag hint — mobile only */}
          <p className="flex items-center gap-1 mb-4 md:hidden text-[var(--color-text-muted)] text-[10px] font-black uppercase tracking-widest select-none">
            ← drag to explore →
          </p>

          {/* Carousel Track */}
          <motion.div
            ref={trackRef}
            className={`flex gap-8 w-max select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ x, touchAction: 'pan-y' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {duplicatedProjects.map((project, index) => (
              <TiltCard
                key={`${project.id}-${index}`}
                className="w-[240px] sm:w-[270px] md:w-[300px] lg:w-[340px] shrink-0 flex flex-col h-[360px] md:h-[430px]"
                intensity={6}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="block group/card h-full"
                  draggable={false}
                  onClick={handleCardClick}
                >
                  <Card
                    className="h-full !p-0 overflow-hidden !border-[var(--color-border-default)] group-hover/card:border-[var(--color-accent-primary)]/30 transition-all duration-500 flex flex-col group-hover/card:shadow-xl"
                    hover={false}
                  >
                    {/* Image Section */}
                    <div className="aspect-[16/9] bg-[var(--color-text-primary)] relative overflow-hidden rounded-t-[24px]">
                      <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/0 transition-colors duration-500 z-10" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-white px-2.5 py-1 rounded-full text-[#121212]">
                          {project.category.split(' & ')[0]}
                        </span>
                      </div>

                      {/* Arrow Icon */}
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-300 z-20">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>

                      {/* Background Image */}
                      {carouselImages[project.id] ? (
                        <img
                          src={carouselImages[project.id]}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          draggable={false}
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

                    {/* Content Section */}
                    <div className="p-5 md:p-8 flex-1 flex flex-col">
                      <h3 className="text-sm md:text-base lg:text-lg font-bold text-[var(--color-text-primary)] group-hover/card:text-[var(--color-accent-primary)] transition-colors italic tracking-tight uppercase font-sans mb-3 leading-[1.2] line-clamp-3">
                        {project.title}
                      </h3>

                      <p className="text-[var(--color-text-secondary)] text-[11px] md:text-xs mb-6 leading-relaxed line-clamp-2 font-medium">
                        {project.shortDescription}
                      </p>

                      {/* Technologies */}
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
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
