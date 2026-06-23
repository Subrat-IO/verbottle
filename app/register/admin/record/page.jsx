"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  formatRegistrationDate,
  getStoredRegistrationByApplicationNo,
  isRegistrationAdminAuthenticated,
} from "../../../../components/verbattle/registrationStorage";

function getParticipantsSummary(participants) {
  return participants.map((participant) => ({
    title: `Participant ${participant.participantNo || ""}`.trim(),
    rows: [
      ["Full Name", participant.fullName],
      ["DOB", participant.dateOfBirth],
      ["Age", participant.age],
      ["Gender", participant.genderOther || participant.gender],
      ["Class", participant.classGradeSection],
      ["Email", participant.email],
      ["Mobile", participant.mobileEmergencyNumber],
      ["School", participant.schoolName],
      ["Address", participant.residenceAddress],
      ["City", participant.districtCity],
      ["State", participant.stateOther || participant.state],
      ["Pincode", participant.pincode],
      ["Mother Tongue", participant.motherTongue],
      ["Languages", participant.spokenLanguages],
      ["Parent/Guardian", participant.parentGuardianName],
      ["Relationship", participant.relationshipOther || participant.relationship],
      ["Participant Photo", participant.participantPhotoName],
      ["School ID", participant.schoolIdCardName],
    ],
  }));
}

function RowList({ rows }) {
  return (
    <div className="vbar-rows">
      {rows.map(([label, value]) => (
        <div className="vbar-row" key={label}>
          <span>{label}</span>
          <strong>{value || "-"}</strong>
        </div>
      ))}
    </div>
  );
}

export default function RegistrationAdminRecordPage() {
  const router = useRouter();
  const [record, setRecord] = useState(undefined);
  const [queryState, setQueryState] = useState({
    applicationNo: "",
    shouldPrint: false,
  });

  const applicationNo = useMemo(() => queryState.applicationNo, [queryState]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    setQueryState({
      applicationNo: params.get("applicationNo") || "",
      shouldPrint: params.get("print") === "1",
    });
  }, []);

  useEffect(() => {
    if (!isRegistrationAdminAuthenticated()) {
      router.replace("/register/admin");
      return;
    }

    if (!applicationNo) {
      setRecord(null);
      return;
    }

    setRecord(getStoredRegistrationByApplicationNo(applicationNo) || null);
  }, [applicationNo, router]);

  useEffect(() => {
    if (!record) return;
    if (!queryState.shouldPrint) return;

    const timer = window.setTimeout(() => window.print(), 450);
    return () => window.clearTimeout(timer);
  }, [queryState.shouldPrint, record]);

  if (record === undefined) {
    return (
      <>
        <style>{`
          .vbar-empty {
            min-height: 100vh;
            display: grid;
            place-items: center;
            padding: 24px;
            background: #f7f9fc;
            color: #475569;
          }
        `}</style>
        <main className="vbar-empty">Loading registration record...</main>
      </>
    );
  }

  if (record === null) {
    return (
      <>
        <style>{`
          .vbar-empty {
            min-height: 100vh;
            display: grid;
            place-items: center;
            padding: 24px;
            background: #f7f9fc;
            color: #475569;
            text-align: center;
            gap: 12px;
          }
          .vbar-empty a {
            color: #d11b2f;
            font-weight: 800;
            text-decoration: none;
          }
        `}</style>
        <main className="vbar-empty">
          <div>Registration record not found in local storage.</div>
          <Link href="/register/admin/dashboard">Back to dashboard</Link>
        </main>
      </>
    );
  }

  const participantSections = getParticipantsSummary(record.participants || []);

  return (
    <>
      <style>{`
        @page {
          size: A4 portrait;
          margin: 10mm;
        }
        .vbar-page {
          min-height: 100vh;
          padding: 24px 18px 40px;
          background: #eef3fb;
        }
        .vbar-toolbar {
          width: min(100%, 980px);
          margin: 0 auto 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .vbar-toolbar__group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .vbar-toolbar a,
        .vbar-toolbar button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 16px;
          border-radius: 999px;
          font: inherit;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }
        .vbar-toolbar a {
          background: #fff;
          border: 1px solid rgba(8, 35, 77, 0.12);
          color: #08234d;
        }
        .vbar-toolbar button {
          border: 0;
          background: linear-gradient(135deg, #d11b2f 0%, #f04c3a 100%);
          color: #fff;
        }
        .vbar-sheet {
          width: min(100%, 980px);
          margin: 0 auto;
          padding: 22px;
          border-radius: 22px;
          background: #fff;
          color: #0f172a;
          box-shadow: 0 22px 54px rgba(8, 35, 77, 0.10);
        }
        .vbar-head {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          padding-bottom: 16px;
          border-bottom: 2px solid #e2e8f0;
          margin-bottom: 18px;
        }
        .vbar-brand span {
          display: inline-block;
          margin-bottom: 6px;
          color: #d11b2f;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .vbar-brand h1 {
          margin: 0 0 8px;
          color: #08234d;
          font-size: 28px;
          line-height: 1;
        }
        .vbar-brand p {
          margin: 0;
          color: #64748b;
          font-size: 12px;
          line-height: 1.6;
        }
        .vbar-badges {
          display: grid;
          gap: 8px;
          align-content: start;
        }
        .vbar-badge {
          display: inline-flex;
          justify-content: center;
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          background: #f8fafc;
          color: #334155;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .vbar-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .vbar-card {
          padding: 14px;
          border-radius: 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }
        .vbar-card--full {
          grid-column: 1 / -1;
        }
        .vbar-card h2 {
          margin: 0 0 10px;
          color: #08234d;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .vbar-rows {
          display: grid;
          gap: 7px;
        }
        .vbar-row {
          display: grid;
          grid-template-columns: 132px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
        }
        .vbar-row span {
          color: #64748b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .vbar-row strong {
          color: #1e293b;
          font-size: 12px;
          line-height: 1.45;
          word-break: break-word;
        }
        .vbar-participants {
          display: grid;
          grid-template-columns: repeat(${Math.max(participantSections.length, 1)}, minmax(0, 1fr));
          gap: 14px;
        }
        .vbar-declaration {
          display: grid;
          gap: 8px;
        }
        .vbar-declaration div {
          display: flex;
          gap: 10px;
          align-items: center;
          color: #1e293b;
          font-size: 12px;
          font-weight: 700;
        }
        .vbar-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #16a34a;
          flex: 0 0 auto;
        }
        .vbar-dot.is-off {
          background: #cbd5e1;
        }
        @media (max-width: 860px) {
          .vbar-head,
          .vbar-grid,
          .vbar-participants {
            grid-template-columns: 1fr;
          }
          .vbar-row {
            grid-template-columns: 1fr;
          }
        }
        @media print {
          .vbar-page {
            background: #fff;
            padding: 0;
          }
          .vbar-toolbar {
            display: none;
          }
          .vbar-sheet {
            width: 100%;
            margin: 0;
            padding: 0;
            border-radius: 0;
            box-shadow: none;
          }
        }
      `}</style>

      <main className="vbar-page">
        <div className="vbar-toolbar">
          <div className="vbar-toolbar__group">
            <Link href="/register/admin/dashboard">Back to dashboard</Link>
          </div>
          <div className="vbar-toolbar__group">
            <button type="button" onClick={() => window.print()}>
              Download PDF
            </button>
          </div>
        </div>

        <section className="vbar-sheet">
          <header className="vbar-head">
            <div className="vbar-brand">
              <span>Verbattle Registration Sheet</span>
              <h1>{record.applicationNo}</h1>
              <p>
                Saved locally on {formatRegistrationDate(record.submittedAt)}
              </p>
            </div>

            <div className="vbar-badges">
              <div className="vbar-badge">{record.competitionType}</div>
              <div className="vbar-badge">{record.category}</div>
            </div>
          </header>

          <div className="vbar-grid">
            <article className="vbar-card">
              <h2>School</h2>
              <RowList
                rows={[
                  ["School Name", record.school?.schoolName],
                  ["Head of Institution", record.school?.headOfInstitutionName],
                  ["Affiliation", record.school?.affiliation],
                  ["Medium", record.school?.mediumOfEducationOther || record.school?.mediumOfEducation],
                  ["Classes", `${record.school?.classesFrom || "-"} to ${record.school?.classesTo || "-"}`],
                  ["Phone", record.school?.schoolPhoneNumber],
                  ["Email", record.school?.schoolEmail],
                  ["Website", record.school?.schoolWebsite],
                  ["Address", record.school?.schoolAddress],
                ]}
              />
            </article>

            <article className="vbar-card">
              <h2>Mentor</h2>
              <RowList
                rows={[
                  ["Mentor Name", record.mentor?.teacherMentorName],
                  ["Contact Number", record.mentor?.teacherMentorContactNumber],
                  ["Email", record.mentor?.teacherMentorEmail],
                  ["School Contact", record.school?.schoolContactPerson],
                ]}
              />
            </article>

            <article className="vbar-card vbar-card--full">
              <h2>Participants</h2>
              <div className="vbar-participants">
                {participantSections.map((section) => (
                  <div className="vbar-card" key={section.title}>
                    <h2>{section.title}</h2>
                    <RowList rows={section.rows} />
                  </div>
                ))}
              </div>
            </article>

            <article className="vbar-card">
              <h2>Parent / Guardian</h2>
              <RowList
                rows={[
                  ["Name", record.parentGuardian?.parentGuardianName],
                  ["Relationship", record.parentGuardian?.relationshipOther || record.parentGuardian?.relationship],
                  ["Email", record.parentGuardian?.parentEmail],
                  ["Mobile", record.parentGuardian?.parentMobileNumber],
                  ["Address", record.parentGuardian?.parentAddress],
                  ["City", record.parentGuardian?.city],
                  ["State", record.parentGuardian?.stateOther || record.parentGuardian?.state],
                  ["Pincode", record.parentGuardian?.pincode],
                ]}
              />
            </article>

            <article className="vbar-card">
              <h2>Payment and Files</h2>
              <RowList
                rows={[
                  ["Payment Mode", record.payment?.paymentModeOther || record.payment?.paymentMode],
                  ["UTR Number", record.payment?.utrNumber],
                  ["Payment Screenshot", record.payment?.paymentScreenshotName],
                  ["Consent Form", record.payment?.consentFormName],
                ]}
              />
            </article>

            <article className="vbar-card vbar-card--full">
              <h2>Declaration</h2>
              <div className="vbar-declaration">
                <div>
                  <span className={`vbar-dot ${record.declaration?.infoCorrect ? "" : "is-off"}`} />
                  Information confirmed as correct
                </div>
                <div>
                  <span className={`vbar-dot ${record.declaration?.agreeTerms ? "" : "is-off"}`} />
                  Terms and conditions accepted
                </div>
                <div>
                  <span className={`vbar-dot ${record.declaration?.consentParticipation ? "" : "is-off"}`} />
                  Participation consent confirmed
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
