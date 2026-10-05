/**
 * DotField
 *
 * Hero background canvas: a grid of dots with a slow diagonal wave that
 * sweeps across, gently lifting and brightening the dots it passes, like a
 * scan line. Purely ambient — it does not react to the pointer.
 *
 * Pauses when off-screen or the tab is hidden, re-reads colors on theme
 * change, and draws a single static frame for reduced motion.
 */

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const SPACING = 30;
const BASE_SIZE = 1.3;
const BASE_ALPHA = 0.13;
const WAVE_LIFT = 1.6; // px of vertical drift at the crest
const WAVE_THRESHOLD = 0.72; // only the crest of the wave brightens dots
const MAX_DPR = 2;

const readColor = () =>
  getComputedStyle(document.documentElement).getPropertyValue('--color-fg').trim() || '#121212';

const buildGrid = (width, height) => {
  const cols = Math.ceil(width / SPACING) + 1;
  const rows = Math.ceil(height / SPACING) + 1;
  const offsetX = (width - (cols - 1) * SPACING) / 2;
  const offsetY = (height - (rows - 1) * SPACING) / 2;
  const points = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const x = offsetX + col * SPACING;
      const y = offsetY + row * SPACING;
      // Elliptical vignette baked into each dot (cheaper than a CSS mask on a live canvas)
      const dx = (x - width * 0.5) / (width * 0.75);
      const dy = (y - height * 0.45) / (height * 0.7);
      const fade = 1 - Math.min(1, Math.max(0, (Math.hypot(dx, dy) - 0.35) / 0.65));
      if (fade > 0.02) points.push({ x, y, fade });
    }
  }
  return points;
};

const DotField = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let points = [];
    let color = readColor();
    let frame = 0;
    let inView = true;
    let pageVisible = !document.hidden;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      points = buildGrid(width, height);
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      for (let i = 0; i < points.length; i += 1) {
        const p = points[i];
        const wave = Math.sin(p.x * 0.011 + p.y * 0.007 - time * 0.0011);
        const glow = Math.max(0, wave - WAVE_THRESHOLD) * 3.2;
        const size = BASE_SIZE + glow;
        ctx.globalAlpha = Math.min(1, BASE_ALPHA + glow * 0.35) * p.fade;
        ctx.fillRect(p.x - size / 2, p.y + wave * WAVE_LIFT - size / 2, size, size);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (prefersReducedMotion || frame || !inView || !pageVisible) return;
      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const handleVisibility = () => {
      pageVisible = !document.hidden;
      if (pageVisible) start();
      else stop();
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (prefersReducedMotion) draw(0);
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    });
    intersectionObserver.observe(canvas);

    const themeObserver = new MutationObserver(() => {
      color = readColor();
      if (prefersReducedMotion) draw(0);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none h-full w-full ${className}`} />
  );
};

export default DotField;
