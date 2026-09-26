import { SERVICES } from "@/lib/content";
import { ServiceSwitcher } from "./ServiceSwitcher";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <h2 id="services-title" className={`t-h2 ${styles.title}`}>
          {SERVICES.title}
        </h2>
        <div className={styles.list}>
          <ServiceSwitcher services={SERVICES.items} />
        </div>
      </div>
    </section>
  );
}
