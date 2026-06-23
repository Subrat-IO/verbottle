import path from "path";
import nodemailer from "nodemailer";
import {
  buildRegistrationAdminEmail,
  buildRegistrationConfirmationEmail,
  getRegistrationPrimaryRecipient,
  REGISTRATION_EMAIL_LOGO_CID,
} from "../../../lib/registrationEmail";

function getMailConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = String(process.env.SMTP_SECURE || "true") === "true";
  const rejectUnauthorized =
    String(process.env.SMTP_REJECT_UNAUTHORIZED || "true") === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.REGISTRATION_FROM_EMAIL || user;
  const adminTo = process.env.REGISTRATION_TO_EMAIL || user;

  if (!host || !port || !user || !pass || !from || !adminTo) {
    throw new Error("Email configuration is incomplete.");
  }

  return { host, port, secure, rejectUnauthorized, user, pass, from, adminTo };
}

export async function POST(request) {
  try {
    const registration = await request.json();

    if (!registration?.applicationNo) {
      return Response.json(
        { success: false, message: "Invalid registration payload." },
        { status: 400 },
      );
    }

    const mailConfig = getMailConfig();
    const transporter = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      secure: mailConfig.secure,
      auth: {
        user: mailConfig.user,
        pass: mailConfig.pass,
      },
      tls: {
        rejectUnauthorized: mailConfig.rejectUnauthorized,
      },
    });

    const adminEmail = buildRegistrationAdminEmail(registration);
    const confirmationEmail = buildRegistrationConfirmationEmail(registration);
    const primaryRecipient = getRegistrationPrimaryRecipient(registration);
    const brandAttachments = [
      {
        filename: "verbattle-logo.png",
        path: path.join(process.cwd(), "public", "logo.png"),
        cid: REGISTRATION_EMAIL_LOGO_CID,
      },
    ];

    await transporter.sendMail({
      from: mailConfig.from,
      to: mailConfig.adminTo,
      replyTo:
        primaryRecipient ||
        registration.parentGuardian?.parentEmail ||
        registration.mentor?.teacherMentorEmail ||
        undefined,
      subject: adminEmail.subject,
      text: adminEmail.text,
      html: adminEmail.html,
      attachments: brandAttachments,
    });

    if (primaryRecipient) {
      await transporter.sendMail({
        from: mailConfig.from,
        to: primaryRecipient,
        subject: confirmationEmail.subject,
        text: confirmationEmail.text,
        html: confirmationEmail.html,
        attachments: brandAttachments,
      });
    }

    return Response.json({
      success: true,
      confirmationSent: Boolean(primaryRecipient),
    });
  } catch (error) {
    console.error("Registration email send failed:", error);
    return Response.json(
      {
        success: false,
        message:
          error?.message ||
          "We could not send the registration email at this time.",
      },
      { status: 500 },
    );
  }
}
