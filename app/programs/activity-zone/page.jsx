import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Activity Zone",
  "eyebrow": "Programs",
  "pageCode": "VBT-ACTZONE-2617",
  "description": "This static Verbattle page focuses on younger learner confidence building. It is designed for junior students and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes younger learner confidence building into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Programs",
    "Verbattle Static Route",
    "VBT-ACTZONE-2617"
  ],
  "heroImage": "/image copy 12.png",
  "heroAlt": "Activity Zone",
  "sections": [
    {
      "title": "Why Activity Zone Matters",
      "copy": "This page is written around younger learner confidence building. It turns the menu label into something useful for junior students, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in younger learner confidence building",
        "Written for junior students",
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
      "copy": "The main goal of this page is playful but meaningful growth. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: junior students",
        "Main focus: younger learner confidence building",
        "Target outcome: playful but meaningful growth"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Activity Zone Visual 1",
      "image": "/image copy 13.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Activity Zone Visual 2",
      "image": "/image copy 14.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Activity Zone Visual 3",
      "image": "/image copy 15.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Activity Zone Visual 4",
      "image": "/image copy 16.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Activity Zone is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for junior students, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for playful but meaningful growth."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


