import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Debate FAQs",
  "eyebrow": "Debate FAQs",
  "pageCode": "VBT-FAQ-2613",
  "description": "This static Verbattle page focuses on common registration and format questions. It is designed for parents and schools and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes common registration and format questions into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Debate FAQs",
    "Verbattle Static Route",
    "VBT-FAQ-2613"
  ],
  "heroImage": "/programs/WhatsApp Image 2026-06-21 at 00.20.53.jpeg",
  "heroAlt": "Debate FAQs",
  "sections": [
    {
      "title": "Why Debate FAQs Matters",
      "copy": "This page is written around common registration and format questions. It turns the menu label into something useful for parents and schools, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in common registration and format questions",
        "Written for parents and schools",
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
      "copy": "The main goal of this page is reduced uncertainty. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: parents and schools",
        "Main focus: common registration and format questions",
        "Target outcome: reduced uncertainty"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Debate FAQs Visual 1",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.53 (1).jpeg",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Debate FAQs Visual 2",
      "image": "/programs/WhatsApp Image 2026-06-21 at 00.20.53 (2).jpeg",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Debate FAQs Visual 3",
      "image": "/founder.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Debate FAQs Visual 4",
      "image": "/image.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Debate FAQs is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for parents and schools, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for reduced uncertainty."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


