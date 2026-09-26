"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";
import styles from "./FollowEye.module.css";

/** Pupil diameter in px (Framer "Pupil Size"). */
const PUPIL_SIZE = 12;
/** Share of the free space the pupil may travel (Framer "Range", 90%). */
const TRACKING_RANGE = 0.9;
/** Framer "Speed" maps to the spring stiffness. */
const PUPIL_SPRING = { stiffness: 100, damping: 20 } as const;

type Listener = (x: number, y: number) => void;
const listeners = new Set<Listener>();

function onMouseMove(event: MouseEvent) {
  for (const listener of listeners) listener(event.clientX, event.clientY);
}

/** One window listener shared by every eye on the page. */
function subscribe(listener: Listener) {
  if (listeners.size === 0) window.addEventListener("mousemove", onMouseMove, { passive: true });
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("mousemove", onMouseMove);
  };
}

/**
 * Port of the "Follow Eyes" code component used inside every CTA button:
 * a single eye whose pupil springs towards the cursor and blinks every 2s.
 * Size and colours come from the CSS variables --eye-size, --eye-color and
 * --pupil-color set by the parent.
 */
export function FollowEye() {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, PUPIL_SPRING);
  const y = useSpring(0, PUPIL_SPRING);

  useEffect(() => {
    if (reduceMotion) return;
    return subscribe((clientX, clientY) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = clientX - (rect.left + rect.width / 2);
      const dy = clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      if (distance === 0) {
        x.set(0);
        y.set(0);
        return;
      }
      const size = el.offsetWidth;
      const pupil = Math.min(PUPIL_SIZE, size * 0.8);
      const travel = Math.min(distance, ((size - pupil) / 2) * TRACKING_RANGE);
      const angle = Math.atan2(dy, dx);
      x.set(Math.cos(angle) * travel);
      y.set(Math.sin(angle) * travel);
    });
  }, [reduceMotion, x, y]);

  return (
    <span ref={ref} className={styles.eye} aria-hidden="true">
      <span className={styles.ball}>
        <motion.span className={styles.pupil} style={{ x, y }} />
      </span>
    </span>
  );
}
