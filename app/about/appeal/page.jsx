import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Appeal",
  "eyebrow": "Appeal",
  "pageCode": "VBT-APPEAL-2603",
  "description": "This static Verbattle page focuses on access, scholarships, and mission support. It is designed for donors and patrons and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes access, scholarships, and mission support into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Appeal",
    "Verbattle Static Route",
    "VBT-APPEAL-2603"
  ],
  "heroImage": "/image copy 7.png",
  "heroAlt": "Appeal",
  "sections": [
    {
      "title": "Why Appeal Matters",
      "copy": "This page is written around access, scholarships, and mission support. It turns the menu label into something useful for donors and patrons, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in access, scholarships, and mission support",
        "Written for donors and patrons",
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
      "copy": "The main goal of this page is clearer support action. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: donors and patrons",
        "Main focus: access, scholarships, and mission support",
        "Target outcome: clearer support action"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Appeal Visual 1",
      "image": "/image copy 8.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Appeal Visual 2",
      "image": "/image copy 9.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Appeal Visual 3",
      "image": "/image copy 10.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Appeal Visual 4",
      "image": "/image copy 11.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Appeal is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for donors and patrons, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for clearer support action."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


