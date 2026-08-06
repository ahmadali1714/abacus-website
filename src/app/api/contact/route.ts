import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const contactRecipient = process.env.CONTACT_EMAIL_RECIPIENT || "hr@abacus.com";
const emailFrom = process.env.EMAIL_FROM || `noreply@${process.env.EMAIL_DOMAIN || "abacus.com"}`;

async function sendContactEmail(payload: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !contactRecipient) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const htmlMessage = `
    <h2>New contact inquiry</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Company:</strong> ${payload.company || "N/A"}</p>
    <p><strong>Phone:</strong> ${payload.phone || "N/A"}</p>
    <p><strong>Service:</strong> ${payload.service || "N/A"}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message.replace(/\n/g, "<br />")}</p>
  `;

  await transporter.sendMail({
    from: emailFrom,
    to: contactRecipient,
    subject: `New contact inquiry from ${payload.name}`,
    html: htmlMessage,
    replyTo: payload.email,
  });

  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email address." }, { status: 400 });
    }

    const stored = db
      ? await db.insert(contactSubmissions).values({
          name,
          email,
          company: company || null,
          phone: phone || null,
          service: service || null,
          message,
        })
      : null;

    let emailSent = false;
    let emailError: unknown = null;

    if (smtpHost && smtpPort && smtpUser && smtpPass && contactRecipient) {
      try {
        emailSent = await sendContactEmail({ name, email, company, phone, service, message });
      } catch (err) {
        emailError = err;
        console.error("Contact email send error:", err);
      }
    }

    if (!db && !emailSent) {
      return Response.json(
        {
          error:
            "Contact form is not fully configured. Please set up DATABASE_URL or SMTP settings.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: emailSent
        ? "Thank you! Your message has been sent and we'll get back to you soon."
        : "Thank you! Your message has been received.",
      stored: Boolean(stored),
      emailed: emailSent,
      emailError: emailSent ? null : emailError ? String(emailError) : null,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
