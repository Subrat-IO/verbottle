import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Milestones",
  "eyebrow": "Milestones",
  "pageCode": "VBT-MILES-2604",
  "description": "This static Verbattle page focuses on reach, momentum, and institutional trust. It is designed for partners and sponsors and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes reach, momentum, and institutional trust into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Milestones",
    "Verbattle Static Route",
    "VBT-MILES-2604"
  ],
  "heroImage": "/image copy 11.png",
  "heroAlt": "Milestones",
  "sections": [
    {
      "title": "Why Milestones Matters",
      "copy": "This page is written around reach, momentum, and institutional trust. It turns the menu label into something useful for partners and sponsors, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in reach, momentum, and institutional trust",
        "Written for partners and sponsors",
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
      "copy": "The main goal of this page is evidence-led confidence. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: partners and sponsors",
        "Main focus: reach, momentum, and institutional trust",
        "Target outcome: evidence-led confidence"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Milestones Visual 1",
      "image": "/image copy 12.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Milestones Visual 2",
      "image": "/image copy 13.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Milestones Visual 3",
      "image": "/image copy 14.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Milestones Visual 4",
      "image": "/image copy 15.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Milestones is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for partners and sponsors, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for evidence-led confidence."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


