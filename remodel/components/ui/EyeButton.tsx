import { FollowEye } from "./FollowEye";
import styles from "./EyeButton.module.css";

/**
 * Colour schemes of the "Eye Follow Button" instances on the homepage.
 * accent: orange CTA · dark: black pill · light: cream pill on project photos.
 */
type Tone = "accent" | "dark" | "light";

type Props = {
  href: string;
  label: string;
  tone?: Tone;
  /** Accessible name when the visible label is ambiguous. */
  ariaLabel?: string;
  tabIndex?: number;
  className?: string;
};

export function EyeButton({ href, label, tone = "dark", ariaLabel, tabIndex, className }: Props) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      className={`${styles.button} ${styles[tone]} ${className ?? ""}`}
    >
      <span className={styles.label}>{label}</span>
      <FollowEye />
    </a>
  );
}
