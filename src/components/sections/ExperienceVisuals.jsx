/**
 * Experience card visuals
 *
 * Visuals shown beside timeline entries that have no photo:
 * - ScanRadar: decorative posture-scanning radar for the founder role (drawn for an ink panel)
 * - MetricCompare: headline metric with animated with/without bars
 */

import { motion } from 'framer-motion';
import Counter from '../motion/Counter';
import { ease, viewportOnce, tf } from '../../config/animations';

const RINGS = [1, 0.7, 0.4];

const BLIPS = [
  { label: 'models', x: '68%', y: '24%' },
  { label: 'agents', x: '22%', y: '38%' },
  { label: 'MCP', x: '74%', y: '66%' },
  { label: 'data', x: '34%', y: '76%' },
];

export const ScanRadar = () => (
  <div className="relative mx-auto aspect-square w-full max-w-[230px]" aria-hidden="true">
    {RINGS.map((size) => (
      <span
        key={size}
        className="absolute inset-0 m-auto rounded-full border border-white/15"
        style={{ width: `${size * 100}%`, height: `${size * 100}%` }}
      />
    ))}
    <span className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
    <span className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
    <span className="absolute inset-0 animate-[spin_4.5s_linear_infinite] rounded-full [background:conic-gradient(from_0deg,transparent_0deg,transparent_290deg,rgba(255,55,0,0.55)_360deg)]" />
    {BLIPS.map((blip, i) => (
      <motion.span
        key={blip.label}
        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5"
        style={{ left: blip.x, top: blip.y }}
        initial={{ opacity: 0, transform: tf('scale(0.4)') }}
        whileInView={{ opacity: 1, transform: tf('scale(1)') }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: ease.expo, delay: 0.4 + i * 0.25 }}
      >
        <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="font-mono text-[9px] uppercase tracking-wider text-white/60">{blip.label}</span>
      </motion.span>
    ))}
  </div>
);

const Bar = ({ label, value, className, delay }) => (
  <div>
    <div className="mb-1.5 flex justify-between font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <div className="h-1.5 overflow-hidden rounded-full bg-line">
      <motion.div
        className={`h-full origin-left rounded-full ${className}`}
        style={{ width: value }}
        initial={{ transform: tf('scaleX(0)') }}
        whileInView={{ transform: tf('scaleX(1)') }}
        viewport={viewportOnce}
        transition={{ duration: 1.6, ease: ease.expo, delay }}
      />
    </div>
  </div>
);

export const MetricCompare = ({ metric }) => (
  <div className="rounded-[1.5rem] border border-line bg-surface p-6">
    <p className="eyebrow text-fg-subtle">{metric.label}</p>
    <div className="mt-3 flex items-end gap-3">
      <Counter
        value={metric.value}
        className="text-[clamp(3.5rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.05em] text-accent"
      />
      <span className="mb-2 font-mono text-sm text-fg-subtle">vs {metric.baseline}</span>
    </div>
    <div className="mt-6 space-y-3">
      <Bar label="With tools" value={metric.value} className="bg-accent" delay={0.2} />
      <Bar label="Without" value={metric.baseline} className="bg-fg-subtle" delay={0.35} />
    </div>
    <p className="mt-4 text-xs text-fg-subtle">{metric.caption}</p>
  </div>
);
