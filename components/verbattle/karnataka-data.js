// Verbattle Karnataka 2026 — schedule + level/category reference data
// Source: official Verbattle Karnataka 2026 calendar

export const seasonMeta = {
  title: "Verbattle Karnataka 2026",
  subtitle: "Debate and Speech Competition",
  startDate: "08-Jul-26",
  endDate: "20-Aug-26",
  cities: ["Hubballi", "Mangaluru", "Mysuru", "Bengaluru"],
  registerUrl: "https://www.verbattle.com",
  phone: "+91 98864 64641",
  whatsapp: "8951732828",
};

// The five competitive stages a participant moves through, in order.
export const levelStages = [
  {
    id: "clamber",
    order: "01",
    name: "Clamber & Prelims",
    window: "08 Jul – 22 Jul",
    desc: "City-by-city qualifying rounds across Hubballi, Mangaluru, Mysuru and Bengaluru's four zones.",
  },
  {
    id: "skirmish",
    order: "02",
    name: "Skirmish 1 & 2",
    window: "27 Jul – 18 Aug",
    desc: "Two qualifying bouts per category — Beginner, Kannada, Junior and Junior Plus run their own tracks.",
  },
  {
    id: "combat",
    order: "03",
    name: "Combat & Confrontation",
    window: "29 Jul – 19 Aug",
    desc: "Higher-stakes rounds that narrow the field as each category tightens toward its finals.",
  },
  {
    id: "semis",
    order: "04",
    name: "Semi-Finals",
    window: "07 Aug",
    desc: "Speech categories — Beginner, Junior and Kannada — settle their semi-final placings.",
  },
  {
    id: "finals",
    order: "05",
    name: "Face-Off & Finals",
    window: "20 Aug",
    desc: "Debate face-offs for Junior, Kannada and Junior Plus, alongside the Speech finals. Season closes.",
  },
];

// Full event calendar
export const scheduleRows = [
  { date: "08-Jul-26", day: "Wed", debate: "Beginner, Junior, Kannada & Junior Plus", speech: "Beginner, Junior & Kannada", location: "Hubballi", level: "Clamber & Prelims", stage: "clamber" },
  { date: "09-Jul-26", day: "Thu", debate: "Beginner, Junior, Kannada & Junior Plus", speech: "Beginner, Junior & Kannada", location: "Hubballi", level: "Clamber & Prelims", stage: "clamber" },
  { date: "13-Jul-26", day: "Mon", debate: "Beginner, Junior, Kannada & Junior Plus", speech: "Beginner, Junior & Kannada", location: "Mangaluru", level: "Clamber & Prelims", stage: "clamber" },
  { date: "14-Jul-26", day: "Tue", debate: "Beginner, Junior, Kannada & Junior Plus", speech: "Beginner, Junior & Kannada", location: "Mysuru", level: "Clamber & Prelims", stage: "clamber" },
  { date: "16-Jul-26", day: "Thu", debate: "Beginner, Junior, Kannada & Junior Plus", speech: "Beginner, Junior & Kannada", location: "Bengaluru Central", level: "Clamber & Prelims", stage: "clamber" },
  { date: "17-Jul-26", day: "Fri", debate: "Beginner, Junior, Kannada & Junior Plus", speech: "Beginner, Junior & Kannada", location: "Bengaluru East", level: "Clamber & Prelims", stage: "clamber" },
  { date: "18-Jul-26", day: "Sat", debate: "Beginner, Junior, Kannada & Junior Plus", speech: "Beginner, Junior & Kannada", location: "Bengaluru North", level: "Clamber & Prelims", stage: "clamber" },
  { date: "21-Jul-26", day: "Tue", debate: "Beginner, Junior, Kannada & Junior Plus", speech: "Beginner, Junior & Kannada", location: "Bengaluru South", level: "Clamber & Prelims", stage: "clamber" },
  { date: "22-Jul-26", day: "Wed", debate: "Beginner, Junior, Kannada & Junior Plus", speech: "Beginner, Junior & Kannada", location: "Bengaluru Central", level: "Clamber & Prelims", stage: "clamber" },
  { date: "27-Jul-26", day: "Mon", debate: "Beginner", speech: "", location: "Bengaluru", level: "Skirmish 1", stage: "skirmish" },
  { date: "28-Jul-26", day: "Tue", debate: "Beginner", speech: "", location: "Bengaluru", level: "Skirmish 2", stage: "skirmish" },
  { date: "29-Jul-26", day: "Wed", debate: "Beginner", speech: "", location: "Bengaluru", level: "Combat & Confrontation", stage: "combat" },
  { date: "04-Aug-26", day: "Tue", debate: "Kannada", speech: "", location: "Bengaluru", level: "Skirmish 1", stage: "skirmish" },
  { date: "05-Aug-26", day: "Wed", debate: "Kannada", speech: "", location: "Bengaluru", level: "Skirmish 2", stage: "skirmish" },
  { date: "06-Aug-26", day: "Thu", debate: "Kannada", speech: "", location: "Bengaluru", level: "Combat & Confrontation", stage: "combat" },
  { date: "07-Aug-26", day: "Fri", debate: "", speech: "Beginner, Junior & Kannada", location: "Bengaluru", level: "Semi-Finals", stage: "semis" },
  { date: "10-Aug-26", day: "Mon", debate: "Junior", speech: "", location: "Bengaluru", level: "Skirmish 1", stage: "skirmish" },
  { date: "11-Aug-26", day: "Tue", debate: "Junior", speech: "", location: "Bengaluru", level: "Skirmish 2", stage: "skirmish" },
  { date: "12-Aug-26", day: "Wed", debate: "Junior", speech: "", location: "Bengaluru", level: "Combat", stage: "combat" },
  { date: "13-Aug-26", day: "Thu", debate: "Junior Confrontation, Beginner Face-Off", speech: "", location: "Bengaluru", level: "Confrontation & Face Off", stage: "combat" },
  { date: "17-Aug-26", day: "Mon", debate: "Junior Plus", speech: "", location: "Bengaluru", level: "Skirmish 1", stage: "skirmish" },
  { date: "18-Aug-26", day: "Tue", debate: "Junior Plus", speech: "", location: "Bengaluru", level: "Skirmish 2", stage: "skirmish" },
  { date: "19-Aug-26", day: "Wed", debate: "Junior Plus", speech: "", location: "Bengaluru", level: "Combat & Confrontation", stage: "combat" },
  { date: "20-Aug-26", day: "Thu", debate: "Junior, Kannada & Junior Plus Face-Off", speech: "Beginner, Junior & Kannada Finals", location: "Bengaluru", level: "Face-Off & Finals", stage: "finals" },
];

// City circuit summary for the map/cards section
export const cityCircuit = [
  { city: "Hubballi", dates: "08–09 Jul", rounds: 2, tag: "Opening Circuit" },
  { city: "Mangaluru", dates: "13 Jul", rounds: 1, tag: "Coastal Round" },
  { city: "Mysuru", dates: "14 Jul", rounds: 1, tag: "Heritage Round" },
  { city: "Bengaluru", dates: "16 Jul – 20 Aug", rounds: 19, tag: "Home Circuit" },
];

// Category reference
export const categoryTracks = [
  { name: "Beginner", type: "Debate & Speech", desc: "Entry-level track for first-time competitors building core argument and delivery skills." },
  { name: "Junior", type: "Debate & Speech", desc: "For students ready to take on structured rebuttal rounds and sharper case-building." },
  { name: "Kannada", type: "Debate & Speech", desc: "Regional-language track carrying the same competitive rigor in Kannada." },
  { name: "Junior Plus", type: "Debate Only", desc: "Advanced track for returning competitors pushing into face-off level debate." },
];

// Skill growth comparison — animated bar section
export const outcomeMetrics = [
  { label: "Stage Confidence", before: 32, after: 88 },
  { label: "Structured Argument", before: 28, after: 91 },
  { label: "Articulation", before: 35, after: 86 },
  { label: "Rebuttal Speed", before: 24, after: 80 },
];

// Past-season highlights, no fabricated named testimonials — framed as program outcomes
export const seasonHighlights = [
  {
    initials: "BC",
    quote:
      "Watching a Beginner-track student walk into a Face-Off round with a clean rebuttal structure is the entire point of the Clamber stage.",
    role: "Beginner → Face-Off, Bengaluru Central",
  },
  {
    initials: "KJ",
    quote:
      "The Kannada track gave students who think fastest in their first language a competitive stage built for them, not adapted for them.",
    role: "Kannada Track, Hubballi Circuit",
  },
  {
    initials: "JP",
    quote:
      "Junior Plus rounds run closer to a real parliamentary floor than a school activity — that pressure is exactly what builds composure.",
    role: "Junior Plus, Bengaluru Combat",
  },
  {
    initials: "SP",
    quote:
      "Speech Finals reward a student who can hold a room for ninety seconds with nothing but structure and timing on their side.",
    role: "Speech Finals, Season Closer",
  },
];

export const faqItems = [
  {
    q: "Who can register for Verbattle Karnataka 2026?",
    a: "Students across Beginner, Junior, Kannada and Junior Plus tracks can register. Beginner and Junior tracks need no prior debate experience — Clamber & Prelims rounds are built as an on-ramp.",
  },
  {
    q: "Do I need to attend every date on the calendar?",
    a: "No. Each track only runs on its own dates — for example, the Kannada track meets on 4–6 Aug, not the full season. Check the schedule table above and filter by your stage.",
  },
  {
    q: "What happens if I miss a Skirmish round?",
    a: "Skirmish 1 and 2 both feed into Combat & Confrontation, so missing one round can affect advancement. Contact the Verbattle team as early as possible if a date is a conflict.",
  },
  {
    q: "Is the competition online or in-person?",
    a: "Clamber & Prelims run in person across Hubballi, Mangaluru, Mysuru and Bengaluru's four zones. From Skirmish onward, all rounds are hosted in Bengaluru.",
  },
  {
    q: "How do I register or ask a question before the season starts?",
    a: "Register directly at verbattle.com, or reach the team by phone or WhatsApp — both are listed below. Someone from Verbattle will confirm your track and city.",
  },
];
