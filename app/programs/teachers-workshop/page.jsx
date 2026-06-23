import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Teachers Workshop",
  "eyebrow": "Programs",
  "pageCode": "VBT-TEACH-2618",
  "description": "This static Verbattle page focuses on faculty support for student speaking. It is designed for teachers and school leaders and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes faculty support for student speaking into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Programs",
    "Verbattle Static Route",
    "VBT-TEACH-2618"
  ],
  "heroImage": "/image copy 16.png",
  "heroAlt": "Teachers Workshop",
  "sections": [
    {
      "title": "Why Teachers Workshop Matters",
      "copy": "This page is written around faculty support for student speaking. It turns the menu label into something useful for teachers and school leaders, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in faculty support for student speaking",
        "Written for teachers and school leaders",
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
      "copy": "The main goal of this page is mentor empowerment. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: teachers and school leaders",
        "Main focus: faculty support for student speaking",
        "Target outcome: mentor empowerment"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Teachers Workshop Visual 1",
      "image": "/image copy 17.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Teachers Workshop Visual 2",
      "image": "/image copy 18.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Teachers Workshop Visual 3",
      "image": "/image copy 19.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Teachers Workshop Visual 4",
      "image": "/image copy 20.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Teachers Workshop is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for teachers and school leaders, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for mentor empowerment."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


