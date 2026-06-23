import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Debate Club",
  "eyebrow": "Programs",
  "pageCode": "VBT-CLUB-2616",
  "description": "This static Verbattle page focuses on regular sparring and club rhythm. It is designed for students who need repetition and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes regular sparring and club rhythm into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Programs",
    "Verbattle Static Route",
    "VBT-CLUB-2616"
  ],
  "heroImage": "/image copy 8.png",
  "heroAlt": "Debate Club",
  "sections": [
    {
      "title": "Why Debate Club Matters",
      "copy": "This page is written around regular sparring and club rhythm. It turns the menu label into something useful for students who need repetition, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in regular sparring and club rhythm",
        "Written for students who need repetition",
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
      "copy": "The main goal of this page is retention and momentum. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: students who need repetition",
        "Main focus: regular sparring and club rhythm",
        "Target outcome: retention and momentum"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Debate Club Visual 1",
      "image": "/image copy 9.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Debate Club Visual 2",
      "image": "/image copy 10.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Debate Club Visual 3",
      "image": "/image copy 11.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Debate Club Visual 4",
      "image": "/image copy 12.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Debate Club is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for students who need repetition, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for retention and momentum."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


