"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  className?: string;
  loop?: boolean;
  /** Share of the element that must be visible before playback starts (Framer appear threshold). */
  threshold?: number;
};

/**
 * Muted decorative video that starts playing the first time it scrolls into
 * view (the "Non start → Playing video" variant switch used in the original).
 */
export function InViewVideo({ src, className, loop = true, threshold = 0.5 }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        video.play().catch(() => {
          // Autoplay can be refused (e.g. data saver); the first frame stays visible.
        });
      },
      { threshold },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src, threshold]);

  return (
    <video ref={ref} className={className} src={src} muted loop={loop} playsInline preload="auto" aria-hidden="true" />
  );
}
