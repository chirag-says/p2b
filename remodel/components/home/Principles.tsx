import { PRINCIPLES } from "@/lib/content";
import { UserIcon } from "@/components/icons";
import { EyeButton } from "@/components/ui/EyeButton";
import { TornEdge } from "@/components/ui/TornEdge";
import { Slideshow } from "./Slideshow";
import styles from "./Principles.module.css";

export function Principles() {
  return (
    <>
      <TornEdge variant="large" className={styles.edge} />
      <section className={styles.section} aria-labelledby="principles-title">
        <div className={styles.inner}>
          <h2 id="principles-title" className={`t-h2 ${styles.title}`}>
            {PRINCIPLES.title}
          </h2>
          <div className={styles.body}>
            <div className={styles.aside}>
              <div className={styles.review}>
                <div className={styles.brand}>
                  <p className={`t-body ${styles.brandName}`}>{PRINCIPLES.source}</p>
                </div>
                <p className={`t-label ${styles.rating}`}>{PRINCIPLES.sourceNote}</p>
              </div>
              <EyeButton href={PRINCIPLES.cta.href} label={PRINCIPLES.cta.label} tone="dark" />
            </div>
            <Slideshow label="What home builders get" className={styles.slideshow}>
              {PRINCIPLES.items.map((item) => (
                <figure key={item.topic} className={styles.card}>
                  <figcaption className={styles.author}>
                    <span className={styles.avatar}>
                      <UserIcon className={styles.avatarIcon} />
                    </span>
                    <span className={styles.meta}>
                      <span className={`t-body ${styles.name}`}>{PRINCIPLES.attribution}</span>
                      <span className={`t-caption ${styles.topic}`}>{item.topic}</span>
                    </span>
                  </figcaption>
                  <p className={`t-body ${styles.quote}`}>{item.quote}</p>
                </figure>
              ))}
            </Slideshow>
          </div>
        </div>
      </section>
    </>
  );
}
