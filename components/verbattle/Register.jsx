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

const INITIAL_FORM = {
  competitionType: "Debate",
  category: "Beginner",
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
  const [form, setForm] = useState(INITIAL_FORM);
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

  function validateParticipant(index) {
    const participant = form.participants[index];

    return (
      participant.fullName &&
      participant.dateOfBirth &&
      participant.gender &&
      participant.classGradeSection &&
      participant.mobileEmergencyNumber &&
      participant.parentGuardianName &&
      participant.relationship &&
      participant.districtCity &&
      participant.state &&
      participant.pincode
    );
  }

  function validateCurrentStep() {
    if (competitionKey === "speech" && currentStep === 0) {
      return validateParticipant(0);
    }

    if (competitionKey === "speech" && currentStep === 1) {
      return (
        form.school.schoolName &&
        form.school.schoolAddress &&
        form.school.schoolPincode &&
        form.school.schoolPhoneNumber &&
        form.school.schoolEmail &&
        form.mentor.teacherMentorName &&
        form.mentor.teacherMentorContactNumber &&
        form.mentor.teacherMentorEmail
      );
    }

    if (competitionKey === "speech" && currentStep === 2) {
      return form.competitionType && form.category && form.payment.paymentMode && form.payment.utrNumber;
    }

    if (competitionKey === "speech" && currentStep === 3) {
      return true;
    }

    if (competitionKey === "debate" && currentStep === 0) {
      return validateParticipant(0);
    }

    if (competitionKey === "debate" && currentStep === 1) {
      return validateParticipant(1);
    }

    if (competitionKey === "debate" && currentStep === 2) {
      return (
        form.school.schoolName &&
        form.school.schoolAddress &&
        form.school.schoolPincode &&
        form.school.schoolPhoneNumber &&
        form.school.schoolEmail &&
        form.mentor.teacherMentorName &&
        form.mentor.teacherMentorContactNumber &&
        form.mentor.teacherMentorEmail
      );
    }

    if (competitionKey === "debate" && currentStep === 3) {
      return form.competitionType && form.category && form.payment.paymentMode && form.payment.utrNumber;
    }

    if (currentStep === lastStep) {
      return (
        form.declaration.infoCorrect &&
        form.declaration.agreeTerms &&
        form.declaration.consentParticipation
      );
    }

    return true;
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
    if (!validateCurrentStep()) {
      setSubmitError("Please complete the required fields in this step before continuing.");
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

    if (!validateCurrentStep()) {
      setSubmitError("Please complete the declaration before submitting.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const payload = new FormData();

      payload.append("competitionType", form.competitionType);
      payload.append("category", form.category);
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
      setSubmitSuccess(data);
      setForm(INITIAL_FORM);
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
              onChange={(event) => patchParticipant(index, "fullName", event.target.value)}
              placeholder="Enter full name"
            />
          </InputField>

          <InputField label="Parent / Guardian Name" required>
            <TextInput
              value={participant.parentGuardianName}
              onChange={(event) => {
                patchParticipant(index, "parentGuardianName", event.target.value);
                if (isPrimary) {
                  patchSection("parentGuardian", "parentGuardianName", event.target.value);
                }
              }}
              placeholder="Enter parent / guardian name"
            />
          </InputField>

          <InputField label="Date of Birth" required>
            <TextInput
              type="date"
              value={participant.dateOfBirth}
              onChange={(event) => patchParticipant(index, "dateOfBirth", event.target.value)}
            />
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
                if (isPrimary) {
                  patchSection("parentGuardian", "parentMobileNumber", event.target.value);
                }
                patchParticipant(index, "mobileEmergencyNumber", event.target.value);
              }}
              placeholder="+91 Enter mobile number"
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
                if (isPrimary) {
                  patchSection("parentGuardian", "parentEmail", event.target.value);
                }
                patchParticipant(index, "email", event.target.value);
              }}
              placeholder="Enter email address"
            />
          </InputField>

          <InputField label="Mobile Number" required>
            <TextInput
              value={participant.mobileEmergencyNumber}
              onChange={(event) => patchParticipant(index, "mobileEmergencyNumber", event.target.value)}
              placeholder="+91 Enter mobile number"
            />
          </InputField>

          <InputField label="City" required>
            <TextInput
              value={participant.districtCity}
              onChange={(event) => {
                patchParticipant(index, "districtCity", event.target.value);
                if (isPrimary) {
                  patchSection("parentGuardian", "city", event.target.value);
                }
              }}
              placeholder="Enter city"
            />
          </InputField>

          <InputField label="Email Address">
            <TextInput
              type="email"
              value={participant.email}
              onChange={(event) => patchParticipant(index, "email", event.target.value)}
              placeholder="Enter email address"
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
                patchParticipant(index, "residenceAddress", event.target.value);
                if (isPrimary) {
                  patchSection("parentGuardian", "parentAddress", event.target.value);
                }
              }}
              placeholder="Enter your address"
            />
          </InputField>

          <InputField label="Pincode" required>
            <TextInput
              value={participant.pincode}
              onChange={(event) => {
                patchParticipant(index, "pincode", event.target.value);
                if (isPrimary) {
                  patchSection("parentGuardian", "pincode", event.target.value);
                }
              }}
              placeholder="Enter pincode"
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
            <TextInput value={form.school.schoolName} onChange={(e) => patchSection("school", "schoolName", e.target.value)} placeholder="Enter school name" />
          </InputField>
          <InputField label="Teacher / Registered Mentor" required>
            <TextInput value={form.mentor.teacherMentorName} onChange={(e) => patchSection("mentor", "teacherMentorName", e.target.value)} placeholder="Enter teacher / mentor name" />
          </InputField>
          <InputField label="Head of Institution Name">
            <TextInput value={form.school.headOfInstitutionName} onChange={(e) => patchSection("school", "headOfInstitutionName", e.target.value)} placeholder="Enter head of institution name" />
          </InputField>
          <InputField label="Teacher / Mentor Contact Number" required>
            <TextInput value={form.mentor.teacherMentorContactNumber} onChange={(e) => patchSection("mentor", "teacherMentorContactNumber", e.target.value)} placeholder="Enter mentor contact number" />
          </InputField>
          <InputField label="Affiliation">
            <TextInput value={form.school.affiliation} onChange={(e) => patchSection("school", "affiliation", e.target.value)} placeholder="Enter affiliation" />
          </InputField>
          <InputField label="Teacher / Mentor Email" required>
            <TextInput type="email" value={form.mentor.teacherMentorEmail} onChange={(e) => patchSection("mentor", "teacherMentorEmail", e.target.value)} placeholder="Enter mentor email" />
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
            <TextInput value={form.school.schoolPhoneNumber} onChange={(e) => patchSection("school", "schoolPhoneNumber", e.target.value)} placeholder="Enter school phone number" />
          </InputField>
          <InputField label="Classes From">
            <TextInput value={form.school.classesFrom} onChange={(e) => patchSection("school", "classesFrom", e.target.value)} placeholder="From" />
          </InputField>
          <InputField label="School Email" required>
            <TextInput type="email" value={form.school.schoolEmail} onChange={(e) => patchSection("school", "schoolEmail", e.target.value)} placeholder="Enter school email" />
          </InputField>
          <InputField label="Classes To">
            <TextInput value={form.school.classesTo} onChange={(e) => patchSection("school", "classesTo", e.target.value)} placeholder="To" />
          </InputField>
          <InputField label="School Website">
            <TextInput value={form.school.schoolWebsite} onChange={(e) => patchSection("school", "schoolWebsite", e.target.value)} placeholder="Enter school website" />
          </InputField>
          <InputField label="School Pincode" required>
            <TextInput value={form.school.schoolPincode} onChange={(e) => patchSection("school", "schoolPincode", e.target.value)} placeholder="Enter school pincode" />
          </InputField>
          <InputField label="School Contact Person">
            <TextInput value={form.school.schoolContactPerson} onChange={(e) => patchSection("school", "schoolContactPerson", e.target.value)} placeholder="Enter school contact person" />
          </InputField>
        </div>

        <InputField label="School Address" required>
          <TextArea value={form.school.schoolAddress} onChange={(e) => patchSection("school", "schoolAddress", e.target.value)} placeholder="Enter school address" />
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
              onChange={(nextValue) => setForm((current) => ({ ...current, category: nextValue }))}
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
            <TextInput value={form.payment.utrNumber} onChange={(event) => patchSection("payment", "utrNumber", event.target.value)} placeholder="Enter UTR number" />
          </InputField>
        </div>
      </div>
    );
  }

  function renderUploadsStep() {
    return (
      <div className="vbr-form-stage">
        <div className="vbr-grid-2">
          {form.participants.slice(0, participantCount).map((participant, index) => (
            <React.Fragment key={participant.participantNo}>
              <InputField label={`Participant ${index + 1} Photo`}>
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
