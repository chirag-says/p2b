import { FOOTER } from "@/lib/content";
import { EyeButton } from "@/components/ui/EyeButton";
import { TornEdge } from "@/components/ui/TornEdge";
import styles from "./Footer.module.css";

export function Footer() {
  const [builders, company, contact] = FOOTER.columns;
  return (
    <footer className={styles.footer}>
      <TornEdge variant="large" className={styles.edge} />
      <div className={styles.band}>
        <div className={styles.inner}>
          <div className={styles.cta}>
            <p className={`t-h3 ${styles.ctaTitle}`}>{FOOTER.cta.title}</p>
            <EyeButton href={FOOTER.cta.button.href} label={FOOTER.cta.button.label} tone="accent" />
          </div>

          <div className={styles.columns}>
            {[builders, company].map((column) => (
              <nav key={column.title} className={styles.pages} aria-label={column.title}>
                <p className={`t-h4 ${styles.heading}`}>{column.title}</p>
                {column.links.map((link) => (
                  <a key={link.label} href={link.href} className={`t-label ${styles.link}`}>
                    {link.label}
                  </a>
                ))}
              </nav>
            ))}

            <div className={styles.contact}>
              <p className={`t-h4 ${styles.heading}`}>{contact.title}</p>
              {contact.links.map((link) => (
                <a key={link.label} href={link.href} className={`t-label ${styles.link}`}>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Keeps the original four-column rhythm; the old social links were removed. */}
            <div className={styles.social} aria-hidden="true" />
          </div>

          <div className={styles.bottom}>
            <p className={`t-body ${styles.copyright}`}>{FOOTER.description}</p>
            <p className={`t-body ${styles.credit}`}>{FOOTER.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
