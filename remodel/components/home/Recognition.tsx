import { BADGES, HIGHLIGHTS, type Badge, type Highlight } from "@/lib/content";
import { AwardShape, DiamondIcon } from "@/components/icons";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { TornEdge } from "@/components/ui/TornEdge";
import styles from "./Recognition.module.css";

function HighlightCard({ item }: { item: Highlight }) {
  return (
    <div className={styles.card}>
      <CountUp to={item.value} decimals={0} prefix={item.prefix} suffix={item.suffix} className={styles.score} />
      {/* The pill only shows on phones, where the original card had its star row. */}
      <Reveal as="span" className={`t-caption ${styles.note}`}>
        {item.note}
      </Reveal>
      <div className={styles.labelRow}>
        <span className={styles.label}>{item.label}</span>
      </div>
    </div>
  );
}

function PriceBadge({ badge }: { badge: Badge }) {
  return (
    <div className={styles.award}>
      <div className={styles.awardText}>
        <DiamondIcon className={styles.awardIcon} />
        <p className={`t-body ${styles.awardYear}`}>{badge.title}</p>
        <p className={`t-caption ${styles.awardLabel}`}>{badge.label}</p>
      </div>
      <AwardShape className={styles.awardShape} style={{ color: badge.color }} />
    </div>
  );
}

/** Key figures and entry prices directly below the hero. */
export function Recognition() {
  return (
    <section className={styles.section} aria-label="Plan2Build at a glance">
      <div className={styles.inner}>
        <TornEdge className={styles.edge} />
        <div className={styles.row}>
          <div className={styles.ratings}>
            {HIGHLIGHTS.map((item) => (
              <HighlightCard key={item.label} item={item} />
            ))}
          </div>
          <div className={styles.awards}>
            {BADGES.map((badge) => (
              <PriceBadge key={badge.label} badge={badge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
