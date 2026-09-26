import { PROCESS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollLinked } from "@/components/ui/ScrollLinked";
import { DiamondIcon } from "@/components/icons";
import styles from "./Process.module.css";

export function Process() {
  const total = PROCESS.steps.length;
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <div className={styles.inner}>
        <h2 id="process-title" className={`t-h2 ${styles.title}`}>
          {PROCESS.title}
        </h2>
        <ol className={styles.steps}>
          {PROCESS.steps.map((step, index) => {
            const cardId = `process-step-${index + 1}`;
            return (
              <li key={step.number} className={styles.step}>
                <div className={styles.badge} aria-hidden="true">
                  <span className={`t-h4 ${styles.badgeText}`}>{step.number}</span>
                </div>
                <Reveal
                  id={cardId}
                  mode="scroll"
                  threshold={1}
                  className={`${styles.card} ${index > 0 ? styles.reveal : ""}`}
                >
                  <div className={styles.text}>
                    <span className={styles.dots} role="img" aria-label={`Step ${index + 1} of ${total}`}>
                      {Array.from({ length: total }, (_, dot) => (
                        <DiamondIcon key={dot} className={dot <= index ? styles.dotOn : styles.dot} />
                      ))}
                    </span>
                    <div className={styles.copy}>
                      <h3 className={`t-h3 ${styles.stepTitle}`}>{step.title}</h3>
                      <span className={styles.rule} aria-hidden="true" />
                      <p className={`t-body ${styles.description}`}>{step.description}</p>
                    </div>
                  </div>
                  <div className={styles.progress} aria-hidden="true">
                    <ScrollLinked
                      className={styles.progressFill}
                      targetId={cardId}
                      threshold={0.5}
                      from={{ scale: 1 }}
                      to={{ scale: 7 }}
                    />
                  </div>
                  <div className={styles.media}>
                    <video
                      className={styles.video}
                      src={step.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                    />
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
