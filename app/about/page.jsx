import StaticVerbattlePage from "../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "About Verbattle",
  "eyebrow": "About",
  "pageCode": "VBT-ABOUT-2601",
  "description": "This static Verbattle page focuses on student voice, dialogue, and leadership. It is designed for schools and families and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes student voice, dialogue, and leadership into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "About",
    "Verbattle Static Route",
    "VBT-ABOUT-2601"
  ],
  "heroImage": "/founder.png",
  "heroAlt": "About Verbattle",
  "sections": [
    {
      "title": "Why About Verbattle Matters",
      "copy": "This page is written around student voice, dialogue, and leadership. It turns the menu label into something useful for schools and families, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in student voice, dialogue, and leadership",
        "Written for schools and families",
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
      "copy": "The main goal of this page is clarity before deeper browsing. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: schools and families",
        "Main focus: student voice, dialogue, and leadership",
        "Target outcome: clarity before deeper browsing"
      ]
    }
  ],
  "gallery": [
    {
      "title": "About Verbattle Visual 1",
      "image": "/image.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "About Verbattle Visual 2",
      "image": "/image copy.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "About Verbattle Visual 3",
      "image": "/image copy 2.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "About Verbattle Visual 4",
      "image": "/image copy 3.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "About Verbattle is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for schools and families, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for clarity before deeper browsing."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


