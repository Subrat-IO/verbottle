import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Overview",
  "eyebrow": "Overview",
  "pageCode": "VBT-OVERVIEW-2605",
  "description": "This static Verbattle page focuses on the full Verbattle ecosystem. It is designed for first-time visitors and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes the full Verbattle ecosystem into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Overview",
    "Verbattle Static Route",
    "VBT-OVERVIEW-2605"
  ],
  "heroImage": "/image copy 15.png",
  "heroAlt": "Overview",
  "sections": [
    {
      "title": "Why Overview Matters",
      "copy": "This page is written around the full Verbattle ecosystem. It turns the menu label into something useful for first-time visitors, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in the full Verbattle ecosystem",
        "Written for first-time visitors",
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
      "copy": "The main goal of this page is faster understanding. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: first-time visitors",
        "Main focus: the full Verbattle ecosystem",
        "Target outcome: faster understanding"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Overview Visual 1",
      "image": "/image copy 16.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Overview Visual 2",
      "image": "/image copy 17.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Overview Visual 3",
      "image": "/image copy 18.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Overview Visual 4",
      "image": "/image copy 19.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Overview is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for first-time visitors, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for faster understanding."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


