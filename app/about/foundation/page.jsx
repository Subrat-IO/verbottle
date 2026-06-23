import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Verbattle Foundation",
  "eyebrow": "Foundation",
  "pageCode": "VBT-FOUND-2602",
  "description": "This static Verbattle page focuses on thought exchange and democratic values. It is designed for supporters and schools and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes thought exchange and democratic values into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Foundation",
    "Verbattle Static Route",
    "VBT-FOUND-2602"
  ],
  "heroImage": "/image copy 3.png",
  "heroAlt": "Verbattle Foundation",
  "sections": [
    {
      "title": "Why Verbattle Foundation Matters",
      "copy": "This page is written around thought exchange and democratic values. It turns the menu label into something useful for supporters and schools, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in thought exchange and democratic values",
        "Written for supporters and schools",
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
      "copy": "The main goal of this page is a clean mission explanation. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: supporters and schools",
        "Main focus: thought exchange and democratic values",
        "Target outcome: a clean mission explanation"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Verbattle Foundation Visual 1",
      "image": "/image copy 4.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Verbattle Foundation Visual 2",
      "image": "/image copy 5.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Verbattle Foundation Visual 3",
      "image": "/image copy 6.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Verbattle Foundation Visual 4",
      "image": "/image copy 7.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Verbattle Foundation is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for supporters and schools, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for a clean mission explanation."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


