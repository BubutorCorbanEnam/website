import { useEffect, useState } from 'react';

export function useCounter(target: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    let frame = 0;
    let start = 0;
    const tick = (time: number) => {
      if (!start) start = time;
      const elapsed = time - start;
      const next = Math.min(target, Math.round((elapsed / duration) * target));
      setValue(next);
      if (elapsed < duration) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, target]);

  return value;
}
