/**
 * ProjectCarousel
 *
 * Infinite, auto-scrolling, draggable project rail. Used on Home and at the
 * bottom of every project page (with the current project excluded).
 *
 * Gesture system (intentionally not Framer Motion's `drag`, which swallows
 * the click events cards need):
 * 1. `pointerdown` on the track starts a gesture and registers
 *    `pointermove`/`pointerup` on `window`
 * 2. All mutable gesture state lives in `gesture = useRef({...})` to avoid
 *    stale closures
 * 3. A press that moves ≤ DRAG_THRESHOLD px is a click: navigate on `pointerup`
 * 4. Cards sit in plain `<div data-project-id>` wrappers so
 *    `closest('[data-project-id]')` reliably finds the project
 * 5. Each card's `<Link>` keeps a real `href` (right-click / middle-click /
 *    Cmd-click open in a new tab); plain mouse clicks are prevented and
 *    handled by step 3, keyboard Enter navigates natively
 * 6. Auto-scroll runs in `useAnimationFrame` (idle off-screen), keeps going
 *    under the mouse, eases to a stop only while a card has keyboard focus,
 *    and a released drag keeps gliding with decaying momentum
 * 7. The list is rendered COPIES times and `x` wraps every one copy width
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useInView, useMotionValue } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { getFeaturedProjects } from '../../data/projects';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const SCROLL_SPEED = 45; // px/s auto-scroll
const DRAG_THRESHOLD = 8; // px of movement that turns a press into a drag
const COPIES = 3;
const SPEED_EASE = 5; // how fast auto-scroll speeds up / slows down (1/s)
const MOMENTUM_DECAY = 4.5; // 1/s
const MAX_MOMENTUM = 2600; // px/s

const ProjectCarousel = ({ excludeId = null, className = '' }) => {
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const projects = getFeaturedProjects().filter((project) => project.id !== excludeId);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [dragging, setDragging] = useState(false);

  const gesture = useRef({
    active: false,
    lastX: 0,
    lastTime: 0,
    totalMoved: 0,
    velocity: 0,
    projectId: null,
    isDragging: false, // true once DRAG_THRESHOLD is crossed
  });
  const momentum = useRef(0);
  const speed = useRef(1); // current auto-scroll multiplier (0..1)
  const keyboardFocused = useRef(false);
  const onScreen = useInView(viewportRef, { margin: '200px 0px' });

  const wrapX = useCallback((value) => {
    const copyWidth = trackRef.current ? trackRef.current.scrollWidth / COPIES : 0;
    if (!copyWidth) return value;
    let next = value;
    while (next <= -copyWidth) next += copyWidth;
    while (next > 0) next -= copyWidth;
    return next;
  }, []);

  useAnimationFrame((_, delta) => {
    if (gesture.current.active || !trackRef.current || !onScreen) return;
    const dt = Math.min(delta, 64) / 1000;

    const targetSpeed = keyboardFocused.current || prefersReducedMotion ? 0 : 1;
    speed.current += (targetSpeed - speed.current) * Math.min(1, dt * SPEED_EASE);

    let dx = -SCROLL_SPEED * speed.current * dt + momentum.current * dt;
    momentum.current *= Math.exp(-MOMENTUM_DECAY * dt);
    if (Math.abs(momentum.current) < 4) momentum.current = 0;

    if (Math.abs(dx) > 0.001) x.set(wrapX(x.get() + dx));
  });

  const handleWindowMove = useCallback(
    (event) => {
      const state = gesture.current;
      if (!state.active) return;
      const now = performance.now();
      const delta = event.clientX - state.lastX;
      const elapsed = Math.max(1, now - state.lastTime);
      state.lastX = event.clientX;
      state.lastTime = now;
      state.totalMoved += Math.abs(delta);
      state.velocity = state.velocity * 0.6 + (delta / elapsed) * 1000 * 0.4;

      if (state.totalMoved > DRAG_THRESHOLD) {
        if (!state.isDragging) {
          state.isDragging = true;
          setDragging(true);
        }
        x.set(wrapX(x.get() + delta));
      }
    },
    [x, wrapX],
  );

  const handleWindowUp = useCallback(() => {
    const { totalMoved, projectId, isDragging, velocity } = gesture.current;
    gesture.current.active = false;
    gesture.current.isDragging = false;
    window.removeEventListener('pointermove', handleWindowMove);
    setDragging(false);

    if (isDragging) {
      momentum.current = Math.max(-MAX_MOMENTUM, Math.min(MAX_MOMENTUM, velocity));
    } else if (totalMoved <= DRAG_THRESHOLD && projectId) {
      navigate(`/project/${projectId}`);
    }
  }, [navigate, handleWindowMove]);

  const handlePointerDown = useCallback(
    (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      const modifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      const wrapper = event.target.closest('[data-project-id]');

      momentum.current = 0;
      gesture.current = {
        active: true,
        lastX: event.clientX,
        lastTime: performance.now(),
        totalMoved: 0,
        velocity: 0,
        // Modified clicks are left to the browser (open in new tab, etc.)
        projectId: wrapper && !modifier ? wrapper.dataset.projectId : null,
        isDragging: false,
      };

      window.addEventListener('pointermove', handleWindowMove);
      window.addEventListener('pointerup', handleWindowUp, { once: true });
      window.addEventListener('pointercancel', handleWindowUp, { once: true });
    },
    [handleWindowMove, handleWindowUp],
  );

  useEffect(
    () => () => {
      window.removeEventListener('pointermove', handleWindowMove);
      window.removeEventListener('pointerup', handleWindowUp);
      window.removeEventListener('pointercancel', handleWindowUp);
    },
    [handleWindowMove, handleWindowUp],
  );

  // Plain mouse clicks are handled on pointerup; keyboard (detail === 0)
  // and modified clicks keep the Link's native behaviour.
  const handleCardClick = (event) => {
    const modifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.detail > 0 && !modifier) event.preventDefault();
  };

  // Keyboard focus: stop, and slide the focused card into view instead of
  // letting the browser scroll the clipped viewport sideways. (Mouse presses
  // also focus links; those are ignored here.)
  const handleFocus = (event) => {
    const viewport = viewportRef.current;
    viewport.scrollLeft = 0;
    if (!event.target.matches(':focus-visible')) return;
    keyboardFocused.current = true;
    // Only the first copy is tabbable and copy 0 spans x ∈ (-copyWidth, 0],
    // so clamp (never wrap) x into the range that shows the focused card.
    const bounds = viewport.getBoundingClientRect();
    const card = event.target.getBoundingClientRect();
    const inset = Math.min(64, bounds.width * 0.08);
    const offset = card.left - bounds.left - x.get();
    const showsLeftEdge = inset - offset;
    const showsRightEdge = bounds.width - inset - (offset + card.width);
    x.set(Math.min(0, Math.max(showsRightEdge, Math.min(x.get(), showsLeftEdge))));
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) keyboardFocused.current = false;
  };

  return (
    <div
      ref={viewportRef}
      className={`relative overflow-hidden ${className}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[4%] bg-gradient-to-r from-bg to-transparent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[4%] bg-gradient-to-l from-bg to-transparent"
      />
      <motion.div
        ref={trackRef}
        data-cursor="Drag"
        className={`flex w-max select-none gap-6 py-2 will-change-transform md:gap-8 ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ x, touchAction: 'pan-y' }}
        onPointerDown={handlePointerDown}
      >
        {Array.from({ length: COPIES }, (_, copy) =>
          projects.map((project) => (
            // Plain div carries data-project-id — guaranteed in the DOM
            <div
              key={`${copy}-${project.id}`}
              data-project-id={project.id}
              aria-hidden={copy > 0 ? 'true' : undefined}
              className="w-[78vw] shrink-0 sm:w-[340px] lg:w-[400px]"
            >
              <ProjectCard
                project={project}
                onClick={handleCardClick}
                tabIndex={copy > 0 ? -1 : undefined}
                className={dragging ? 'pointer-events-none' : ''}
              />
            </div>
          )),
        )}
      </motion.div>
    </div>
  );
};

export default ProjectCarousel;
