/**
 * Hero option: Voice wave
 *
 * Classic layout with a live voice waveform beside the first name. The wave
 * "speaks" in syllable-like bursts while a sample utterance from one of the
 * voice projects types out underneath, then idles between lines. Each
 * utterance links to the project it comes from.
 */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ClassicLayout from './ClassicLayout';
import { HeroShell } from './HeroParts';
import { voiceSamples } from '../../../data/hero';
import { getProjectById, getProjectTitleParts } from '../../../data/projects';
import { ease } from '../../../config/animations';
import { useIntro } from '../../../hooks/IntroContext';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

const CHAR_MS = 46; // typing speed of the transcript
const HOLD_MS = 2200; // pause after a line finishes
const START_DELAY = 500;
const MAX_DPR = 2;

const LINES = [
  { color: 'accent', width: 2, alpha: 1, freq: 3.2, speed: 5.5, phase: 0 },
  { color: 'fg', width: 1, alpha: 0.2, freq: 4.6, speed: -4.2, phase: 1.7 },
  { color: 'fg', width: 1, alpha: 0.12, freq: 2.2, speed: 3.1, phase: 3.1 },
];

const readColors = () => {
  const styles = getComputedStyle(document.documentElement);
  return {
    fg: styles.getPropertyValue('--color-fg').trim() || '#121212',
    accent: styles.getPropertyValue('--color-accent').trim() || '#ff3700',
  };
};

/** Canvas waveform; amplitude follows `speakingRef` (true while a line types) */
const Waveform = ({ speakingRef }) => {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let colors = readColors();
    let frame = 0;
    let last = 0;
    let level = 0.06;
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
    };

    const draw = (time) => {
      const t = time / 1000;
      ctx.clearRect(0, 0, width, height);
      const mid = height / 2;
      const amplitude = height * 0.48;
      for (const line of LINES) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 3) {
          const nx = x / width;
          const envelope = Math.sin(Math.PI * nx) ** 1.6;
          const wave =
            Math.sin(nx * line.freq * Math.PI * 2 + t * line.speed + line.phase) * 0.7 +
            Math.sin(nx * line.freq * 2.3 * Math.PI * 2 - t * line.speed * 0.6) * 0.3;
          const y = mid + amplitude * level * envelope * wave;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = colors[line.color];
        ctx.globalAlpha = line.alpha;
        ctx.lineWidth = line.width;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time) => {
      const dt = last ? Math.min(time - last, 50) / 1000 : 0;
      last = time;
      const t = time / 1000;
      // Syllable-ish modulation while speaking, a faint ripple when idle
      const target = speakingRef.current
        ? 0.3 + 0.7 * Math.abs(Math.sin(t * 10.5)) * (0.65 + 0.35 * Math.sin(t * 2.3))
        : 0.06;
      level += (target - level) * Math.min(1, dt * 9);
      draw(time);
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

    const handleVisibility = () => {
      pageVisible = !document.hidden;
      if (pageVisible) start();
      else stop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (prefersReducedMotion) {
        level = 0.5;
        draw(0);
      }
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
      if (!frame) draw(0);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibility);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
    };
  }, [prefersReducedMotion, speakingRef]);

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />;
};

const VoicePanel = ({ compact = false }) => {
  const { introDone } = useIntro();
  const prefersReducedMotion = useReducedMotion();
  const [sampleIndex, setSampleIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const speakingRef = useRef(false);

  const sample = voiceSamples[sampleIndex];
  const project = getProjectById(sample.projectId);
  const shown = prefersReducedMotion ? sample.text : sample.text.slice(0, typed);
  const finished = shown.length === sample.text.length;

  // Type the current line, hold it, then move on to the next one
  useEffect(() => {
    if (!introDone || prefersReducedMotion) return undefined;
    let timer;
    let count = 0;
    const step = () => {
      count += 1;
      speakingRef.current = true;
      setTyped(count);
      if (count < sample.text.length) {
        timer = setTimeout(step, CHAR_MS * (0.6 + Math.random() * 0.8));
      } else {
        speakingRef.current = false;
        timer = setTimeout(() => {
          setTyped(0);
          setSampleIndex((index) => (index + 1) % voiceSamples.length);
        }, HOLD_MS);
      }
    };
    timer = setTimeout(step, START_DELAY);
    return () => {
      clearTimeout(timer);
      speakingRef.current = false;
    };
  }, [introDone, prefersReducedMotion, sample.text]);

  return (
    <motion.div
      className={`flex flex-col justify-end gap-3 ${compact ? '' : 'h-full'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: introDone ? 1 : 0 }}
      transition={{ duration: 1.2, ease: ease.smooth, delay: 0.8 }}
    >
      <div className="eyebrow flex items-center justify-between gap-4 text-fg-subtle">
        <span className="flex items-center gap-2">
          <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-accent" />
          Voice agent · live
        </span>
        <span>
          {String(sampleIndex + 1).padStart(2, '0')}/{String(voiceSamples.length).padStart(2, '0')}
        </span>
      </div>

      <div className="h-[clamp(80px,12vh,124px)] w-full">
        <Waveform speakingRef={speakingRef} />
      </div>

      <div className="min-h-[4.6rem]">
        <p className="font-serif text-[clamp(1.2rem,1.7vw,1.65rem)] italic leading-snug">
          “{shown}
          {!finished && (
            <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] animate-pulse bg-accent" />
          )}
          {finished && '”'}
        </p>
        <AnimatePresence>
          {finished && project && (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: ease.expo }}
            >
              <Link
                to={`/project/${project.id}`}
                className="eyebrow mt-1 inline-flex items-center gap-1 text-accent hover:underline"
              >
                {getProjectTitleParts(project).name}
                <ArrowUpRight size={12} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const HeroVoice = () => (
  <HeroShell>
    {(progress) => (
      <ClassicLayout progress={progress} corner={<VoicePanel />} below={<VoicePanel compact />} />
    )}
  </HeroShell>
);

export default HeroVoice;
