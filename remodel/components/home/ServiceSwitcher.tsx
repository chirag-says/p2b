"use client";

import { useId, useState } from "react";
import { motion } from "motion/react";
import type { Service } from "@/lib/content";
import { LivingRoomIcon, OfficeIcon } from "@/components/icons";
import { EyeButton } from "@/components/ui/EyeButton";
import { InViewVideo } from "@/components/ui/InViewVideo";
import { useMediaQuery } from "@/lib/useMediaQuery";
import styles from "./Services.module.css";

const ICONS = { plan: LivingRoomIcon, verify: OfficeIcon } as const;

/** Framer transition of the service card variants (Left ↔ Right). */
const SWAP_TRANSITION = { type: "tween", duration: 0.2, ease: [0.5, 0, 0.88, 0.77] } as const;

type Props = {
  services: Service[];
};

/**
 * Desktop: tabs above a two-column card whose text and media swap sides.
 * Tablet/phone: an accordion where exactly one service is open.
 */
export function ServiceSwitcher({ services }: Props) {
  const [active, setActive] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const id = useId();
  // Desktop shows one card for the active service; the accordion lists all of them.
  const visible = isDesktop ? [active] : services.map((_, index) => index);

  return (
    <div className={styles.switcher}>
      <div className={styles.tabs} role="tablist" aria-label="Services">
        {services.map((service, index) => (
          <button
            key={service.id}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`${id}-card`}
            className={`t-body ${styles.tab}`}
            onClick={() => setActive(index)}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div className={styles.cards}>
        {visible.map((index) => {
          const service = services[index];
          const open = index === active;
          const Icon = ICONS[service.icon];
          return (
            <div
              key={isDesktop ? "desktop" : service.id}
              id={isDesktop ? `${id}-card` : undefined}
              role={isDesktop ? "tabpanel" : undefined}
              aria-labelledby={isDesktop ? `${id}-tab-${index}` : undefined}
              className={styles.card}
              data-open={open}
              data-side={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div className={styles.details} layout={isDesktop} transition={SWAP_TRANSITION}>
                <h3 className={styles.heading}>
                  <button
                    type="button"
                    className={styles.headingButton}
                    aria-expanded={open}
                    disabled={isDesktop}
                    onClick={() => setActive(index)}
                  >
                    <Icon className={styles.icon} />
                    <span className={`t-h3 ${styles.headingText}`}>{service.title}</span>
                  </button>
                </h3>
                <div className={styles.collapse} aria-hidden={!open}>
                  <div className={styles.collapseInner}>
                    <p className={`t-body ${styles.description}`}>{service.description}</p>
                    <div className={styles.action}>
                      <EyeButton
                        href={service.cta.href}
                        label={service.cta.label}
                        tone="dark"
                        tabIndex={open ? undefined : -1}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className={styles.media} layout={isDesktop} transition={SWAP_TRANSITION}>
                <div className={styles.collapseInner}>
                  <div className={styles.mediaFrame}>
                    {open && <InViewVideo key={service.id} src={service.video} className={styles.video} maxDuration={8} />}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
