/**
 * Re-implementation of Framer's "Scroll Transform → Trigger: Section" effect.
 *
 * Framer interpolates a value while the page scrolls from
 *   start = targetTop - 1 - threshold * viewportHeight
 * to
 *   end   = start + targetHeight
 * where targetTop is the document offset of the target section. Values are
 * clamped outside that range.
 */

export type ScrollRange = { start: number; end: number };

function documentTop(element: HTMLElement): number {
  let top = 0;
  let node: HTMLElement | null = element;
  while (node && node !== document.documentElement) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}

export function measureRange(target: HTMLElement, threshold: number): ScrollRange {
  const start = Math.max(documentTop(target) - 1 - threshold * window.innerHeight, 0);
  const end = Math.max(start + target.clientHeight, 0);
  return { start, end };
}

export function progressFor({ start, end }: ScrollRange, scrollY: number): number {
  if (end <= start) return scrollY >= end ? 1 : 0;
  return Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
}

type Subscriber = () => void;
const subscribers = new Set<Subscriber>();
let frame = 0;

function schedule() {
  if (frame) return;
  frame = requestAnimationFrame(() => {
    frame = 0;
    for (const subscriber of subscribers) subscriber();
  });
}

/**
 * Registers a callback that runs once per animation frame after a scroll or
 * resize. A single pair of passive listeners is shared by all subscribers.
 */
export function onScrollFrame(subscriber: Subscriber): () => void {
  if (subscribers.size === 0) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
  }
  subscribers.add(subscriber);
  subscriber();
  return () => {
    subscribers.delete(subscriber);
    if (subscribers.size === 0) {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
      frame = 0;
    }
  };
}
