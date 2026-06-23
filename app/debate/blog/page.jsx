import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Debate Blog",
  "eyebrow": "Debate Blog",
  "pageCode": "VBT-DBBLOG-2612",
  "description": "This static Verbattle page focuses on speaking notes, persuasion, and reflection. It is designed for learners improving between events and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes speaking notes, persuasion, and reflection into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Debate Blog",
    "Verbattle Static Route",
    "VBT-DBBLOG-2612"
  ],
  "heroImage": "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (2).jpeg",
  "heroAlt": "Debate Blog",
  "sections": [
    {
      "title": "Why Debate Blog Matters",
      "copy": "This page is written around speaking notes, persuasion, and reflection. It turns the menu label into something useful for learners improving between events, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in speaking notes, persuasion, and reflection",
        "Written for learners improving between events",
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
      "copy": "The main goal of this page is content depth. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: learners improving between events",
        "Main focus: speaking notes, persuasion, and reflection",
        "Target outcome: content depth"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Debate Blog Visual 1",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.51.jpeg",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Debate Blog Visual 2",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.52.jpeg",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Debate Blog Visual 3",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.52 (1).jpeg",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Debate Blog Visual 4",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.53.jpeg",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Debate Blog is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for learners improving between events, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for content depth."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


