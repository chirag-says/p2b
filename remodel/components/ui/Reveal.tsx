"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type ElementType } from "react";
import { measureRange, onScrollFrame } from "@/lib/scrollTargets";

type Props<T extends ElementType> = {
  as?: T;
  /**
   * "view": reveal once `threshold` of the element (or of the viewport, for tall
   *   elements) is visible (Framer's appear effect).
   * "scroll": reveal once the page scrolls past `top - threshold * viewportHeight`,
   *   Framer's appear effect with a scroll-section target.
   */
  mode?: "view" | "scroll";
  threshold?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

const STEPS = Array.from({ length: 21 }, (_, index) => index / 20);

/**
 * Marks the element with data-revealed (once). The hidden/visible styles and
 * the transition live in the caller's CSS.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  mode = "view",
  threshold = 0.5,
  className,
  ...rest
}: Props<T>) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reveal = () => {
      element.dataset.revealed = "true";
    };

    if (mode === "scroll") {
      const unsubscribe = onScrollFrame(() => {
        if (window.scrollY < measureRange(element, threshold).start) return;
        reveal();
        // Deferred so the subscriber set is not mutated while it is being iterated.
        queueMicrotask(unsubscribe);
      });
      return unsubscribe;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.intersectionRect.height;
        const reference = Math.min(entry.boundingClientRect.height, window.innerHeight);
        const ratio = reference === 0 ? Number(entry.isIntersecting) : visible / reference;
        if (!entry.isIntersecting || ratio < threshold) return;
        reveal();
        observer.disconnect();
      },
      { threshold: STEPS },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [mode, threshold]);

  // "reveal-target" lets the <noscript> fallback in the root layout show the content.
  return <Component ref={ref} className={`reveal-target ${className ?? ""}`} {...rest} />;
}
