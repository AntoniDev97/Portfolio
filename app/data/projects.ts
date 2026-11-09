// src/data/projects.ts

// Define a type for your project data structure
export interface ProjectType {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string; // Optional; falls back to "<title> screenshot"
  liveUrl: string;
  repoUrl?: string; // Optional repository URL
  techStack: string[];
}

// The flagship project gets a full-width feature block with extra detail
export interface FeaturedProjectType extends ProjectType {
  imageAlt: string;
  role: string;
  status: string;
  highlights: { title: string; text: string }[];
}

// TCG Drop: main project. Every claim here is checked against the live
// product and its code. Keep fee rates and partner shop names out of it.
export const featuredProject: FeaturedProjectType = {
  title: "TCG Drop",
  // Non-breaking space keeps the dot with "Developer" when the line wraps
  role: "Founder & Developer · DoniCodes Ltd",
  status: "Live in production",
  description:
    "TCG Drop runs live stock drops for trading card shops, so nobody has to queue outside from first light. Collectors claim from their phone the moment stock goes live, pay online or at the counter, and collect in store. I founded it, built it end to end and run it in production.",
  imageUrl: "/images/tcgDropHomepage.webp",
  imageAlt:
    "TCG Drop homepage with the headline Claim the drop, a live drop card and a collection QR code",
  liveUrl: "https://tcgdrop.co.uk/",
  techStack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Stripe",
    "Tailwind CSS",
    "Vercel",
    "Resend",
    "PWA",
  ],
  highlights: [
    {
      title: "Multi-tenant platform",
      text: "Every shop gets its own storefront, admin dashboard and installable app, all from one codebase.",
    },
    {
      title: "Real payments",
      text: "Card payments go straight to each shop's own Stripe account through Stripe Connect, and Stripe Billing runs paid memberships with early access to drops.",
    },
    {
      title: "Race-safe drops",
      text: "Postgres row locks mean stock can't oversell when everyone hits claim in the same second, and per-person limits keep it fair.",
    },
    {
      title: "Secure by default",
      text: "Row Level Security in Postgres, passwordless sign-in with one-time email codes, and Cloudflare Turnstile bot protection.",
    },
    {
      title: "Built for the counter",
      text: "Shops scan a collector's QR code in the browser to see what's claimed and paid, and bulk import products from CSV or Excel.",
    },
    {
      title: "Run in production",
      text: "Scheduled jobs, health checks and alerts, Discord announcements, transactional email, and 30 automated test suites covering claims under load, payments and permissions.",
    },
  ],
};

// Define and export your projects array
export const projects: ProjectType[] = [
  {
    title: "DC Reflections",
    description:
      "Professional aesthetics clinic website built with a modern tech stack, focusing on clear service presentation and user experience.",
    // The clinic's own logo on its brand cream (#f3eae2), sized 16:9 for the card
    imageUrl: "/images/dcReflectionsLogo.webp",
    imageAlt: "DC Reflections logo",
    liveUrl: "https://www.dcreflections.co.uk/",
    //repoUrl: "https://github.com/AntoniDev97",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
      "MongoDB",
    ],
  },
  {
    title: "Ethan Proctor Portfolio",
    description:
      "Professional portfolio website for a talented graphic designer, showcasing creative work and design expertise.",
    // Ethan's EP signature logo, the same artwork as his installable app icon
    imageUrl: "/images/ethanProctorLogo.webp",
    imageAlt: "Ethan Proctor's EP signature logo",
    liveUrl: "https://www.ethanproctor.co.uk/",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "VouchAbout",
    description:
      "Local business advertisement directory helping local businesses connect with their community and grow their presence.",
    imageUrl: "/images/vouchAboutLogo.svg",
    imageAlt: "VouchAbout logo",
    liveUrl: "https://www.vouchabout.co.uk/",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase"
    ],
  },
];
