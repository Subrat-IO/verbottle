"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  clearRegistrationAdminSession,
  formatRegistrationDate,
  getStoredRegistrations,
  isRegistrationAdminAuthenticated,
} from "../../../../components/verbattle/registrationStorage";

function getParticipantLabel(participants) {
  return participants
    .map((participant) => participant.fullName)
    .filter(Boolean)
    .join(", ");
}

export default function RegistrationAdminDashboardPage() {
  const router = useRouter();
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    if (!isRegistrationAdminAuthenticated()) {
      router.replace("/register/admin");
      return;
    }

    const syncRecords = () => setRecords(getStoredRegistrations());
    syncRecords();
    window.addEventListener("storage", syncRecords);

    return () => window.removeEventListener("storage", syncRecords);
  }, [router]);

  const filteredRecords = useMemo(() => {
    return records.filter((record) => {
      const haystack = [
        record.applicationNo,
        record.competitionType,
        record.category,
        record.school?.schoolName,
        getParticipantLabel(record.participants || []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = haystack.includes(search.trim().toLowerCase());
      const matchesCategory =
        categoryFilter === "All" || record.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [categoryFilter, records, search]);

  const categories = useMemo(
    () => ["All", ...new Set(records.map((record) => record.category))],
    [records],
  );

  return (
    <>
      <style>{`
        .vbad-page {
          min-height: 100vh;
          padding: 32px 18px 48px;
          background:
            radial-gradient(circle at top left, rgba(209, 27, 47, 0.10), transparent 24%),
            linear-gradient(180deg, #f7f9fc 0%, #eef3fb 100%);
        }
        .vbad-shell {
          width: min(1180px, 100%);
          margin: 0 auto;
        }
        .vbad-topbar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 18px;
          margin-bottom: 22px;
        }
        .vbad-topbar h1 {
          margin: 0 0 8px;
          color: #08234d;
          font-size: clamp(30px, 4vw, 44px);
        }
        .vbad-topbar p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.6;
        }
        .vbad-logout {
          min-height: 46px;
          padding: 0 18px;
          border: 1px solid rgba(8, 35, 77, 0.12);
          border-radius: 999px;
          background: #fff;
          color: #08234d;
          font: inherit;
          font-weight: 800;
        }
        .vbad-controls {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 220px;
          gap: 14px;
          margin-bottom: 18px;
        }
        .vbad-controls input,
        .vbad-controls select {
          width: 100%;
          min-height: 48px;
          padding: 0 14px;
          border: 1px solid rgba(8, 35, 77, 0.12);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.96);
          color: #08234d;
          font: inherit;
        }
        .vbad-grid {
          display: grid;
          gap: 14px;
        }
        .vbad-card {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 18px;
          padding: 20px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(8, 35, 77, 0.08);
          box-shadow: 0 18px 44px rgba(8, 35, 77, 0.08);
        }
        .vbad-card__meta {
          display: grid;
          gap: 12px;
        }
        .vbad-card__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .vbad-card__chips span {
          display: inline-flex;
          align-items: center;
          min-height: 28px;
          padding: 0 10px;
          border-radius: 999px;
          background: #f1f5f9;
          color: #334155;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .vbad-card h2 {
          margin: 0;
          color: #08234d;
          font-size: 22px;
        }
        .vbad-card__facts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .vbad-card__fact {
          padding: 12px 14px;
          border-radius: 14px;
          background: #f8fafc;
        }
        .vbad-card__fact span {
          display: block;
          margin-bottom: 4px;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .vbad-card__fact strong {
          color: #1e293b;
          font-size: 13px;
          line-height: 1.5;
        }
        .vbad-card__actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 170px;
        }
        .vbad-card__actions a,
        .vbad-card__actions button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 16px;
          border-radius: 999px;
          font: inherit;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }
        .vbad-card__actions a {
          background: linear-gradient(135deg, #d11b2f 0%, #f04c3a 100%);
          color: #fff;
          box-shadow: 0 14px 30px rgba(209, 27, 47, 0.22);
        }
        .vbad-card__actions button {
          border: 1px solid rgba(8, 35, 77, 0.12);
          background: #fff;
          color: #08234d;
        }
        .vbad-empty {
          padding: 26px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.96);
          color: #64748b;
          text-align: center;
        }
        @media (max-width: 820px) {
          .vbad-topbar,
          .vbad-card {
            grid-template-columns: 1fr;
          }
          .vbad-controls,
          .vbad-card__facts {
            grid-template-columns: 1fr;
          }
          .vbad-card__actions {
            min-width: 0;
          }
        }
      `}</style>

      <main className="vbad-page">
        <div className="vbad-shell">
          <div className="vbad-topbar">
            <div>
              <h1>Registration Dashboard</h1>
              <p>
                Open submitted registrations, inspect saved form inputs, and
                export print-ready PDF sheets from the browser.
              </p>
            </div>

            <button
              className="vbad-logout"
              type="button"
              onClick={() => {
                clearRegistrationAdminSession();
                router.push("/register/admin");
              }}
            >
              Log Out
            </button>
          </div>

          <div className="vbad-controls">
            <input
              placeholder="Search by application no, student, school, competition..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="vbad-grid">
            {filteredRecords.map((record) => (
              <article className="vbad-card" key={record.applicationNo}>
                <div className="vbad-card__meta">
                  <div className="vbad-card__chips">
                    <span>{record.competitionType}</span>
                    <span>{record.category}</span>
                    <span>{formatRegistrationDate(record.submittedAt)}</span>
                  </div>

                  <h2>{record.applicationNo}</h2>

                  <div className="vbad-card__facts">
                    <div className="vbad-card__fact">
                      <span>Participants</span>
                      <strong>
                        {getParticipantLabel(record.participants || []) || "-"}
                      </strong>
                    </div>
                    <div className="vbad-card__fact">
                      <span>School</span>
                      <strong>{record.school?.schoolName || "-"}</strong>
                    </div>
                    <div className="vbad-card__fact">
                      <span>Mentor</span>
                      <strong>{record.mentor?.teacherMentorName || "-"}</strong>
                    </div>
                  </div>
                </div>

                <div className="vbad-card__actions">
                  <Link
                    href={`/register/admin/record?applicationNo=${encodeURIComponent(record.applicationNo)}`}
                  >
                    Open Record
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        `/register/admin/record?applicationNo=${encodeURIComponent(record.applicationNo)}&print=1`,
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    Download PDF
                  </button>
                </div>
              </article>
            ))}

            {!filteredRecords.length ? (
              <div className="vbad-empty">
                No saved frontend registrations found yet.
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}
