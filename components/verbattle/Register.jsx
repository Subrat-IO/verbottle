"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { DRAFT_KEY, saveRegistrationSubmission } from "./registrationStorage";

// ─── Icons ────────────────────────────────────────────────────────────────────
const ChevronDown = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="4 6 8 10 12 6" />
  </svg>
);
const CheckIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 8 6.5 11.5 13 4.5" />
  </svg>
);
const UsersIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="6" cy="5" r="2.5" />
    <path d="M1 14c0-2.5 2-4 5-4s5 1.5 5 4" />
    <circle cx="12" cy="5" r="2" />
    <path d="M15 14c0-2-1.5-3.2-3-3.5" />
  </svg>
);
const BuildingIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="12" height="10" rx="1" />
    <path d="M6 14v-4h4v4" />
    <path d="M2 7h12" />
    <rect x="5" y="1" width="6" height="3" rx="1" />
  </svg>
);
const BadgeIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="8" r="6" />
    <polyline points="5.5 8 7 9.5 10.5 6" />
  </svg>
);
const UploadIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 10V3M5 6l3-3 3 3" />
    <path d="M2 13h12" />
  </svg>
);
const CalendarIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="3" width="14" height="12" rx="2" />
    <path d="M1 7h14M5 1v4M11 1v4" />
  </svg>
);
const ChevronLeft = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="10 4 6 8 10 12" />
  </svg>
);
const ChevronRight = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 4 10 8 6 12" />
  </svg>
);
const SearchIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="7" cy="7" r="4.5" />
    <path d="M10.5 10.5L14 14" />
  </svg>
);
const ShieldIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 1L2 4v4c0 3.5 2.5 5.7 6 7 3.5-1.3 6-3.5 6-7V4L8 1z" />
  </svg>
);
const ZapIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 2 4 9h5l-2 5 7-7h-5z" />
  </svg>
);
const StarIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="8 1.5 10 6 14.5 6.5 11 9.5 12 14 8 11.5 4 14 5 9.5 1.5 6.5 6 6" />
  </svg>
);
const HeadphonesIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 10V8a6 6 0 0112 0v2" />
    <rect x="1" y="10" width="3" height="4" rx="1.5" />
    <rect x="12" y="10" width="3" height="4" rx="1.5" />
  </svg>
);
const XIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l8 8M12 4l-8 8" />
  </svg>
);

// ─── Constants ────────────────────────────────────────────────────────────────
const COMPETITION_TYPES = ["Debate", "Speech"];
const CATEGORY_OPTIONS = ["Beginner", "Junior", "Junior Plus", "Kannada"];
const GENDER_OPTIONS = ["Male", "Female", "Other", "Prefer not to say"];
const PAYMENT_MODES = ["UPI", "Bank Transfer", "Cash", "Other"];
const MEDIUM_OPTIONS = ["English", "Kannada", "Hindi", "Other"];
const RELATIONSHIP_OPTIONS = [
  "Father",
  "Mother",
  "Guardian",
  "Sibling",
  "Other",
];
const CLASS_OPTIONS = [
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];
const STATE_OPTIONS = [
  "Andhra Pradesh",
  "Delhi",
  "Gujarat",
  "Karnataka",
  "Kerala",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "West Bengal",
];

const NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]{1,79}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MOBILE_REGEX = /^\d{10}$/;
const PINCODE_REGEX = /^\d{6}$/;
const DOB_REGEX = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const UTR_REGEX = /^[A-Z0-9]{6,30}$/;

const STEP_META = {
  speech: [
    { title: "Student Details", icon: "Users" },
    { title: "School & Mentor", icon: "Building" },
    { title: "Program Details", icon: "BadgeCheck" },
    { title: "Upload & Review", icon: "Upload" },
    { title: "Confirmation", icon: "Check" },
  ],
  debate: [
    { title: "Student 1", icon: "Users" },
    { title: "Student 2", icon: "Users" },
    { title: "School & Mentor", icon: "Building" },
    { title: "Program Details", icon: "BadgeCheck" },
    { title: "Upload & Review", icon: "Upload" },
    { title: "Confirmation", icon: "Check" },
  ],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function createParticipant(index) {
  return {
    participantNo: index + 1,
    fullName: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    genderOther: "",
    schoolName: "",
    classGradeSection: "",
    motherTongue: "",
    spokenLanguages: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    residenceAddress: "",
    districtCity: "",
    state: "",
    stateOther: "",
    pincode: "",
    residencePhone: "",
    mobileEmergencyNumber: "",
    email: "",
    otherAreasOfInterest: "",
    parentGuardianName: "",
    relationship: "",
    relationshipOther: "",
    participantPhoto: null,
    schoolIdCard: null,
  };
}

function sanitizeDigits(value, max) {
  return value.replace(/\D/g, "").slice(0, max);
}
function sanitizeName(value, max = 80) {
  return value
    .replace(/[^A-Za-z\s.'-]/g, "")
    .replace(/\s{2,}/g, " ")
    .slice(0, max);
}
function sanitizeEmail(value, max = 120) {
  return value.replace(/\s/g, "").slice(0, max).toLowerCase();
}
function sanitizeText(value, max = 160) {
  return value.replace(/\s{2,}/g, " ").slice(0, max);
}
function sanitizeAlphaNumeric(value, max = 30) {
  return value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, max);
}

function formatDobInput(value) {
  const digits = sanitizeDigits(value, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

function parseDob(value) {
  if (!DOB_REGEX.test(value)) return null;
  const [day, month, year] = value.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  )
    return null;
  return date;
}

function calculateAgeFromDob(value) {
  const dob = parseDob(value);
  if (!dob) return "";
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age -= 1;
  return age >= 0 && age <= 99 ? String(age) : "";
}

function isValidName(v) {
  return NAME_REGEX.test(v.trim());
}
function isValidEmail(v) {
  return !v || EMAIL_REGEX.test(v);
}
function isValidPhone(v) {
  return MOBILE_REGEX.test(v);
}
function isValidPincode(v) {
  return PINCODE_REGEX.test(v);
}
function isValidDob(v) {
  const d = parseDob(v);
  return d ? d <= new Date() : false;
}
function isValidUtr(v) {
  return UTR_REGEX.test(v);
}
function isValidWebsite(v) {
  if (!v) return true;
  try {
    const u = v.startsWith("http") ? v : `https://${v}`;
    return Boolean(new URL(u).hostname);
  } catch {
    return false;
  }
}

function getCompetitionCode(t) {
  return t === "Speech" ? "SP" : "DB";
}
function getCategoryCode(c) {
  return (
    (c || "GEN")
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 3) || "GEN"
  );
}
function getDateStamp() {
  const n = new Date();
  return `${n.getFullYear()}${String(n.getMonth() + 1).padStart(2, "0")}${String(n.getDate()).padStart(2, "0")}`;
}
function getRandomChunk(len = 6) {
  const alpha = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const v = new Uint32Array(len);
    crypto.getRandomValues(v);
    return Array.from(v, (x) => alpha[x % alpha.length]).join("");
  }
  return Array.from(
    { length: len },
    () => alpha[Math.floor(Math.random() * alpha.length)],
  ).join("");
}
function createAppNo(type, cat) {
  return `VBT-${getDateStamp()}-${getCompetitionCode(type)}-${getCategoryCode(cat)}-${getRandomChunk()}`;
}
function resolveAppNo(server, fallback) {
  return typeof server === "string" && server.trim() ? server.trim() : fallback;
}
function getApiBase() {
  return (
    process.env.NEXT_PUBLIC_REGISTRATION_API_URL ||
    "http://localhost/verbattle-admin/backend/api"
  );
}

function createInitialForm() {
  const competitionType = "Debate",
    category = "Beginner";
  return {
    applicationNo: createAppNo(competitionType, category),
    competitionType,
    category,
    school: {
      schoolName: "",
      headOfInstitutionName: "",
      affiliation: "",
      mediumOfEducation: "",
      mediumOfEducationOther: "",
      classesFrom: "",
      classesTo: "",
      schoolAddress: "",
      schoolPincode: "",
      schoolPhoneNumber: "",
      schoolEmail: "",
      schoolWebsite: "",
      schoolContactPerson: "",
    },
    mentor: {
      teacherMentorName: "",
      teacherMentorContactNumber: "",
      teacherMentorEmail: "",
    },
    participants: [createParticipant(0), createParticipant(1)],
    parentGuardian: {
      parentGuardianName: "",
      relationship: "",
      relationshipOther: "",
      parentEmail: "",
      parentMobileNumber: "",
      parentAddress: "",
      city: "",
      state: "",
      stateOther: "",
      pincode: "",
    },
    payment: {
      paymentMode: "",
      paymentModeOther: "",
      utrNumber: "",
      paymentScreenshot: null,
      consentForm: null,
    },
    declaration: {
      infoCorrect: false,
      agreeTerms: false,
      consentParticipation: false,
    },
  };
}

// ─── Calendar Picker ──────────────────────────────────────────────────────────
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function CalendarPicker({ value, onChange, onClose }) {
  const today = new Date();
  const parsed = parseDob(value);
  const [viewYear, setViewYear] = useState(
    parsed ? parsed.getFullYear() : today.getFullYear() - 12,
  );
  const [viewMonth, setViewMonth] = useState(
    parsed ? parsed.getMonth() : today.getMonth(),
  );
  const [mode, setMode] = useState("days"); // days | months | years

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  function selectDay(d) {
    if (!d) return;
    const dd = String(d).padStart(2, "0");
    const mm = String(viewMonth + 1).padStart(2, "0");
    onChange(`${dd}/${mm}/${viewYear}`);
    onClose();
  }

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  }

  const yearRange = [];
  for (let y = today.getFullYear(); y >= 1950; y--) yearRange.push(y);

  return (
    <div className="vbr-calendar" onClick={(e) => e.stopPropagation()}>
      <div className="vbr-cal-header">
        <button type="button" className="vbr-cal-nav" onClick={prevMonth}>
          <ChevronLeft className="vb-icon-14" />
        </button>
        <div className="vbr-cal-title">
          <button
            type="button"
            className="vbr-cal-label-btn"
            onClick={() => setMode(mode === "months" ? "days" : "months")}
          >
            {MONTHS[viewMonth]}
          </button>
          <button
            type="button"
            className="vbr-cal-label-btn"
            onClick={() => setMode(mode === "years" ? "days" : "years")}
          >
            {viewYear}
          </button>
        </div>
        <button type="button" className="vbr-cal-nav" onClick={nextMonth}>
          <ChevronRight className="vb-icon-14" />
        </button>
      </div>

      {mode === "days" && (
        <>
          <div className="vbr-cal-weekdays">
            {DAYS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="vbr-cal-grid">
            {cells.map((d, i) => {
              const isSelected =
                parsed &&
                d === parsed.getDate() &&
                viewMonth === parsed.getMonth() &&
                viewYear === parsed.getFullYear();
              const isToday =
                d === today.getDate() &&
                viewMonth === today.getMonth() &&
                viewYear === today.getFullYear();
              const futureDate = d
                ? new Date(viewYear, viewMonth, d) > today
                : false;
              return (
                <button
                  key={i}
                  type="button"
                  className={`vbr-cal-day ${!d ? "empty" : ""} ${isSelected ? "selected" : ""} ${isToday ? "today" : ""} ${futureDate ? "disabled" : ""}`}
                  onClick={() => !futureDate && selectDay(d)}
                  disabled={futureDate || !d}
                >
                  {d || ""}
                </button>
              );
            })}
          </div>
        </>
      )}

      {mode === "months" && (
        <div className="vbr-cal-month-grid">
          {MONTHS.map((m, i) => (
            <button
              key={m}
              type="button"
              className={`vbr-cal-month-btn ${i === viewMonth ? "selected" : ""}`}
              onClick={() => {
                setViewMonth(i);
                setMode("days");
              }}
            >
              {m.slice(0, 3)}
            </button>
          ))}
        </div>
      )}

      {mode === "years" && (
        <div className="vbr-cal-year-list">
          {yearRange.map((y) => (
            <button
              key={y}
              type="button"
              className={`vbr-cal-year-btn ${y === viewYear ? "selected" : ""}`}
              onClick={() => {
                setViewYear(y);
                setMode("days");
              }}
            >
              {y}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── DOB Input + Calendar ─────────────────────────────────────────────────────
function DobField({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, []);

  return (
    <div className="vbr-dob-wrap" ref={ref}>
      <div className="vbr-dob-input-row">
        <input
          className="vbr-clean-input"
          value={value}
          onChange={(e) => onChange(formatDobInput(e.target.value))}
          placeholder="DD/MM/YYYY"
          inputMode="numeric"
          maxLength={10}
        />
        <button
          type="button"
          className={`vbr-cal-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
        >
          <CalendarIcon className="vb-icon-16" />
        </button>
      </div>
      {open && (
        <CalendarPicker
          value={value}
          onChange={onChange}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

// ─── Smooth Select (with Other support) ───────────────────────────────────────
function SmoothSelect({
  value,
  onChange,
  options,
  placeholder,
  showOther = true,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [otherVal, setOtherVal] = useState("");
  const ref = useRef(null);
  const allOptions =
    showOther && !options.includes("Other") ? [...options, "Other"] : options;
  const isOther = value === "Other";

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    }
    function esc(e) {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("pointerdown", handler);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", handler);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  const filtered = allOptions.filter((o) =>
    o.toLowerCase().includes(query.toLowerCase()),
  );
  const displayLabel =
    value === "Other" ? (otherVal ? `Other: ${otherVal}` : "Other") : value;

  return (
    <div className="vbr-smooth-select" ref={ref}>
      <button
        type="button"
        className={`vbr-clean-input vbr-smooth-trigger ${open ? "is-open" : ""} ${value ? "is-filled" : ""}`}
        onClick={() => {
          setOpen((o) => !o);
          setQuery("");
        }}
      >
        <span>{displayLabel || placeholder}</span>
        <ChevronDown
          className={`vb-icon-14 vbr-chevron ${open ? "rotated" : ""}`}
        />
      </button>

      {open && (
        <div className="vbr-smooth-menu">
          <div className="vbr-smooth-search-wrap">
            <SearchIcon className="vb-icon-14 vbr-search-icon" />
            <input
              className="vbr-smooth-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${placeholder.toLowerCase()}`}
              autoFocus
            />
          </div>
          <div className="vbr-smooth-options">
            {filtered.length ? (
              filtered.map((opt, index) => (
                <button
                  key={`${opt}-${index}`}
                  type="button"
                  className={`vbr-smooth-option ${value === opt ? "is-active" : ""}`}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                    setQuery("");
                  }}
                >
                  <span>{opt}</span>
                  {value === opt && <CheckIcon className="vb-icon-14" />}
                </button>
              ))
            ) : (
              <div className="vbr-smooth-empty">No options found</div>
            )}
          </div>
        </div>
      )}

      {isOther && (
        <input
          className="vbr-clean-input vbr-other-input"
          placeholder={`Specify ${placeholder.toLowerCase()}`}
          value={otherVal}
          onChange={(e) => {
            setOtherVal(e.target.value);
            onChange("Other");
          }}
        />
      )}
    </div>
  );
}

// ─── Form Primitives ──────────────────────────────────────────────────────────
function InputField({ label, required, hint, children }) {
  return (
    <label className="vbr-form-field">
      <span className="vbr-form-label">
        {label}
        {required ? <span className="vbr-required"> *</span> : null}
      </span>
      {hint && <span className="vbr-field-hint">{hint}</span>}
      {children}
    </label>
  );
}

function TextInput(props) {
  return <input className="vbr-clean-input" {...props} />;
}
function TextArea(props) {
  return (
    <textarea
      className="vbr-clean-input vbr-clean-textarea"
      rows={3}
      {...props}
    />
  );
}
function FileInput({ onChange, accept, label }) {
  const [fileName, setFileName] = useState("");
  return (
    <label className="vbr-file-zone">
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        onChange={(e) => {
          const f = e.target.files?.[0] || null;
          onChange(f);
          setFileName(f ? f.name : "");
        }}
      />
      <UploadIcon className="vb-icon-20 vbr-file-icon" />
      <span className="vbr-file-label">
        {fileName || label || "Click to upload"}
      </span>
      <span className="vbr-file-sub">
        {accept.replace(/\./g, "").replace(/,/g, " · ").toUpperCase()}
      </span>
    </label>
  );
}

function StepIcon({ name }) {
  const map = {
    Users: UsersIcon,
    Building: BuildingIcon,
    BadgeCheck: BadgeIcon,
    Upload: UploadIcon,
    Check: CheckIcon,
  };
  const Comp = map[name] || CheckIcon;
  return <Comp className="vb-icon-16" />;
}

// ─── Validation ───────────────────────────────────────────────────────────────
// (Moved inside component to access form state)

// ─── Main Component ───────────────────────────────────────────────────────────
export default function VerbattleRegister() {
  const [form, setForm] = useState(() => createInitialForm());
  const [currentStep, setCurrentStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [draftSaved, setDraftSaved] = useState(false);

  const competitionKey = form.competitionType.toLowerCase();
  const steps = STEP_META[competitionKey];
  const participantCount = form.competitionType === "Debate" ? 2 : 1;
  const lastStep = steps.length - 1;
  const progress = useMemo(
    () => ((currentStep + 1) / steps.length) * 100,
    [currentStep, steps.length],
  );

  useEffect(() => {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      setForm((cur) => ({
        ...cur,
        ...parsed,
        participants: cur.participants.map((p, i) => ({
          ...p,
          ...(parsed.participants?.[i] || {}),
          participantPhoto: null,
          schoolIdCard: null,
        })),
        payment: {
          ...cur.payment,
          ...(parsed.payment || {}),
          paymentScreenshot: null,
          consentForm: null,
        },
      }));
    } catch {
      window.localStorage.removeItem(DRAFT_KEY);
    }
  }, []);

  function changeCompetitionType(type) {
    setForm((cur) => ({
      ...cur,
      applicationNo: createAppNo(type, cur.category),
      competitionType: type,
    }));
    setCurrentStep(0);
    setSubmitError("");
    setSubmitSuccess(null);
  }

  function patchSection(section, key, value) {
    setForm((cur) => ({
      ...cur,
      [section]: { ...cur[section], [key]: value },
    }));
  }

  function patchParticipant(index, key, value) {
    setForm((cur) => ({
      ...cur,
      participants: cur.participants.map((p, i) =>
        i === index ? { ...p, [key]: value } : p,
      ),
    }));
  }

  function patchDeclaration(key, value) {
    setForm((cur) => ({
      ...cur,
      declaration: { ...cur.declaration, [key]: value },
    }));
  }

  function updateParticipantDob(index, next) {
    const formatted = formatDobInput(next);
    const age = calculateAgeFromDob(formatted);
    setForm((cur) => ({
      ...cur,
      participants: cur.participants.map((p, i) =>
        i === index ? { ...p, dateOfBirth: formatted, age } : p,
      ),
    }));
  }

  // Validation
  function getParticipantError(index) {
    const p = form.participants[index];
    const lbl =
      form.competitionType === "Debate" ? `Student ${index + 1}` : "Student";
    if (!isValidName(p.fullName))
      return `${lbl}: name must contain only letters (2–80 chars).`;
    if (!isValidName(p.parentGuardianName))
      return `${lbl}: parent/guardian name is invalid.`;
    if (!isValidDob(p.dateOfBirth))
      return `${lbl}: date of birth must be DD/MM/YYYY and a valid past date.`;
    if (!p.age) return `${lbl}: age could not be calculated.`;
    if (!p.gender) return `${lbl}: please select a gender.`;
    if (!isValidPhone(p.mobileEmergencyNumber))
      return `${lbl}: mobile number must be exactly 10 digits.`;
    if (!p.classGradeSection) return `${lbl}: please select class/grade.`;
    if (p.email && !isValidEmail(p.email))
      return `${lbl}: email address is invalid.`;
    if (!p.relationship) return `${lbl}: please select relationship.`;
    if (!p.districtCity.trim() || p.districtCity.trim().length < 2)
      return `${lbl}: city is required.`;
    if (!p.state) return `${lbl}: please select state.`;
    if (!p.residenceAddress.trim() || p.residenceAddress.trim().length < 8)
      return `${lbl}: address must be at least 8 characters.`;
    if (!isValidPincode(p.pincode))
      return `${lbl}: pincode must be exactly 6 digits.`;
    if (index === 0) {
      if (!isValidPhone(form.parentGuardian.parentMobileNumber))
        return "Parent mobile number must be exactly 10 digits.";
      if (
        form.parentGuardian.parentEmail &&
        !isValidEmail(form.parentGuardian.parentEmail)
      )
        return "Parent email is invalid.";
    }
    return "";
  }

  function getSchoolError() {
    if (
      !form.school.schoolName.trim() ||
      form.school.schoolName.trim().length < 2
    )
      return "School name is required.";
    if (!isValidName(form.mentor.teacherMentorName))
      return "Teacher/mentor name is invalid.";
    if (
      form.school.headOfInstitutionName &&
      !isValidName(form.school.headOfInstitutionName)
    )
      return "Head of institution name is invalid.";
    if (!isValidPhone(form.mentor.teacherMentorContactNumber))
      return "Mentor contact must be exactly 10 digits.";
    if (
      !form.mentor.teacherMentorEmail ||
      !isValidEmail(form.mentor.teacherMentorEmail)
    )
      return "Mentor email is invalid.";
    if (!isValidPhone(form.school.schoolPhoneNumber))
      return "School phone must be exactly 10 digits.";
    if (!form.school.schoolEmail || !isValidEmail(form.school.schoolEmail))
      return "School email is invalid.";
    if (!isValidPincode(form.school.schoolPincode))
      return "School pincode must be exactly 6 digits.";
    if (form.school.schoolWebsite && !isValidWebsite(form.school.schoolWebsite))
      return "School website URL is invalid.";
    if (
      !form.school.schoolAddress.trim() ||
      form.school.schoolAddress.trim().length < 8
    )
      return "School address must be at least 8 characters.";
    return "";
  }

  function getProgramError() {
    if (!form.competitionType || !form.category || !form.payment.paymentMode)
      return "Please complete all program details.";
    if (!isValidUtr(form.payment.utrNumber))
      return "UTR number must be 6–30 alphanumeric characters.";
    return "";
  }

  function getDeclarationError() {
    if (
      !form.declaration.infoCorrect ||
      !form.declaration.agreeTerms ||
      !form.declaration.consentParticipation
    )
      return "Please check all declarations before submitting.";
    return "";
  }

  function getCurrentError() {
    if (competitionKey === "speech") {
      if (currentStep === 0) return getParticipantError(0);
      if (currentStep === 1) return getSchoolError();
      if (currentStep === 2) return getProgramError();
      if (currentStep === 3) return "";
      return getDeclarationError();
    }
    if (currentStep === 0) return getParticipantError(0);
    if (currentStep === 1) return getParticipantError(1);
    if (currentStep === 2) return getSchoolError();
    if (currentStep === 3) return getProgramError();
    if (currentStep === 4) return "";
    return getDeclarationError();
  }

  function saveDraft() {
    const s = {
      ...form,
      participants: form.participants.map(
        ({ participantPhoto, schoolIdCard, ...rest }) => rest,
      ),
      payment: { ...form.payment, paymentScreenshot: null, consentForm: null },
    };
    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(s));
    setDraftSaved(true);
    window.setTimeout(() => setDraftSaved(false), 1800);
  }

  function nextStep() {
    const err = getCurrentError();
    if (err) {
      setSubmitError(err);
      return;
    }
    setSubmitError("");
    setCurrentStep((s) => Math.min(s + 1, lastStep));
  }

  function previousStep() {
    setSubmitError("");
    setCurrentStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = getCurrentError();
    if (err) {
      setSubmitError(err);
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const savedSubmission = saveRegistrationSubmission({
        ...form,
        participants: form.participants.slice(0, participantCount),
      });
      window.localStorage.removeItem(DRAFT_KEY);
      setSubmitSuccess({
        success: true,
        applicationNo: savedSubmission?.applicationNo || form.applicationNo,
      });
      setForm(createInitialForm());
      setCurrentStep(0);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  // ─── Step Renderers ──────────────────────────────────────────────────────────
  function renderParticipantStep(index) {
    const p = form.participants[index];
    const isPrimary = index === 0;
    const lbl =
      form.competitionType === "Debate" ? `Student ${index + 1}` : "Student";

    return (
      <div className="vbr-form-stage">
        <div className="vbr-section-label">Personal Information</div>
        <div className="vbr-grid-2">
          <InputField label={`Full Name of ${lbl}`} required>
            <TextInput
              value={p.fullName}
              onChange={(e) =>
                patchParticipant(
                  index,
                  "fullName",
                  sanitizeName(e.target.value),
                )
              }
              placeholder="Enter full name"
              maxLength={80}
            />
          </InputField>
          <InputField label="Parent / Guardian Name" required>
            <TextInput
              value={p.parentGuardianName}
              onChange={(e) => {
                const v = sanitizeName(e.target.value);
                patchParticipant(index, "parentGuardianName", v);
                if (isPrimary)
                  patchSection("parentGuardian", "parentGuardianName", v);
              }}
              placeholder="Enter parent / guardian name"
              maxLength={80}
            />
          </InputField>
          <InputField
            label="Date of Birth"
            required
            hint="Type DD/MM/YYYY or click the calendar"
          >
            <DobField
              value={p.dateOfBirth}
              onChange={(val) => updateParticipantDob(index, val)}
            />
          </InputField>
          <InputField label="Age">
            <TextInput
              value={p.age}
              placeholder="Auto-calculated"
              readOnly
              className="vbr-clean-input is-readonly"
            />
          </InputField>
          <InputField label="Relationship to Participant" required>
            <SmoothSelect
              value={p.relationship}
              onChange={(v) => {
                patchParticipant(index, "relationship", v);
                if (isPrimary)
                  patchSection("parentGuardian", "relationship", v);
              }}
              options={RELATIONSHIP_OPTIONS.slice(0, -1)}
              placeholder="Select relationship"
            />
          </InputField>
          <InputField label="Gender" required>
            <SmoothSelect
              value={p.gender}
              onChange={(v) => patchParticipant(index, "gender", v)}
              options={GENDER_OPTIONS.slice(0, -1)}
              placeholder="Select gender"
            />
          </InputField>
          <InputField label="Class / Grade" required>
            <SmoothSelect
              value={p.classGradeSection}
              onChange={(v) => patchParticipant(index, "classGradeSection", v)}
              options={CLASS_OPTIONS}
              placeholder="Select class / grade"
              showOther={false}
            />
          </InputField>
          <InputField label="Mobile Number" required hint="10 digits only">
            <TextInput
              value={p.mobileEmergencyNumber}
              onChange={(e) =>
                patchParticipant(
                  index,
                  "mobileEmergencyNumber",
                  sanitizeDigits(e.target.value, 10),
                )
              }
              placeholder="Enter 10-digit mobile number"
              inputMode="numeric"
              maxLength={10}
            />
          </InputField>
        </div>

        <div className="vbr-section-label" style={{ marginTop: 24 }}>
          Contact & Address
        </div>
        <div className="vbr-grid-2">
          <InputField
            label="Parent Mobile Number"
            required
            hint="10 digits only"
          >
            <TextInput
              value={
                isPrimary
                  ? form.parentGuardian.parentMobileNumber
                  : p.mobileEmergencyNumber
              }
              onChange={(e) => {
                const v = sanitizeDigits(e.target.value, 10);
                if (isPrimary)
                  patchSection("parentGuardian", "parentMobileNumber", v);
                patchParticipant(index, "mobileEmergencyNumber", v);
              }}
              placeholder="Enter 10-digit mobile number"
              inputMode="numeric"
              maxLength={10}
            />
          </InputField>
          <InputField label="Parent Email Address">
            <TextInput
              type="email"
              value={isPrimary ? form.parentGuardian.parentEmail : p.email}
              onChange={(e) => {
                const v = sanitizeEmail(e.target.value);
                if (isPrimary) patchSection("parentGuardian", "parentEmail", v);
                patchParticipant(index, "email", v);
              }}
              placeholder="Enter email address"
              maxLength={120}
            />
          </InputField>
          <InputField label="City" required>
            <TextInput
              value={p.districtCity}
              onChange={(e) => {
                const v = sanitizeName(e.target.value, 60);
                patchParticipant(index, "districtCity", v);
                if (isPrimary) patchSection("parentGuardian", "city", v);
              }}
              placeholder="Enter city"
              maxLength={60}
            />
          </InputField>
          <InputField label="State" required>
            <SmoothSelect
              value={p.state}
              onChange={(v) => {
                patchParticipant(index, "state", v);
                if (isPrimary) patchSection("parentGuardian", "state", v);
              }}
              options={STATE_OPTIONS}
              placeholder="Select state"
            />
          </InputField>
          <InputField label="Pincode" required>
            <TextInput
              value={p.pincode}
              onChange={(e) => {
                const v = sanitizeDigits(e.target.value, 6);
                patchParticipant(index, "pincode", v);
                if (isPrimary) patchSection("parentGuardian", "pincode", v);
              }}
              placeholder="Enter 6-digit pincode"
              inputMode="numeric"
              maxLength={6}
            />
          </InputField>
          <InputField label="Student Email Address">
            <TextInput
              type="email"
              value={p.email}
              onChange={(e) =>
                patchParticipant(index, "email", sanitizeEmail(e.target.value))
              }
              placeholder="Enter email address"
              maxLength={120}
            />
          </InputField>
          <InputField label="Residence Address" required>
            <TextArea
              value={p.residenceAddress}
              onChange={(e) => {
                const v = sanitizeText(e.target.value, 220);
                patchParticipant(index, "residenceAddress", v);
                if (isPrimary)
                  patchSection("parentGuardian", "parentAddress", v);
              }}
              placeholder="Enter full address"
              maxLength={220}
            />
          </InputField>
          <InputField label="Other Areas of Interest">
            <TextArea
              value={p.otherAreasOfInterest}
              onChange={(e) =>
                patchParticipant(
                  index,
                  "otherAreasOfInterest",
                  sanitizeText(e.target.value, 160),
                )
              }
              placeholder="e.g. Science, Music, Sports…"
              maxLength={160}
            />
          </InputField>
        </div>
      </div>
    );
  }

  function renderSchoolStep() {
    return (
      <div className="vbr-form-stage">
        <div className="vbr-section-label">School Information</div>
        <div className="vbr-grid-2">
          <InputField label="School Name" required>
            <TextInput
              value={form.school.schoolName}
              onChange={(e) =>
                patchSection(
                  "school",
                  "schoolName",
                  sanitizeText(e.target.value, 80),
                )
              }
              placeholder="Enter school name"
              maxLength={80}
            />
          </InputField>
          <InputField label="Head of Institution Name">
            <TextInput
              value={form.school.headOfInstitutionName}
              onChange={(e) =>
                patchSection(
                  "school",
                  "headOfInstitutionName",
                  sanitizeName(e.target.value),
                )
              }
              placeholder="Enter head of institution name"
              maxLength={80}
            />
          </InputField>
          <InputField label="Affiliation">
            <TextInput
              value={form.school.affiliation}
              onChange={(e) =>
                patchSection(
                  "school",
                  "affiliation",
                  sanitizeText(e.target.value, 80),
                )
              }
              placeholder="e.g. CBSE, ICSE, State Board"
              maxLength={80}
            />
          </InputField>
          <InputField label="Medium of Education">
            <SmoothSelect
              value={form.school.mediumOfEducation}
              onChange={(v) => patchSection("school", "mediumOfEducation", v)}
              options={MEDIUM_OPTIONS.slice(0, -1)}
              placeholder="Select medium"
            />
          </InputField>
          <InputField label="Classes From">
            <TextInput
              value={form.school.classesFrom}
              onChange={(e) =>
                patchSection(
                  "school",
                  "classesFrom",
                  sanitizeDigits(e.target.value, 2),
                )
              }
              placeholder="e.g. 1"
              inputMode="numeric"
              maxLength={2}
            />
          </InputField>
          <InputField label="Classes To">
            <TextInput
              value={form.school.classesTo}
              onChange={(e) =>
                patchSection(
                  "school",
                  "classesTo",
                  sanitizeDigits(e.target.value, 2),
                )
              }
              placeholder="e.g. 12"
              inputMode="numeric"
              maxLength={2}
            />
          </InputField>
          <InputField
            label="School Phone Number"
            required
            hint="10 digits only"
          >
            <TextInput
              value={form.school.schoolPhoneNumber}
              onChange={(e) =>
                patchSection(
                  "school",
                  "schoolPhoneNumber",
                  sanitizeDigits(e.target.value, 10),
                )
              }
              placeholder="Enter 10-digit phone number"
              inputMode="numeric"
              maxLength={10}
            />
          </InputField>
          <InputField label="School Email" required>
            <TextInput
              type="email"
              value={form.school.schoolEmail}
              onChange={(e) =>
                patchSection(
                  "school",
                  "schoolEmail",
                  sanitizeEmail(e.target.value),
                )
              }
              placeholder="Enter school email"
              maxLength={120}
            />
          </InputField>
          <InputField label="School Website">
            <TextInput
              value={form.school.schoolWebsite}
              onChange={(e) =>
                patchSection(
                  "school",
                  "schoolWebsite",
                  sanitizeText(e.target.value, 120),
                )
              }
              placeholder="e.g. www.schoolname.edu.in"
              maxLength={120}
            />
          </InputField>
          <InputField label="School Pincode" required>
            <TextInput
              value={form.school.schoolPincode}
              onChange={(e) =>
                patchSection(
                  "school",
                  "schoolPincode",
                  sanitizeDigits(e.target.value, 6),
                )
              }
              placeholder="Enter 6-digit pincode"
              inputMode="numeric"
              maxLength={6}
            />
          </InputField>
          <InputField label="School Contact Person">
            <TextInput
              value={form.school.schoolContactPerson}
              onChange={(e) =>
                patchSection(
                  "school",
                  "schoolContactPerson",
                  sanitizeName(e.target.value),
                )
              }
              placeholder="Enter contact person name"
              maxLength={80}
            />
          </InputField>
        </div>
        <InputField label="School Address" required>
          <TextArea
            value={form.school.schoolAddress}
            onChange={(e) =>
              patchSection(
                "school",
                "schoolAddress",
                sanitizeText(e.target.value, 220),
              )
            }
            placeholder="Enter complete school address"
            maxLength={220}
          />
        </InputField>

        <div className="vbr-section-label" style={{ marginTop: 24 }}>
          Teacher / Mentor
        </div>
        <div className="vbr-grid-2">
          <InputField label="Teacher / Registered Mentor Name" required>
            <TextInput
              value={form.mentor.teacherMentorName}
              onChange={(e) =>
                patchSection(
                  "mentor",
                  "teacherMentorName",
                  sanitizeName(e.target.value),
                )
              }
              placeholder="Enter mentor name"
              maxLength={80}
            />
          </InputField>
          <InputField
            label="Mentor Contact Number"
            required
            hint="10 digits only"
          >
            <TextInput
              value={form.mentor.teacherMentorContactNumber}
              onChange={(e) =>
                patchSection(
                  "mentor",
                  "teacherMentorContactNumber",
                  sanitizeDigits(e.target.value, 10),
                )
              }
              placeholder="Enter 10-digit number"
              inputMode="numeric"
              maxLength={10}
            />
          </InputField>
          <InputField label="Mentor Email" required>
            <TextInput
              type="email"
              value={form.mentor.teacherMentorEmail}
              onChange={(e) =>
                patchSection(
                  "mentor",
                  "teacherMentorEmail",
                  sanitizeEmail(e.target.value),
                )
              }
              placeholder="Enter mentor email"
              maxLength={120}
            />
          </InputField>
        </div>
      </div>
    );
  }

  function renderProgramStep() {
    return (
      <div className="vbr-form-stage">
        <div className="vbr-section-label">Competition & Payment</div>

        <div className="vbr-app-no-badge">
          <span className="vbr-app-no-label">Application ID</span>
          <strong className="vbr-app-no-value">{form.applicationNo}</strong>
        </div>

        <div className="vbr-program-grid">
          <InputField label="Category" required>
            <SmoothSelect
              value={form.category}
              onChange={(v) =>
                setForm((cur) => ({
                  ...cur,
                  category: v,
                  applicationNo: createAppNo(cur.competitionType, v),
                }))
              }
              options={CATEGORY_OPTIONS}
              placeholder="Select category"
              showOther={false}
            />
          </InputField>
          <div className="vbr-comp-badge-wrap">
            <span className="vbr-form-label">Selected Competition</span>
            <div className="vbr-comp-badge">{form.competitionType}</div>
            <small>Switch Debate / Speech above to change.</small>
          </div>
          <InputField label="Payment Mode" required>
            <SmoothSelect
              value={form.payment.paymentMode}
              onChange={(v) => patchSection("payment", "paymentMode", v)}
              options={PAYMENT_MODES.slice(0, -1)}
              placeholder="Select payment mode"
            />
          </InputField>
          <InputField
            label="UTR / Transaction Number"
            required
            hint="6–30 alphanumeric characters"
          >
            <TextInput
              value={form.payment.utrNumber}
              onChange={(e) =>
                patchSection(
                  "payment",
                  "utrNumber",
                  sanitizeAlphaNumeric(e.target.value, 30),
                )
              }
              placeholder="Enter UTR number"
              maxLength={30}
            />
          </InputField>
        </div>
      </div>
    );
  }

  function renderUploadsStep() {
    return (
      <div className="vbr-form-stage">
        <div className="vbr-section-label">Documents & Review</div>
        <p className="vbr-upload-desc">
          Upload clear, recent photos and documents so the admin team can verify
          your registration promptly.
        </p>

        <div className="vbr-grid-2">
          {form.participants.slice(0, participantCount).map((p, i) => (
            <React.Fragment key={p.participantNo}>
              <InputField label={`Participant ${i + 1} — Passport Photo`}>
                <FileInput
                  accept=".jpg,.jpeg,.png,.webp"
                  label="Upload passport photo"
                  onChange={(f) => patchParticipant(i, "participantPhoto", f)}
                />
              </InputField>
              <InputField label={`Participant ${i + 1} — School ID Card`}>
                <FileInput
                  accept=".pdf,.jpg,.jpeg,.png"
                  label="Upload school ID card"
                  onChange={(f) => patchParticipant(i, "schoolIdCard", f)}
                />
              </InputField>
            </React.Fragment>
          ))}
          <InputField label="Payment Screenshot">
            <FileInput
              accept=".jpg,.jpeg,.png,.pdf"
              label="Upload payment screenshot"
              onChange={(f) => patchSection("payment", "paymentScreenshot", f)}
            />
          </InputField>
          <InputField label="Consent Form (Optional)">
            <FileInput
              accept=".pdf,.jpg,.jpeg,.png"
              label="Upload consent form"
              onChange={(f) => patchSection("payment", "consentForm", f)}
            />
          </InputField>
        </div>

        <div className="vbr-review-strip">
          <div className="vbr-review-item">
            <span>App No.</span>
            <strong>{form.applicationNo}</strong>
          </div>
          <div className="vbr-review-item">
            <span>Competition</span>
            <strong>{form.competitionType}</strong>
          </div>
          <div className="vbr-review-item">
            <span>Category</span>
            <strong>{form.category}</strong>
          </div>
          <div className="vbr-review-item">
            <span>School</span>
            <strong>{form.school.schoolName || "—"}</strong>
          </div>
          <div className="vbr-review-item">
            <span>Participants</span>
            <strong>{participantCount}</strong>
          </div>
        </div>
      </div>
    );
  }

  function renderConfirmationStep() {
    return (
      <div className="vbr-form-stage">
        <div className="vbr-section-label">Final Declaration</div>
        <p className="vbr-upload-desc">
          Please read and confirm each statement before submitting your
          registration.
        </p>
        <div className="vbr-checks">
          {[
            {
              key: "infoCorrect",
              label:
                "I confirm that all information provided is accurate and complete.",
            },
            {
              key: "agreeTerms",
              label:
                "I agree to Verbattle's terms, conditions and code of conduct.",
              href: "/register/terms-and-conditions",
            },
            {
              key: "consentParticipation",
              label:
                "I consent to the participant taking part in the competition.",
            },
          ].map(({ key, label, href }) => (
            <label
              key={key}
              className={`vbr-check-row ${form.declaration[key] ? "is-checked" : ""}`}
            >
              <span className="vbr-checkbox-custom">
                {form.declaration[key] && <CheckIcon className="vb-icon-12" />}
              </span>
              <input
                type="checkbox"
                checked={form.declaration[key]}
                onChange={(e) => patchDeclaration(key, e.target.checked)}
                style={{
                  position: "absolute",
                  opacity: 0,
                  width: 0,
                  height: 0,
                }}
              />
              <span>
                {label}
                {href ? (
                  <>
                    {" "}
                    <a href={href} target="_blank" rel="noreferrer">
                      Read terms
                    </a>
                  </>
                ) : null}
              </span>
            </label>
          ))}
        </div>
      </div>
    );
  }

  function renderCurrentStep() {
    if (competitionKey === "speech") {
      if (currentStep === 0) return renderParticipantStep(0);
      if (currentStep === 1) return renderSchoolStep();
      if (currentStep === 2) return renderProgramStep();
      if (currentStep === 3) return renderUploadsStep();
      return renderConfirmationStep();
    }
    if (currentStep === 0) return renderParticipantStep(0);
    if (currentStep === 1) return renderParticipantStep(1);
    if (currentStep === 2) return renderSchoolStep();
    if (currentStep === 3) return renderProgramStep();
    if (currentStep === 4) return renderUploadsStep();
    return renderConfirmationStep();
  }

  const currentMeta = STEP_META[competitionKey][currentStep];

  return (
    <>
      <style>{`
        /* ─── Base ──────────────────────────────────────────────────────────── */
        .vbr-register-clean {
          min-height: 100vh;
          padding-top: 92px;
          background: #f4f1ea;
          color: #102746;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif;
        }

        .vbr-register-hero {
          background: linear-gradient(180deg, rgba(49, 49, 49, 0.96) 0%, rgba(69, 69, 69, 0.96) 100%);
          color: #fff;
        }

        .vbr-register-hero__inner {
          width: min(1240px, calc(100% - 32px));
          margin: 0 auto;
          display: flex;
          justify-content: center;
          padding: 62px 0 56px;
          text-align: center;
        }

        .vbr-register-hero__content {
          max-width: 520px;
        }

        .vbr-register-wrap {
          width: min(1240px, calc(100% - 32px));
          margin: 0 auto;
          padding: 28px 0 64px;
        }

        /* ─── Page Header ───────────────────────────────────────────────────── */
        .vbr-register-toolbar {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: center;
          margin-bottom: 28px;
        }

        .vbr-register-chip {
          display: inline-block;
          margin-bottom: 12px;
          color: #ff5a3d;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .vbr-register-hero__content h1 {
          margin: 0;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #fff;
          text-transform: uppercase;
        }

        .vbr-header-sub {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 0.84rem;
          font-weight: 600;
        }

        .vbr-header-sub span {
          margin: 0 8px;
          color: #ff5a3d;
        }

        .vbr-register-toolbar__copy {
          max-width: 520px;
        }

        .vbr-register-toolbar__copy strong {
          display: block;
          margin-bottom: 6px;
          color: #08234d;
          font-size: 1.1rem;
        }

        .vbr-register-toolbar__copy p {
          margin: 0;
          color: #5c6878;
          font-size: 0.94rem;
          line-height: 1.72;
        }

        .vbr-register-toolbar__copy .vbr-header-sub {
          margin: 0;
          color: #5c6878;
          font-size: 0.94rem;
          font-weight: 400;
        }

        /* ─── Type Switcher ─────────────────────────────────────────────────── */
        .vbr-type-switcher {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          min-width: 380px;
        }

        .vbr-type-card {
          padding: 20px 22px;
          border: 1.5px solid rgba(8,35,77,0.12);
          border-radius: 20px;
          background: linear-gradient(180deg, #ffffff 0%, #f9fbff 100%);
          box-shadow: 0 14px 30px rgba(8,35,77,0.06);
          text-align: left;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(.4,0,.2,1);
        }

        .vbr-type-card:hover { transform: translateY(-2px); border-color: rgba(8,35,77,0.18); box-shadow: 0 18px 36px rgba(8,35,77,0.08); }

        .vbr-type-card.is-active {
          border-color: rgba(209, 27, 47, 0.35);
          background: linear-gradient(160deg, #fff7f8 0%, #ffffff 100%);
          box-shadow: 0 18px 40px rgba(209,27,47,0.12);
        }

        .vbr-type-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 12px;
          background: #edf3fb;
          margin-bottom: 12px;
          color: #4f6480;
          transition: all 0.22s;
        }

        .vbr-type-card.is-active .vbr-type-card-icon {
          background: linear-gradient(135deg, #d11b2f 0%, #f04c3a 100%);
          color: #fff;
        }

        .vbr-type-card strong { display: block; font-size: 1.1rem; font-weight: 800; margin-bottom: 4px; }
        .vbr-type-card span { font-size: 0.82rem; color: #6f7f95; }
        .vbr-type-card.is-active span { color: #d11b2f; }

        /* ─── Card ──────────────────────────────────────────────────────────── */
        .vbr-register-card {
          position: relative;
          padding: 34px;
          border: 1px solid rgba(8,35,77,0.1);
          border-radius: 28px;
          background: rgba(255,255,255,0.94);
          box-shadow: 0 24px 60px rgba(8,35,77,0.1);
          backdrop-filter: blur(10px);
        }

        /* ─── Stepper ───────────────────────────────────────────────────────── */
        .vbr-stepper {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 8px;
          margin-bottom: 36px;
        }

        .vbr-stepper-item {
          position: relative;
          display: grid;
          justify-items: center;
          gap: 8px;
          padding: 8px 4px;
          border: 0;
          background: transparent;
          color: #7d8ca3;
          cursor: pointer;
          transition: color 0.2s;
        }

        .vbr-stepper-item:disabled { cursor: default; }

        .vbr-stepper-item::after {
          content: "";
          position: absolute;
          top: 20px;
          left: calc(50% + 26px);
          width: calc(100% - 52px);
          height: 1px;
          background: linear-gradient(90deg, rgba(8,35,77,0.16) 0%, transparent 100%);
        }

        .vbr-stepper-item:last-child::after { display: none; }

        .vbr-stepper-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(8,35,77,0.14);
          background: #f7faff;
          transition: all 0.25s cubic-bezier(.4,0,.2,1);
        }

        .vbr-stepper-label { font-size: 0.74rem; font-weight: 600; text-align: center; line-height: 1.3; }

        .vbr-stepper-item.is-current { color: #1f2937; }
        .vbr-stepper-item.is-current .vbr-stepper-icon {
          border-color: transparent;
          background: linear-gradient(135deg, #d11b2f 0%, #f04c3a 100%);
          color: #fff;
          box-shadow: 0 8px 20px rgba(209,27,47,0.3);
        }
        .vbr-stepper-item.is-complete { color: #6b7280; cursor: pointer; }
        .vbr-stepper-item.is-complete .vbr-stepper-icon {
          background: #eff5ff; border-color: rgba(8,35,77,0.18); color: #08234d;
        }

        /* ─── Stage Head ────────────────────────────────────────────────────── */
        .vbr-stage-head {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(8,35,77,0.1);
        }

        .vbr-stage-kicker {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(209, 27, 47, 0.08);
          color: #d11b2f;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .vbr-stage-head h2 { margin: 0; font-size: 1.7rem; font-weight: 800; letter-spacing: -0.01em; color: #08234d; }

        .vbr-stage-progress { min-width: 200px; }
        .vbr-stage-progress > span { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.84rem; font-weight: 700; color: #4f6480; }
        .vbr-progress-bar { height: 8px; border-radius: 999px; background: #e8eef7; overflow: hidden; }
        .vbr-progress-fill { height: 100%; border-radius: inherit; background: linear-gradient(90deg, #08234d 0%, #d11b2f 100%); transition: width 0.4s cubic-bezier(.4,0,.2,1); }

        /* ─── Section Labels ────────────────────────────────────────────────── */
        .vbr-section-label {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 16px;
        }

        /* ─── Form Layout ───────────────────────────────────────────────────── */
        .vbr-form-stage { display: grid; gap: 0; }
        .vbr-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .vbr-program-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-top: 16px; }

        /* ─── Form Fields ───────────────────────────────────────────────────── */
        .vbr-form-field { display: grid; gap: 6px; }
        .vbr-form-label { font-size: 0.88rem; font-weight: 700; color: #21344f; }
        .vbr-required { color: #d11b2f; margin-left: 2px; }
        .vbr-field-hint { font-size: 0.76rem; color: #7b8ca3; margin-top: -2px; }

        .vbr-clean-input {
          width: 100%;
          min-height: 54px;
          padding: 0 16px;
          border: 1.5px solid rgba(8,35,77,0.16);
          border-radius: 14px;
          background: #ffffff;
          color: #1f2937;
          font: inherit;
          font-size: 0.93rem;
          transition: all 0.2s cubic-bezier(.4,0,.2,1);
          box-sizing: border-box;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
        }

        .vbr-clean-input:hover { border-color: rgba(8,35,77,0.24); background: #fff; }
        .vbr-clean-input:focus { outline: none; border-color: #08234d; background: #fff; box-shadow: 0 0 0 4px rgba(8,35,77,0.09); }
        .vbr-clean-input.is-readonly { background: #f4f7fb; color: #6b7280; cursor: not-allowed; }

        .vbr-clean-textarea { min-height: 112px; padding: 14px 16px; resize: vertical; }

        /* ─── DOB ───────────────────────────────────────────────────────────── */
        .vbr-dob-wrap { position: relative; }
        .vbr-dob-input-row { display: flex; gap: 8px; }
        .vbr-dob-input-row .vbr-clean-input { flex: 1; }

        .vbr-cal-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px; height: 54px;
          flex-shrink: 0;
          border: 1.5px solid rgba(8,35,77,0.16);
          border-radius: 14px;
          background: #fff;
          color: #4f6480;
          cursor: pointer;
          transition: all 0.2s;
        }
        .vbr-cal-toggle:hover, .vbr-cal-toggle.is-open { border-color: #08234d; background: #f4f8ff; color: #08234d; }

        /* ─── Calendar ──────────────────────────────────────────────────────── */
        .vbr-calendar {
          position: absolute;
          z-index: 30;
          top: calc(100% + 8px);
          left: 0;
          width: 300px;
          padding: 16px;
          border: 1px solid rgba(8,35,77,0.12);
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 24px 60px rgba(8,35,77,0.16);
        }

        .vbr-cal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }

        .vbr-cal-nav {
          display: flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 8px; border: 1px solid #e5e7eb;
          background: #fff; color: #374151; cursor: pointer; transition: all 0.15s;
        }
        .vbr-cal-nav:hover { background: #f4f8ff; border-color: rgba(8,35,77,0.18); color: #08234d; }

        .vbr-cal-title { display: flex; gap: 6px; align-items: center; }
        .vbr-cal-label-btn {
          padding: 4px 10px; border: 0; border-radius: 8px; background: transparent;
          font-weight: 800; font-size: 0.9rem; color: #1f2937; cursor: pointer; transition: background 0.15s;
        }
        .vbr-cal-label-btn:hover { background: #f4f8ff; color: #08234d; }

        .vbr-cal-weekdays { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; margin-bottom: 6px; }
        .vbr-cal-weekdays span { text-align: center; font-size: 0.72rem; font-weight: 700; color: #94a3b8; padding: 4px 0; }

        .vbr-cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; }
        .vbr-cal-day {
          display: flex; align-items: center; justify-content: center;
          height: 36px; border-radius: 8px; border: 0; background: transparent;
          font-size: 0.85rem; color: #374151; cursor: pointer; transition: all 0.15s;
        }
        .vbr-cal-day:hover:not(.disabled):not(.empty) { background: #f4f8ff; color: #08234d; }
        .vbr-cal-day.today { font-weight: 800; color: #d11b2f; }
        .vbr-cal-day.selected { background: linear-gradient(135deg, #08234d, #d11b2f) !important; color: #fff !important; font-weight: 700; }
        .vbr-cal-day.disabled { color: #cbd5e1; cursor: not-allowed; }
        .vbr-cal-day.empty { cursor: default; }

        .vbr-cal-month-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding-top: 4px; }
        .vbr-cal-month-btn {
          padding: 10px 6px; border: 1px solid #e2eaf5; border-radius: 10px; background: #f8fbff;
          font-size: 0.82rem; font-weight: 700; color: #374151; cursor: pointer; transition: all 0.15s;
        }
        .vbr-cal-month-btn:hover { background: #f4f8ff; border-color: rgba(8,35,77,0.18); color: #08234d; }
        .vbr-cal-month-btn.selected { background: linear-gradient(135deg, #08234d, #d11b2f); border-color: transparent; color: #fff; }

        .vbr-cal-year-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; max-height: 220px; overflow-y: auto; padding-top: 4px; }
        .vbr-cal-year-btn {
          padding: 8px 4px; border: 1px solid #e2eaf5; border-radius: 10px; background: #f8fbff;
          font-size: 0.82rem; font-weight: 700; color: #374151; cursor: pointer; transition: all 0.15s;
        }
        .vbr-cal-year-btn:hover { background: #f4f8ff; border-color: rgba(8,35,77,0.18); color: #08234d; }
        .vbr-cal-year-btn.selected { background: linear-gradient(135deg, #08234d, #d11b2f); border-color: transparent; color: #fff; }

        /* ─── Smooth Select ─────────────────────────────────────────────────── */
        .vbr-smooth-select { position: relative; }

        .vbr-smooth-trigger {
          display: flex !important;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          cursor: pointer;
        }

        .vbr-smooth-trigger span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #9ca3af; }
        .vbr-smooth-trigger.is-filled span, .vbr-smooth-trigger.is-open span { color: #1f2937; }
        .vbr-smooth-trigger.is-open { border-color: #08234d; box-shadow: 0 0 0 4px rgba(8,35,77,0.09); background: #fff; }

        .vbr-chevron { transition: transform 0.22s cubic-bezier(.4,0,.2,1); flex-shrink: 0; color: #7b8ca3; }
        .vbr-chevron.rotated { transform: rotate(180deg); color: #08234d; }

        .vbr-smooth-menu {
          position: absolute;
          z-index: 25;
          top: calc(100% + 6px);
          left: 0; right: 0;
          border: 1px solid rgba(8,35,77,0.12);
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 22px 52px rgba(8,35,77,0.14);
          overflow: hidden;
        }

        .vbr-smooth-search-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-bottom: 1px solid #edf2fa;
        }
        .vbr-search-icon { color: #7b8ca3; flex-shrink: 0; }
        .vbr-smooth-search { flex: 1; border: 0; outline: none; font: inherit; font-size: 0.9rem; color: #1f2937; background: transparent; }

        .vbr-smooth-options { max-height: 220px; overflow-y: auto; padding: 8px; display: grid; gap: 2px; }

        .vbr-smooth-option {
          display: flex; justify-content: space-between; align-items: center; gap: 8px;
          width: 100%; padding: 10px 12px;
          border: 0; border-radius: 10px; background: transparent;
          color: #374151; font: inherit; font-size: 0.9rem; text-align: left; cursor: pointer;
          transition: background 0.15s;
        }
        .vbr-smooth-option:hover { background: #f5f8fe; color: #08234d; }
        .vbr-smooth-option.is-active { background: rgba(209,27,47,0.08); color: #d11b2f; font-weight: 700; }

        .vbr-smooth-empty { padding: 12px; color: #94a3b8; font-size: 0.88rem; text-align: center; }

        .vbr-other-input { margin-top: 8px; }

        /* ─── File Upload ───────────────────────────────────────────────────── */
        .vbr-file-zone {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          min-height: 132px;
          justify-content: center;
          padding: 20px 16px;
          border: 1.5px dashed rgba(8,35,77,0.18);
          border-radius: 14px;
          background: #fbfdff;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
        }
        .vbr-file-zone:hover { border-color: rgba(209,27,47,0.28); background: #fff8f8; }
        .vbr-file-icon { color: #4f6480; }
        .vbr-file-zone:hover .vbr-file-icon { color: #d11b2f; }
        .vbr-file-label { font-size: 0.88rem; font-weight: 600; color: #21344f; }
        .vbr-file-sub { font-size: 0.76rem; color: #7b8ca3; }

        /* ─── App No Badge ──────────────────────────────────────────────────── */
        .vbr-app-no-badge {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 18px;
          border: 1px solid rgba(8,35,77,0.12);
          border-radius: 14px;
          background: linear-gradient(135deg, #f8fbff 0%, #ffffff 100%);
          margin-bottom: 20px;
        }
        .vbr-app-no-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #4f6480; }
        .vbr-app-no-value { font-size: 0.9rem; font-weight: 800; color: #08234d; letter-spacing: 0.04em; }

        /* ─── Comp Badge ────────────────────────────────────────────────────── */
        .vbr-comp-badge-wrap { display: grid; gap: 6px; }
        .vbr-comp-badge {
          display: inline-flex; align-items: center;
          min-height: 54px;
          padding: 0 16px;
          border: 1.5px solid rgba(8,35,77,0.14);
          border-radius: 14px;
          background: linear-gradient(135deg, #08234d 0%, #113465 100%);
          color: #fff; font-weight: 800; font-size: 1rem;
          width: fit-content;
        }
        .vbr-comp-badge-wrap small { color: #7b8ca3; font-size: 0.8rem; }

        /* ─── Review Strip ──────────────────────────────────────────────────── */
        .vbr-upload-desc { margin: 0 0 20px; color: #64748b; font-size: 0.92rem; }
        .vbr-review-strip {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 10px;
          margin-top: 24px;
          padding: 18px;
          border: 1px solid rgba(8,35,77,0.1);
          border-radius: 18px;
          background: linear-gradient(180deg, #fbfdff 0%, #f5f8fd 100%);
        }
        .vbr-review-item { }
        .vbr-review-item span { display: block; font-size: 0.76rem; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
        .vbr-review-item strong { font-size: 0.88rem; color: #1f2937; word-break: break-all; }

        /* ─── Declaration ───────────────────────────────────────────────────── */
        .vbr-checks { display: grid; gap: 10px; margin-top: 4px; }
        .vbr-check-row {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px;
          border: 1.5px solid rgba(8,35,77,0.1);
          border-radius: 14px;
          background: #fff;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }
        .vbr-check-row:hover { border-color: rgba(8,35,77,0.18); background: #f8fbff; }
        .vbr-check-row.is-checked { border-color: rgba(209,27,47,0.24); background: #fff8f8; }
        .vbr-checkbox-custom {
          display: flex; align-items: center; justify-content: center;
          width: 22px; height: 22px; flex-shrink: 0;
          border: 2px solid rgba(8,35,77,0.16); border-radius: 7px;
          background: #fff; transition: all 0.2s;
        }
        .vbr-check-row.is-checked .vbr-checkbox-custom {
          background: linear-gradient(135deg, #08234d, #d11b2f); border-color: transparent; color: #fff;
        }
        .vbr-check-row span:last-child { font-size: 0.92rem; color: #374151; line-height: 1.5; padding-top: 2px; }
        .vbr-check-row a {
          color: #d11b2f;
          font-weight: 800;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* ─── Messages ──────────────────────────────────────────────────────── */
        .vbr-inline-message {
          display: flex; align-items: flex-start; gap: 12px;
          margin-top: 20px; padding: 14px 18px;
          border-radius: 14px; font-size: 0.9rem; font-weight: 600; line-height: 1.5;
        }
        .vbr-inline-message--error { background: #fef2f2; color: #b91c1c; border: 1px solid #fecaca; }
        .vbr-inline-message--success { background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; }

        /* ─── Footer ────────────────────────────────────────────────────────── */
        .vbr-footer-actions {
          display: flex; justify-content: space-between; gap: 14px; align-items: center;
          margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9;
        }
        .vbr-footer-left, .vbr-footer-right { display: flex; gap: 10px; align-items: center; }

        .vbr-btn {
          display: inline-flex; align-items: center; gap: 8px;
          min-height: 46px; padding: 0 22px;
          border-radius: 999px; font: inherit; font-size: 0.9rem; font-weight: 800;
          cursor: pointer; transition: all 0.2s cubic-bezier(.4,0,.2,1);
        }
        .vbr-btn-secondary {
          border: 1.5px solid rgba(8,35,77,0.14); background: #fff; color: #21344f;
        }
        .vbr-btn-secondary:hover { border-color: rgba(8,35,77,0.22); background: #f7faff; }
        .vbr-btn-primary {
          border: 0; background: linear-gradient(135deg, #d11b2f 0%, #f04c3a 100%);
          color: #fff; box-shadow: 0 10px 26px rgba(209,27,47,0.26);
        }
        .vbr-btn-primary:hover { box-shadow: 0 14px 32px rgba(209,27,47,0.34); transform: translateY(-1px); }
        .vbr-btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none !important; box-shadow: none !important; }

        .vbr-draft-note { font-size: 0.85rem; font-weight: 700; color: #16a34a; }

        /* ─── Safety Strip ──────────────────────────────────────────────────── */
        .vbr-safety-strip {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: fit-content; margin: 20px auto 0; padding: 10px 20px;
          border: 1px solid rgba(8,35,77,0.1); border-radius: 999px; background: rgba(255,255,255,0.92);
          font-size: 0.84rem; color: #5c6878;
        }

        /* ─── Benefits Row ──────────────────────────────────────────────────── */
        .vbr-benefit-row {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 24px;
        }
        .vbr-benefit-item {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 18px 16px; border: 1px solid rgba(8,35,77,0.1); border-radius: 18px; background: rgba(255,255,255,0.94);
          box-shadow: 0 14px 30px rgba(8,35,77,0.05);
          text-align: center;
        }
        .vbr-benefit-icon {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 12px;
          background: linear-gradient(135deg, #edf3fb 0%, #fff3f3 100%);
          color: #08234d;
        }
        .vbr-benefit-item strong { font-size: 0.9rem; color: #08234d; }
        .vbr-benefit-item span { font-size: 0.8rem; color: #7b8ca3; }

        /* ─── Icon sizes ────────────────────────────────────────────────────── */
        .vb-icon-12 { width: 12px; height: 12px; }
        .vb-icon-14 { width: 14px; height: 14px; }
        .vb-icon-16 { width: 16px; height: 16px; }
        .vb-icon-20 { width: 20px; height: 20px; }

        /* ─── Responsive ────────────────────────────────────────────────────── */
        @media (max-width: 1100px) {
          .vbr-stepper { grid-template-columns: repeat(3, 1fr); }
          .vbr-stepper-item:nth-child(3n)::after { display: none; }
          .vbr-review-strip { grid-template-columns: repeat(3, 1fr); }
          .vbr-benefit-row { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 820px) {
          .vbr-register-toolbar, .vbr-stage-head, .vbr-footer-actions { flex-direction: column; align-items: stretch; }
          .vbr-type-switcher { min-width: 0; }
          .vbr-grid-2, .vbr-program-grid { grid-template-columns: 1fr; }
          .vbr-stepper-item::after { display: none; }
          .vbr-stepper {
            display: flex;
            gap: 10px;
            margin: 0 -4px 26px;
            padding: 0 4px 4px;
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: thin;
            scroll-snap-type: x proximity;
          }
          .vbr-stepper-item {
            min-width: 120px;
            min-height: 84px;
            padding: 10px 10px;
            border: 1px solid #f1f5f9;
            border-radius: 16px;
            background: #fff;
            flex: 0 0 auto;
            scroll-snap-align: start;
          }
          .vbr-stepper-label { font-size: 0.7rem; }
          .vbr-review-strip { grid-template-columns: repeat(2, 1fr); }
          .vbr-footer-left, .vbr-footer-right { width: 100%; }
          .vbr-footer-right { flex-direction: column; }
          .vbr-btn { width: 100%; justify-content: center; }
        }

        @media (max-width: 640px) {
          .vbr-register-clean { padding-top: 72px; }
          .vbr-register-hero__inner,
          .vbr-register-wrap { width: min(100% - 16px, 1240px); }
          .vbr-register-hero__inner { padding: 48px 0 42px; }
          .vbr-register-wrap { padding-top: 20px; }
          .vbr-register-card { padding: 20px 16px; border-radius: 20px; }
          .vbr-review-strip { grid-template-columns: 1fr 1fr; }
          .vbr-benefit-row { grid-template-columns: 1fr 1fr; }
          .vbr-calendar { width: calc(100vw - 64px); min-width: 260px; }
        }
      `}</style>

      <div className="vbr-register-clean">
        <section className="vbr-register-hero">
          <div className="vbr-register-hero__inner">
            <div className="vbr-register-hero__content">
              <span className="vbr-register-chip">Register</span>
              <h1>Register</h1>
              <p className="vbr-header-sub">
                Home <span>/</span> Register
              </p>
            </div>
          </div>
        </section>
        <section className="vbr-register-wrap">
          {/* ── Header ── */}
          <div className="vbr-register-toolbar">
            <div className="vbr-register-toolbar__copy">
              <strong>Choose your competition format</strong>
              <p className="vbr-header-sub">
                Pick your competition, fill in the details, and submit — all in
                one guided flow.
              </p>
            </div>
            <div className="vbr-type-switcher">
              {COMPETITION_TYPES.map((type) => {
                const active = form.competitionType === type;
                const count = type === "Debate" ? 2 : 1;
                return (
                  <button
                    key={type}
                    type="button"
                    className={`vbr-type-card ${active ? "is-active" : ""}`}
                    onClick={() => changeCompetitionType(type)}
                  >
                    <div className="vbr-type-card-icon">
                      <UsersIcon className="vb-icon-16" />
                    </div>
                    <strong>{type}</strong>
                    <span>
                      {count} participant{count > 1 ? "s" : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Form Card ── */}
          <form className="vbr-register-card" onSubmit={handleSubmit}>
            {/* Stepper */}
            <div className="vbr-stepper">
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  className={`vbr-stepper-item ${index === currentStep ? "is-current" : index < currentStep ? "is-complete" : ""}`}
                  onClick={() => {
                    if (index <= currentStep) setCurrentStep(index);
                  }}
                  disabled={index > currentStep}
                >
                  <span className="vbr-stepper-icon">
                    <StepIcon name={step.icon} />
                  </span>
                  <span className="vbr-stepper-label">{step.title}</span>
                </button>
              ))}
            </div>

            {/* Stage Head */}
            <div className="vbr-stage-head">
              <div>
                <span className="vbr-stage-kicker">
                  Step {currentStep + 1} of {steps.length}
                </span>
                <h2>{currentMeta.title}</h2>
              </div>
              <div className="vbr-stage-progress">
                <span>
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </span>
                <div className="vbr-progress-bar">
                  <div
                    className="vbr-progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Current Step */}
            {renderCurrentStep()}

            {/* Messages */}
            {submitError && (
              <div className="vbr-inline-message vbr-inline-message--error">
                {submitError}
              </div>
            )}
            {submitSuccess && (
              <div className="vbr-inline-message vbr-inline-message--success">
                Registration submitted! Your application number is:{" "}
                <strong>{submitSuccess.applicationNo}</strong>
              </div>
            )}

            {/* Footer */}
            <div className="vbr-footer-actions">
              <div className="vbr-footer-left">
                <button
                  type="button"
                  className="vbr-btn vbr-btn-secondary"
                  onClick={saveDraft}
                >
                  Save Draft
                </button>
                {draftSaved && (
                  <span className="vbr-draft-note">✓ Draft saved</span>
                )}
              </div>
              <div className="vbr-footer-right">
                <button
                  type="button"
                  className="vbr-btn vbr-btn-secondary"
                  onClick={previousStep}
                  disabled={currentStep === 0 || submitting}
                >
                  ← Back
                </button>
                {currentStep < lastStep ? (
                  <button
                    type="button"
                    className="vbr-btn vbr-btn-primary"
                    onClick={nextStep}
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="vbr-btn vbr-btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting…" : "Submit Registration"}
                  </button>
                )}
              </div>
            </div>
          </form>

          {/* Safety */}
          <div className="vbr-safety-strip">
            <ShieldIcon className="vb-icon-14" />
            <span>Your information is secure and will never be shared.</span>
          </div>

          {/* Benefits */}
          <div className="vbr-benefit-row">
            {[
              {
                icon: <ShieldIcon className="vb-icon-20" />,
                title: "Secure & Safe",
                sub: "100% secure registration",
              },
              {
                icon: <ZapIcon className="vb-icon-20" />,
                title: "Quick Process",
                sub: "Takes less than 3 minutes",
              },
              {
                icon: <StarIcon className="vb-icon-20" />,
                title: "Easy Steps",
                sub: "Simple and hassle-free",
              },
              {
                icon: <HeadphonesIcon className="vb-icon-20" />,
                title: "Need Help?",
                sub: "We're here to assist you",
              },
            ].map((b) => (
              <div key={b.title} className="vbr-benefit-item">
                <div className="vbr-benefit-icon">{b.icon}</div>
                <strong>{b.title}</strong>
                <span>{b.sub}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
