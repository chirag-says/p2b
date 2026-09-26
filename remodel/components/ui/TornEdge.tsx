import Image from "next/image";
import styles from "./TornEdge.module.css";

const EDGES = {
  /** Thin cream paper edge (3118×122). */
  thin: { src: "/images/torn-edge.png", width: 3118, height: 122 },
  /** Tall brown paper edge (3118×628). */
  large: { src: "/images/torn-edge-large.png", width: 3118, height: 628 },
} as const;

type Props = {
  variant?: keyof typeof EDGES;
  /** Positions the band; the image inside is absolutely placed via `imageClassName`. */
  className?: string;
  imageClassName?: string;
  flip?: boolean;
};

/** Decorative torn-paper divider used between sections. */
export function TornEdge({ variant = "thin", className, imageClassName, flip = false }: Props) {
  const edge = EDGES[variant];
  return (
    <div className={`${styles.band} ${className ?? ""}`} aria-hidden="true">
      <Image
        src={edge.src}
        alt=""
        width={edge.width}
        height={edge.height}
        sizes="100vw"
        className={`${styles.image} ${flip ? styles.flip : ""} ${imageClassName ?? ""}`}
      />
    </div>
  );
}
