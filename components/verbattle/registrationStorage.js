export const DRAFT_KEY = "verbattle_registration_draft_v3";
export const REGISTRATION_SUBMISSIONS_KEY = "verbattle_registration_submissions_v1";
export const REGISTRATION_ADMIN_SESSION_KEY = "verbattle_registration_admin_session_v1";
export const REGISTRATION_ADMIN_ATTEMPTS_KEY =
  "verbattle_registration_admin_attempts_v1";

const FRONTEND_ADMIN_CREDENTIAL_HASH =
  "23b17ea6e55f91533ef81c3d5a90262f1c1013033503f5fb5182b36a87ecb8a7";
const REGISTRATION_ADMIN_MAX_ATTEMPTS = 5;
const REGISTRATION_ADMIN_LOCKOUT_MS = 15 * 60 * 1000;

function safeJsonParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

export function serializeRegistrationForStorage(form) {
  return {
    applicationNo: form.applicationNo,
    competitionType: form.competitionType,
    category: form.category,
    school: { ...form.school },
    mentor: { ...form.mentor },
    participants: form.participants.map((participant) => ({
      ...participant,
      participantPhotoName: participant.participantPhoto?.name || "",
      schoolIdCardName: participant.schoolIdCard?.name || "",
      participantPhoto: null,
      schoolIdCard: null,
    })),
    parentGuardian: { ...form.parentGuardian },
    payment: {
      ...form.payment,
      paymentScreenshotName: form.payment.paymentScreenshot?.name || "",
      consentFormName: form.payment.consentForm?.name || "",
      paymentScreenshot: null,
      consentForm: null,
    },
    declaration: { ...form.declaration },
    submittedAt: new Date().toISOString(),
  };
}

export function getStoredRegistrations() {
  if (typeof window === "undefined") return [];

  const raw = window.localStorage.getItem(REGISTRATION_SUBMISSIONS_KEY);
  const parsed = safeJsonParse(raw || "[]", []);

  if (!Array.isArray(parsed)) return [];

  return parsed.sort((left, right) => {
    const leftTime = new Date(left.submittedAt || 0).getTime();
    const rightTime = new Date(right.submittedAt || 0).getTime();
    return rightTime - leftTime;
  });
}

export function saveRegistrationSubmission(form) {
  if (typeof window === "undefined") return null;

  const serialized = serializeRegistrationForStorage(form);
  const existing = getStoredRegistrations().filter(
    (entry) => entry.applicationNo !== serialized.applicationNo,
  );

  const next = [serialized, ...existing];
  window.localStorage.setItem(
    REGISTRATION_SUBMISSIONS_KEY,
    JSON.stringify(next),
  );

  return serialized;
}

export function getStoredRegistrationByApplicationNo(applicationNo) {
  return getStoredRegistrations().find(
    (entry) => entry.applicationNo === applicationNo,
  );
}

export function setRegistrationAdminSession() {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(REGISTRATION_ADMIN_SESSION_KEY, "true");
  window.localStorage.removeItem(REGISTRATION_ADMIN_ATTEMPTS_KEY);
}

export function clearRegistrationAdminSession() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(REGISTRATION_ADMIN_SESSION_KEY);
}

export function isRegistrationAdminAuthenticated() {
  if (typeof window === "undefined") return false;
  return (
    window.sessionStorage.getItem(REGISTRATION_ADMIN_SESSION_KEY) === "true"
  );
}

export function formatRegistrationDate(value) {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function getRegistrationAdminLockoutState() {
  if (typeof window === "undefined") {
    return {
      attempts: 0,
      lockedUntil: 0,
      remainingMs: 0,
      isLocked: false,
    };
  }

  const raw = window.localStorage.getItem(REGISTRATION_ADMIN_ATTEMPTS_KEY);
  const parsed = safeJsonParse(raw || "{}", {});
  const attempts = Number(parsed.attempts) || 0;
  const lockedUntil = Number(parsed.lockedUntil) || 0;
  const remainingMs = Math.max(0, lockedUntil - Date.now());

  if (!remainingMs && raw) {
    window.localStorage.removeItem(REGISTRATION_ADMIN_ATTEMPTS_KEY);
  }

  return {
    attempts: remainingMs ? attempts : 0,
    lockedUntil: remainingMs ? lockedUntil : 0,
    remainingMs,
    isLocked: remainingMs > 0,
  };
}

export function registerFailedRegistrationAdminAttempt() {
  if (typeof window === "undefined") {
    return getRegistrationAdminLockoutState();
  }

  const current = getRegistrationAdminLockoutState();
  const attempts = current.isLocked ? current.attempts : current.attempts + 1;
  const shouldLock = !current.isLocked && attempts >= REGISTRATION_ADMIN_MAX_ATTEMPTS;
  const next = {
    attempts,
    lockedUntil: shouldLock ? Date.now() + REGISTRATION_ADMIN_LOCKOUT_MS : 0,
  };

  window.localStorage.setItem(
    REGISTRATION_ADMIN_ATTEMPTS_KEY,
    JSON.stringify(next),
  );

  return getRegistrationAdminLockoutState();
}

export async function verifyRegistrationAdminCredentials(username, password) {
  if (typeof window === "undefined" || !window.crypto?.subtle) return false;

  const normalizedUsername = username.trim();
  const value = `${normalizedUsername}::${password}`;
  const buffer = await window.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  const hash = Array.from(new Uint8Array(buffer))
    .map((part) => part.toString(16).padStart(2, "0"))
    .join("");

  return hash === FRONTEND_ADMIN_CREDENTIAL_HASH;
}

function getParticipantNames(participants = []) {
  return participants
    .map((participant) => participant.fullName)
    .filter(Boolean)
    .join(", ");
}

function getParticipantValue(participants = [], index, key) {
  return participants?.[index]?.[key] || "";
}

export function buildRegistrationExportRows(records = []) {
  return records.map((record) => ({
    "Application No": record.applicationNo || "",
    "Competition Type": record.competitionType || "",
    Category: record.category || "",
    "Submitted At": formatRegistrationDate(record.submittedAt),
    "School Name": record.school?.schoolName || "",
    "Head Of Institution": record.school?.headOfInstitutionName || "",
    "School Contact Person": record.school?.schoolContactPerson || "",
    "School Phone": record.school?.schoolPhoneNumber || "",
    "School Email": record.school?.schoolEmail || "",
    "School Address": record.school?.schoolAddress || "",
    "Mentor Name": record.mentor?.teacherMentorName || "",
    "Mentor Contact": record.mentor?.teacherMentorContactNumber || "",
    "Mentor Email": record.mentor?.teacherMentorEmail || "",
    Participants: getParticipantNames(record.participants),
    "Participant 1 Name": getParticipantValue(record.participants, 0, "fullName"),
    "Participant 1 Mobile": getParticipantValue(
      record.participants,
      0,
      "mobileEmergencyNumber",
    ),
    "Participant 2 Name": getParticipantValue(record.participants, 1, "fullName"),
    "Participant 2 Mobile": getParticipantValue(
      record.participants,
      1,
      "mobileEmergencyNumber",
    ),
    "Parent / Guardian": record.parentGuardian?.parentGuardianName || "",
    "Parent Mobile": record.parentGuardian?.parentMobileNumber || "",
    "Payment Mode": record.payment?.paymentModeOther || record.payment?.paymentMode || "",
    "UTR Number": record.payment?.utrNumber || "",
    "Payment Screenshot": record.payment?.paymentScreenshotName || "",
    "Consent Form": record.payment?.consentFormName || "",
  }));
}
