/**
 * ProgressBar
 *
 * An animated progress bar that fills on scroll.
 * Used in Certifications section for upcoming goals.
 *
 * @param {number} progress - Progress percentage (0-100)
 * @param {string} label - Label text shown on the left
 * @param {boolean} showPercentage - Whether to show percentage on the right
 * @param {string} className - Additional CSS classes
 */

import { motion } from 'framer-motion';
import { viewport, durations } from '../../config/animations';

const ProgressBar = ({
  progress,
  label = 'Progress',
  showPercentage = true,
  className = '',
}) => {
  return (
    <div className={`relative pt-4 ${className}`}>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={viewport}
          transition={{ duration: durations.verySlow + 0.3, ease: 'easeOut' }}
          className="h-full bg-[var(--color-accent-primary)]"
        />
      </div>
      <div className="flex justify-between mt-3">
        <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
          {label}
        </span>
        {showPercentage && (
          <span className="text-[11px] font-black text-[var(--color-accent-primary)] uppercase tracking-widest">
            {progress}% Complete
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
