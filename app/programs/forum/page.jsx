import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Forum",
  "eyebrow": "Programs",
  "pageCode": "VBT-FORUM-2614",
  "description": "This static Verbattle page focuses on discussion-led speaking practice. It is designed for emerging speakers and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes discussion-led speaking practice into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Programs",
    "Verbattle Static Route",
    "VBT-FORUM-2614"
  ],
  "heroImage": "/image.png",
  "heroAlt": "Forum",
  "sections": [
    {
      "title": "Why Forum Matters",
      "copy": "This page is written around discussion-led speaking practice. It turns the menu label into something useful for emerging speakers, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in discussion-led speaking practice",
        "Written for emerging speakers",
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
      "copy": "The main goal of this page is a softer entry point. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: emerging speakers",
        "Main focus: discussion-led speaking practice",
        "Target outcome: a softer entry point"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Forum Visual 1",
      "image": "/image copy.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Forum Visual 2",
      "image": "/image copy 2.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Forum Visual 3",
      "image": "/image copy 3.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Forum Visual 4",
      "image": "/image copy 4.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Forum is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for emerging speakers, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for a softer entry point."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


