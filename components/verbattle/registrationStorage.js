export const DRAFT_KEY = "verbattle_registration_draft_v3";
export const REGISTRATION_SUBMISSIONS_KEY = "verbattle_registration_submissions_v1";
export const REGISTRATION_ADMIN_SESSION_KEY = "verbattle_registration_admin_session_v1";

export const FRONTEND_ADMIN_CREDENTIALS = {
  username: "admin",
  password: "verbattle123",
};

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
