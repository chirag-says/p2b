"use client";

import { useRef, useEffect } from "react";
import { HERO } from "@/lib/content";
import { EyeButton } from "@/components/ui/EyeButton";
import { ScrollLinked } from "@/components/ui/ScrollLinked";
import styles from "./Hero.module.css";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 9) {
        video.pause();
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <ScrollLinked
      as="section"
      className={styles.hero}
      aria-label="Introduction"
      targetId="services"
      threshold={1}
      from={{ opacity: 1 }}
      to={{ opacity: 0 }}
      media="(min-width: 810px)"
    >
      <div className={styles.inner}>
        <div className={styles.media} aria-hidden="true">
          <video ref={videoRef} className={styles.video} src={HERO.video} autoPlay muted playsInline preload="auto" />
        </div>
        <header className={styles.content}>
          <h1 className={`t-display ${styles.title}`}>{HERO.title}</h1>
          <p className={`t-body ${styles.subtitle}`}>{HERO.subtitle}</p>
          <div className={styles.actions}>
            <EyeButton href={HERO.cta.href} label={HERO.cta.label} tone="accent" />
            <a href={HERO.secondary.href} className={styles.review}>
              <span className={styles.reviewText}>
                <span className={`t-caption ${styles.eyebrow}`}>{HERO.secondary.eyebrow}</span>
                <span className={`t-label ${styles.rating}`}>{HERO.secondary.label}</span>
              </span>
            </a>
          </div>
        </header>
      </div>
    </ScrollLinked>
  );
}
