import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Discovery",
  "eyebrow": "Discovery",
  "pageCode": "VBT-DISCOV-2607",
  "description": "This static Verbattle page focuses on stories, moments, and visual energy. It is designed for curious new visitors and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes stories, moments, and visual energy into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Discovery",
    "Verbattle Static Route",
    "VBT-DISCOV-2607"
  ],
  "heroImage": "/image copy 23.png",
  "heroAlt": "Discovery",
  "sections": [
    {
      "title": "Why Discovery Matters",
      "copy": "This page is written around stories, moments, and visual energy. It turns the menu label into something useful for curious new visitors, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in stories, moments, and visual energy",
        "Written for curious new visitors",
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
      "copy": "The main goal of this page is stronger emotional connection. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: curious new visitors",
        "Main focus: stories, moments, and visual energy",
        "Target outcome: stronger emotional connection"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Discovery Visual 1",
      "image": "/image copy 24.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Discovery Visual 2",
      "image": "/image copy 25.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Discovery Visual 3",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.18.39.jpeg",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Discovery Visual 4",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (1).jpeg",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Discovery is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for curious new visitors, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for stronger emotional connection."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


