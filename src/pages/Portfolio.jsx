import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import CTA from "../components/layout/CTA";
import { projects } from "../data/projects";

const tabs = ["All", "Web", "Cashback", "Local Business"];

export default function Portfolio() {
  const [tab, setTab] = useState("All");
  const list = tab === "All" ? projects : projects.filter((p) => p.c === tab);

  return (
    <>
      <PageHero
        tag="All Project Portfolio"
        title="Projects that deliver"
        accent="real results"
        text="Filter through our recent work across web platforms, cashback products and local service businesses."
      >
        <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors">
          Start Your Project
        </Link>
      </PageHero>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-3 rounded-md font-semibold text-[15px] transition-colors ${
                  tab === t
                    ? "bg-primary text-white"
                    : "text-muted hover:bg-tint-blue-bg"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p) => (
              <div
                key={p.t}
                className="bg-white rounded-[10px] overflow-hidden shadow-[0_10px_30px_rgba(47,84,255,.08)]"
              >
                <div
                  className="h-60 bg-cover bg-center bg-border-soft"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <div className="flex justify-between items-center p-6 gap-3">
                  <div>
                    <h4 className="font-display text-[18px] font-bold text-ink">{p.t}</h4>
                    <small className="tracking-[.15em] text-soft uppercase text-xs">
                      {p.c}
                    </small>
                  </div>
                  <span className="bg-tint-blue-bg border border-border-input px-4 py-2.5 rounded-md text-sm font-semibold whitespace-nowrap text-primary">
                    View Project ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}