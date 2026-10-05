/**
 * LocalTime
 *
 * Live clock for Hany's time zone, isolated so the per-second tick only
 * re-renders this span.
 */

import { useLocalTime } from '../../hooks/useLocalTime';
import { personalInfo } from '../../data/personal';

const LocalTime = ({ className = '' }) => {
  const time = useLocalTime(personalInfo.timeZone);

  return (
    <span className={`tabular-nums ${className}`}>
      <time>{time}</time>
    </span>
  );
};

export default LocalTime;
