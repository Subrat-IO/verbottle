import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Verbattle Open",
  "eyebrow": "Competition",
  "pageCode": "VBT-OPEN-2622",
  "description": "This static Verbattle page focuses on open-entry competitive energy. It is designed for new entrants to the circuit and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes open-entry competitive energy into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Competition",
    "Verbattle Static Route",
    "VBT-OPEN-2622"
  ],
  "heroImage": "/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg",
  "heroAlt": "Verbattle Open",
  "sections": [
    {
      "title": "Why Verbattle Open Matters",
      "copy": "This page is written around open-entry competitive energy. It turns the menu label into something useful for new entrants to the circuit, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in open-entry competitive energy",
        "Written for new entrants to the circuit",
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
      "copy": "The main goal of this page is broader access. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: new entrants to the circuit",
        "Main focus: open-entry competitive energy",
        "Target outcome: broader access"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Verbattle Open Visual 1",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.18.41 (1).jpeg",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Verbattle Open Visual 2",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.18.41 (2).jpeg",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Verbattle Open Visual 3",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.47.jpeg",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Verbattle Open Visual 4",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.48.jpeg",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Verbattle Open is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for new entrants to the circuit, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for broader access."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


