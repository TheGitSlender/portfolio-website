/**
 * AsciiKnot
 *
 * A (2,3) torus knot rendered as ASCII, like a 1980s terminal demo: the
 * surface is sampled once, rotated each frame, z-buffered onto a character
 * grid and shaded with ".,-~:;=!*#$@". The brightest cells pick up the
 * accent colour. Drag to turn it; it keeps a slow idle rotation otherwise.
 *
 * Pauses off-screen / in hidden tabs, follows the theme, and renders a
 * single still frame for reduced motion (dragging still works).
 */

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

const SHADES = '.,-~:;=!*#$@';
const FONT_SIZE = 11;
const CELL_W = FONT_SIZE * 0.62;
const CELL_H = FONT_SIZE * 1.12;
const U_STEPS = 260; // samples along the knot
const V_STEPS = 22; // samples around the tube
const TUBE = 0.42;
const IDLE_SPEED = { a: 0.35, b: 0.22 }; // rad/s
const DRAG_GAIN = 0.008;
const MAX_DPR = 2;

const knotPoint = (t) => {
  const r = 2 + Math.cos(3 * t);
  return [r * Math.cos(2 * t), r * Math.sin(2 * t), Math.sin(3 * t)];
};
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const normalize = (a) => {
  const length = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / length, a[1] / length, a[2] / length];
};

/** Surface points + normals of the tube around the knot, computed once */
const buildSurface = () => {
  const points = [];
  for (let i = 0; i < U_STEPS; i += 1) {
    const t = (i / U_STEPS) * Math.PI * 2;
    const center = knotPoint(t);
    const tangent = normalize(sub(knotPoint(t + 0.001), center));
    const normal = normalize(cross(tangent, [0, 0, 1]));
    const binormal = cross(tangent, normal);
    for (let j = 0; j < V_STEPS; j += 1) {
      const v = (j / V_STEPS) * Math.PI * 2;
      const n = [
        normal[0] * Math.cos(v) + binormal[0] * Math.sin(v),
        normal[1] * Math.cos(v) + binormal[1] * Math.sin(v),
        normal[2] * Math.cos(v) + binormal[2] * Math.sin(v),
      ];
      points.push({
        x: center[0] + TUBE * n[0],
        y: center[1] + TUBE * n[1],
        z: center[2] + TUBE * n[2],
        nx: n[0],
        ny: n[1],
        nz: n[2],
      });
    }
  }
  return points;
};

const SURFACE = buildSurface();
const LIGHT = normalize([0.3, -0.6, -0.75]); // towards the viewer, from the top left

const readColors = () => {
  const styles = getComputedStyle(document.documentElement);
  return {
    fg: styles.getPropertyValue('--color-fg').trim() || '#121212',
    accent: styles.getPropertyValue('--color-accent').trim() || '#ff3700',
  };
};

const AsciiKnot = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;
    let colors = readColors();
    let frame = 0;
    let last = 0;
    let inView = true;
    let pageVisible = !document.hidden;
    const angle = { a: 0.6, b: 0.3 };
    const drag = { active: false, x: 0, y: 0 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.floor(width / CELL_W);
      rows = Math.floor(height / CELL_H);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      if (!cols || !rows) return;
      const cells = cols * rows;
      const depth = new Float32Array(cells);
      const shade = new Int8Array(cells).fill(-1);
      const cosA = Math.cos(angle.a);
      const sinA = Math.sin(angle.a);
      const cosB = Math.cos(angle.b);
      const sinB = Math.sin(angle.b);
      const scale = Math.min(cols * CELL_W, rows * CELL_H) * 0.145;
      const viewer = 12;

      for (let i = 0; i < SURFACE.length; i += 1) {
        const p = SURFACE[i];
        // Rotate around X (a) then Z (b)
        const y1 = p.y * cosA - p.z * sinA;
        const z1 = p.y * sinA + p.z * cosA;
        const x2 = p.x * cosB - y1 * sinB;
        const y2 = p.x * sinB + y1 * cosB;
        const ny1 = p.ny * cosA - p.nz * sinA;
        const nz1 = p.ny * sinA + p.nz * cosA;
        const nx2 = p.nx * cosB - ny1 * sinB;
        const ny2 = p.nx * sinB + ny1 * cosB;

        const ooz = 1 / (z1 + viewer); // one over z: bigger is closer
        const col = Math.floor(cols / 2 + (x2 * scale * ooz * viewer) / CELL_W);
        const row = Math.floor(rows / 2 + (y2 * scale * ooz * viewer) / CELL_H);
        if (col < 0 || col >= cols || row < 0 || row >= rows) continue;

        const index = row * cols + col;
        if (ooz <= depth[index]) continue;
        depth[index] = ooz;
        const luminance = nx2 * LIGHT[0] + ny2 * LIGHT[1] + nz1 * LIGHT[2];
        // Contrast curve so only surfaces facing the light reach the dense glyphs
        shade[index] = luminance > 0 ? Math.min(SHADES.length - 1, Math.floor(luminance ** 1.8 * SHADES.length)) : 0;
      }

      ctx.font = `500 ${FONT_SIZE}px "Geist Mono", ui-monospace, monospace`;
      ctx.textBaseline = 'top';
      const accentFrom = SHADES.length - 1; // only the brightest glyph is accent
      for (let index = 0; index < cells; index += 1) {
        const level = shade[index];
        if (level < 0) continue;
        const accent = level >= accentFrom;
        ctx.fillStyle = accent ? colors.accent : colors.fg;
        ctx.globalAlpha = accent ? 1 : 0.3 + (level / SHADES.length) * 0.7;
        ctx.fillText(SHADES[level], (index % cols) * CELL_W, Math.floor(index / cols) * CELL_H);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time) => {
      const dt = last ? Math.min(time - last, 50) / 1000 : 0;
      last = time;
      if (!drag.active) {
        angle.a += IDLE_SPEED.a * dt;
        angle.b += IDLE_SPEED.b * dt;
      }
      draw();
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (prefersReducedMotion || frame || !inView || !pageVisible) return;
      last = 0;
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const handleDown = (event) => {
      drag.active = true;
      drag.x = event.clientX;
      drag.y = event.clientY;
      canvas.setPointerCapture(event.pointerId);
    };
    const handleMove = (event) => {
      if (!drag.active) return;
      angle.b += (event.clientX - drag.x) * DRAG_GAIN;
      angle.a += (event.clientY - drag.y) * DRAG_GAIN;
      drag.x = event.clientX;
      drag.y = event.clientY;
      if (!frame) draw();
    };
    const handleUp = () => {
      drag.active = false;
    };
    canvas.addEventListener('pointerdown', handleDown);
    canvas.addEventListener('pointermove', handleMove);
    canvas.addEventListener('pointerup', handleUp);
    canvas.addEventListener('pointercancel', handleUp);

    const handleVisibility = () => {
      pageVisible = !document.hidden;
      if (pageVisible) start();
      else stop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    });
    intersectionObserver.observe(canvas);

    const themeObserver = new MutationObserver(() => {
      colors = readColors();
      if (!frame) draw();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    document.fonts?.ready.then(() => {
      if (!frame) draw();
    });

    return () => {
      stop();
      canvas.removeEventListener('pointerdown', handleDown);
      canvas.removeEventListener('pointermove', handleMove);
      canvas.removeEventListener('pointerup', handleUp);
      canvas.removeEventListener('pointercancel', handleUp);
      document.removeEventListener('visibilitychange', handleVisibility);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Rotating ASCII-art torus knot — drag to turn"
      data-cursor="Drag"
      className={`h-full w-full cursor-grab touch-pan-y active:cursor-grabbing ${className}`}
    />
  );
};

export default AsciiKnot;
