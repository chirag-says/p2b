import Image from "next/image";
import { CTA } from "@/lib/content";
import { EyeButton } from "@/components/ui/EyeButton";
import { InViewVideo } from "@/components/ui/InViewVideo";
import styles from "./Cta.module.css";

/** Torn-paper frame drawn over the CTA card (Framer "Element/Frame"). */
function PaperFrame() {
  return (
    <div className={styles.frame} aria-hidden="true">
      <Image src="/images/torn-edge.png" alt="" width={3118} height={122} sizes="100vw" className={styles.edgeBottom} />
      <Image src="/images/torn-edge.png" alt="" width={3118} height={122} sizes="100vw" className={styles.edgeTop} />
      <Image
        src="/images/torn-edge-vertical.png"
        alt=""
        width={56}
        height={1165}
        sizes="30px"
        className={styles.edgeLeft}
      />
      <Image
        src="/images/torn-edge-vertical.png"
        alt=""
        width={56}
        height={1165}
        sizes="30px"
        className={styles.edgeRight}
      />
    </div>
  );
}

export function Cta() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className={styles.card}>
        <PaperFrame />
        <div className={styles.content}>
          <h2 id="cta-title" className={`t-h2 ${styles.title}`}>
            {CTA.title}
          </h2>
          <p className={`t-body ${styles.body}`}>{CTA.body}</p>
          <EyeButton href={CTA.button.href} label={CTA.button.label} tone="accent" className={styles.button} />
        </div>
        <div className={styles.media}>
          <InViewVideo src={CTA.video} className={styles.video} maxDuration={8} />
        </div>
      </div>
    </section>
  );
}
