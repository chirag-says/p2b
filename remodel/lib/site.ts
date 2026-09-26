export const SITE = {
  /** Set NEXT_PUBLIC_SITE_URL in production so canonical and Open Graph URLs are absolute. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  name: "Plan2Build",
  title: "Plan2Build | Build your home with clarity, confidence and control",
  description:
    "Plan2Build helps individual home builders understand what their home should cost, compare contractor quotes on a common basis, verify critical stages of construction and access trusted products, partners and related services.",
} as const;
