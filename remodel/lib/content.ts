/**
 * Plan2Build homepage copy. All text, prices and link targets live here so
 * they can change without touching components.
 *
 * Navigation is intentionally non-functional: every link points to "#".
 */

export type Link = { label: string; href: string };

/** Every link on the page is a placeholder until the other pages exist. */
export const PLACEHOLDER_HREF = "#";

const link = (label: string): Link => ({ label, href: PLACEHOLDER_HREF });

export const BRAND = {
  name: "Plan2Build",
  tagline: "Independent · Unbiased · On Your Side",
};

export const PRIMARY_CTA = link("Start Your Build Plan");
export const SECONDARY_CTA = link("See What Your Home Should Cost");

export const NAV_LINKS: Link[] = [
  link("Home"),
  link("What We Do"),
  link("Our Story"),
  link("How We Get It Done"),
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
 * Prices, kept in one place.
 *
 * buildPlan: the client references disagree. The brief's design tiers start at
 * ₹29,999 (1 BHK + 2D Design + Landscape) and run to ₹59,999+ for larger or
 * custom cases; the strategy document (21 Sept 2026) proposes ₹15,000–₹20,000
 * and mentions an earlier ₹2,999. The brief's tiers are shown until the client
 * confirms the current figure.
 */
export const PRICES = {
  costCheck: "Free",
  quoteReview: "₹4,999",
  compare: "₹9,999",
  buildPlan: "₹29,999 – ₹59,999+",
  buildPlanTiers: {
    oneBhk: "₹29,999",
    twoBhk: "₹39,999",
    threeBhk: "₹49,999",
    boqAddOn: "₹10,000",
    custom: "up to ₹59,999+",
  },
  stageCheck: "₹5,000 – ₹7,500",
  threeStagePackage: "₹18,000 – ₹22,000",
  assurance: "₹30,000 – ₹40,000+",
} as const;

export const HERO = {
  title: "Build your home with clarity, confidence and control.",
  subtitle:
    "Plan2Build helps individual home builders understand what their home should cost, compare contractor quotes on a common basis, verify critical stages of construction and access trusted products, partners and related services.",
  cta: PRIMARY_CTA,
  secondary: { eyebrow: BRAND.tagline, ...SECONDARY_CTA },
  video: "/videos/Create_a_premium_cinematic_web.mp4",
};

/** Two stat cards: the counter animates from 0 to `value`. */
export type Highlight = { prefix: string; value: number; suffix: string; label: string; note: string };

export const HIGHLIGHTS: Highlight[] = [
  { prefix: "₹", value: 40, suffix: "L+", label: "Build cost", note: "Excl. land" },
  { prefix: "₹", value: 0, suffix: "", label: "Upfront fee", note: "Your choice" },
];

/** The three coloured badges beside the stat cards. */
export type Badge = { title: string; label: string; color: string };

export const BADGES: Badge[] = [
  { title: PRICES.costCheck, label: "Home Cost Check", color: "rgb(81, 184, 73)" },
  { title: PRICES.quoteReview, label: "Independent Quote Review", color: "rgb(81, 184, 73)" },
  { title: PRICES.compare, label: "Compare & Decide", color: "rgb(243, 186, 54)" },
];

export type Pillar = { title: string; description: string; image: string; action: Link };

/** The three Plan2Build pillars, shown in the scroll-driven gallery. */
export const PILLARS = {
  title: "THREE WAYS WE HELP",
  cta: link("See All Services"),
  items: [
    {
      title: "Plan & Decide",
      description: "Know what to build, what it should cost and what you are actually being quoted.",
      image: "/images/pillar-plan.jpeg",
      action: link("Compare Your Quotes"),
    },
    {
      title: "Verify & Assure",
      description: "Independent checks at the stages where mistakes become expensive.",
      image: "/images/pillar-verify.jpeg",
      action: link("Book a Stage Check"),
    },
    {
      title: "Transact & Connect",
      description: "Access trusted products, partners and related services for a better build.",
      image: "/images/pillar-connect.jpeg",
      action: link("Explore Partners"),
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
        "Get a quick estimate to plan better: likely construction cost for your plot size, typical specifications for your city and guidance on next steps. Understand the likely cost and what to do next.",
      cta: link(`${PRICES.costCheck} Home Cost Check`),
      video: PLAN_VIDEO,
    },
    {
      id: "quote-review",
      title: "Independent Quote Review",
      icon: "verify",
      description:
        "An expert review of your contractor's quote: what is included, missing and unclear, risk areas, key questions to ask and an expert discussion. Know exactly what you are paying for and where the risks are.",
      cta: link(`Review for ${PRICES.quoteReview}`),
      video: REMOTE_OFFICE_VIDEO,
    },
    {
      id: "compare",
      title: "Compare & Decide",
      icon: "plan",
      description:
        "Compare up to three quotations on a common basis: detailed comparison report, specification and quality check, cost-saving opportunities and an expert discussion. Choose the right contractor and scope with clarity.",
      cta: link(`Compare for ${PRICES.compare}`),
      video: PLAN_VIDEO,
    },
    {
      id: "build-plan",
      title: "Complete Build Plan",
      icon: "verify",
      description: `Detailed planning, drawings and specifications for execution. With 2D design and landscape: 1 BHK ${PRICES.buildPlanTiers.oneBhk}, 2 BHK ${PRICES.buildPlanTiers.twoBhk}, 3 BHK ${PRICES.buildPlanTiers.threeBhk}; larger or custom homes ${PRICES.buildPlanTiers.custom}. BOQ add-on ${PRICES.buildPlanTiers.boqAddOn}.`,
      cta: link(`Plan from ${PRICES.buildPlanTiers.oneBhk}`),
      video: REMOTE_OFFICE_VIDEO,
    },
    {
      id: "stage-checks",
      title: "Stage Checks",
      icon: "plan",
      description: `On-site inspection by a certified engineer: quality and specification checks, photo reports, risks and corrective actions. ${PRICES.stageCheck} per stage check, or ${PRICES.threeStagePackage} for three stages. Be confident your home is built as planned.`,
      cta: link(`${PRICES.stageCheck.replace(/ /g, "")} / stage`),
      video: PLAN_VIDEO,
    },
    {
      id: "assurance",
      title: "Assurance Package",
      icon: "verify",
      description:
        "Multi-stage quality assurance: multiple stage inspections, detailed reports, checks against approved plans and specifications and expert support throughout construction. Independent assurance for your whole build.",
      cta: link(PRICES.assurance.replace(/ /g, "")),
      video: REMOTE_OFFICE_VIDEO,
    },
  ] satisfies Service[],
};

export type Principle = { topic: string; quote: string };

/** Principles, not customer reviews: attribution is deliberately generic. */
export const PRINCIPLES = {
  title: "WHAT HOME BUILDERS GET",
  source: BRAND.name,
  sourceNote: BRAND.tagline,
  attribution: "Plan2Build Home Builder",
  cta: PRIMARY_CTA,
  items: [
    {
      topic: "Before construction",
      quote: "“Know what you are paying for before construction starts.”",
    },
    {
      topic: "Comparing quotes",
      quote: "“Compare quotations on the same scope, not just the headline number.”",
    },
    {
      topic: "During construction",
      quote: "“Stay informed about the work that matters before it gets covered up.”",
    },
    {
      topic: "Choosing a contractor",
      quote: "“The cheapest quote is almost never the cheapest house.”",
    },
  ] satisfies Principle[],
};

export const STORY = {
  title: "Our Story",
  body: "Plan2Build exists to make home construction more understandable, more transparent and more manageable for individual homeowners. Building a home means complex decisions, contractor quotes that are hard to compare and choices that become expensive when made too late. We help you structure those decisions, working independently, so you stay in control.",
  cta: PRIMARY_CTA,
  image: "/images/2f3f0210ddd06dcb863a689d93e99345.jpg",
};

export type ProcessStep = { number: string; title: string; description: string; video: string };

export const PROCESS = {
  title: "HOW WE GET IT DONE",
  steps: [
    {
      number: "01",
      title: "Understand Your Home",
      description: "Understand your plot, requirements and likely construction cost.",
      video: "/videos/process-talk.mp4",
    },
    {
      number: "02",
      title: "Compare & Plan",
      description: "Turn contractor quotations into a comparable scope.",
      video: "/videos/process-plan.mp4",
    },
    {
      number: "03",
      title: "Verify Critical Work",
      description: "Check the stages where mistakes can become expensive.",
      video: "/videos/process-build.mp4",
    },
    {
      number: "04",
      title: "Build With Confidence",
      description: "Maintain a clear record and access the right support, products and services.",
      video: "/videos/process-enjoy.mp4",
    },
  ] satisfies ProcessStep[],
};

export const CTA = {
  title: "Build with more clarity. Decide with more confidence.",
  body: "Know your cost. Compare your quotes. Build with confidence.",
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
        "Plan2Build helps individual home builders understand construction costs, compare contractor quotes, verify critical construction stages and access trusted products and services.",
    },
    {
      question: "Who is Plan2Build for?",
      answer:
        "Plan2Build is designed for people building standalone homes on their own or controlled plot, typically with a construction cost of ₹40 lakh or more, excluding land.",
    },
    {
      question: "Does Plan2Build replace my contractor?",
      answer:
        "No. Plan2Build does not take the construction contract. Your contractor remains responsible for building the home.",
    },
    {
      question: "Can Plan2Build compare my contractor quotations?",
      answer:
        "Yes. Independent Quote Review and Compare & Decide are designed to help you understand what is included, what is missing and how quotations compare on a common basis.",
    },
    {
      question: "How much does Plan2Build cost?",
      answer: `Services range from a free Home Cost Check to paid planning, comparison, stage inspection and assurance packages: Independent Quote Review ${PRICES.quoteReview}, Compare & Decide ${PRICES.compare}, Stage Checks ${PRICES.stageCheck} per stage and the Assurance Package ${PRICES.assurance}.`,
    },
    {
      question: "Are you tied to a particular material brand?",
      answer:
        "Plan2Build's positioning is independent. Specifications should come before brand recommendations, and relevant commercial relationships should be disclosed where applicable.",
    },
    {
      question: "Do I have to use Plan2Build's partners?",
      answer:
        "No. Partner and ecosystem services, from building materials, construction finance and insurance to solar, interiors and finishes, should not remove the homeowner's choice. There is no upfront platform fee, and any Plan2Build commercial relationship is disclosed where applicable.",
    },
    {
      question: "Does Plan2Build inspect construction work?",
      answer: "Stage Checks and Assurance packages provide independent checks during construction.",
    },
  ] satisfies Faq[],
};

export const FOOTER = {
  cta: { title: CTA.title, button: PRIMARY_CTA },
  columns: [
    {
      title: "For Home Builders",
      links: [
        link("Cost Estimate"),
        link("Quote Review"),
        link("Compare & Decide"),
        link("Build Plan"),
        link("Stage Checks"),
        link("Assurance"),
      ],
    },
    {
      title: "Plan2Build",
      links: [link("What We Do"), link("Our Story"), link("How We Get It Done"), link("FAQ")],
    },
    {
      title: "Contact",
      links: [PRIMARY_CTA],
    },
  ],
  description:
    "Independent guidance for individual home builders — from planning and cost clarity to quote comparison, stage checks and trusted services.",
  copyright: "© 2026 Plan2Build. All rights reserved.",
};
