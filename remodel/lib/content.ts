/**
 * Plan2Build homepage copy. All text, prices and link targets live here so
 * they can change without touching components.
 *
 * Source: "Plan2Build Strategy and POC" (21 Sept 2026). Only homeowner-facing
 * material is used; unit economics, competitor figures, investor narrative
 * and POC kill criteria in that document are internal and stay off the site.
 *
 * Navigation is intentionally non-functional: every link points to "#".
 */

export type Link = { label: string; href: string };

/** Every link on the page is a placeholder until the other pages exist. */
export const PLACEHOLDER_HREF = "#";

const link = (label: string): Link => ({ label, href: PLACEHOLDER_HREF });

export const BRAND = {
  name: "Plan2Build",
  company: "ConjunIQ",
  tagline: "Independent · Unbiased · On Your Side",
};

export const PRIMARY_CTA = link("Start Your Build Plan");
export const SECONDARY_CTA = link("See What Your Home Should Cost");

export const NAV_LINKS: Link[] = [
  link("Home"),
  link("What We Do"),
  link("Our Story"),
  link("How It Works"),
  link("FAQ"),
  link("Contact"),
];

/** Secondary links shown at the bottom of the open menu. */
export const MENU_CONTACT: Link[] = [PRIMARY_CTA, link("Contact us")];

/**
 * Not included in the export (the original site streams it from Framer's CDN).
 * Used by the open menu and as the second service video.
 */
export const REMOTE_OFFICE_VIDEO = "https://framerusercontent.com/assets/nRpIdzwsFwU3zMPwFbiGNxNr8Xs.mp4";

/**
 * Prices, kept in one place. These are the strategy document's recommended
 * figures; the document lists final pricing as an open founder decision, so
 * change them here once it is settled. `short` forms fit the 105px badges.
 */
export const PRICES = {
  costCheck: "Free",
  buildPlan: "₹45,000 – ₹50,000",
  buildPlanShort: "₹45K–50K",
  assurance: "₹55,000 – ₹60,000",
  assuranceShort: "₹55K–60K",
} as const;

/** Buttons drop the spaces around the dash so the label stays on one line. */
const tight = (price: string) => price.replace(/ /g, "");

export const HERO = {
  title: "Know what your home should cost before you build it.",
  subtitle:
    "Plan2Build puts your cost, scope and specification in writing, compares contractor quotes on the same scope and independently checks the work that cannot be undone. You keep the builder you chose. We never take the construction contract.",
  cta: PRIMARY_CTA,
  secondary: { eyebrow: BRAND.tagline, ...SECONDARY_CTA },
  video: "/videos/Create_a_premium_cinematic_web.mp4",
};

/** Two stat cards: the counter animates from 0 to `value`. */
export type Highlight = { prefix: string; value: number; suffix: string; label: string; note: string };

export const HIGHLIGHTS: Highlight[] = [
  { prefix: "", value: 67, suffix: "", label: "Decisions", note: "In writing" },
  { prefix: "", value: 6, suffix: "", label: "Site gates", note: "Independently checked" },
];

/** The three coloured badges beside the stat cards. */
export type Badge = { title: string; label: string; color: string };

export const BADGES: Badge[] = [
  { title: PRICES.costCheck, label: "Home Cost Check", color: "rgb(81, 184, 73)" },
  { title: PRICES.buildPlanShort, label: "Build Plan & Advice", color: "rgb(81, 184, 73)" },
  { title: PRICES.assuranceShort, label: "Six-Gate Assurance", color: "rgb(243, 186, 54)" },
];

export type Pillar = { title: string; description: string; image: string; action: Link };

/** The three layers of the business, shown in the scroll-driven gallery. */
export const PILLARS = {
  title: "THREE WAYS WE HELP",
  cta: link("See All Services"),
  items: [
    {
      title: "Plan & Decide",
      description:
        "Cost, scope and specification in writing, with a stage-wise cash-flow plan so the money does not run out mid-build.",
      image: "/images/pillar-plan.jpeg",
      action: PRIMARY_CTA,
    },
    {
      title: "Buy & Connect",
      description:
        "Verified contractor introductions and materials at a margin we disclose in rupees. Finance, insurance, solar and interiors when you need them.",
      image: "/images/pillar-connect.jpeg",
      action: link("Explore Partners"),
    },
    {
      title: "Verify & Assure",
      description:
        "Six independent checks at the stages that cannot be undone, backed by a capped remedy if we miss a structural defect.",
      image: "/images/pillar-verify.jpeg",
      action: link("Book Assurance"),
    },
  ] satisfies Pillar[],
};

export type Service = {
  id: string;
  title: string;
  icon: "plan" | "verify";
  /** Summary, what is included and the outcome. Kept to ~5 lines so it fits the desktop card. */
  description: string;
  /** Button label; carries the price so it stays visible in every layout. */
  cta: Link;
  video: string;
};

const PLAN_VIDEO = "/videos/service-residential.mp4";

export const SERVICES = {
  title: "WHAT WE DO",
  items: [
    {
      id: "cost-check",
      title: "Home Cost Check",
      icon: "plan",
      description:
        "Find out what a house like yours should cost in your city before anyone quotes you. Our estimate uses a city rate index built from real sites, not a national average. Start here, free.",
      cta: link(`${PRICES.costCheck} Home Cost Check`),
      video: PLAN_VIDEO,
    },
    {
      id: "build-plan",
      title: "Build Plan & Advice",
      icon: "verify",
      description: `Your budget, bill of quantities, specification, schedule and stage-wise cash-flow plan, plus a calendar of which decisions are due when. ${PRICES.buildPlan} per house, paid in three instalments as your build moves forward.`,
      cta: link(tight(PRICES.buildPlan)),
      video: REMOTE_OFFICE_VIDEO,
    },
    {
      id: "quote-comparison",
      title: "Quote Comparison",
      icon: "plan",
      description:
        "Every contractor gets the same RFQ pack, and we compare what each quote actually includes. Not “B is ₹4 lakh cheaper” but “B is ₹4 lakh lower because it leaves out waterproofing and specifies lower-grade steel.”",
      cta: link("Included in Your Build Plan"),
      video: PLAN_VIDEO,
    },
    {
      id: "assurance",
      title: "Six-Gate Assurance",
      icon: "verify",
      description: `An independent auditor checks six stages that cannot be undone, and every change you ask for is priced and agreed before it is built. If we clear a gate and a structural defect in what we checked surfaces later, we pay to fix it, up to a cap. ${PRICES.assurance} per house.`,
      cta: link(tight(PRICES.assurance)),
      video: REMOTE_OFFICE_VIDEO,
    },
    {
      id: "materials",
      title: "Materials & Partners",
      icon: "plan",
      description:
        "Buy the materials in your specification through us at a margin shown in rupees on your sheet, or buy them anywhere else. Verified contractors, finance, insurance, solar and interiors are there if you want them.",
      cta: link("Explore Partners"),
      video: PLAN_VIDEO,
    },
    {
      id: "build-record",
      title: "Build Record",
      icon: "verify",
      description:
        "Your land has papers. Your building has none. We record every material decision as specified, chosen, bought, installed and verified, and you keep that record for renovation, resale, insurance and warranty claims.",
      cta: link("Included with Assurance"),
      video: REMOTE_OFFICE_VIDEO,
    },
  ] satisfies Service[],
};

export type Principle = { topic: string; quote: string };

/** The published independence rules, one per slide. */
export const PRINCIPLES = {
  title: "OUR INDEPENDENCE RULES",
  source: BRAND.name,
  sourceNote: BRAND.tagline,
  attribution: "Plan2Build Rule",
  cta: PRIMARY_CTA,
  items: [
    {
      topic: "Specification",
      quote: "We specify performance: grade, class, rating and system. Never a brand.",
    },
    {
      topic: "Brand choice",
      quote:
        "You see at least three qualifying products, one of them in the value tier, ordered by price and never by who pays us.",
    },
    {
      topic: "Qualification",
      quote: "Products qualify on published technical criteria. A product that fails cannot pay its way in.",
    },
    {
      topic: "Structural work",
      quote: "We take no manufacturer money on concrete, steel, foundation or slab. Safety-critical decisions stay clean.",
    },
    {
      topic: "Our earnings",
      quote: "What we earn is shown in rupees on the specification sheet you keep.",
    },
  ] satisfies Principle[],
};

export const STORY = {
  title: "Our Story",
  body: "A family building its own home has had two options. Hand the house to a construction company and drop the builder you already chose, or take advice from someone whose real business is selling you materials. Most of the work is informal, with no written scope, no record and no recourse. Plan2Build gives you independent advice and keeps the contractor you trust. We make you a competent buyer, not a construction expert.",
  cta: PRIMARY_CTA,
  image: "/images/2f3f0210ddd06dcb863a689d93e99345.jpg",
};

export type ProcessStep = { number: string; title: string; description: string; video: string };

export const PROCESS = {
  title: "HOW IT WORKS",
  steps: [
    {
      number: "01",
      title: "Plan",
      description: "Get your cost, scope, specification and cash-flow plan in writing before you award the contract.",
      video: "/videos/process-talk.mp4",
    },
    {
      number: "02",
      title: "Compare",
      description: "Send one standard RFQ pack and see every quote on the same scope, not just the headline number.",
      video: "/videos/process-plan.mp4",
    },
    {
      number: "03",
      title: "Build",
      description: "Your contractor builds. We check six gates and log every change before it is built.",
      video: "/videos/process-build.mp4",
    },
    {
      number: "04",
      title: "Track",
      description: "Every material is recorded as specified, bought, installed and verified. Your building gets its papers.",
      video: "/videos/process-enjoy.mp4",
    },
  ] satisfies ProcessStep[],
};

export const CTA = {
  title: "Your land has papers. Your building has none.",
  body: "Know your cost. Compare on the same scope. Keep a record of what went into your walls.",
  button: PRIMARY_CTA,
  video: "/videos/cta.mp4",
};

export type Faq = { question: string; answer: string };

export const FAQ = {
  title: "Common Questions",
  items: [
    {
      question: "What is Plan2Build?",
      answer:
        "Plan2Build helps families building their own home decide well and buy well. We put cost, scope and specification in writing, compare contractor quotes on the same scope, independently check the stages that cannot be undone and keep a permanent record of your build.",
    },
    {
      question: "Who is Plan2Build for?",
      answer:
        "Families building an independent house on their own plot, typically with a construction budget of ₹50 lakh or more, excluding land. We are starting in Raipur.",
    },
    {
      question: "Does Plan2Build replace my contractor?",
      answer:
        "No. We never take the construction contract. You keep the builder you chose, and execution, supervision and liability stay with them.",
    },
    {
      question: "How is your quote comparison different?",
      answer:
        "We do not rank contractors by price. Every contractor quotes against the same RFQ pack, and we show you why the numbers differ: missing waterproofing, a lower steel grade, thinner plaster. The cheapest number is often a smaller scope.",
    },
    {
      question: "How much does Plan2Build cost?",
      answer: `The Home Cost Check is free. The Build Plan and advice costs ${PRICES.buildPlan} per house, paid in three instalments. Six-Gate Assurance costs ${PRICES.assurance} per house. If you buy materials through us, our margin is shown in rupees on your specification sheet.`,
    },
    {
      question: "What happens if you miss a defect?",
      answer:
        "If we clear a gate and a structural defect in the work we inspected surfaces later, we pay to fix it, up to a stated cap.",
    },
    {
      question: "Are you tied to a particular material brand?",
      answer:
        "No. We specify performance, never a brand. You choose from at least three qualifying products ordered by price, we take no manufacturer money on structural work, and our auditor is never told who supplied the material.",
    },
    {
      question: "Do I have to buy through Plan2Build?",
      answer:
        "No. Materials, contractor introductions, finance, insurance, solar and interiors are all optional. Your specification works with any supplier.",
    },
    {
      question: "Why would my contractor agree to this?",
      answer:
        "Good contractors lose bids to lesser scopes quoted as if they were equal. A standard scope protects their price, and the change log means every change you ask for is priced and agreed before they build it.",
    },
  ] satisfies Faq[],
};

export const FOOTER = {
  cta: { title: CTA.title, button: PRIMARY_CTA },
  columns: [
    {
      title: "For Home Builders",
      links: [
        link("Home Cost Check"),
        link("Build Plan"),
        link("Quote Comparison"),
        link("Six-Gate Assurance"),
        link("Materials & Partners"),
        link("Build Record"),
      ],
    },
    {
      title: "Plan2Build",
      links: [link("What We Do"), link("Our Story"), link("How It Works"), link("FAQ")],
    },
    {
      title: "Contact",
      links: [PRIMARY_CTA],
    },
  ],
  description:
    "Independent advice for families building their own home: cost and scope in writing, quotes compared on the same scope, six-gate assurance and a permanent build record.",
  copyright: `© 2026 ${BRAND.name} by ${BRAND.company}. All rights reserved.`,
};
