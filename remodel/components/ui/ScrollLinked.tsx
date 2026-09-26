"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type ElementType } from "react";
import { measureRange, onScrollFrame, progressFor } from "@/lib/scrollTargets";

type Pose = { opacity?: number; x?: number; scale?: number };

type Props<T extends ElementType> = {
  as?: T;
  /** Element whose position drives the effect. Defaults to the element itself. */
  targetId?: string;
  /** Share of the viewport height used as trigger offset (Framer "viewport threshold"). */
  threshold: number;
  from: Pose;
  to: Pose;
  /** Media query the effect is limited to; outside it the element is left untouched. */
  media?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Applies a scroll-position driven opacity/translate/scale, like Framer scroll transforms. */
export function ScrollLinked<T extends ElementType = "div">({
  as,
  targetId,
  threshold,
  from,
  to,
  media,
  ...rest
}: Props<T>) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const { opacity: o0 = 1, x: x0 = 0, scale: s0 = 1 } = from;
  const { opacity: o1 = 1, x: x1 = 0, scale: s1 = 1 } = to;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const query = media ? window.matchMedia(media) : null;
    let unsubscribe: (() => void) | null = null;

    const reset = () => {
      element.style.opacity = "";
      element.style.transform = "";
    };

    const start = () => {
      unsubscribe?.();
      unsubscribe = null;
      if (query && !query.matches) {
        reset();
        return;
      }
      unsubscribe = onScrollFrame(() => {
        const target = targetId ? document.getElementById(targetId) : element;
        if (!target) return;
        const t = progressFor(measureRange(target, threshold), window.scrollY);
        if (o0 !== 1 || o1 !== 1) element.style.opacity = String(lerp(o0, o1, t));
        const x = lerp(x0, x1, t);
        const scale = lerp(s0, s1, t);
        element.style.transform = x === 0 && scale === 1 ? "none" : `translateX(${x}px) scale(${scale})`;
      });
    };

    start();
    query?.addEventListener("change", start);
    return () => {
      query?.removeEventListener("change", start);
      unsubscribe?.();
      reset();
    };
  }, [targetId, threshold, media, o0, o1, x0, x1, s0, s1]);

  return <Component ref={ref} {...rest} />;
}
