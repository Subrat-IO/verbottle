import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Workshop Registration",
  "eyebrow": "Blog Update",
  "pageCode": "VBT-WORKREG-2632",
  "description": "This static Verbattle page focuses on workshop announcements and guided sign-up. It is designed for schools and parents and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes workshop announcements and guided sign-up into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Blog Update",
    "Verbattle Static Route",
    "VBT-WORKREG-2632"
  ],
  "heroImage": "/image copy 21.png",
  "heroAlt": "Workshop Registration",
  "sections": [
    {
      "title": "Why Workshop Registration Matters",
      "copy": "This page is written around workshop announcements and guided sign-up. It turns the menu label into something useful for schools and parents, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in workshop announcements and guided sign-up",
        "Written for schools and parents",
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
      "copy": "The main goal of this page is context before registration. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: schools and parents",
        "Main focus: workshop announcements and guided sign-up",
        "Target outcome: context before registration"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Workshop Registration Visual 1",
      "image": "/image copy 22.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Workshop Registration Visual 2",
      "image": "/image copy 23.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Workshop Registration Visual 3",
      "image": "/image copy 24.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Workshop Registration Visual 4",
      "image": "/image copy 25.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Workshop Registration is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for schools and parents, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for context before registration."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


