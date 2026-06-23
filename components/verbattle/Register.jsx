"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "./icons";

const DRAFT_KEY = "verbattle_registration_draft_v2";
const COMPETITION_TYPES = ["Debate", "Speech"];
const CATEGORY_OPTIONS = ["Beginner", "Junior", "Junior Plus", "Kannada"];
const GENDER_OPTIONS = ["Male", "Female", "Other", "Prefer not to say"];
const PAYMENT_MODES = ["UPI", "Bank Transfer", "Cash", "Other"];
const MEDIUM_OPTIONS = ["English", "Kannada", "Hindi", "Other"];
const RELATIONSHIP_OPTIONS = ["Father", "Mother", "Guardian", "Sibling", "Other"];
const NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]{1,79}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MOBILE_REGEX = /^\d{10}$/;
const PINCODE_REGEX = /^\d{6}$/;
const DOB_REGEX = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const UTR_REGEX = /^[A-Z0-9]{6,30}$/;
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
  "Karnataka",
  "Kerala",
  "Maharashtra",
  "Tamil Nadu",
  "Telangana",
  "West Bengal",
];

const STEP_META = {
  speech: [
    { title: "Student Details", icon: "Users" },
    { title: "School & Mentor", icon: "Building" },
    { title: "Program Details", icon: "BadgeCheck" },
    { title: "Upload & Review", icon: "Upload" },
    { title: "Confirmation", icon: "CheckCircle" },
  ],
  debate: [
    { title: "Student 1", icon: "Users" },
    { title: "Student 2", icon: "Users" },
    { title: "School & Mentor", icon: "Building" },
    { title: "Program Details", icon: "BadgeCheck" },
    { title: "Upload & Review", icon: "Upload" },
    { title: "Confirmation", icon: "CheckCircle" },
  ],
};

function createParticipant(index) {
  return {
    participantNo: index + 1,
    fullName: "",
    dateOfBirth: "",
    age: "",
    gender: "",
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
    pincode: "",
    residencePhone: "",
    mobileEmergencyNumber: "",
    email: "",
    otherAreasOfInterest: "",
    parentGuardianName: "",
    relationship: "",
    participantPhoto: null,
    schoolIdCard: null,
  };
}

function getCompetitionCode(type) {
  return type === "Speech" ? "SP" : "DB";
}

function getCategoryCode(category) {
  return (category || "GEN")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 3) || "GEN";
}

function getDateStamp() {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function getRandomTrackingChunk(length = 6) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const values = new Uint32Array(length);
    crypto.getRandomValues(values);
    return Array.from(values, (value) => alphabet[value % alphabet.length]).join("");
  }

  return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
}

function createApplicationNumber(competitionType, category) {
  return `VBT-${getDateStamp()}-${getCompetitionCode(competitionType)}-${getCategoryCode(category)}-${getRandomTrackingChunk()}`;
}

function createInitialForm() {
  const competitionType = "Debate";
  const category = "Beginner";

  return {
    applicationNo: createApplicationNumber(competitionType, category),
    competitionType,
    category,
    school: {
      schoolName: "",
      headOfInstitutionName: "",
      affiliation: "",
      mediumOfEducation: "",
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
      parentEmail: "",
      parentMobileNumber: "",
      parentAddress: "",
      city: "",
      state: "",
      pincode: "",
    },
    payment: {
      paymentMode: "",
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

function resolveApplicationNumber(serverValue, fallbackValue) {
  if (typeof serverValue === "string" && serverValue.trim()) {
    return serverValue.trim();
  }

  return fallbackValue;
}

function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_REGISTRATION_API_URL ||
    "http://localhost/verbattle-admin/backend/api"
  );
}

function getStepMeta(formType, step) {
  return STEP_META[formType][step];
}

function InputField({ label, required, children }) {
  return (
    <label className="vbr-form-field">
      <span className="vbr-form-label">
        {label}
        {required ? <span className="vbr-required">*</span> : null}
      </span>
      {children}
    </label>
  );
}

function TextInput(props) {
  return <input className="vbr-clean-input" {...props} />;
}

function sanitizeDigits(value, maxLength) {
  return value.replace(/\D/g, "").slice(0, maxLength);
}

function sanitizeName(value, maxLength = 80) {
  return value.replace(/[^A-Za-z\s.'-]/g, "").replace(/\s{2,}/g, " ").slice(0, maxLength);
}

function sanitizeEmail(value, maxLength = 120) {
  return value.replace(/\s/g, "").slice(0, maxLength).toLowerCase();
}

function sanitizeText(value, maxLength = 160) {
  return value.replace(/\s{2,}/g, " ").slice(0, maxLength);
}

function sanitizeAlphaNumeric(value, maxLength = 30) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, maxLength);
}

function formatDobInput(value) {
  const digits = sanitizeDigits(value, 8);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 4) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }

  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

function parseDob(value) {
  if (!DOB_REGEX.test(value)) {
    return null;
  }

  const [day, month, year] = value.split("/").map(Number);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function calculateAgeFromDob(value) {
  const dob = parseDob(value);

  if (!dob) {
    return "";
  }

  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age -= 1;
  }

  return age >= 0 && age <= 99 ? String(age) : "";
}

function isValidEmail(value) {
  return !value || EMAIL_REGEX.test(value);
}

function isValidName(value) {
  return NAME_REGEX.test(value.trim());
}

function isValidPhone(value) {
  return MOBILE_REGEX.test(value);
}

function isValidPincode(value) {
  return PINCODE_REGEX.test(value);
}

function isValidDob(value) {
  const dob = parseDob(value);

  if (!dob) {
    return false;
  }

  return dob <= new Date();
}

function isValidUtr(value) {
  return UTR_REGEX.test(value);
}

function isValidWebsite(value) {
  if (!value) {
    return true;
  }

  try {
    const url = value.startsWith("http://") || value.startsWith("https://") ? value : `https://${value}`;
    return Boolean(new URL(url).hostname);
  } catch {
    return false;
  }
}

function NativeSelect({ children, ...props }) {
  return (
    <select className="vbr-clean-input" {...props}>
      {children}
    </select>
  );
}

function SmoothSelect({ value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
        setQuery("");
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes((open ? query : "").toLowerCase()),
  );

  return (
    <div className="vbr-smooth-select" ref={ref}>
      <button
        type="button"
        className={`vbr-clean-input vbr-smooth-trigger ${open ? "is-open" : ""} ${value ? "is-filled" : ""}`}
        onClick={() => {
          setOpen((current) => !current);
          setQuery("");
        }}
      >
        <span>{value || placeholder}</span>
        <Icon.ChevronDown className="vb-icon-14" />
      </button>

      {open ? (
        <div className="vbr-smooth-menu">
          <input
            className="vbr-smooth-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`Search ${placeholder.toLowerCase()}`}
            autoFocus
          />

          <div className="vbr-smooth-options">
            {filteredOptions.length ? (
              filteredOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`vbr-smooth-option ${value === option ? "is-active" : ""}`}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                    setQuery("");
                  }}
                >
                  <span>{option}</span>
                  {value === option ? <Icon.Check className="vb-icon-14" /> : null}
                </button>
              ))
            ) : (
              <div className="vbr-smooth-empty">No matching options</div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function TextArea(props) {
  return <textarea className="vbr-clean-input vbr-clean-textarea" rows={4} {...props} />;
}

function FileInput({ onChange, accept }) {
  return (
    <input
      className="vbr-clean-input vbr-clean-file"
      type="file"
      accept={accept}
      onChange={(event) => onChange(event.target.files?.[0] || null)}
    />
  );
}

function StepIcon({ name }) {
  const map = {
    Users: Icon.Users,
    Building: Icon.Building,
    BadgeCheck: Icon.BadgeCheck,
    Upload: Icon.ArrowUpRight,
    CheckCircle: Icon.Check,
  };

  const Selected = map[name] || Icon.Check;
  return <Selected className="vb-icon-16" />;
}

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

  useEffect(() => {
    const raw = window.localStorage.getItem(DRAFT_KEY);

    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      setForm((current) => ({
        ...current,
        ...parsed,
        participants: current.participants.map((participant, index) => ({
          ...participant,
          ...(parsed.participants?.[index] || {}),
          participantPhoto: null,
          schoolIdCard: null,
        })),
        payment: {
          ...current.payment,
          ...(parsed.payment || {}),
          paymentScreenshot: null,
          consentForm: null,
        },
      }));
    } catch {
      window.localStorage.removeItem(DRAFT_KEY);
    }
  }, []);

  const progress = useMemo(() => ((currentStep + 1) / steps.length) * 100, [currentStep, steps.length]);

  function changeCompetitionType(type) {
    setForm((current) => ({
      ...current,
      applicationNo: createApplicationNumber(type, current.category),
      competitionType: type,
    }));
    setCurrentStep(0);
    setSubmitError("");
    setSubmitSuccess(null);
  }

  function patchSection(section, key, value) {
    setForm((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [key]: value,
      },
    }));
  }

  function patchParticipant(index, key, value) {
    setForm((current) => ({
      ...current,
      participants: current.participants.map((participant, participantIndex) =>
        participantIndex === index ? { ...participant, [key]: value } : participant,
      ),
    }));
  }

  function patchDeclaration(key, value) {
    setForm((current) => ({
      ...current,
      declaration: {
        ...current.declaration,
        [key]: value,
      },
    }));
  }

  function updateParticipantDob(index, nextValue) {
    const formatted = formatDobInput(nextValue);
    const nextAge = calculateAgeFromDob(formatted);

    setForm((current) => ({
      ...current,
      participants: current.participants.map((participant, participantIndex) =>
        participantIndex === index
          ? { ...participant, dateOfBirth: formatted, age: nextAge }
          : participant,
      ),
    }));
  }

  function getParticipantValidationError(index) {
    const participant = form.participants[index];
    const label = form.competitionType === "Debate" ? `Student ${index + 1}` : "Student";

    if (!isValidName(participant.fullName)) {
      return `${label} name must contain only letters and be 2 to 80 characters long.`;
    }

    if (!isValidName(participant.parentGuardianName)) {
      return `Parent / guardian name for ${label.toLowerCase()} is invalid.`;
    }

    if (!isValidDob(participant.dateOfBirth)) {
      return `${label} date of birth must be in DD/MM/YYYY format and be a real past date.`;
    }

    if (!participant.age) {
      return `${label} age could not be calculated from the date of birth.`;
    }

    if (!participant.gender) {
      return `Please select gender for ${label.toLowerCase()}.`;
    }

    if (!isValidPhone(participant.mobileEmergencyNumber)) {
      return `${label} mobile number must be exactly 10 digits.`;
    }

    if (!participant.classGradeSection) {
      return `Please select class / grade for ${label.toLowerCase()}.`;
    }

    if (participant.email && !isValidEmail(participant.email)) {
      return `${label} email address is invalid.`;
    }

    if (!participant.relationship) {
      return `Please select the relationship for ${label.toLowerCase()}.`;
    }

    if (!participant.districtCity.trim() || participant.districtCity.trim().length < 2) {
      return `${label} city is required.`;
    }

    if (!participant.state) {
      return `Please select state for ${label.toLowerCase()}.`;
    }

    if (!participant.residenceAddress.trim() || participant.residenceAddress.trim().length < 8) {
      return `${label} address must be at least 8 characters long.`;
    }

    if (!isValidPincode(participant.pincode)) {
      return `${label} pincode must be exactly 6 digits.`;
    }

    if (index === 0) {
      if (!isValidPhone(form.parentGuardian.parentMobileNumber)) {
        return "Parent mobile number must be exactly 10 digits.";
      }

      if (form.parentGuardian.parentEmail && !isValidEmail(form.parentGuardian.parentEmail)) {
        return "Parent email address is invalid.";
      }
    }

    return "";
  }

  function getSchoolValidationError() {
    if (!form.school.schoolName.trim() || form.school.schoolName.trim().length < 2) {
      return "School name is required.";
    }

    if (!isValidName(form.mentor.teacherMentorName)) {
      return "Teacher / mentor name is invalid.";
    }

    if (form.school.headOfInstitutionName && !isValidName(form.school.headOfInstitutionName)) {
      return "Head of institution name is invalid.";
    }

    if (!isValidPhone(form.mentor.teacherMentorContactNumber)) {
      return "Teacher / mentor contact number must be exactly 10 digits.";
    }

    if (!isValidEmail(form.mentor.teacherMentorEmail) || !form.mentor.teacherMentorEmail) {
      return "Teacher / mentor email address is invalid.";
    }

    if (!isValidPhone(form.school.schoolPhoneNumber)) {
      return "School phone number must be exactly 10 digits.";
    }

    if (!isValidEmail(form.school.schoolEmail) || !form.school.schoolEmail) {
      return "School email address is invalid.";
    }

    if (!isValidPincode(form.school.schoolPincode)) {
      return "School pincode must be exactly 6 digits.";
    }

    if (form.school.schoolWebsite && !isValidWebsite(form.school.schoolWebsite)) {
      return "School website URL is invalid.";
    }

    if (!form.school.schoolAddress.trim() || form.school.schoolAddress.trim().length < 8) {
      return "School address must be at least 8 characters long.";
    }

    return "";
  }

  function getProgramValidationError() {
    if (!form.competitionType || !form.category || !form.payment.paymentMode) {
      return "Please complete the program details.";
    }

    if (!isValidUtr(form.payment.utrNumber)) {
      return "UTR number must be 6 to 30 letters or digits only.";
    }

    return "";
  }

  function getDeclarationValidationError() {
    if (!form.declaration.infoCorrect || !form.declaration.agreeTerms || !form.declaration.consentParticipation) {
      return "Please complete the declaration before submitting.";
    }

    return "";
  }

  function getCurrentStepError() {
    if (competitionKey === "speech" && currentStep === 0) {
      return getParticipantValidationError(0);
    }

    if (competitionKey === "speech" && currentStep === 1) {
      return getSchoolValidationError();
    }

    if (competitionKey === "speech" && currentStep === 2) {
      return getProgramValidationError();
    }

    if (competitionKey === "speech" && currentStep === 3) {
      return "";
    }

    if (competitionKey === "debate" && currentStep === 0) {
      return getParticipantValidationError(0);
    }

    if (competitionKey === "debate" && currentStep === 1) {
      return getParticipantValidationError(1);
    }

    if (competitionKey === "debate" && currentStep === 2) {
      return getSchoolValidationError();
    }

    if (competitionKey === "debate" && currentStep === 3) {
      return getProgramValidationError();
    }

    if (currentStep === lastStep) {
      return getDeclarationValidationError();
    }

    return "";
  }

  function saveDraft() {
    const serializable = {
      ...form,
      participants: form.participants.map(({ participantPhoto, schoolIdCard, ...rest }) => rest),
      payment: {
        ...form.payment,
        paymentScreenshot: null,
        consentForm: null,
      },
    };

    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(serializable));
    setDraftSaved(true);
    window.setTimeout(() => setDraftSaved(false), 1800);
  }

  function nextStep() {
    const error = getCurrentStepError();

    if (error) {
      setSubmitError(error);
      return;
    }

    setSubmitError("");
    setCurrentStep((step) => Math.min(step + 1, lastStep));
  }

  function previousStep() {
    setSubmitError("");
    setCurrentStep((step) => Math.max(step - 1, 0));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const error = getCurrentStepError();

    if (error) {
      setSubmitError(error);
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const payload = new FormData();

      payload.append("competitionType", form.competitionType);
      payload.append("category", form.category);
      payload.append("applicationNo", form.applicationNo);
      payload.append("school", JSON.stringify(form.school));
      payload.append("mentor", JSON.stringify(form.mentor));
      payload.append("parentGuardian", JSON.stringify(form.parentGuardian));
      payload.append(
        "payment",
        JSON.stringify({
          paymentMode: form.payment.paymentMode,
          utrNumber: form.payment.utrNumber,
        }),
      );
      payload.append("declaration", JSON.stringify(form.declaration));
      payload.append(
        "participants",
        JSON.stringify(
          form.participants
            .slice(0, participantCount)
            .map(({ participantPhoto, schoolIdCard, ...rest }) => rest),
        ),
      );

      form.participants.slice(0, participantCount).forEach((participant, index) => {
        if (participant.participantPhoto) {
          payload.append(`participantPhoto_${index + 1}`, participant.participantPhoto);
        }

        if (participant.schoolIdCard) {
          payload.append(`schoolIdCard_${index + 1}`, participant.schoolIdCard);
        }
      });

      if (form.payment.paymentScreenshot) {
        payload.append("paymentScreenshot", form.payment.paymentScreenshot);
      }

      if (form.payment.consentForm) {
        payload.append("consentForm", form.payment.consentForm);
      }

      const response = await fetch(`${getApiBaseUrl()}/registrations/create.php`, {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Registration failed. Please try again.");
      }

      window.localStorage.removeItem(DRAFT_KEY);
      setSubmitSuccess({
        ...data,
        applicationNo: resolveApplicationNumber(data.applicationNo, form.applicationNo),
      });
      setForm(createInitialForm());
      setCurrentStep(0);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setSubmitting(false);
    }
  }

  function renderParticipantStep(index) {
    const participant = form.participants[index];
    const isPrimary = index === 0;

    return (
      <div className="vbr-form-stage">
        <div className="vbr-grid-2">
          <InputField label={`Full Name of ${form.competitionType === "Debate" ? `Student ${index + 1}` : "Student"}`} required>
            <TextInput
              value={participant.fullName}
              onChange={(event) => patchParticipant(index, "fullName", sanitizeName(event.target.value))}
              placeholder="Enter full name"
              maxLength={80}
            />
          </InputField>

          <InputField label="Parent / Guardian Name" required>
            <TextInput
              value={participant.parentGuardianName}
              onChange={(event) => {
                const nextValue = sanitizeName(event.target.value);
                patchParticipant(index, "parentGuardianName", nextValue);
                if (isPrimary) {
                  patchSection("parentGuardian", "parentGuardianName", nextValue);
                }
              }}
              placeholder="Enter parent / guardian name"
              maxLength={80}
            />
          </InputField>

          <InputField label="Date of Birth (DD/MM/YYYY)" required>
            <TextInput
              value={participant.dateOfBirth}
              onChange={(event) => updateParticipantDob(index, event.target.value)}
              placeholder="DD/MM/YYYY"
              inputMode="numeric"
              maxLength={10}
            />
          </InputField>

          <InputField label="Age" required>
            <TextInput value={participant.age} placeholder="Auto calculated" readOnly />
          </InputField>

          <InputField label="Relationship" required>
            <SmoothSelect
              value={participant.relationship}
              onChange={(nextValue) => {
                patchParticipant(index, "relationship", nextValue);
                if (isPrimary) {
                  patchSection("parentGuardian", "relationship", nextValue);
                }
              }}
              options={RELATIONSHIP_OPTIONS}
              placeholder="Select relationship"
            />
          </InputField>

          <InputField label="Gender" required>
            <SmoothSelect
              value={participant.gender}
              onChange={(nextValue) => patchParticipant(index, "gender", nextValue)}
              options={GENDER_OPTIONS}
              placeholder="Select gender"
            />
          </InputField>

          <InputField label="Parent Mobile Number" required>
            <TextInput
              value={isPrimary ? form.parentGuardian.parentMobileNumber : participant.mobileEmergencyNumber}
              onChange={(event) => {
                const nextValue = sanitizeDigits(event.target.value, 10);
                if (isPrimary) {
                  patchSection("parentGuardian", "parentMobileNumber", nextValue);
                }
                patchParticipant(index, "mobileEmergencyNumber", nextValue);
              }}
              placeholder="Enter 10 digit mobile number"
              inputMode="numeric"
              maxLength={10}
            />
          </InputField>

          <InputField label="Class / Grade" required>
            <SmoothSelect
              value={participant.classGradeSection}
              onChange={(nextValue) => patchParticipant(index, "classGradeSection", nextValue)}
              options={CLASS_OPTIONS}
              placeholder="Select class / grade"
            />
          </InputField>

          <InputField label="Parent Email Address">
            <TextInput
              type="email"
              value={isPrimary ? form.parentGuardian.parentEmail : participant.email}
              onChange={(event) => {
                const nextValue = sanitizeEmail(event.target.value);
                if (isPrimary) {
                  patchSection("parentGuardian", "parentEmail", nextValue);
                }
                patchParticipant(index, "email", nextValue);
              }}
              placeholder="Enter email address"
              maxLength={120}
            />
          </InputField>

          <InputField label="Mobile Number" required>
            <TextInput
              value={participant.mobileEmergencyNumber}
              onChange={(event) => patchParticipant(index, "mobileEmergencyNumber", sanitizeDigits(event.target.value, 10))}
              placeholder="Enter 10 digit mobile number"
              inputMode="numeric"
              maxLength={10}
            />
          </InputField>

          <InputField label="City" required>
            <TextInput
              value={participant.districtCity}
              onChange={(event) => {
                const nextValue = sanitizeName(event.target.value, 60);
                patchParticipant(index, "districtCity", nextValue);
                if (isPrimary) {
                  patchSection("parentGuardian", "city", nextValue);
                }
              }}
              placeholder="Enter city"
              maxLength={60}
            />
          </InputField>

          <InputField label="Email Address">
            <TextInput
              type="email"
              value={participant.email}
              onChange={(event) => patchParticipant(index, "email", sanitizeEmail(event.target.value))}
              placeholder="Enter email address"
              maxLength={120}
            />
          </InputField>

          <InputField label="State" required>
            <SmoothSelect
              value={participant.state}
              onChange={(nextValue) => {
                patchParticipant(index, "state", nextValue);
                if (isPrimary) {
                  patchSection("parentGuardian", "state", nextValue);
                }
              }}
              options={STATE_OPTIONS}
              placeholder="Select state"
            />
          </InputField>

          <InputField label="Address" required>
            <TextArea
              value={participant.residenceAddress}
              onChange={(event) => {
                const nextValue = sanitizeText(event.target.value, 220);
                patchParticipant(index, "residenceAddress", nextValue);
                if (isPrimary) {
                  patchSection("parentGuardian", "parentAddress", nextValue);
                }
              }}
              placeholder="Enter your address"
              maxLength={220}
            />
          </InputField>

          <InputField label="Pincode" required>
            <TextInput
              value={participant.pincode}
              onChange={(event) => {
                const nextValue = sanitizeDigits(event.target.value, 6);
                patchParticipant(index, "pincode", nextValue);
                if (isPrimary) {
                  patchSection("parentGuardian", "pincode", nextValue);
                }
              }}
              placeholder="Enter pincode"
              inputMode="numeric"
              maxLength={6}
            />
          </InputField>
        </div>
      </div>
    );
  }

  function renderSchoolStep() {
    return (
      <div className="vbr-form-stage">
        <div className="vbr-grid-2">
          <InputField label="School Name" required>
            <TextInput value={form.school.schoolName} onChange={(e) => patchSection("school", "schoolName", sanitizeText(e.target.value, 80))} placeholder="Enter school name" maxLength={80} />
          </InputField>
          <InputField label="Teacher / Registered Mentor" required>
            <TextInput value={form.mentor.teacherMentorName} onChange={(e) => patchSection("mentor", "teacherMentorName", sanitizeName(e.target.value))} placeholder="Enter teacher / mentor name" maxLength={80} />
          </InputField>
          <InputField label="Head of Institution Name">
            <TextInput value={form.school.headOfInstitutionName} onChange={(e) => patchSection("school", "headOfInstitutionName", sanitizeName(e.target.value))} placeholder="Enter head of institution name" maxLength={80} />
          </InputField>
          <InputField label="Teacher / Mentor Contact Number" required>
            <TextInput value={form.mentor.teacherMentorContactNumber} onChange={(e) => patchSection("mentor", "teacherMentorContactNumber", sanitizeDigits(e.target.value, 10))} placeholder="Enter 10 digit mentor contact number" inputMode="numeric" maxLength={10} />
          </InputField>
          <InputField label="Affiliation">
            <TextInput value={form.school.affiliation} onChange={(e) => patchSection("school", "affiliation", sanitizeText(e.target.value, 80))} placeholder="Enter affiliation" maxLength={80} />
          </InputField>
          <InputField label="Teacher / Mentor Email" required>
            <TextInput type="email" value={form.mentor.teacherMentorEmail} onChange={(e) => patchSection("mentor", "teacherMentorEmail", sanitizeEmail(e.target.value))} placeholder="Enter mentor email" maxLength={120} />
          </InputField>
          <InputField label="Medium of Education">
            <SmoothSelect
              value={form.school.mediumOfEducation}
              onChange={(nextValue) => patchSection("school", "mediumOfEducation", nextValue)}
              options={MEDIUM_OPTIONS}
              placeholder="Select medium"
            />
          </InputField>
          <InputField label="School Phone Number" required>
            <TextInput value={form.school.schoolPhoneNumber} onChange={(e) => patchSection("school", "schoolPhoneNumber", sanitizeDigits(e.target.value, 10))} placeholder="Enter 10 digit school phone number" inputMode="numeric" maxLength={10} />
          </InputField>
          <InputField label="Classes From">
            <TextInput value={form.school.classesFrom} onChange={(e) => patchSection("school", "classesFrom", sanitizeDigits(e.target.value, 2))} placeholder="From" inputMode="numeric" maxLength={2} />
          </InputField>
          <InputField label="School Email" required>
            <TextInput type="email" value={form.school.schoolEmail} onChange={(e) => patchSection("school", "schoolEmail", sanitizeEmail(e.target.value))} placeholder="Enter school email" maxLength={120} />
          </InputField>
          <InputField label="Classes To">
            <TextInput value={form.school.classesTo} onChange={(e) => patchSection("school", "classesTo", sanitizeDigits(e.target.value, 2))} placeholder="To" inputMode="numeric" maxLength={2} />
          </InputField>
          <InputField label="School Website">
            <TextInput value={form.school.schoolWebsite} onChange={(e) => patchSection("school", "schoolWebsite", sanitizeText(e.target.value, 120))} placeholder="Enter school website" maxLength={120} />
          </InputField>
          <InputField label="School Pincode" required>
            <TextInput value={form.school.schoolPincode} onChange={(e) => patchSection("school", "schoolPincode", sanitizeDigits(e.target.value, 6))} placeholder="Enter school pincode" inputMode="numeric" maxLength={6} />
          </InputField>
          <InputField label="School Contact Person">
            <TextInput value={form.school.schoolContactPerson} onChange={(e) => patchSection("school", "schoolContactPerson", sanitizeName(e.target.value))} placeholder="Enter school contact person" maxLength={80} />
          </InputField>
        </div>

        <InputField label="School Address" required>
          <TextArea value={form.school.schoolAddress} onChange={(e) => patchSection("school", "schoolAddress", sanitizeText(e.target.value, 220))} placeholder="Enter school address" maxLength={220} />
        </InputField>
      </div>
    );
  }

  function renderProgramStep() {
    return (
      <div className="vbr-form-stage">
        <div className="vbr-program-grid">
          <InputField label="Category" required>
            <SmoothSelect
              value={form.category}
              onChange={(nextValue) =>
                setForm((current) => ({
                  ...current,
                  category: nextValue,
                  applicationNo: createApplicationNumber(current.competitionType, nextValue),
                }))
              }
              options={CATEGORY_OPTIONS}
              placeholder="Select category"
            />
          </InputField>

          <div className="vbr-current-flow-card">
            <span className="vbr-form-label">Selected Competition</span>
            <strong>{form.competitionType}</strong>
            <small>The form fields change instantly when you switch between Debate and Speech above.</small>
          </div>

          <InputField label="Payment Mode" required>
            <SmoothSelect
              value={form.payment.paymentMode}
              onChange={(nextValue) => patchSection("payment", "paymentMode", nextValue)}
              options={PAYMENT_MODES}
              placeholder="Select payment mode"
            />
          </InputField>

          <InputField label="UTR Number" required>
            <TextInput value={form.payment.utrNumber} onChange={(event) => patchSection("payment", "utrNumber", sanitizeAlphaNumeric(event.target.value, 30))} placeholder="Enter UTR number" maxLength={30} />
          </InputField>
        </div>
      </div>
    );
  }

  function renderUploadsStep() {
    return (
      <div className="vbr-form-stage">
        <div className="vbr-confirmation-copy">
          <h3>Upload documents</h3>
          <p>Please upload the latest passport size photo or school ID card clearly so the admin team can verify the registration without delay.</p>
        </div>

        <div className="vbr-grid-2">
          {form.participants.slice(0, participantCount).map((participant, index) => (
            <React.Fragment key={participant.participantNo}>
              <InputField label={`Participant ${index + 1} Latest Passport Size Photo`}>
                <FileInput accept=".jpg,.jpeg,.png,.webp" onChange={(file) => patchParticipant(index, "participantPhoto", file)} />
              </InputField>
              <InputField label={`Participant ${index + 1} School ID Card`}>
                <FileInput accept=".pdf,.jpg,.jpeg,.png" onChange={(file) => patchParticipant(index, "schoolIdCard", file)} />
              </InputField>
            </React.Fragment>
          ))}

          <InputField label="Payment Screenshot">
            <FileInput accept=".jpg,.jpeg,.png,.pdf" onChange={(file) => patchSection("payment", "paymentScreenshot", file)} />
          </InputField>

          <InputField label="Consent Form (Optional)">
            <FileInput accept=".pdf,.jpg,.jpeg,.png" onChange={(file) => patchSection("payment", "consentForm", file)} />
          </InputField>
        </div>

        <div className="vbr-review-box">
          <div>
            <span>Application No</span>
            <strong>{form.applicationNo}</strong>
          </div>
          <div>
            <span>Competition</span>
            <strong>{form.competitionType}</strong>
          </div>
          <div>
            <span>Category</span>
            <strong>{form.category}</strong>
          </div>
          <div>
            <span>School</span>
            <strong>{form.school.schoolName || "-"}</strong>
          </div>
          <div>
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
        <div className="vbr-confirmation-copy">
          <h3>Final confirmation</h3>
          <p>Please confirm the details below before we submit the registration to the admin portal.</p>
        </div>

        <label className="vbr-check-row">
          <input type="checkbox" checked={form.declaration.infoCorrect} onChange={(event) => patchDeclaration("infoCorrect", event.target.checked)} />
          <span>I confirm that all information provided is correct.</span>
        </label>
        <label className="vbr-check-row">
          <input type="checkbox" checked={form.declaration.agreeTerms} onChange={(event) => patchDeclaration("agreeTerms", event.target.checked)} />
          <span>I agree to Verbattle terms and conditions.</span>
        </label>
        <label className="vbr-check-row">
          <input type="checkbox" checked={form.declaration.consentParticipation} onChange={(event) => patchDeclaration("consentParticipation", event.target.checked)} />
          <span>I consent to participation in the competition.</span>
        </label>
      </div>
    );
  }

  function renderCurrentStep() {
    if (competitionKey === "speech") {
      if (currentStep === 0) {
        return renderParticipantStep(0);
      }

      if (currentStep === 1) {
        return renderSchoolStep();
      }

      if (currentStep === 2) {
        return renderProgramStep();
      }

      if (currentStep === 3) {
        return renderUploadsStep();
      }

      return renderConfirmationStep();
    }

    if (currentStep === 0) {
      return renderParticipantStep(0);
    }

    if (currentStep === 1) {
      return renderParticipantStep(1);
    }

    if (currentStep === 2) {
      return renderSchoolStep();
    }

    if (currentStep === 3) {
      return renderProgramStep();
    }

    if (currentStep === 4) {
      return renderUploadsStep();
    }

    return renderConfirmationStep();
  }

  const currentMeta = getStepMeta(competitionKey, currentStep);

  return (
    <div className="vbr-register-clean">
      <section className="vbr-register-wrap">
        <div className="vbr-register-header">
          <div>
            <span className="vbr-register-chip">Verbattle Registration</span>
            <h1>Register for Debate or Speech.</h1>
            <p>Pick the competition format, fill the details clearly, and submit everything in one guided flow.</p>
          </div>
          <div className="vbr-register-type-switcher">
            {COMPETITION_TYPES.map((type) => {
              const active = form.competitionType === type;
              const count = type === "Debate" ? 2 : 1;

              return (
                <button
                  key={type}
                  type="button"
                  className={`vbr-register-type-card ${active ? "is-active" : ""}`}
                  onClick={() => changeCompetitionType(type)}
                >
                  <strong>{type}</strong>
                  <span>{count} participant{count > 1 ? "s" : ""} in this flow</span>
                </button>
              );
            })}
          </div>
        </div>

        <form className="vbr-register-card" onSubmit={handleSubmit}>
          <div className="vbr-stepper">
            {steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                className={`vbr-stepper-item ${index === currentStep ? "is-current" : index < currentStep ? "is-complete" : ""}`}
                onClick={() => {
                  if (index <= currentStep) {
                    setCurrentStep(index);
                  }
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

          <div className="vbr-stage-head">
            <div>
              <span className="vbr-stage-kicker">Step {currentStep + 1}</span>
              <h2>{currentMeta.title}</h2>
            </div>
            <div className="vbr-stage-progress">
              <span>{Math.round(progress)}%</span>
              <div className="vbr-stage-progress-bar">
                <div style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

          {renderCurrentStep()}

          {submitError ? <div className="vbr-inline-message vbr-inline-message--error">{submitError}</div> : null}
          {submitSuccess ? (
            <div className="vbr-inline-message vbr-inline-message--success">
              Registration submitted successfully. Application number: <strong>{submitSuccess.applicationNo}</strong>
            </div>
          ) : null}

          <div className="vbr-footer-actions">
            <div className="vbr-footer-left">
              <button type="button" className="vbr-secondary-btn" onClick={saveDraft}>
                Save & Exit
              </button>
              {draftSaved ? <span className="vbr-draft-note">Draft saved</span> : null}
            </div>

            <div className="vbr-footer-right">
              <button type="button" className="vbr-secondary-btn" onClick={previousStep} disabled={currentStep === 0 || submitting}>
                Back
              </button>

              {currentStep < lastStep ? (
                <button type="button" className="vbr-primary-btn" onClick={nextStep}>
                  Save & Continue
                </button>
              ) : (
                <button type="submit" className="vbr-primary-btn" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Registration"}
                </button>
              )}
            </div>
          </div>
        </form>

        <div className="vbr-safety-strip">Your information is safe with us and will never be shared.</div>

        <div className="vbr-benefit-row">
          <div>
            <strong>Secure & Safe</strong>
            <span>100% secure registration</span>
          </div>
          <div>
            <strong>Quick Process</strong>
            <span>Takes less than 3 minutes</span>
          </div>
          <div>
            <strong>Easy Steps</strong>
            <span>Simple and hassle free</span>
          </div>
          <div>
            <strong>Need Help?</strong>
            <span>We're here to assist you</span>
          </div>
        </div>
      </section>
    </div>
  );
}
