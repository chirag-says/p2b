"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { BRAND, MENU_CONTACT, NAV_LINKS, PLACEHOLDER_HREF, REMOTE_OFFICE_VIDEO } from "@/lib/content";
import { useMediaQuery } from "@/lib/useMediaQuery";
import styles from "./Header.module.css";

/**
 * Fixed navigation bar. The hamburger expands the bar into a full-height
 * menu (Framer "Nav bar" component: Desktop/Phone Closed ↔ Opened).
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const close = useCallback(() => setOpen(false), []);
  // The phone/tablet variant of the open menu has no video.
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <header className={styles.header} data-open={open}>
      <div className={styles.container}>
        <div className={styles.bar}>
          <a href={PLACEHOLDER_HREF} className={styles.logo} aria-label={`${BRAND.name} home`} onClick={close}>
            <span className={styles.wordmark}>{BRAND.name}</span>
          </a>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={styles.lineTop} />
            <span className={styles.lineBottom} />
          </button>
        </div>

        {open && (
          <div className={styles.panel} id={menuId}>
            <nav className={styles.menu} aria-label="Main">
              <ul className={styles.links}>
                {NAV_LINKS.map((link, index) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`t-h3 ${styles.link}`}
                      aria-current={index === 0 ? "page" : undefined}
                      onClick={close}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className={styles.contact}>
                {MENU_CONTACT.map((link) => (
                  <a key={link.label} className={`t-body ${styles.contactLink}`} href={link.href} onClick={close}>
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
            {isDesktop && (
              <video
                className={styles.video}
                src={REMOTE_OFFICE_VIDEO}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
              />
            )}
          </div>
        )}
      </div>
    </header>
  );
}
