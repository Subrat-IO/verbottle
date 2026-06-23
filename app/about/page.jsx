import StaticVerbattlePage from "../../components/verbattle/StaticVerbattlePage";

const pageContent = {
  title: "About Verbattle",
  eyebrow: "About",
  pageCode: "VBT-ABOUT-2601",
  description:
    "Verbattle is a student-first debate and communication platform built to help young people think clearly, speak confidently, and lead with purpose.",
  quote:
    "Verbattle turns workshops, competitions, and school partnerships into a stronger journey of student voice, critical dialogue, and leadership.",
  heroMeta: ["Student Voice", "Critical Dialogue", "Youth Leadership"],
  heroImage: "/founder.png",
  heroAlt: "About Verbattle",
  sections: [
    {
      title: "Why Verbattle Exists",
      copy:
        "Verbattle was built on the belief that students should not wait for adulthood to find their voice. The platform gives learners structured opportunities to speak, debate, question, and lead in meaningful public settings.",
      bullets: [
        "Built around student expression and confidence",
        "Designed for schools, families, and young speakers",
        "Focused on long-term thinking and leadership growth",
      ],
    },
    {
      title: "How Verbattle Helps",
      copy:
        "Workshops, competitions, and school-facing programs are designed to make communication practical instead of abstract. Students do not just learn theory; they use their voice in rooms that demand clarity, courage, and discipline.",
      bullets: [
        "Debate and speaking practice with structure",
        "Mentor-led progress through real events",
        "A stronger bridge between classroom learning and public expression",
      ],
    },
    {
      title: "What Visitors Should Understand",
      copy:
        "Verbattle is more than a competition brand. It is a broader ecosystem for communication training, stage confidence, respectful argument, and youth leadership that schools can trust and students can grow with.",
      bullets: [
        "Primary audience: schools, families, and students",
        "Main focus: voice, dialogue, and leadership",
        "Target outcome: clear understanding of the Verbattle mission",
      ],
    },
  ],
  gallery: [
    {
      title: "Students in Action",
      image: "/image copy 2.png",
      copy: "Competition moments and student energy show the public-facing side of the Verbattle experience.",
    },
    {
      title: "Mentor Support",
      image: "/image copy 3.png",
      copy: "Behind the stage moments is a strong mentor and workshop culture that helps students improve steadily.",
    },
    {
      title: "School Partnerships",
      image: "/image copy 5.png",
      copy: "Verbattle works closely with schools and institutions to make speaking and debate more visible and consistent.",
    },
    {
      title: "Celebration and Recognition",
      image: "/image copy 7.png",
      copy: "Recognition matters because it gives students visible milestones and stronger motivation to keep growing.",
    },
  ],
  highlights: [
    {
      title: "Student-Centered",
      copy: "The platform is built to help learners participate actively, not stay on the sidelines.",
    },
    {
      title: "School-Friendly",
      copy: "Programs and events are structured so institutions can engage meaningfully without friction.",
    },
    {
      title: "Growth-Oriented",
      copy: "The goal is not one event, but a progression in confidence, thinking, and communication.",
    },
  ],
  ctaTitle: "Ready to explore more of Verbattle?",
  ctaText:
    "Continue into programs, debate tracks, workshops, competitions, or registration through the improved site structure.",
};

export default function Page() {
  return <StaticVerbattlePage {...pageContent} />;
}
