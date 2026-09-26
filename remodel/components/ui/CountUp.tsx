"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type Props = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Seconds. */
  duration?: number;
  className?: string;
};

/** Counts from 0 to `to` the first time it scrolls into view (Framer counter, easeIn). */
export function CountUp({ to, decimals = 1, prefix = "", suffix = "", duration = 2, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, { duration, ease: [0.42, 0, 1, 1], onUpdate: setValue });
    return () => controls.stop();
  }, [inView, reduceMotion, to, duration]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {prefix}
        {value.toFixed(decimals)}
        {suffix}
      </span>
      <span className="visually-hidden">
        {prefix}
        {to.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}
