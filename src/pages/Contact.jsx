import { MapPin, Mail, Phone, Clock } from "lucide-react";
import PageHero from "../components/common/PageHero";

const info = [
  { Icon: MapPin, label: "Visit our location", value: "Gulberg Lahore" },
  { Icon: Mail, label: "Send us email", value: "info@codeaxistech.com" },
  { Icon: Phone, label: "Phone · Hassan Alam", value: "+92 336 3339083" },
  { Icon: Clock, label: "Open hours", value: "Available 24/7 to Serve You Anytime" },
];

export default function Contact() {
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
            className="bg-white border border-border-light rounded-xl p-8 shadow-[0_10px_30px_rgba(47,84,255,.06)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="font-display text-[30px] font-extrabold mb-6 text-ink">
              Send Us A <span className="text-accent">Message</span>
            </h2>

            {[
              ["Your name", "text", "Jane Doe"],
              ["Email address", "email", "you@company.com"],
              ["Phone (optional)", "text", "+92 300 0000000"],
            ].map(([label, type, ph]) => (
              <div key={label}>
                <label className="block text-[12px] tracking-[.15em] font-semibold text-muted uppercase mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={ph}
                  className="w-full px-4 py-3.5 border border-border-input rounded-lg bg-bg-alt text-[15px] font-sans text-ink placeholder:text-soft focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            ))}

            <label className="block text-[12px] tracking-[.15em] font-semibold text-muted uppercase mt-5 mb-2">
              Your message
            </label>
            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3.5 border border-border-input rounded-lg bg-bg-alt text-[15px] font-sans text-ink placeholder:text-soft focus:outline-none focus:border-primary transition-colors resize-none"
            />

            <button className="w-full mt-6 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}