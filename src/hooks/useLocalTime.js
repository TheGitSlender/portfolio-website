/**
 * useLocalTime Hook
 *
 * Returns the current wall-clock time in a given IANA time zone,
 * formatted HH:MM:SS and refreshed every second.
 *
 * @param {string} timeZone - e.g. 'Africa/Casablanca'
 */

import { useEffect, useMemo, useState } from 'react';

export const useLocalTime = (timeZone) => {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat('en-GB', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }),
    [timeZone]
  );

  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 1000);
    return () => clearInterval(id);
  }, [formatter]);

  return time;
};

export default useLocalTime;
