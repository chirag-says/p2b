import Image from "next/image";
import { PILLARS } from "@/lib/content";
import { EyeButton } from "@/components/ui/EyeButton";
import { ScrollLinked } from "@/components/ui/ScrollLinked";
import styles from "./Pillars.module.css";

/** Horizontal travel of the desktop gallery, fixed in the original design. */
const GALLERY_TRAVEL = -2283;

export function Pillars() {
  return (
    <section className={styles.section} aria-labelledby="pillars-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="pillars-title" className={`t-h2 ${styles.title}`}>
            {PILLARS.title}
          </h2>
          <EyeButton href={PILLARS.cta.href} label={PILLARS.cta.label} tone="dark" />
        </div>

        <div className={styles.gallery}>
          <div className={styles.frame}>
            <ScrollLinked
              className={styles.track}
              targetId="pillars-scroll"
              threshold={1}
              from={{ x: 0 }}
              to={{ x: GALLERY_TRAVEL }}
              media="(min-width: 1200px)"
            >
              {PILLARS.items.map((pillar) => (
                <article key={pillar.title} className={styles.card}>
                  <div className={styles.media}>
                    <Image
                      src={pillar.image}
                      alt=""
                      fill
                      sizes="(min-width: 1200px) min(100vw, 1300px), 100vw"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.tag}>
                    <span className={styles.glass} aria-hidden="true" />
                    <h3 className={`t-h3 ${styles.cardTitle}`}>{pillar.title}</h3>
                    <p className={`t-body ${styles.cardText}`}>{pillar.description}</p>
                    <EyeButton
                      href={pillar.action.href}
                      label={pillar.action.label}
                      tone="light"
                      className={styles.cardButton}
                    />
                  </div>
                </article>
              ))}
            </ScrollLinked>
          </div>
          {/* Scroll distance that drives the horizontal gallery on desktop. */}
          <div id="pillars-scroll" className={styles.scrollSpace} aria-hidden="true" />
          <div className={styles.scrollTail} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
