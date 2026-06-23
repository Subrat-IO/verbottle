"use client";

import { useMemo, useState } from "react";
import Header from "./components/verbattle/Header";
import Footer from "./components/verbattle/Footer";
import { footerData, navLinks } from "./components/verbattle/data";

const termSets = [
  {
    id: "beginner",
    label: "Beginner",
    group: "Debate",
    title: "Verbattle Beginner 2026",
    intro: "Rules and conditions for the beginner debate batch. This version is written from the current registration sheets in a cleaner web format.",
    highlights: ["Grades 3 to 6", "Team event", "Entry fee: Rs. 2000 per team"],
    sections: [
      {
        title: "Eligibility",
        points: [
          "Entry is for school students aged 8 to 12 years studying in grades 3 to 6.",
          "Teams represent their school. Independent teams are not permitted.",
          "A school may send multiple teams, but each team must be clearly identified.",
        ],
      },
      {
        title: "Participation Format",
        points: [
          "Each team must have 2 participants only.",
          "The same participants should continue as a team throughout the competition.",
          "Participants must attend in school uniform and carry school ID cards.",
        ],
      },
      {
        title: "Fees and Payment",
        points: [
          "Registration fee is Rs. 2000 per team.",
          "Payment may be made by bank transfer, cash, or other accepted payment mode.",
          "Payment details with UTR/reference must be shared after payment.",
        ],
      },
      {
        title: "Conduct and Rules",
        points: [
          "The declaration of results is final and binding.",
          "All competition structure, rounds, and rule decisions rest with the organizers.",
          "Any unacceptable or indecent behavior may lead to immediate disqualification.",
        ],
      },
      {
        title: "Important Notes",
        points: [
          "Registration fee is not transferable.",
          "Participants and schools are responsible for correctness of submitted details.",
          "A previous winner is not eligible to compete again in the same category.",
        ],
      },
    ],
  },
  {
    id: "junior",
    label: "Junior",
    group: "Debate",
    title: "Verbattle Junior 2026",
    intro: "Rules and conditions for the junior debate batch in a simplified page format.",
    highlights: ["Grades 7 to 10", "Team event", "Entry fee: Rs. 2000 per team"],
    sections: [
      {
        title: "Eligibility",
        points: [
          "Entry is for school students aged 12 to 16 years studying in grades 7 to 10.",
          "Teams are permitted only through their school.",
          "A school may send multiple teams subject to organizer approval and identification.",
        ],
      },
      {
        title: "Participation Format",
        points: [
          "Each team must have 2 participants.",
          "The same team members should continue through the event.",
          "School ID and uniform are required on the competition day.",
        ],
      },
      {
        title: "Fees and Payment",
        points: [
          "Registration fee is Rs. 2000 per team.",
          "Payment details must be submitted after payment.",
          "Incorrect or incomplete payment details may affect participation approval.",
        ],
      },
      {
        title: "Conduct and Results",
        points: [
          "All organizer decisions on content, scope, rounds, and structure are final.",
          "Judges' decisions are final and no dispute will be entertained later.",
          "Bad conduct, non-compliance, or misinformation can lead to disqualification.",
        ],
      },
      {
        title: "Logistics",
        points: [
          "Travel, accommodation, and personal arrangements are the responsibility of participants unless explicitly provided.",
          "Participants must follow security instructions and venue discipline.",
          "The organizers may use event photos and videos for communication and promotion.",
        ],
      },
    ],
  },
  {
    id: "junior-plus",
    label: "Junior Plus",
    group: "Debate",
    title: "Verbattle Junior Plus 2026",
    intro: "Rules and conditions for the senior school / pre-university debate batch.",
    highlights: ["11th, 12th, 1st & 2nd PUC", "Team event", "Entry fee: Rs. 2000 per team"],
    sections: [
      {
        title: "Eligibility",
        points: [
          "Entry is for students aged 16 to 18 years studying in 11th, 12th, 1st PUC, or 2nd PUC.",
          "Only school or college represented teams are allowed.",
          "Independent teams are not allowed.",
        ],
      },
      {
        title: "Team Rules",
        points: [
          "A team must have 2 participants.",
          "The same pair should continue throughout the competition.",
          "Institution details submitted during registration must be accurate and attested where required.",
        ],
      },
      {
        title: "Fees and Entry",
        points: [
          "Registration fee is Rs. 2000 per team.",
          "Teams must complete payment and share proof before final confirmation.",
          "Failure to complete the full application properly may result in denial of participation.",
        ],
      },
      {
        title: "Competition Discipline",
        points: [
          "The event will be conducted in English unless stated otherwise.",
          "Participants must maintain decorum and may be disqualified for indecent behavior.",
          "The moderator or organizers may restructure or stop a debate in the interest of fair conduct.",
        ],
      },
      {
        title: "Prizes and Liability",
        points: [
          "Prize money and certificates are issued as determined by the organizers.",
          "Prize money is an incentive and not the sole purpose of participation.",
          "The organizers' liability remains limited to the bona fide conduct of the event.",
        ],
      },
    ],
  },
  {
    id: "kannada",
    label: "Kannada",
    group: "Debate",
    title: "Verbattle Kannada 2026",
    intro: "Kannada category rules and conditions presented in a simpler digital format.",
    highlights: ["Grades 7 to 10", "Team event", "Entry fee: Rs. 2000 per team"],
    sections: [
      {
        title: "Eligibility",
        points: [
          "Entry is for school students aged 12 to 16 years in grades 7 to 10.",
          "Teams must represent their institution.",
          "Past winners are not eligible to participate again in the same category.",
        ],
      },
      {
        title: "Team and School Rules",
        points: [
          "Each team must have 2 participants.",
          "Participants must continue with the same team through the event.",
          "All student and institution details must be accurate.",
        ],
      },
      {
        title: "Payment and Registration",
        points: [
          "Registration fee is Rs. 2000 per team.",
          "Payment proof must be shared after transfer.",
          "Incomplete forms or incorrect information may lead to rejection.",
        ],
      },
      {
        title: "Conduct",
        points: [
          "Participants must follow venue discipline and organizer instructions.",
          "Abusive, indecent, or disorderly behavior will attract disqualification.",
          "Recorded visuals from the event may be used by the organizers.",
        ],
      },
      {
        title: "General Conditions",
        points: [
          "Results and organizer decisions are final.",
          "Travel and stay are the participant's responsibility unless specifically announced.",
          "Any dispute is subject to Bengaluru jurisdiction.",
        ],
      },
    ],
  },
  {
    id: "speech-beginner",
    label: "Speech Beginner",
    group: "Speech",
    title: "Verbattle Speech Competition Beginner 2026",
    intro: "Terms and conditions for the beginner speech category, rewritten for easier reading online.",
    highlights: ["Grades 3 to 6", "Individual event", "Entry fee: Rs. 1000 per participant"],
    sections: [
      {
        title: "Eligibility",
        points: [
          "Entry is for students aged 8 to 12 years studying in grades 3 to 6.",
          "Age relaxation is allowed only within the stated limit on the current form.",
          "Each participant is identified by the school name and student name.",
        ],
      },
      {
        title: "Format",
        points: [
          "This is an individual speech competition.",
          "Minimum speech time is 3 minutes and maximum speech time is 4 minutes.",
          "Reading directly from reference material is discouraged.",
        ],
      },
      {
        title: "Fees and Payment",
        points: [
          "Registration fee is Rs. 1000 per participant.",
          "Payment should be made through accepted modes and shared with proof.",
          "Cash without receipt is at the payer's risk.",
        ],
      },
      {
        title: "Rules and Conduct",
        points: [
          "Results are final and binding.",
          "Any indecent behavior or use of unacceptable language may lead to disqualification.",
          "The organizers may act strictly against behavior that disrupts smooth conduct of the event.",
        ],
      },
      {
        title: "Certificates and Contact",
        points: [
          "Certificates are issued according to the highest level reached.",
          "Prize money is processed according to organizer timelines and policies.",
          "Participants should save the official helpline to receive updates.",
        ],
      },
    ],
  },
  {
    id: "speech-junior",
    label: "Speech Junior",
    group: "Speech",
    title: "Verbattle Speech Competition Junior 2026",
    intro: "Terms and conditions for the junior speech category in a clean page layout.",
    highlights: ["Grades 7 to 10", "Individual event", "Entry fee: Rs. 1000 per participant"],
    sections: [
      {
        title: "Eligibility",
        points: [
          "Entry is for students aged 12 to 16 years in grades 7 to 10.",
          "The competition is for individual participants only.",
          "Participant identity is tied to both student and school details.",
        ],
      },
      {
        title: "Format",
        points: [
          "This is an individual speech event.",
          "Speech duration must stay between 3 and 4 minutes.",
          "Reading directly from prepared text is discouraged.",
        ],
      },
      {
        title: "Payment",
        points: [
          "Registration fee is Rs. 1000 per head.",
          "Payment details and UTR/reference should be shared after payment.",
          "The entry fee is non-transferable and generally non-refundable.",
        ],
      },
      {
        title: "Conduct and Discipline",
        points: [
          "All organizer decisions on event structure and event handling are final.",
          "Unacceptable conduct may invite immediate disqualification.",
          "Any action that questions event integrity or disrupts the event may lead to dismissal.",
        ],
      },
      {
        title: "Awards and General Conditions",
        points: [
          "Certificates are issued according to participation level.",
          "Prize money is processed for winners according to organizer policy.",
          "Past winners are not eligible to compete again in the same category.",
        ],
      },
    ],
  },
];

function TermsHero() {
  return (
    <section className="terms-hero">
      <div className="vb-container terms-hero__inner">
        <div className="terms-hero__content">
          <span className="terms-hero__kicker">Terms & Conditions</span>
          <h1>Terms & Conditions</h1>
          <p>
            Home <span>/</span> Registration <span>/</span> Terms & Conditions
          </p>
        </div>
      </div>
    </section>
  );
}

export default function TermsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(termSets[0].id);

  const activeTerms = useMemo(
    () => termSets.find((item) => item.id === activeId) ?? termSets[0],
    [activeId],
  );

  return (
    <div className="vb terms-page">
      <Header menuOpen={menuOpen} navLinks={navLinks} setMenuOpen={setMenuOpen} />
      <main className="vb-main">
        <TermsHero />

        <section className="terms-section">
          <div className="vb-container">
            <div className="terms-shell">
              <div className="terms-topbar">
                <div>
                  <span className="terms-topbar__eyebrow">Competition Rules</span>
                  <h2>Choose a batch to view its current participation terms in a cleaner format.</h2>
                </div>
                <div className="terms-topbar__meta">
                  <strong>{termSets.length}</strong>
                  <span>Categories</span>
                </div>
              </div>

              <div className="terms-filterBar">
                {termSets.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`terms-filterBar__btn${activeId === item.id ? " is-active" : ""}`}
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <article className="terms-card">
                <div className="terms-card__head">
                  <div>
                    <span className="terms-card__group">{activeTerms.group}</span>
                    <h3>{activeTerms.title}</h3>
                    <p>{activeTerms.intro}</p>
                  </div>
                  <div className="terms-pills">
                    {activeTerms.highlights.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className="terms-grid">
                  {activeTerms.sections.map((section) => (
                    <section key={section.title} className="terms-block">
                      <h4>{section.title}</h4>
                      <ul>
                        {section.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>

                <div className="terms-note">
                  Please verify payment, reporting, and participation details with the official Verbattle contact before final submission if anything changes in the current season.
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
