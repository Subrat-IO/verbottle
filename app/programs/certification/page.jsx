import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Certification",
  "eyebrow": "Programs",
  "pageCode": "VBT-CERT-2619",
  "description": "This static Verbattle page focuses on recognition and completion pathways. It is designed for students and schools and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes recognition and completion pathways into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Programs",
    "Verbattle Static Route",
    "VBT-CERT-2619"
  ],
  "heroImage": "/image copy 20.png",
  "heroAlt": "Certification",
  "sections": [
    {
      "title": "Why Certification Matters",
      "copy": "This page is written around recognition and completion pathways. It turns the menu label into something useful for students and schools, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in recognition and completion pathways",
        "Written for students and schools",
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
      "copy": "The main goal of this page is visible progress markers. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: students and schools",
        "Main focus: recognition and completion pathways",
        "Target outcome: visible progress markers"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Certification Visual 1",
      "image": "/image copy 21.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Certification Visual 2",
      "image": "/image copy 22.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Certification Visual 3",
      "image": "/image copy 23.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Certification Visual 4",
      "image": "/image copy 24.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Certification is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for students and schools, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for visible progress markers."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


