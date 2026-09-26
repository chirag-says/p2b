import Image from "next/image";
import { STORY } from "@/lib/content";
import { EyeButton } from "@/components/ui/EyeButton";
import { TornEdge } from "@/components/ui/TornEdge";
import styles from "./Story.module.css";

export function Story() {
  return (
    <>
      <section className={styles.section} aria-labelledby="story-title">
        <div className={styles.card}>
          <div className={styles.photo}>
            <Image src={STORY.image} alt="" fill sizes="(max-width: 809.98px) 100vw, 449px" className={styles.image} />
          </div>
          <div className={styles.details}>
            <h2 id="story-title" className={`t-h2 ${styles.title}`}>
              {STORY.title}
            </h2>
            <p className={`t-body ${styles.body}`}>{STORY.body}</p>
            <EyeButton href={STORY.cta.href} label={STORY.cta.label} tone="accent" />
          </div>
        </div>
      </section>
      <TornEdge className={styles.edge} />
    </>
  );
}
