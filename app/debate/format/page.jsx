import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Debate Format",
  "eyebrow": "Debate Format",
  "pageCode": "VBT-FORMAT-2611",
  "description": "This static Verbattle page focuses on round structure and fair speaking flow. It is designed for coaches and learners and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes round structure and fair speaking flow into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Debate Format",
    "Verbattle Static Route",
    "VBT-FORMAT-2611"
  ],
  "heroImage": "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (2).jpeg",
  "heroAlt": "Debate Format",
  "sections": [
    {
      "title": "Why Debate Format Matters",
      "copy": "This page is written around round structure and fair speaking flow. It turns the menu label into something useful for coaches and learners, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in round structure and fair speaking flow",
        "Written for coaches and learners",
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
      "copy": "The main goal of this page is better preparation. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: coaches and learners",
        "Main focus: round structure and fair speaking flow",
        "Target outcome: better preparation"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Debate Format Visual 1",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (3).jpeg",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Debate Format Visual 2",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.50.jpeg",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Debate Format Visual 3",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (1).jpeg",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Debate Format Visual 4",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (2).jpeg",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Debate Format is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for coaches and learners, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for better preparation."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


