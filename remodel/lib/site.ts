export const SITE = {
  /** Set NEXT_PUBLIC_SITE_URL in production so canonical and Open Graph URLs are absolute. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  name: "Plan2Build",
  title: "Plan2Build | Know what your home should cost before you build it",
  description:
    "Plan2Build puts your cost, scope and specification in writing, compares contractor quotes on the same scope and independently checks the work that cannot be undone. You keep the builder you chose.",
} as const;
