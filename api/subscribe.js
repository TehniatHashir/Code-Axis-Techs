// POST /api/subscribe
// Saves a newsletter email to Supabase (duplicates are ignored).
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body || {};
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { return res.status(400).json({ error: "Invalid request." }); }
  }

  if (body.website) return res.status(200).json({ ok: true }); // honeypot

  const email = String(body.email || "").trim().toLowerCase().slice(0, 200);
  if (!EMAIL_RE.test(email)) return res.status(400).json({ error: "Please enter a valid email address." });

  const { error } = await supabase
    .from("subscribers")
    .upsert({ email }, { onConflict: "email", ignoreDuplicates: true });

  if (error) {
    console.error("Supabase subscribe failed:", error);
    return res.status(500).json({ error: "Couldn't subscribe right now. Please try again." });
  }

  return res.status(200).json({ ok: true });
}