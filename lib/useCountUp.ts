"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 800) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === "undefined") {
      setVal(target);
      return;
    }
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const frame = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              // Use faster easing function for speedier animation
              const eased = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
              setVal(Math.floor(target * eased));
              if (p < 1) requestAnimationFrame(frame);
            };
            requestAnimationFrame(frame);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value: val.toLocaleString("ru-RU") };
}
