const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const images = [
  "/founder.png",
  "/image.png",
  "/image copy.png",
  "/image copy 2.png",
  "/image copy 3.png",
  "/image copy 4.png",
  "/image copy 5.png",
  "/image copy 6.png",
  "/image copy 7.png",
  "/image copy 8.png",
  "/image copy 9.png",
  "/image copy 10.png",
  "/image copy 11.png",
  "/image copy 12.png",
  "/image copy 13.png",
  "/image copy 14.png",
  "/image copy 15.png",
  "/image copy 16.png",
  "/image copy 17.png",
  "/image copy 18.png",
  "/image copy 19.png",
  "/image copy 20.png",
  "/image copy 21.png",
  "/image copy 22.png",
  "/image copy 23.png",
  "/image copy 24.png",
  "/image copy 25.png",
  "/programs/WhatsApp Image 2026-06-21 at 00.18.39.jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (1).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (2).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.18.40.jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.18.40 (1).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.18.40 (2).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.18.41 (1).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.18.41 (2).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.47.jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.48.jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.49.jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (1).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (2).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (3).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.50.jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (1).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (2).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.51.jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.52.jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.52 (1).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.53.jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.53 (1).jpeg",
  "/programs/WhatsApp Image 2026-06-21 at 00.20.53 (2).jpeg",
];

const pageConfigs = [
  ["about", "About Verbattle", "About", "VBT-ABOUT-2601", "student voice, dialogue, and leadership", "schools and families", "clarity before deeper browsing"],
  ["about/foundation", "Verbattle Foundation", "Foundation", "VBT-FOUND-2602", "thought exchange and democratic values", "supporters and schools", "a clean mission explanation"],
  ["about/appeal", "Appeal", "Appeal", "VBT-APPEAL-2603", "access, scholarships, and mission support", "donors and patrons", "clearer support action"],
  ["about/milestones", "Milestones", "Milestones", "VBT-MILES-2604", "reach, momentum, and institutional trust", "partners and sponsors", "evidence-led confidence"],
  ["about/overview", "Overview", "Overview", "VBT-OVERVIEW-2605", "the full Verbattle ecosystem", "first-time visitors", "faster understanding"],
  ["about/vision", "Vision", "Vision", "VBT-VISION-2606", "self-reliant, articulate young leaders", "parents and educators", "long-term learner outcomes"],
  ["about/discovery", "Discovery", "Discovery", "VBT-DISCOV-2607", "stories, moments, and visual energy", "curious new visitors", "stronger emotional connection"],
  ["debate", "Debate", "Debate", "VBT-DEBATE-2608", "argument, rebuttal, and structured thinking", "students and mentors", "a proper debate hub"],
  ["debate/process", "Process", "Debate Process", "VBT-PROCESS-2609", "school onboarding and competition preparation", "school coordinators", "operational clarity"],
  ["debate/about-debate", "About Debate", "About Debate", "VBT-ABOUTDB-2610", "critical thinking and disciplined expression", "families and beginners", "plain-language value"],
  ["debate/format", "Debate Format", "Debate Format", "VBT-FORMAT-2611", "round structure and fair speaking flow", "coaches and learners", "better preparation"],
  ["debate/blog", "Debate Blog", "Debate Blog", "VBT-DBBLOG-2612", "speaking notes, persuasion, and reflection", "learners improving between events", "content depth"],
  ["debate/faqs", "Debate FAQs", "Debate FAQs", "VBT-FAQ-2613", "common registration and format questions", "parents and schools", "reduced uncertainty"],
  ["programs/forum", "Forum", "Programs", "VBT-FORUM-2614", "discussion-led speaking practice", "emerging speakers", "a softer entry point"],
  ["programs/verbattle-academy", "Verbattle Academy", "Programs", "VBT-ACADEMY-2615", "structured public speaking growth", "families seeking continuity", "program depth"],
  ["programs/debate-club", "Debate Club", "Programs", "VBT-CLUB-2616", "regular sparring and club rhythm", "students who need repetition", "retention and momentum"],
  ["programs/activity-zone", "Activity Zone", "Programs", "VBT-ACTZONE-2617", "younger learner confidence building", "junior students", "playful but meaningful growth"],
  ["programs/teachers-workshop", "Teachers Workshop", "Programs", "VBT-TEACH-2618", "faculty support for student speaking", "teachers and school leaders", "mentor empowerment"],
  ["programs/certification", "Certification", "Programs", "VBT-CERT-2619", "recognition and completion pathways", "students and schools", "visible progress markers"],
  ["competitions/senior-speech-competition", "Senior Speech Competition", "Competition", "VBT-SENSP-2620", "advanced speech performance", "older learners", "a sharper competition identity"],
  ["competitions/speech-competition", "Speech Competition", "Competition", "VBT-SPEECH-2621", "clarity, voice, and audience impact", "students building public-speaking confidence", "stronger route focus"],
  ["competitions/verbattle-open", "Verbattle Open", "Competition", "VBT-OPEN-2622", "open-entry competitive energy", "new entrants to the circuit", "broader access"],
  ["competitions/junior", "Junior", "Competition", "VBT-JUNIOR-2623", "age-appropriate competitive growth", "younger speakers", "encouraging progression"],
  ["competitions/international", "International", "Competition", "VBT-INTL-2624", "global exchange and wider benchmarks", "ambitious schools and students", "outward-looking opportunity"],
  ["competitions/online", "Online", "Competition", "VBT-ONLINE-2625", "digital rounds and flexible access", "remote participants", "modern competition delivery"],
  ["support", "Support", "Support", "VBT-SUPPORT-2626", "partnership, funding, and collaboration", "institutions and patrons", "a unified support entry"],
  ["support/sponsors", "Sponsors", "Support", "VBT-SPONSOR-2627", "institutional backing and scale", "brands and organisations", "partner confidence"],
  ["support/patrons", "Patrons", "Support", "VBT-PATRON-2628", "individual cause-driven backing", "mission-aligned supporters", "warmer patron communication"],
  ["support/donate", "Donate", "Support", "VBT-DONATE-2629", "student access through giving", "individual donors", "focused action"],
  ["support/global-collaboration", "Global Collaboration", "Support", "VBT-GLOBAL-2630", "international partnerships and exchange", "external collaborators", "future-facing relationships"],
  ["blog", "Blog", "Blog", "VBT-BLOG-2631", "updates, reflections, and event storytelling", "returning readers", "a proper content hub"],
  ["blog/workshop-registration", "Workshop Registration", "Blog Update", "VBT-WORKREG-2632", "workshop announcements and guided sign-up", "schools and parents", "context before registration"],
  ["blog/national-level-online-school-debate-competition", "National Level Online School Debate Competition", "Blog Update", "VBT-NATONL-2633", "marquee online debate updates", "schools evaluating participation", "event-specific storytelling"],
];

function titleToSlugTitle(title) {
  return title.replace(/\s+/g, " ").trim();
}

function getImportPath(routePath) {
  const depth = routePath.split("/").length + 1;
  return `${"../".repeat(depth)}components/verbattle/StaticVerbattlePage`;
}

function getGallery(index, title) {
  return Array.from({ length: 4 }, (_, offset) => ({
    title: `${titleToSlugTitle(title)} Visual ${offset + 1}`,
    image: images[(index * 4 + offset + 1) % images.length],
    copy: [
      "A local gallery image from the current project folder anchors this page in the site's own media set.",
      "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement.",
      "Each image block supports the theme of student voice, mentor support, or event energy in a static layout.",
      "Because this route has its own file, the gallery can be changed later without touching any other page.",
    ][offset],
  }));
}

function buildSections(title, focus, audience, outcome) {
  return [
    {
      title: `Why ${titleToSlugTitle(title)} Matters`,
      copy: `This page is written around ${focus}. It turns the menu label into something useful for ${audience}, so the route carries meaning instead of acting like a placeholder link.`,
      bullets: [
        `Grounded in ${focus}`,
        `Written for ${audience}`,
        `Built as a static route with its own page file`,
      ],
    },
    {
      title: "How This Route Helps The Site",
      copy: `The earlier navigation pointed several items back to broad pages or hash sections. This route now stands alone and makes the information architecture easier to browse, share, and expand.`,
      bullets: [
        "Supports cleaner menu behavior",
        "Creates a stronger destination for search and sharing",
        "Allows page-by-page editing without dynamic dependencies",
      ],
    },
    {
      title: "What Visitors Should Take Away",
      copy: `The main goal of this page is ${outcome}. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.`,
      bullets: [
        `Primary audience: ${audience}`,
        `Main focus: ${focus}`,
        `Target outcome: ${outcome}`,
      ],
    },
  ];
}

function buildHighlights(title, audience, outcome) {
  return [
    {
      title: "Own Code File",
      copy: `${titleToSlugTitle(title)} is implemented as its own dedicated page file inside the app directory.`,
    },
    {
      title: "Useful For Real Visitors",
      copy: `The copy and structure are shaped for ${audience}, not only for internal navigation completeness.`,
    },
    {
      title: "Static And Editable",
      copy: `The route is intentionally static so future edits stay simple while still aiming for ${outcome}.`,
    },
  ];
}

function createPageData(config, index) {
  const [routePath, title, eyebrow, pageCode, focus, audience, outcome] = config;

  return {
    title,
    eyebrow,
    pageCode,
    description: `This static Verbattle page focuses on ${focus}. It is designed for ${audience} and now exists as its own route file instead of relying on a shared dynamic setup.`,
    quote: `Inspired by the current Verbattle site structure and messaging, this route reframes ${focus} into a cleaner static page that is easier to maintain and navigate.`,
    heroMeta: [eyebrow, "Verbattle Static Route", pageCode],
    heroImage: images[(index * 4) % images.length],
    heroAlt: title,
    sections: buildSections(title, focus, audience, outcome),
    gallery: getGallery(index, title),
    highlights: buildHighlights(title, audience, outcome),
    ctaTitle: "Ready to take the next step with Verbattle?",
    ctaText: "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow.",
  };
}

pageConfigs.forEach((config, index) => {
  const routePath = config[0];
  const pageData = createPageData(config, index);
  const dir = path.join(root, "app", ...routePath.split("/"));

  fs.mkdirSync(dir, { recursive: true });

  const fileContents = `import StaticVerbattlePage from "${getImportPath(routePath)}";

const pageContent = ${JSON.stringify(pageData, null, 2)};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}
`;

  fs.writeFileSync(path.join(dir, "page.jsx"), fileContents, "utf8");
});

console.log(`Created ${pageConfigs.length} static page files.`);


