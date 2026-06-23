import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Process",
  "eyebrow": "Debate Process",
  "pageCode": "VBT-PROCESS-2609",
  "description": "This static Verbattle page focuses on school onboarding and competition preparation. It is designed for school coordinators and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes school onboarding and competition preparation into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Debate Process",
    "Verbattle Static Route",
    "VBT-PROCESS-2609"
  ],
  "heroImage": "/programs/WhatsApp Image 2026-06-21 at 00.18.40 (2).jpeg",
  "heroAlt": "Process",
  "sections": [
    {
      "title": "Why Process Matters",
      "copy": "This page is written around school onboarding and competition preparation. It turns the menu label into something useful for school coordinators, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in school onboarding and competition preparation",
        "Written for school coordinators",
        "Built as a static route with its own page file"
      ]
    },
    {
      "title": "How This Route Helps The Site",
      "copy": "The earlier navigation pointed several items back to broad pages or hash sections. This route now stands alone and makes the information architecture easier to browse, share, and expand.",
      "bullets": [
        "Supports cleaner menu behavior",
        "Creates a stronger destination for search and sharing",
        "Allows page-by-page editing without dynamic dependencies"
      ]
    },
    {
      "title": "What Visitors Should Take Away",
      "copy": "The main goal of this page is operational clarity. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: school coordinators",
        "Main focus: school onboarding and competition preparation",
        "Target outcome: operational clarity"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Process Visual 1",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Process Visual 2",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.18.41 (1).jpeg",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Process Visual 3",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.18.41 (2).jpeg",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Process Visual 4",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.47.jpeg",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Process is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for school coordinators, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for operational clarity."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


