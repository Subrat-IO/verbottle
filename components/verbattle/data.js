export const navLinks = [
  {
    label: "Home",
    href: "/",
    active: true,
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Foundation", href: "/about/foundation", icon: "Building", desc: "Meet the purpose and people behind Verbattle." },
      { label: "Appeal", href: "/about/appeal", icon: "Sparkles", desc: "Connect with our mission and support the movement." },
      { label: "Milestones", href: "/about/milestones", icon: "BadgeCheck", desc: "See the moments that shaped the platform." },
      { label: "Overview", href: "/about/overview", icon: "Eye", desc: "Get the quick introduction to what Verbattle does." },
      { label: "Vision", href: "/about/vision", icon: "ShieldCheck", desc: "Explore the learner-first outcomes we build toward." },
      { label: "Discovery", href: "/about/discovery", icon: "Play", desc: "Watch stories, clips, and fresh platform highlights." },
    ],
    feature: {
      eyebrow: "About Verbattle",
      title: "A stage built for confident thinkers and brave young voices.",
      href: "/about",
      cta: "Read Our Story",
      image: "/founder.png",
    },
  },
  {
    label: "Debate",
    href: "/debate",
    children: [
      { label: "Process", href: "/debate/process", icon: "Check", desc: "Understand how students train, compete, and progress." },
      { label: "About Debate", href: "/debate/about-debate", icon: "Users", desc: "Discover the formats and learning outcomes we focus on." },
      { label: "Debate Format", href: "/debate/format", icon: "Cap", desc: "See how structure, rebuttal, and delivery come together." },
      { label: "Blog", href: "/debate/blog", icon: "Play", desc: "Catch commentary, clips, and speaking insights." },
      { label: "FAQs", href: "/debate/faqs", icon: "ShieldCheck", desc: "Get answers before you enroll or register a school." },
    ],
    feature: {
      eyebrow: "Debate Tracks",
      title: "From first arguments to national rounds, every format sharpens clarity.",
      href: "/debate",
      cta: "Explore Debate",
      image: "/image copy 20.png",
    },
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Forum", href: "/programs/forum", icon: "Users", desc: "Collaborative speaking spaces that reward clear thought." },
      { label: "Verbattle Academy", href: "/programs/verbattle-academy", icon: "Cap", desc: "Structured learning tracks for debate and communication." },
      { label: "Debate Club", href: "/programs/debate-club", icon: "Sparkles", desc: "High-energy cohorts for regular sparring and practice." },
      { label: "Activity Zone", href: "/programs/activity-zone", icon: "Star", desc: "Creative engagement sessions for younger participants." },
      { label: "Teachers Workshop", href: "/programs/teachers-workshop", icon: "Building", desc: "Training designed for faculty mentors and school teams." },
      { label: "Certification", href: "/programs/certification", icon: "BadgeCheck", desc: "Goal-based completion pathways with recognition." },
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
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Competition",
    href: "/competitions",
    children: [
      { label: "Senior Speech Competition", href: "/competitions/senior-speech-competition", icon: "Trophy", desc: "Advanced speaking contests with national-level pressure." },
      { label: "Speech Competition", href: "/competitions/speech-competition", icon: "Mic", desc: "Core speech rounds for performance and persuasion." },
      { label: "Verbattle Open", href: "/competitions/verbattle-open", icon: "Star", desc: "Open-format competitive events across categories." },
      { label: "Junior", href: "/competitions/junior", icon: "Users", desc: "Friendly but serious circuits for younger speakers." },
      { label: "International", href: "/competitions/international", icon: "Pin", desc: "Global-stage opportunities and outward-facing circuits." },
      { label: "Online", href: "/competitions/online", icon: "Calendar", desc: "Flexible digital rounds with the same Verbattle rigor." },
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
    label: "Verbattle Karnataka",
    href: "/verbattle-karnataka-best-debating-competitions",
    highlight: true,
  },
];

export const heroVideos = [
  {
    title: "Think Better. Speak Better. Lead Better.",
    titleLines: ["Think Better.", "Speak Better. Lead Better."],
    accent: "Lead Better.",
    description:
      "Communication training that helps students think clearly, speak confidently, and lead with purpose.",
    type: "local",
    src: "/vidssave.com Education alone can change the society #school #education #students 480P.mp4",
    cta: "Watch Now",
    thumb: "/verbattle-categories/ChatGPT Image Jun 23, 2026, 05_20_16 PM.webp",
  },
  {
    title: "Develop the Mind. Empower the Voice.",
    titleLines: ["Develop the Mind.", "Empower the Voice."],
    accent: "Voice.",
    description:
      "Debate and speaking practice built to sharpen thought, strengthen confidence, and bring every learner's voice forward.",
    type: "local",
    src: "/vidssave.com Top Debate on Facebook - Must watch! #verbattle #debatecompetition 480P.mp4",
    cta: "Watch Debate",
    thumb: "/verbattle-categories/ChatGPT Image Jun 23, 2026, 05_20_32 PM.webp",
  },
  {
    title: "Better Thinking. Better Decisions. Better Leaders.",
    titleLines: ["Better Thinking.", "Better Decisions.", "Better Leaders."],
    accent: "Better Leaders.",
    description:
      "Programs and stage experiences that turn stronger thinking into better judgment and more responsible young leadership.",
    type: "local",
    src: "/WEBSITE_VIDEO_VERBATTLE_V1.mp4",
    cta: "Watch Feature",
    thumb: "/verbattle-categories/ChatGPT Image Jun 23, 2026, 05_20_51 PM.webp",
  },
];

export const sponsors = [
  { name: "Garden City University", image: "/image copy 17.png" },
  { name: "GenWorks", image: "/image copy 18.png" },
  { name: "HDFC ERGO", image: "/image copy 19.png" },
  { name: "Dayananda Sagar University", image: "/image copy 20.png" },
  { name: "TV House Network", image: "/image copy 21.png" },
  { name: "Expert Pre-University College, Mangaluru", image: "/image copy 22.png" },
  { name: "Micro Labs Limited", image: "/image copy 23.png" },
  { name: "AI Enterprise", image: "/image copy 24.png" },
  { name: "Canara Bank", image: "/image copy 25.png" },
];

export const stats = [
  { icon: "Trophy", value: "$1.2 million ", label: "Spent On The Cause", bg: "#ffe7d4", color: "#d26716" },
  { icon: "Cap", value: "10,000+", label: "Teachers Trained", bg: "#e5f0ff", color: "#1847af" },
  { icon: "Users", value: "1,000,00+", label: "Students Put On Stage", bg: "#efe7ff", color: "#7b39de" },
  { icon: "Calendar", value: "100+", label: "Large Scale Competitions", bg: "#ddf7ea", color: "#128d55" },
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
    image: "/newimages/WhatsApp Image 2026-06-24 at 17.03.45.jpeg",
    status: "Registrations Open",
  },
  {
    state: "Summer Camp",
    title: "Offline / Online Communication Bootcamp",
    date: "Season Intake",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.48.jpeg",
    status: "Admissions Live",
  },
  {
    state: "Workshop Circuit",
    title: "Teacher and Student Speaking Workshops",
    date: "Rolling Schedule",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (2).jpeg",
    status: "New Batches",
  },
  {
    state: "School Programs",
    title: "In-school Debate and Leadership Tracks",
    date: "Custom Calendar",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.52 (1).jpeg",
    status: "Partner Ready",
  },
];

export const upcomingActivityCards = [
  {
    timeframe: "August 2026",
    title: "Verbattle Senior Karnataka",
    location: "Karnataka",
    format: "State-Level Debate Competition",
    image: "/newimages/WhatsApp Image 2026-06-24 at 17.03.45.jpeg",
    accent: "State Stage",
    paragraph:
      "August opens the circuit with a sharp state-stage showdown in Karnataka.",
  },
  {
    timeframe: "August 2026",
    title: "Verbattle Tamil Nadu",
    location: "Chennai",
    format: "State-Level Debate Competition",
    image: "/newimages/WhatsApp Image 2026-06-24 at 17.03.46.jpeg",
    accent: "State Stage",
    paragraph:
      "Tamil Nadu brings another focused round of debate energy in Chennai.",
  },
  {
    timeframe: "August 2026",
    title: "Teacher Training Camp",
    location: "Bengaluru",
    format: "Training Programme",
    image: "/image copy 4.png",
    accent: "Learning Tool",
    paragraph:
      "A training camp for teachers sharpens debate as a classroom learning tool.",
  },
  {
    timeframe: "September 2026",
    title: "Verbattle Maharashtra",
    location: "Mumbai",
    format: "State-Level Debate Competition",
    image: "/newimages/WhatsApp Image 2026-06-24 at 17.03.18.jpeg",
    accent: "Regional Tour",
    paragraph:
      "Maharashtra keeps the regional tour moving with quick, confident rounds.",
  },
  {
    timeframe: "October 2026",
    title: "Verbattle Junior Hindi Online",
    location: "Across India",
    format: "National Online Debate Competition",
    image: "/newimages/WhatsApp Image 2026-06-24 at 16.17.27.jpeg",
    accent: "National Online",
    paragraph:
      "Junior Hindi Online opens the door to strong national participation online.",
  },
  {
    timeframe: "November 2026",
    title: "Verbattle Senior National",
    location: "Across India",
    format: "National Online Debate Competition",
    image: "/newimages/WhatsApp Image 2026-06-24 at 16.17.28.jpeg",
    accent: "Grand Finale",
    paragraph:
      "Senior National closes the season with a clean, high-stakes final stage.",
  },
];

export const galleryTabs = ["All", "Events", "Competitions", "Workshops", "Students"];
export const galleryItems = [
  {
    image: "/image copy 2.png",
    title: "Championship Awards",
    category: "Events",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/image copy 3.png",
    title: "Audience Address",
    category: "Events",
    tags: ["Events", "Students"],
  },
  {
    image: "/image copy 4.png",
    title: "Partner Gathering",
    category: "Events",
    tags: ["Events"],
  },
  {
    image: "/image copy 5.png",
    title: "Guest Interaction",
    category: "Events",
    tags: ["Events"],
  },
  {
    image: "/image copy 6.png",
    title: "Regional Podium",
    category: "Competitions",
    tags: ["Competitions", "Students"],
  },
  {
    image: "/image copy 7.png",
    title: "Celebration Group",
    category: "Events",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/image copy 8.png",
    title: "Junior Celebration",
    category: "Events",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/image copy 9.png",
    title: "Stage Recognition",
    category: "Events",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/image copy 10.png",
    title: "Students On Stage",
    category: "Events",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/image copy 11.png",
    title: "Winning Team",
    category: "Events",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/DSC00795.webp",
    title: "Final Round Spotlight",
    category: "Competitions",
    tags: ["Competitions", "Students"],
  },
  {
    image: "/DSC00796.webp",
    title: "Confident Delivery",
    category: "Students",
    tags: ["Students", "Competitions"],
  },
  {
    image: "/DSC00798.webp",
    title: "Podium Moment",
    category: "Students",
    tags: ["Students", "Competitions"],
  },
  {
    image: "/DSC07194.webp",
    title: "Closing Ceremony",
    category: "Events",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/DSC07199.webp",
    title: "Full Stage Lineup",
    category: "Events",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/DSC07200.webp",
    title: "Celebration Lineup",
    category: "Events",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/DSC07201.webp",
    title: "Finale Gathering",
    category: "Events",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/newimages/WhatsApp Image 2026-06-24 at 17.03.45.jpeg",
    title: "Championship Stage",
    category: "Competitions",
    tags: ["Competitions", "Events"],
  },
  {
    image: "/newimages/WhatsApp Image 2026-06-24 at 17.03.46.jpeg",
    title: "Debate In Motion",
    category: "Competitions",
    tags: ["Competitions", "Events"],
  },
  {
    image: "/newimages/WhatsApp Image 2026-06-24 at 16.58.41.jpeg",
    title: "Audience Energy",
    category: "Events",
    tags: ["Events", "Students"],
  },
  {
    image: "/newimages/WhatsApp Image 2026-06-24 at 16.17.41.jpeg",
    title: "Young Speaker",
    category: "Students",
    tags: ["Students", "Competitions"],
  },
  {
    image: "/newimages/WhatsApp Image 2026-06-24 at 16.17.46.jpeg",
    title: "Student Response",
    category: "Students",
    tags: ["Students", "Events"],
  },
  {
    image: "/DSC00056.webp",
    title: "Team Briefing",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/DSC00055.webp",
    title: "Workshop Exchange",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/DSC00063.webp",
    title: "Practice Exchange",
    category: "Students",
    tags: ["Students", "Workshops"],
  },
  {
    image: "/DSC00064.webp",
    title: "Floor Discussion",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (2).jpeg",
    title: "Workshop Circle",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.40.jpeg",
    title: "Mentor Session",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.40 (2).jpeg",
    title: "Debate Classroom",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.41 (1).jpeg",
    title: "Stage Panel",
    category: "Events",
    tags: ["Events", "Workshops"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.41 (2).jpeg",
    title: "Workshop Crowd",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg",
    title: "Learning Session",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.47.jpeg",
    title: "Championship Table",
    category: "Competitions",
    tags: ["Competitions", "Events"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.48.jpeg",
    title: "Keynote Address",
    category: "Events",
    tags: ["Events", "Students"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (1).jpeg",
    title: "Discussion Room",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.52 (1).jpeg",
    title: "Session Walkthrough",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.53 (1).jpeg",
    title: "Participant Focus",
    category: "Students",
    tags: ["Students", "Workshops"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (1).jpeg",
    title: "Focused Listener",
    category: "Students",
    tags: ["Students", "Workshops"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (2).jpeg",
    title: "Student Participant",
    category: "Students",
    tags: ["Students", "Workshops"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.50.jpeg",
    title: "Small Group Session",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.52.jpeg",
    title: "Speaker Walkthrough",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.53 (2).jpeg",
    title: "Audience Row",
    category: "Students",
    tags: ["Students", "Workshops"],
  },
  {
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.53.jpeg",
    title: "Front Row Attention",
    category: "Students",
    tags: ["Students", "Workshops"],
  },
  {
    image: "/image copy 13.png",
    title: "Award Presentation",
    category: "Competitions",
    tags: ["Competitions", "Events"],
  },
  {
    image: "/image copy 14.png",
    title: "National Debate Stage",
    category: "Competitions",
    tags: ["Competitions", "Events"],
  },
  {
    image: "/image copy 15.png",
    title: "Open Mic Moment",
    category: "Students",
    tags: ["Students", "Competitions"],
  },
  {
    image: "/image copy 16.png",
    title: "Community Gathering",
    category: "Events",
    tags: ["Events"],
  },
  {
    image: "/image copy.png",
    title: "Champion Team Photo",
    category: "Events",
    tags: ["Events", "Competitions"],
  },
  {
    image: "/image.png",
    title: "Leadership Classroom",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.51.webp",
    title: "Workshop Audience",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52.webp",
    title: "Mentor With Students",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (1).webp",
    title: "Classroom Session",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (2).webp",
    title: "Auditorium Workshop",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (3).webp",
    title: "Partner Team Photo",
    category: "Events",
    tags: ["Events"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (4).webp",
    title: "Interactive Workshop Floor",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (5).webp",
    title: "Keynote Address",
    category: "Events",
    tags: ["Events"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (6).webp",
    title: "Championship Honors",
    category: "Competitions",
    tags: ["Competitions", "Events"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (7).webp",
    title: "Audience Row",
    category: "Events",
    tags: ["Events", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (8).webp",
    title: "Stage Lineup",
    category: "Competitions",
    tags: ["Competitions", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (9).webp",
    title: "Finalists Celebration",
    category: "Competitions",
    tags: ["Competitions", "Events"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (10).webp",
    title: "Stage Guest Moment",
    category: "Events",
    tags: ["Events"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (11).webp",
    title: "Young Group Gathering",
    category: "Students",
    tags: ["Students", "Events"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (12).webp",
    title: "Audience Focus",
    category: "Events",
    tags: ["Events", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (13).webp",
    title: "Mentor Exchange",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (14).webp",
    title: "Team Gathering Outdoors",
    category: "Events",
    tags: ["Events", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (15).webp",
    title: "Institutional Visit",
    category: "Events",
    tags: ["Events"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (16).webp",
    title: "Stage Presentation",
    category: "Students",
    tags: ["Students", "Events"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (17).webp",
    title: "Award Lineup",
    category: "Competitions",
    tags: ["Competitions", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (18).webp",
    title: "Debate In Motion",
    category: "Competitions",
    tags: ["Competitions", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (19).webp",
    title: "Winning Team Cheque",
    category: "Competitions",
    tags: ["Competitions", "Events"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (20).webp",
    title: "Panel Session",
    category: "Events",
    tags: ["Events", "Workshops"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (21).webp",
    title: "Discussion Circle",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (22).webp",
    title: "Live Coaching",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (23).webp",
    title: "Student Activity Group",
    category: "Students",
    tags: ["Students", "Workshops"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (24).webp",
    title: "Certificate Moment",
    category: "Students",
    tags: ["Students", "Events"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (25).webp",
    title: "Chalkboard Session",
    category: "Workshops",
    tags: ["Workshops", "Students"],
  },
  {
    image: "/newimagesupdated/WhatsApp Image 2026-06-28 at 13.56.52 (26).webp",
    title: "Full Classroom Energy",
    category: "Students",
    tags: ["Students", "Workshops"],
  },
];

export const galleryPreviewItems = galleryItems.slice(0, 9);

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
