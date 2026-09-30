import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import CTA from "../components/layout/CTA";
import { services, includes } from "../data/services";

const spanClass = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export default function Services() {
  return (
    <>
      <PageHero
        tag="Services"
        title="Our Development"
        accent="Services"
        text="From city-specific landing pages to AI-powered automation, every service is built to bring measurable growth."
      >
        <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors">
          Contact Us
        </Link>{" "}
        <Link to="/portfolio" className="inline-block bg-white text-ink border border-border-input font-semibold px-6 py-3.5 rounded-lg hover:bg-bg-alt transition-colors">
          View Portfolio
        </Link>
      </PageHero>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-6 gap-6">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`bg-white border border-border-light rounded-[10px] p-8 shadow-[0_10px_30px_rgba(47,84,255,.06)] transition-transform hover:-translate-y-1 ${spanClass[i]}`}
            >
              <span className="inline-block bg-tint-blue-bg text-primary font-semibold px-3 py-2 rounded-lg mb-4 text-sm">
                {s.n}
              </span>

              <h3 className="text-[22px] font-bold mb-2.5 font-display text-ink">{s.t}</h3>
              <p className="text-muted text-[15px]">{s.d}</p>

              <ul className="mt-4 space-y-1.5">
                {s.p.map((x) => (
                  <li
                    key={x}
                    className="relative pl-7 py-1.5 text-sm text-body before:content-['✓'] before:absolute before:left-0 before:text-accent"
                  >
                    {x}
                  </li>
                ))}
              </ul>

              <a className="block mt-5 text-primary font-semibold text-sm cursor-pointer">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center bg-bg-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-flex items-center gap-2.5 border border-border-light bg-white px-4 py-2 rounded-md text-[12px] tracking-[.2em] font-semibold text-muted uppercase before:content-[''] before:w-[22px] before:h-[2px] before:bg-primary">
            Our powerful features
          </span>

          <h2 className="text-[40px] font-extrabold mt-4 mb-3 text-ink">
            What every project <span className="text-accent">includes</span>
          </h2>

          <p className="text-muted max-w-[620px] mx-auto mb-10">
            Development teams rely on our software to streamline workflows, gain actionable
            insights, and accelerate delivery while providing exceptional user experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {includes.map(([n, t, d]) => (
              <div key={n} className="bg-white border border-border-light rounded-[10px] p-8 shadow-[0_10px_30px_rgba(47,84,255,.06)]">
                <small className="text-accent font-semibold">{n}</small>
                <h3 className="text-[22px] font-bold mt-2.5 mb-2.5 font-display text-ink">{t}</h3>
                <p className="text-muted text-[15px]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}