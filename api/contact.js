// POST /api/contact
// Saves the message to Supabase, emails you, and sends the visitor an auto-reply.
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.MAIL_FROM || "Code Axis Tech <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO_EMAIL; // where new leads are sent

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body || {};
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { return res.status(400).json({ error: "Invalid request." }); }
  }

  // Honeypot: real visitors never fill this hidden field, bots do.
  if (body.website) return res.status(200).json({ ok: true });

  const name = String(body.name || "").trim().slice(0, 100);
  const email = String(body.email || "").trim().toLowerCase().slice(0, 200);
  const phone = String(body.phone || "").trim().slice(0, 40);
  const message = String(body.message || "").trim().slice(0, 5000);

  if (name.length < 2) return res.status(400).json({ error: "Please enter your name." });
  if (!EMAIL_RE.test(email)) return res.status(400).json({ error: "Please enter a valid email address." });
  if (message.length < 10) return res.status(400).json({ error: "Please tell us a bit more about your project." });

  // 1) Save the lead
  const { error: dbError } = await supabase.from("leads").insert({ name, email, phone, message });
  if (dbError) console.error("Supabase insert failed:", dbError);

  // 2) Email you
  let mailError = null;
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email, // hit "Reply" in your inbox to answer the visitor directly
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New website enquiry</h2>
        <p><b>Name:</b> ${esc(name)}</p>
        <p><b>Email:</b> ${esc(email)}</p>
        <p><b>Phone:</b> ${esc(phone) || "-"}</p>
        <p><b>Message:</b></p>
        <p style="white-space:pre-wrap">${esc(message)}</p>
      `,
    });
    mailError = error;
  } catch (err) {
    mailError = err;
  }
  if (mailError) console.error("Resend notify failed:", mailError);

  // Only fail if we lost the lead completely
  if (dbError && mailError) {
    return res.status(500).json({ error: "Something went wrong. Please try again or email us directly." });
  }

  // 3) Auto-reply to the visitor (best effort, never blocks success).
  // Awaited because serverless functions can stop as soon as they respond.
  try {
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "We received your message - Code Axis Tech",
      html: `
        <p>Hi ${esc(name.split(" ")[0])},</p>
        <p>Thanks for reaching out to Code Axis Tech. We've received your message and will get back to you within 24 hours on business days.</p>
        <p>Best regards,<br/>Code Axis Tech Team</p>
      `,
    });
  } catch (err) {
    console.error("Auto-reply failed:", err);
  }

  return res.status(200).json({ ok: true });
}