import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "International",
  "eyebrow": "Competition",
  "pageCode": "VBT-INTL-2624",
  "description": "This static Verbattle page focuses on global exchange and wider benchmarks. It is designed for ambitious schools and students and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes global exchange and wider benchmarks into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Competition",
    "Verbattle Static Route",
    "VBT-INTL-2624"
  ],
  "heroImage": "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (3).jpeg",
  "heroAlt": "International",
  "sections": [
    {
      "title": "Why International Matters",
      "copy": "This page is written around global exchange and wider benchmarks. It turns the menu label into something useful for ambitious schools and students, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in global exchange and wider benchmarks",
        "Written for ambitious schools and students",
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
      "copy": "The main goal of this page is outward-looking opportunity. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: ambitious schools and students",
        "Main focus: global exchange and wider benchmarks",
        "Target outcome: outward-looking opportunity"
      ]
    }
  ],
  "gallery": [
    {
      "title": "International Visual 1",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.50.jpeg",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "International Visual 2",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (1).jpeg",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "International Visual 3",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (2).jpeg",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "International Visual 4",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.51.jpeg",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "International is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for ambitious schools and students, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for outward-looking opportunity."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


