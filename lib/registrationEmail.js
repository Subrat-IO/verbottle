export const REGISTRATION_EMAIL_LOGO_CID = "verbattle-logo";

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatValue(value) {
  if (value === null || value === undefined || value === "") return "-";
  return String(value);
}

function formatDate(value) {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function getParticipants(registration) {
  return Array.isArray(registration?.participants)
    ? registration.participants
    : [];
}

function getBrandHeaderHtml({ eyebrow, title, body, compact = false }) {
  return `
    <div style="padding:${compact ? "24px" : "28px 28px 20px"};background:linear-gradient(135deg,#08234d 0%,#d11b2f 100%);color:#ffffff;">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
        <img src="cid:${REGISTRATION_EMAIL_LOGO_CID}" alt="Verbattle" style="display:block;width:${compact ? "120px" : "136px"};height:auto;" />
      </div>
      <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;font-weight:800;opacity:0.88;">${escapeHtml(eyebrow)}</div>
      <h1 style="margin:10px 0 8px;font-size:30px;line-height:1.1;">${escapeHtml(title)}</h1>
      <p style="margin:0;font-size:14px;line-height:1.6;opacity:0.92;">${escapeHtml(body)}</p>
    </div>
  `;
}

function getRowsHtml(rows) {
  return rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #dbe3ef;background:#f8fbff;font-weight:700;color:#19325b;width:220px;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border:1px solid #dbe3ef;color:#20324d;">${escapeHtml(formatValue(value))}</td>
        </tr>
      `,
    )
    .join("");
}

function getRowsText(rows) {
  return rows
    .map(([label, value]) => `${label}: ${formatValue(value)}`)
    .join("\n");
}

function buildParticipantsHtml(registration) {
  const participants = getParticipants(registration);

  return participants
    .map(
      (participant, index) => `
        <div style="margin-top:18px;border:1px solid #dbe3ef;border-radius:18px;overflow:hidden;">
          <div style="padding:14px 16px;background:#08234d;color:#ffffff;font-weight:800;">
            Participant ${index + 1}
          </div>
          <table style="width:100%;border-collapse:collapse;">
            ${getRowsHtml([
              ["Full Name", participant.fullName],
              ["Date of Birth", participant.dateOfBirth],
              ["Age", participant.age],
              ["Gender", participant.genderOther || participant.gender],
              ["Class / Grade", participant.classGradeSection],
              ["Email", participant.email],
              ["Mobile", participant.mobileEmergencyNumber],
              ["School", participant.schoolName],
              ["Parent / Guardian", participant.parentGuardianName],
              ["Relationship", participant.relationshipOther || participant.relationship],
              ["Address", participant.residenceAddress],
              ["City", participant.districtCity],
              ["State", participant.stateOther || participant.state],
              ["Pincode", participant.pincode],
              ["Mother Tongue", participant.motherTongue],
              ["Languages", participant.spokenLanguages],
              ["Other Areas of Interest", participant.otherAreasOfInterest],
              ["Participant Photo", participant.participantPhotoName],
              ["School ID Card", participant.schoolIdCardName],
            ])}
          </table>
        </div>
      `,
    )
    .join("");
}

function buildParticipantsText(registration) {
  const participants = getParticipants(registration);

  return participants
    .map((participant, index) =>
      [
        `Participant ${index + 1}`,
        getRowsText([
          ["Full Name", participant.fullName],
          ["Date of Birth", participant.dateOfBirth],
          ["Age", participant.age],
          ["Gender", participant.genderOther || participant.gender],
          ["Class / Grade", participant.classGradeSection],
          ["Email", participant.email],
          ["Mobile", participant.mobileEmergencyNumber],
          ["School", participant.schoolName],
          ["Parent / Guardian", participant.parentGuardianName],
          ["Relationship", participant.relationshipOther || participant.relationship],
          ["Address", participant.residenceAddress],
          ["City", participant.districtCity],
          ["State", participant.stateOther || participant.state],
          ["Pincode", participant.pincode],
          ["Mother Tongue", participant.motherTongue],
          ["Languages", participant.spokenLanguages],
          ["Other Areas of Interest", participant.otherAreasOfInterest],
          ["Participant Photo", participant.participantPhotoName],
          ["School ID Card", participant.schoolIdCardName],
        ]),
      ].join("\n"),
    )
    .join("\n\n");
}

export function getRegistrationPrimaryRecipient(registration) {
  return (
    registration?.parentGuardian?.parentEmail ||
    getParticipants(registration)?.[0]?.email ||
    registration?.mentor?.teacherMentorEmail ||
    registration?.school?.schoolEmail ||
    ""
  );
}

export function buildRegistrationAdminEmail(registration) {
  const subject = `New Verbattle Registration: ${registration.applicationNo}`;

  const overviewRows = [
    ["Application No", registration.applicationNo],
    ["Competition Type", registration.competitionType],
    ["Category", registration.category],
    ["Submitted At", formatDate(registration.submittedAt)],
  ];

  const schoolRows = [
    ["School Name", registration.school?.schoolName],
    ["Head of Institution", registration.school?.headOfInstitutionName],
    ["Affiliation", registration.school?.affiliation],
    ["Medium of Education", registration.school?.mediumOfEducationOther || registration.school?.mediumOfEducation],
    ["Classes", `${formatValue(registration.school?.classesFrom)} to ${formatValue(registration.school?.classesTo)}`],
    ["School Address", registration.school?.schoolAddress],
    ["School Pincode", registration.school?.schoolPincode],
    ["School Phone", registration.school?.schoolPhoneNumber],
    ["School Email", registration.school?.schoolEmail],
    ["School Website", registration.school?.schoolWebsite],
    ["School Contact Person", registration.school?.schoolContactPerson],
  ];

  const mentorRows = [
    ["Mentor Name", registration.mentor?.teacherMentorName],
    ["Mentor Contact", registration.mentor?.teacherMentorContactNumber],
    ["Mentor Email", registration.mentor?.teacherMentorEmail],
  ];

  const parentRows = [
    ["Parent / Guardian Name", registration.parentGuardian?.parentGuardianName],
    ["Relationship", registration.parentGuardian?.relationshipOther || registration.parentGuardian?.relationship],
    ["Parent Email", registration.parentGuardian?.parentEmail],
    ["Parent Mobile", registration.parentGuardian?.parentMobileNumber],
    ["Address", registration.parentGuardian?.parentAddress],
    ["City", registration.parentGuardian?.city],
    ["State", registration.parentGuardian?.stateOther || registration.parentGuardian?.state],
    ["Pincode", registration.parentGuardian?.pincode],
  ];

  const paymentRows = [
    ["Payment Mode", registration.payment?.paymentModeOther || registration.payment?.paymentMode],
    ["UTR Number", registration.payment?.utrNumber],
    ["Payment Screenshot", registration.payment?.paymentScreenshotName],
    ["Consent Form", registration.payment?.consentFormName],
  ];

  const declarationRows = [
    ["Information Correct", registration.declaration?.infoCorrect ? "Yes" : "No"],
    ["Terms Accepted", registration.declaration?.agreeTerms ? "Yes" : "No"],
    ["Participation Consent", registration.declaration?.consentParticipation ? "Yes" : "No"],
  ];

  const html = `
    <div style="background:#eef3fb;padding:28px 14px;font-family:Arial,sans-serif;color:#0f172a;">
      <div style="max-width:900px;margin:0 auto;background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #dbe3ef;">
        ${getBrandHeaderHtml({
          eyebrow: "Verbattle Registration",
          title: "New submission received",
          body: "A new registration has been submitted through the website and is ready for review.",
        })}
        <div style="padding:24px 28px 30px;">
          <h2 style="margin:0 0 12px;color:#08234d;font-size:18px;">Registration Overview</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(overviewRows)}</table>

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">School Details</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(schoolRows)}</table>

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">Mentor Details</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(mentorRows)}</table>

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">Parent / Guardian Details</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(parentRows)}</table>

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">Participants</h2>
          ${buildParticipantsHtml(registration)}

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">Payment & Files</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(paymentRows)}</table>

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">Declaration</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(declarationRows)}</table>
        </div>
      </div>
    </div>
  `;

  const text = [
    "Verbattle Registration Submission",
    "",
    "Registration Overview",
    getRowsText(overviewRows),
    "",
    "School Details",
    getRowsText(schoolRows),
    "",
    "Mentor Details",
    getRowsText(mentorRows),
    "",
    "Parent / Guardian Details",
    getRowsText(parentRows),
    "",
    "Participants",
    buildParticipantsText(registration),
    "",
    "Payment & Files",
    getRowsText(paymentRows),
    "",
    "Declaration",
    getRowsText(declarationRows),
  ].join("\n");

  return { subject, html, text };
}

export function buildRegistrationConfirmationEmail(registration) {
  const subject = `Verbattle Registration Received: ${registration.applicationNo}`;
  const studentNames = getParticipants(registration)
    .map((participant) => participant.fullName)
    .filter(Boolean)
    .join(", ");

  const overviewRows = [
    ["Application No", registration.applicationNo],
    ["Competition Type", registration.competitionType],
    ["Category", registration.category],
    ["Submitted At", formatDate(registration.submittedAt)],
  ];

  const schoolRows = [
    ["School Name", registration.school?.schoolName],
    ["Head of Institution", registration.school?.headOfInstitutionName],
    ["Affiliation", registration.school?.affiliation],
    ["Medium of Education", registration.school?.mediumOfEducationOther || registration.school?.mediumOfEducation],
    ["Classes", `${formatValue(registration.school?.classesFrom)} to ${formatValue(registration.school?.classesTo)}`],
    ["School Address", registration.school?.schoolAddress],
    ["School Pincode", registration.school?.schoolPincode],
    ["School Phone", registration.school?.schoolPhoneNumber],
    ["School Email", registration.school?.schoolEmail],
    ["School Website", registration.school?.schoolWebsite],
    ["School Contact Person", registration.school?.schoolContactPerson],
  ];

  const mentorRows = [
    ["Mentor Name", registration.mentor?.teacherMentorName],
    ["Mentor Contact", registration.mentor?.teacherMentorContactNumber],
    ["Mentor Email", registration.mentor?.teacherMentorEmail],
  ];

  const parentRows = [
    ["Parent / Guardian Name", registration.parentGuardian?.parentGuardianName],
    ["Relationship", registration.parentGuardian?.relationshipOther || registration.parentGuardian?.relationship],
    ["Parent Email", registration.parentGuardian?.parentEmail],
    ["Parent Mobile", registration.parentGuardian?.parentMobileNumber],
    ["Address", registration.parentGuardian?.parentAddress],
    ["City", registration.parentGuardian?.city],
    ["State", registration.parentGuardian?.stateOther || registration.parentGuardian?.state],
    ["Pincode", registration.parentGuardian?.pincode],
  ];

  const paymentRows = [
    ["Payment Mode", registration.payment?.paymentModeOther || registration.payment?.paymentMode],
    ["UTR Number", registration.payment?.utrNumber],
    ["Payment Screenshot", registration.payment?.paymentScreenshotName],
    ["Consent Form", registration.payment?.consentFormName],
  ];

  const declarationRows = [
    ["Information Correct", registration.declaration?.infoCorrect ? "Yes" : "No"],
    ["Terms Accepted", registration.declaration?.agreeTerms ? "Yes" : "No"],
    ["Participation Consent", registration.declaration?.consentParticipation ? "Yes" : "No"],
  ];

  const html = `
    <div style="background:#f7f9fc;padding:28px 14px;font-family:Arial,sans-serif;color:#0f172a;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #dbe3ef;">
        ${getBrandHeaderHtml({
          eyebrow: "Verbattle",
          title: "Registration received",
          body: "Thank you for submitting your registration. Our team has received the details and will review them shortly.",
          compact: true,
        })}
        <div style="padding:26px 28px 30px;">
          <p style="margin:0 0 18px;font-size:15px;line-height:1.7;">Dear Parent / Guardian,</p>
          <p style="margin:0 0 18px;font-size:15px;line-height:1.7;">We have successfully received the Verbattle registration for <strong>${escapeHtml(studentNames || "your participant")}</strong>.</p>
          <h2 style="margin:20px 0 12px;color:#08234d;font-size:18px;">Registration Overview</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(overviewRows)}</table>

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">School Details</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(schoolRows)}</table>

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">Mentor Details</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(mentorRows)}</table>

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">Parent / Guardian Details</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(parentRows)}</table>

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">Participants</h2>
          ${buildParticipantsHtml(registration)}

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">Payment & Files</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(paymentRows)}</table>

          <h2 style="margin:24px 0 12px;color:#08234d;font-size:18px;">Declaration</h2>
          <table style="width:100%;border-collapse:collapse;">${getRowsHtml(declarationRows)}</table>
          <p style="margin:18px 0 0;font-size:15px;line-height:1.7;">If our team needs any clarification, we will reach out using the contact details provided in the form.</p>
          <p style="margin:18px 0 0;font-size:15px;line-height:1.7;">Regards,<br /><strong>Verbattle Team</strong></p>
        </div>
      </div>
    </div>
  `;

  const text = [
    "Verbattle Registration Received",
    "",
    "Thank you for submitting your registration.",
    "",
    "Registration Overview",
    getRowsText(overviewRows),
    "",
    "School Details",
    getRowsText(schoolRows),
    "",
    "Mentor Details",
    getRowsText(mentorRows),
    "",
    "Parent / Guardian Details",
    getRowsText(parentRows),
    "",
    "Participants",
    buildParticipantsText(registration),
    "",
    "Payment & Files",
    getRowsText(paymentRows),
    "",
    "Declaration",
    getRowsText(declarationRows),
    "",
    "Our team will review the details and contact you if any clarification is needed.",
    "",
    "Regards,",
    "Verbattle Team",
  ].join("\n");

  return { subject, html, text };
}
