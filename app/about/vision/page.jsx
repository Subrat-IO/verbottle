import StaticVerbattlePage from "../../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  "title": "Vision",
  "eyebrow": "Vision",
  "pageCode": "VBT-VISION-2606",
  "description": "This static Verbattle page focuses on self-reliant, articulate young leaders. It is designed for parents and educators and now exists as its own route file instead of relying on a shared dynamic setup.",
  "quote": "Inspired by the current Verbattle site structure and messaging, this route reframes self-reliant, articulate young leaders into a cleaner static page that is easier to maintain and navigate.",
  "heroMeta": [
    "Vision",
    "Verbattle Static Route",
    "VBT-VISION-2606"
  ],
  "heroImage": "/image copy 19.png",
  "heroAlt": "Vision",
  "sections": [
    {
      "title": "Why Vision Matters",
      "copy": "This page is written around self-reliant, articulate young leaders. It turns the menu label into something useful for parents and educators, so the route carries meaning instead of acting like a placeholder link.",
      "bullets": [
        "Grounded in self-reliant, articulate young leaders",
        "Written for parents and educators",
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
      "copy": "The main goal of this page is long-term learner outcomes. It keeps the tone Verbattle-related, visually rich, and easier to understand for students, mentors, schools, and supporters.",
      "bullets": [
        "Primary audience: parents and educators",
        "Main focus: self-reliant, articulate young leaders",
        "Target outcome: long-term learner outcomes"
      ]
    }
  ],
  "gallery": [
    {
      "title": "Vision Visual 1",
      "image": "/image copy 20.png",
      "copy": "A local gallery image from the current project folder anchors this page in the site's own media set."
    },
    {
      "title": "Vision Visual 2",
      "image": "/image copy 21.png",
      "copy": "The visual cards keep each route richer than a plain text page and satisfy the multi-image requirement."
    },
    {
      "title": "Vision Visual 3",
      "image": "/image copy 22.png",
      "copy": "Each image block supports the theme of student voice, mentor support, or event energy in a static layout."
    },
    {
      "title": "Vision Visual 4",
      "image": "/image copy 23.png",
      "copy": "Because this route has its own file, the gallery can be changed later without touching any other page."
    }
  ],
  "highlights": [
    {
      "title": "Own Code File",
      "copy": "Vision is implemented as its own dedicated page file inside the app directory."
    },
    {
      "title": "Useful For Real Visitors",
      "copy": "The copy and structure are shaped for parents and educators, not only for internal navigation completeness."
    },
    {
      "title": "Static And Editable",
      "copy": "The route is intentionally static so future edits stay simple while still aiming for long-term learner outcomes."
    }
  ],
  "ctaTitle": "Ready to take the next step with Verbattle?",
  "ctaText": "Use the registration flow to continue into workshops, programs, or competitions with the improved validation and application-number flow."
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}


