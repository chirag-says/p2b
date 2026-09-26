"use client";

import { Children, useCallback, useState, type ReactNode } from "react";
import Image from "next/image";
import styles from "./Slideshow.module.css";

type Props = {
  children: ReactNode;
  label: string;
  className?: string;
};

/**
 * Infinite, arrow-driven slideshow (port of Framer's Slideshow component as
 * configured on the page: 2 items per view on desktop, 1 below, 25px gap,
 * spring { stiffness: 200, damping: 40 }).
 *
 * Slides are rendered three times; the visible window starts on the middle
 * copy and silently jumps back into it after a transition leaves it.
 */
export function Slideshow({ children, label, className }: Props) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const [index, setIndex] = useState(count);
  const [animate, setAnimate] = useState(true);

  const go = useCallback((step: number) => {
    setAnimate(true);
    setIndex((value) => value + step);
  }, []);

  const onTransitionEnd = useCallback(() => {
    if (index >= count && index < count * 2) return;
    setAnimate(false);
    setIndex((((index % count) + count) % count) + count);
  }, [index, count]);

  return (
    <div
      className={`${styles.slideshow} ${className ?? ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className={styles.viewport}>
        <ul
          className={styles.track}
          style={{ "--index": index } as React.CSSProperties}
          data-animate={animate}
          onTransitionEnd={(event) => {
            if (event.target === event.currentTarget) onTransitionEnd();
          }}
        >
          {[0, 1, 2].flatMap((copy) =>
            slides.map((slide, position) => {
              const isOriginal = copy === 1;
              return (
                <li
                  key={`${copy}-${position}`}
                  className={styles.slide}
                  aria-hidden={isOriginal ? undefined : true}
                  inert={!isOriginal}
                  aria-roledescription={isOriginal ? "slide" : undefined}
                  aria-label={isOriginal ? `${position + 1} of ${count}` : undefined}
                >
                  {slide}
                </li>
              );
            }),
          )}
        </ul>
      </div>
      <div className={styles.controls}>
        <button type="button" className={styles.arrow} aria-label="Previous" onClick={() => go(-1)}>
          <Image src="/images/arrow-left.png" alt="" width={35} height={35} />
        </button>
        <button type="button" className={styles.arrow} aria-label="Next" onClick={() => go(1)}>
          <Image src="/images/arrow-right.png" alt="" width={35} height={35} />
        </button>
      </div>
    </div>
  );
}
