export const navLinks = [
  {
    label: "Home",
    href: "#home",
    active: true,
  },
  {
    label: "About",
    href: "#founder",
    children: [
      { label: "Foundation", href: "#founder", icon: "Building", desc: "Meet the purpose and people behind Verbattle." },
      { label: "Appeal", href: "#contact", icon: "Sparkles", desc: "Connect with our mission and support the movement." },
      { label: "Milestones", href: "#gallery", icon: "BadgeCheck", desc: "See the moments that shaped the platform." },
      { label: "Overview", href: "#home", icon: "Eye", desc: "Get the quick introduction to what Verbattle does." },
      { label: "Vision", href: "#awardees", icon: "ShieldCheck", desc: "Explore the learner-first outcomes we build toward." },
      { label: "Discovery", href: "#recent-competitions", icon: "Play", desc: "Watch stories, clips, and fresh platform highlights." },
    ],
    feature: {
      eyebrow: "About Verbattle",
      title: "A stage built for confident thinkers and brave young voices.",
      href: "#founder",
      cta: "Read Our Story",
      image: "/founder.png",
    },
  },
  {
    label: "Debate",
    href: "/competitions",
    children: [
      { label: "Process", href: "/competitions", icon: "Check", desc: "Understand how students train, compete, and progress." },
      { label: "About Debate", href: "/competitions", icon: "Users", desc: "Discover the formats and learning outcomes we focus on." },
      { label: "Debate Format", href: "/competitions", icon: "Cap", desc: "See how structure, rebuttal, and delivery come together." },
      { label: "Blog", href: "#recent-competitions", icon: "Play", desc: "Catch commentary, clips, and speaking insights." },
      { label: "FAQs", href: "/register", icon: "ShieldCheck", desc: "Get answers before you enroll or register a school." },
    ],
    feature: {
      eyebrow: "Debate Tracks",
      title: "From first arguments to national rounds, every format sharpens clarity.",
      href: "/competitions",
      cta: "Explore Debate",
      image: "/image copy 20.png",
    },
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Forum", href: "/programs", icon: "Users", desc: "Collaborative speaking spaces that reward clear thought." },
      { label: "Verbattle Academy", href: "/programs", icon: "Cap", desc: "Structured learning tracks for debate and communication." },
      { label: "Debate Club", href: "/programs", icon: "Sparkles", desc: "High-energy cohorts for regular sparring and practice." },
      { label: "Activity Zone", href: "/programs", icon: "Star", desc: "Creative engagement sessions for younger participants." },
      { label: "Teachers Workshop", href: "/programs", icon: "Building", desc: "Training designed for faculty mentors and school teams." },
      { label: "Certification", href: "/programs", icon: "BadgeCheck", desc: "Goal-based completion pathways with recognition." },
    ],
    feature: {
      eyebrow: "Programs",
      title: "Hands-on tracks in speaking, debate, leadership, and stage confidence.",
      href: "/programs",
      cta: "Browse Programs",
      image: "/programs/WhatsApp Image 2026-06-21 at 00.20.48.jpeg",
    },
  },
  {
    label: "Competition",
    href: "/competitions",
    children: [
      { label: "Senior Speech Competition", href: "/competitions", icon: "Trophy", desc: "Advanced speaking contests with national-level pressure." },
      { label: "Speech Competition", href: "/competitions", icon: "Mic", desc: "Core speech rounds for performance and persuasion." },
      { label: "Verbattle Open", href: "/competitions", icon: "Star", desc: "Open-format competitive events across categories." },
      { label: "Junior", href: "/competitions", icon: "Users", desc: "Friendly but serious circuits for younger speakers." },
      { label: "International", href: "/competitions", icon: "Pin", desc: "Global-stage opportunities and outward-facing circuits." },
      { label: "Online", href: "/competitions", icon: "Calendar", desc: "Flexible digital rounds with the same Verbattle rigor." },
    ],
    feature: {
      eyebrow: "Competition Circuit",
      title: "Red-hot stages, judged rounds, and standout moments that travel far.",
      href: "/competitions",
      cta: "See Competitions",
      image: "/image copy 11.png",
    },
  },
  {
    label: "Support",
    href: "#contact",
    children: [
      { label: "Sponsors", href: "#contact", icon: "Building", desc: "Support student voice through meaningful partnerships." },
      { label: "Patrons", href: "#contact", icon: "BadgeCheck", desc: "Back long-term educational impact with trusted advocacy." },
      { label: "Donate", href: "#contact", icon: "Heart", desc: "Help expand access to debate and communication training." },
      { label: "Global Collaboration", href: "#contact", icon: "Pin", desc: "Work with Verbattle on outreach, programs, or events." },
    ],
    feature: {
      eyebrow: "Support The Mission",
      title: "Fuel access, scholarships, and bigger stages for every emerging speaker.",
      href: "#contact",
      cta: "Partner With Us",
      image: "/image copy 5.png",
    },
  },
  {
    label: "Registration",
    href: "/register",
  },
  {
    label: "Blog",
    href: "#recent-competitions",
    children: [
      { label: "Workshop Registration", href: "/register", icon: "Calendar", desc: "Join upcoming workshops and reserve your place early." },
      { label: "National Level Online School Debate Competition", href: "/competitions", icon: "Play", desc: "Track spotlight events and marquee student rounds." },
    ],
    feature: {
      eyebrow: "Latest Updates",
      title: "Workshops, competition announcements, and high-energy clips in one stream.",
      href: "#recent-competitions",
      cta: "Watch Updates",
      image: "/image copy 15.png",
    },
  },
];

export const heroVideos = [
  {
    title: "Speak up and Change the world!",
    titleLines: ["Speak up and", "Change the "],
    accent: "world!",
    description:
      "A powerful student-led clip that turns the hero into a living message about learning, leadership, and social change.",
    type: "local",
    src: "/vidssave.com Education alone can change the society #school #education #students 480P.mp4",
    cta: "Watch Now",
    thumb: "/image copy 21.png",
  },
  {
    title: "Top Debate on Facebook - Must watch!",
    titleLines: ["Debate on Facebook", "Must Watch!"],
    accent: "Watch!",
    description:
      "This second clip keeps the hero carousel punchy with a debate-first showcase that feels direct, energetic, and student focused.",
    type: "local",
    src: "/vidssave.com Top Debate on Facebook - Must watch! #verbattle #debatecompetition 480P.mp4",
    cta: "Watch Debate",
    thumb: "/image copy 24.png",
  },
  {
    title: "Verbattle Feature Story",
    titleLines: ["Verbattle Feature", "Story"],
    accent: "Story",
    description:
      "The original brand film returns as a third hero moment, giving the homepage a fuller, more cinematic introduction to Verbattle.",
    type: "local",
    src: "/WEBSITE_VIDEO_VERBATTLE_V1.mp4",
    cta: "Watch Feature",
    thumb: "/image.png",
  },
];

export const sponsors = [
  { name: "Garden City University", image: "https://verbattle.com/images/Web-09.jpg" },
  { name: "GenWorks", image: "https://verbattle.com/images/Web-10.jpg" },
  { name: "HDFC ERGO", image: "https://verbattle.com/images/Web-11.jpg" },
  { name: "Oakland / Partner", image: "https://verbattle.com/images/Web-12.jpg" },
  { name: "TV House", image: "https://verbattle.com/images/Web-13.jpg" },
  { name: "Expert PU College", image: "https://verbattle.com/images/Web-14.jpg" },
  { name: "Micro Labs", image: "https://verbattle.com/images/Web-15.jpg" },
  { name: "Canara Bank", image: "https://verbattle.com/images/CanaraBankpng-1592484768188.png" },
];

export const stats = [
  { icon: "Trophy", value: "Rs 10,00,00,000+", label: "Spent On The Cause", bg: "#ffe7d4", color: "#d26716" },
  { icon: "Cap", value: "7,000+", label: "Teachers Trained", bg: "#e5f0ff", color: "#1847af" },
  { icon: "Users", value: "1,000,000+", label: "Students Put On Stage", bg: "#efe7ff", color: "#7b39de" },
  { icon: "Calendar", value: "80+", label: "Large Scale Competitions", bg: "#ddf7ea", color: "#128d55" },
];

export const programs = [
  {
    title: "CT Pro",
    desc: "A 20-session communication training program built for voice, speech, presentation and thinking skills.",
    bg: "#fff0e7",
    iconBg: "#ffd6b8",
    iconColor: "#d36a20",
    icon: "Cap",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.48.jpeg",
  },
  {
    title: "Speech Competition",
    desc: "A high-energy stage and online competition format that turns practice into recognition.",
    bg: "#edf2ff",
    iconBg: "#cad7ff",
    iconColor: "#274a9e",
    icon: "Trophy",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (3).jpeg",
  },
  {
    title: "School Workshop",
    desc: "Interactive classroom sessions that help students speak up, think clearly and lead better.",
    bg: "#f8ebff",
    iconBg: "#e0c8ff",
    iconColor: "#7d3fe0",
    icon: "Users",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.39.jpeg",
  },
];

export const impactList = [
  "20-session communication training",
  "School and student-friendly program formats",
  "Stage practice, debate rounds and workshop support",
  "Recognition through trophies, certificates and coverage",
  "Built for learners, teachers and school partners",
];

export const competitions = [
  {
    state: "Verbattle Karnataka 2026",
    title: "Debate - Leadership - Opportunity for Students",
    date: "Now Open",
    image: "/image copy 20.png",
    status: "Registrations Open",
  },
  {
    state: "Summer Camp",
    title: "Offline / Online Communication Bootcamp",
    date: "Season Intake",
    image: "/image copy 19.png",
    status: "Admissions Live",
  },
  {
    state: "Workshop Circuit",
    title: "Teacher and Student Speaking Workshops",
    date: "Rolling Schedule",
    image: "/image copy 22.png",
    status: "New Batches",
  },
  {
    state: "School Programs",
    title: "In-school Debate and Leadership Tracks",
    date: "Custom Calendar",
    image: "/image copy 23.png",
    status: "Partner Ready",
  },
];

export const galleryTabs = ["All", "Events", "Competitions", "Workshops", "Winners"];

export const galleryItems = [
  {
    image: "/image copy 2.png",
    title: "Students on stage",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/image copy 3.png",
    title: "Mentorship moments",
    tags: ["Workshops"],
  },
  {
    image: "/image copy 4.png",
    title: "Winners' celebration",
    tags: ["Winners", "Competitions"],
  },
  {
    image: "/image copy 5.png",
    title: "Audience and energy",
    tags: ["Events"],
  },
  {
    image: "/image copy 6.png",
    title: "Gallery collage",
    tags: ["Events", "Winners"],
  },
  {
    image: "/image copy 7.png",
    title: "On-ground action",
    tags: ["Competitions"],
  },
  {
    image: "/image copy 8.png",
    title: "Student storytelling",
    tags: ["Events", "Workshops"],
  },
  {
    image: "/image copy 9.png",
    title: "Grand final moments",
    tags: ["Competitions", "Winners"],
  },
];

export const founder = {
  name: "Deepak Thimaya",
  role: "Founder, Verbattle",
  image: "/founder.png",
  quote:
    "Verbattle was built to create courageous thinkers, better listeners and more responsible young voices. Every stage, round and workshop is meant to sharpen both expression and intellect.",
};

export const testimonial = {
  name: "Workshop For Students",
  role: "YouTube Feature",
  quote:
    "The platform feels energetic, purposeful and alive when students are in motion. That spirit is what this redesign now tries to carry across every section.",
  videoId: "nzqAzOqC2Hk",
  image: "/image copy 10.png",
};

export const awardees = [
  {
    title: "Verbattle Beginner",
    subtitle: "Emerging voices with strong stage confidence.",
    image: "/image copy 11.png",
  },
  {
    title: "Verbattle Junior",
    subtitle: "Sharp articulation and fast-growing debate instincts.",
    image: "/image copy 12.png",
  },
  {
    title: "Verbattle Kannada",
    subtitle: "Regional excellence with impactful original expression.",
    image: "/image copy 13.png",
  },
  {
    title: "Verbattle Junior Plus",
    subtitle: "Advanced performers who own the room with clarity.",
    image: "/image copy 14.png",
  },
];

export const recentVideos = [
  {
    title: "Workshop for Students - Hurry up!",
    videoId: "nzqAzOqC2Hk",
    meta: "Students Workshop",
    thumb: "/image copy 15.png",
  },
  {
    title: "Communication Enrichment - Teachers Workshop - Part 4",
    videoId: "0Ng0AgYvSBs",
    meta: "Teachers Workshop",
    thumb: "/image copy 16.png",
  },
  {
    title: "Debate Statements - Teachers Workshop - Part 7",
    videoId: "akh9rAhQD7o",
    meta: "Debate Statements",
    thumb: "/image copy 17.png",
  },
  {
    title: "Analysis - Teachers Workshop Part 5",
    videoId: "tYkWqXXYgeo",
    meta: "Workshop Analysis",
    thumb: "/image copy 18.png",
  },
];

export const footerData = {
  email: "info@verbattle.com",
  phone: "+91 9886464641",
  address: "No.66/3, 1st Floor, 18th Cross, 9th Main, 3rd Block, Jayanagar, Bengaluru - 560 011",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/verbattle" },
    { label: "Instagram", href: "https://www.instagram.com/verbattle/" },
    { label: "YouTube", href: "https://www.youtube.com/@verbattle" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/verbattle/" },
  ],
  resources: ["Discovery", "Debate Format", "Academy"],
  news: ["Deccan Herald", "New Indian Express", "The News Minute"],
  other: ["The News Hamster", "Meridyendernegi"],
};
