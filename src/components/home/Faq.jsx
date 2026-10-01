import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Plus, Minus } from "lucide-react";

const faqs = [
  ["What types of websites do you develop?", "We build business websites, landing pages, e-commerce stores, web applications and custom platforms, all tailored to your goals."],
  ["Do you offer SEO services?", "Yes. We offer on-page and technical SEO, content strategy and ongoing optimization to help your site rank and generate leads."],
  ["How long does a typical project take?", "Most websites take 3 to 6 weeks. Larger applications take longer, and we share a clear timeline after discovery."],
  ["How much does a website or digital solution cost?", "Pricing depends on scope and features. Contact us for a free consultation and we'll send a transparent, no-surprise quote."],
  ["Do you provide ongoing support after launch?", "Absolutely. We offer maintenance, updates, monitoring and priority support plans so your product keeps performing."],
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-12 sm:py-14 lg:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[.9fr_1.1fr] gap-8 lg:gap-14 items-start">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-[.1em] uppercase text-primary before:content-[''] before:w-3.5 before:h-0.5 before:bg-primary">
            Frequently Asked Questions
          </div>
          <h2 className="text-[26px] sm:text-[36px] lg:text-[40px] font-extrabold leading-[1.15] mt-4 text-ink">
            Got Questions?<br />We've Got Answers.
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.7] text-muted mt-5 mb-7 max-w-[400px]">
            Find quick answers to the most common questions about our services,
            process, and support. Still need help? Our team is always here to assist you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-[14px] font-semibold px-6 py-3.5 rounded-full bg-white text-ink border border-border-input shadow-[0_4px_12px_rgba(15,31,61,.06)] hover:bg-bg-alt transition"
          >
            <MessageCircle size={16} /> Contact Our Team <ArrowRight size={15} />
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                className="bg-white border border-border-light rounded-xl shadow-[0_8px_22px_rgba(31,50,120,.06)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 text-left"
                >
                  <span className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full bg-tint-blue-bg text-primary grid place-items-center text-xs font-bold">
                    0{i + 1}
                  </span>
                  <span className="flex-1 text-[14px] sm:text-[15px] font-semibold text-ink leading-snug">{q}</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full bg-surface-2 text-ink grid place-items-center">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 pb-4 sm:pb-5 pl-[60px] sm:pl-[72px] text-sm leading-[1.7] text-muted">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}