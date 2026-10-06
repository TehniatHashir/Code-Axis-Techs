import { useState } from "react";
import { MapPin, Mail, Phone, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import PageHero from "../components/common/PageHero";

const info = [
  { Icon: MapPin, label: "Visit our location", value: "Gulberg Lahore" },
  { Icon: Mail, label: "Send us email", value: "info@codeaxistech.com" },
  { Icon: Phone, label: "Phone · Hassan Alam", value: "+92 336 3339083" },
  { Icon: Clock, label: "Open hours", value: "Available 24/7 to Serve You Anytime" },
];

const fields = [
  { name: "name", label: "Your name", type: "text", ph: "Jane Doe", required: true, autoComplete: "name" },
  { name: "email", label: "Email address", type: "email", ph: "you@company.com", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone (optional)", type: "tel", ph: "+92 300 0000000", required: false, autoComplete: "tel" },
];

const empty = { name: "", email: "", phone: "", message: "", website: "" };

const inputCls =
  "w-full px-4 py-3.5 border border-border-input rounded-lg bg-bg-alt text-[15px] font-sans text-ink placeholder:text-soft focus:outline-none focus:border-primary transition-colors";
const labelCls = "block text-[12px] tracking-[.15em] font-semibold text-muted uppercase mb-2";

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");

      setStatus("success");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Network error. Please try again.");
    }
  }

  const sending = status === "sending";

  return (
    <>
      <PageHero
        tag="Contact us"
        title="Let's build something"
        accent="together"
        text="Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions."
      />

      <section className="py-20 bg-bg-alt">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 items-start">
          {/* LEFT — info cards */}
          <div>
            {info.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex gap-4 items-center bg-white border border-border-light rounded-xl p-6 mb-5 shadow-[0_4px_16px_rgba(47,84,255,.04)]"
              >
                <span className="w-14 h-14 rounded-xl bg-tint-blue-bg text-tint-blue-fg grid place-items-center shrink-0">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <small className="block tracking-[.15em] text-muted font-semibold text-[12px] uppercase">
                    {label}
                  </small>
                  <b className="text-[17px] text-ink font-semibold">{value}</b>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-border-light rounded-xl p-8 shadow-[0_10px_30px_rgba(47,84,255,.06)]"
          >
            <h2 className="font-display text-[30px] font-extrabold mb-6 text-ink">
              Send Us A <span className="text-accent">Message</span>
            </h2>

            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-10">
                <span className="w-16 h-16 rounded-full bg-tint-green-bg text-tint-green-fg grid place-items-center">
                  <CheckCircle2 size={30} />
                </span>
                <h3 className="mt-5 text-[22px] font-bold text-ink">Message sent!</h3>
                <p className="mt-2 text-muted max-w-[360px]">
                  Thanks for reaching out. We've emailed you a confirmation and will reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {fields.map((f) => (
                  <div key={f.name} className="mb-5">
                    <label htmlFor={f.name} className={labelCls}>
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      placeholder={f.ph}
                      required={f.required}
                      autoComplete={f.autoComplete}
                      value={form[f.name]}
                      onChange={update}
                      disabled={sending}
                      className={inputCls}
                    />
                  </div>
                ))}

                <label htmlFor="message" className={labelCls}>
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  minLength={10}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={update}
                  disabled={sending}
                  className={`${inputCls} resize-none`}
                />

                {/* Honeypot — hidden from people, bots fill it in */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={update}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] w-px h-px opacity-0"
                />

                {status === "error" && (
                  <p role="alert" className="mt-4 flex items-start gap-2 text-sm text-tint-pink-fg">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" /> {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
                >
                  {sending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}