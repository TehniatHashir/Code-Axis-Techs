import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Target, Rocket, Lightbulb, Hammer, TrendingUp, Trophy,
  BarChart3, Settings, PenLine, Code2, Search, Mail, Globe,
} from "lucide-react";
import PageHero from "../components/common/PageHero";
import CTA from "../components/layout/CTA";
import { Counter } from "../components/Counter";
import { team } from "../data/team";

/* ---------------- DATA ---------------- */
const introStats = [
  { v: 120, s: "+", l: "Projects Delivered" },
  { v: 60, s: "+", l: "Happy Clients" },
  { v: 8, s: "+", l: "Years Experience" },
  { v: 24, s: "/7", l: "Support Available" },
];

const achievements = [
  { v: 120, s: "+", l: "Projects Delivered" },
  { v: 60, s: "+", l: "Happy Clients" },
  { v: 10, s: "+", l: "Years of Experience" },
  { v: 24, s: "/7", l: "Support Availability" },
];

const missionVision = [
  {
    icon: Target,
    title: "Our", highlight: "Mission",
    text: "To empower businesses with smart, scalable software solutions that drive real growth — combining clean development, thoughtful design, and automation to turn ideas into measurable results.",
    variant: "pink",
  },
  {
    icon: Rocket,
    title: "Our", highlight: "Vision",
    text: "To be a trusted technology partner for businesses worldwide, known for innovation, reliability, and delivering digital experiences that create lasting impact.",
    variant: "violet",
  },
];

const journey = [
  { year: "2018", title: "Founded", text: "Started with a simple vision to deliver smart and reliable IT solutions.", icon: Rocket },
  { year: "2019", title: "Expansion", text: "Grew our team and expanded our services to support more businesses.", icon: BarChart3 },
  { year: "2023", title: "Automation Era", text: "Introduced AI-powered solutions to help clients work smarter and faster.", icon: Settings },
  { year: "2026", title: "Today", text: "A trusted technology partner delivering innovative solutions to businesses worldwide.", icon: Trophy },
];

const values = [
  { icon: Lightbulb, title: "Innovate", text: "We explore new ideas and technology so your product stays a step ahead." },
  { icon: Hammer, title: "Build", text: "Clean, fast and scalable builds designed around real business goals." },
  { icon: TrendingUp, title: "Grow", text: "SEO, automation and analytics that keep leads and revenue climbing." },
  { icon: Trophy, title: "Succeed", text: "Dedicated support available 24/7 so nothing slows your momentum." },
];

const teamExtras = {
  "Hassan Alam": { skill: "Business Strategy", icon: Lightbulb },
  "Ayesha Khan": { skill: "UI/UX Design", icon: PenLine },
  "Bilal Ahmed": { skill: "Web Development", icon: Code2 },
  "Sana Malik": { skill: "Search Optimization", icon: Search },
};
const teamFallback = { skill: "Digital Solutions", icon: Code2 };
const FEATURED_INDEX = 1;

/* ---------------- HELPERS ---------------- */
const SectionTag = ({ children }) => (
  <span className="inline-flex items-center gap-2.5 sm:gap-3 bg-border-soft px-3.5 sm:px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-[.15em] sm:tracking-[.2em] uppercase text-muted">
    <span className="w-5 sm:w-6 h-0.5 rounded bg-gradient-to-r from-pink via-violet to-primary" />
    {children}
  </span>
);

const GradientHeading = ({ children }) => (
  <span className="bg-gradient-to-r from-pink via-violet to-primary bg-clip-text text-transparent">
    {children}
  </span>
);

/* ---------------- PAGE ---------------- */
export default function About() {
  return (
    <>
      <PageHero
        tag="About us"
        title="Our solutions will"
        accent="transform your business"
        text="Code Axis Tech empowers innovation, delivering modern IT solutions tailored to your business needs."
      >
        <Link
          to="/contact"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
        >
          Work With Us →
        </Link>
      </PageHero>

      {/* ===== INTRO ===== */}
      <section className="relative py-14 sm:py-20 overflow-hidden bg-bg-alt">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-15 items-center">
            <div>
              <SectionTag>About Us</SectionTag>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-[-.02em] mt-5 mb-0 text-ink">
                Transforming Ideas into <GradientHeading>Results</GradientHeading>
              </h2>
              <p className="mt-5 sm:mt-6 text-muted text-[14px] sm:text-[15px] leading-[1.8]">
                Our solutions enable software teams to simplify processes, improve
                decision-making, and increase efficiency, all while creating outstanding
                experiences. Drive innovation and bring your projects to market faster
                than ever before.
              </p>
              <p className="mt-4 text-muted text-[14px] sm:text-[15px] leading-[1.8]">
                CODE AXIS TEAM teams rely on our software to streamline development
                workflows, enhance insights, and accelerate innovation while delivering
                exceptional user experiences. Deploy your projects faster to stay ahead
                in the market.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {introStats.map((s) => (
                <div
                  key={s.l}
                  className="bg-white border border-border-light rounded-2xl px-4 sm:px-6 py-5 sm:py-7 shadow-[0_10px_30px_rgba(47,84,255,.06)] text-left transition-transform hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(47,84,255,.12)]"
                >
                  <Counter value={s.v} suffix={s.s} />
                  <p className="mt-2 text-[12px] sm:text-[13px] text-muted font-medium">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="relative py-12 sm:py-[70px] overflow-hidden bg-bg-alt">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <SectionTag>Purpose</SectionTag>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-[-.02em] mt-5 mb-0 text-ink">
            Mission &amp; <GradientHeading>Vision</GradientHeading>
          </h2>

          <p className="max-w-[620px] mx-auto mt-4 text-muted text-[14px] sm:text-[15px] leading-[1.7]">
            What drives us forward and where we're heading next.
          </p>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mt-10 sm:mt-12 text-left">
            {missionVision.map((card) => {
              const Icon = card.icon;
              const isPink = card.variant === "pink";
              return (
                <div
                  key={card.highlight}
                  className={`relative overflow-hidden bg-white border border-border-light rounded-2xl pt-7 sm:pt-8 px-6 sm:px-8 pb-8 sm:pb-9 shadow-[0_14px_34px_rgba(47,84,255,.08)] transition-transform hover:-translate-y-1 before:content-[''] before:absolute before:-right-15 before:-bottom-20 before:w-[220px] before:h-[220px] before:rounded-full before:pointer-events-none before:opacity-20 ${
                    isPink
                      ? "before:bg-[radial-gradient(circle_at_30%_30%,var(--color-primary),transparent_70%)]"
                      : "before:bg-[radial-gradient(circle_at_30%_30%,var(--color-primary-dark),transparent_70%)]"
                  }`}
                >
                  <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl relative z-10 ${
                    isPink ? "bg-primary/10 text-primary" : "bg-primary-dark/10 text-primary-dark"
                  }`}>
                    <Icon size={22} strokeWidth={1.8} />
                  </span>

                  <span className={`block w-8 h-[3px] rounded my-5 mb-3.5 relative z-10 ${isPink ? "bg-primary" : "bg-primary-dark"}`} />

                  <h3 className="text-xl sm:text-2xl font-extrabold text-ink relative z-10 mb-2.5">
                    {card.title}{" "}
                    <span className={isPink ? "text-primary" : "text-primary-dark"}>
                      {card.highlight}
                    </span>
                  </h3>

                  <p className="text-muted text-sm leading-[1.75] max-w-[440px] relative z-10">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="relative py-14 sm:py-20 overflow-hidden bg-bg-alt">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <SectionTag>Timeline</SectionTag>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-[-.02em] mt-5 mb-0 text-ink">
            Our <GradientHeading>Journey</GradientHeading>
          </h2>

          <p className="max-w-[620px] mx-auto mt-4 text-muted text-[14px] sm:text-[15px] leading-[1.7]">
            From a small idea to a trusted name in full-service technology solutions.
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-16 text-left">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const next = journey[index + 1];
              return (
                <li
                  key={item.year}
                  className="relative flex flex-col items-start md:items-center pl-[76px] md:pl-0"
                >
                  {next && (
                    <motion.span
                      aria-hidden
                      className="md:hidden absolute left-[27px] top-7 h-[calc(100%+40px)] w-0.5 origin-top bg-gradient-to-b from-pink via-violet to-primary"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeInOut" }}
                    />
                  )}

                  {next && (
                    <motion.span
                      aria-hidden
                      className={`hidden md:block absolute left-1/2 top-8 h-0.5 w-[calc(100%+1.5rem)] origin-left bg-gradient-to-r from-pink via-violet to-primary ${
                        index % 2 === 1 ? "md:max-lg:hidden" : ""
                      }`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
                    />
                  )}

                  <motion.div
                    className="absolute left-0 top-0 md:relative md:left-auto md:top-auto z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-white text-primary shadow-[0_14px_34px_rgba(47,84,255,.18)]"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </motion.div>

                  <div className="hidden md:flex flex-col items-center">
                    <span className="h-6 border-l border-dashed border-primary" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>

                  <div className="relative overflow-hidden bg-white border border-border-light rounded-2xl px-5 sm:px-6 py-6 shadow-[0_10px_30px_rgba(47,84,255,.06)] mt-2 w-full transition-transform hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(47,84,255,.12)]">
                    <span className="absolute right-0 top-0 w-20 h-20 rounded-bl-[100%] bg-primary/10" />
                    <span className="relative text-2xl font-extrabold text-primary font-display block">
                      {item.year}
                    </span>
                    <h3 className="relative text-[17px] font-bold text-ink mt-1.5">
                      {item.title}
                    </h3>
                    <p className="relative text-[13px] text-muted leading-[1.7] mt-2">
                      {item.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section className="relative py-14 sm:py-20 overflow-hidden bg-bg-alt">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <SectionTag>Achievements</SectionTag>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-[-.02em] mt-5 mb-0 text-ink">
            Numbers that <GradientHeading>speak for us</GradientHeading>
          </h2>

          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-10 sm:mt-14">
            {achievements.map((s) => (
              <div
                key={s.l}
                className="bg-white border border-border-light rounded-2xl px-4 sm:px-6 py-7 sm:py-8 text-center shadow-[0_10px_30px_rgba(47,84,255,.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(47,84,255,.12)]"
              >
                <Counter value={s.v} suffix={s.s} />
                <p className="mt-2 text-[12px] sm:text-[13px] text-muted font-medium">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="relative py-14 sm:py-20 overflow-hidden bg-bg-alt">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <SectionTag>Our Values</SectionTag>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-[-.02em] mt-5 mb-0 text-ink">
            Innovate · Build · Grow · <GradientHeading>Succeed</GradientHeading>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-14 text-left">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="relative overflow-hidden bg-white border border-border-light rounded-2xl px-5 sm:px-6 py-6 sm:py-7 shadow-[0_10px_30px_rgba(47,84,255,.06)] transition-transform hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(47,84,255,.12)]"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span className="block w-8 h-[3px] rounded my-4 bg-gradient-to-r from-pink via-violet to-primary" />
                  <h3 className="text-lg font-extrabold text-ink">{v.title}</h3>
                  <p className="mt-2 text-muted text-sm leading-[1.7]">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="relative py-14 sm:py-20 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <SectionTag>Team</SectionTag>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.15] tracking-[-.02em] mt-5 mb-0 text-ink">
            The people behind <GradientHeading>Code Axis Tech</GradientHeading>
          </h2>

          <p className="max-w-[620px] mx-auto mt-4 text-muted text-[14px] sm:text-[15px] leading-[1.7]">
            A compact, senior team of designers, developers and strategists working directly with you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-14 text-left">
            {team.map((member, index) => {
              const extra = teamExtras[member.name] ?? teamFallback;
              const Icon = extra.icon;
              const featured = index === FEATURED_INDEX;

              return (
                <motion.div
                  key={member.name}
                  className="relative rounded-[18px] p-0.5 h-full w-full max-w-[420px] mx-auto sm:max-w-none"
                  whileHover={{ y: -6 }}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-0 rounded-[18px] bg-gradient-to-br from-pink via-violet to-primary transition-opacity duration-300 ${
                      featured ? "opacity-100" : "opacity-0 hover:opacity-100"
                    }`}
                  />

                  <div className={`relative flex flex-col h-full overflow-hidden rounded-[16.5px] bg-white transition-all duration-300 border ${
                    featured
                      ? "border-transparent shadow-[0_20px_46px_rgba(47,84,255,.18)]"
                      : "border-border-light hover:border-transparent"
                  }`}>
                    <div className="relative overflow-hidden aspect-[4/3.2] bg-gradient-to-br from-primary/10 to-bg-alt">
                      <span className="absolute -right-4 bottom-0 w-[78%] h-[78%] rounded-[45%_55%_40%_60%] bg-primary/15 transition-transform duration-700 hover:scale-110" />
                      <img
                        src={member.image || member.img}
                        alt={`${member.name}, ${member.role || member.r} at Code Axis Tech`}
                        loading="lazy"
                        className="relative z-10 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    <div className="flex-1 flex flex-col p-4">
                      <h3 className="text-[17px] font-extrabold text-ink">
                        {member.name || member.n}
                      </h3>
                      <p className="mt-0.5 text-[10px] tracking-[.18em] font-medium uppercase text-muted">
                        {(member.role || member.r || "").toUpperCase()}
                      </p>

                      <span className="block w-10 h-0.5 rounded mt-3 bg-gradient-to-r from-pink via-violet to-primary" />

                      <div className="flex items-center gap-2 mt-3.5 text-[12.5px] text-muted">
                        <Icon size={16} strokeWidth={1.7} className="text-primary shrink-0" />
                        {extra.skill}
                      </div>

                      <div className="flex items-center gap-2 mt-auto pt-4">
                        <a href="#" aria-label={`${member.name || member.n} on LinkedIn`} className="flex items-center justify-center w-8 h-8 rounded-full bg-border-soft text-ink text-xs font-extrabold hover:-translate-y-0.5 hover:bg-border-light transition">
                          in
                        </a>
                        <a href="#" aria-label={`Email ${member.name || member.n}`} className="flex items-center justify-center w-8 h-8 rounded-full bg-border-soft text-ink hover:-translate-y-0.5 hover:bg-border-light transition">
                          <Mail size={14} />
                        </a>
                        <a href="#" aria-label={`${member.name || member.n} website`} className="flex items-center justify-center w-8 h-8 rounded-full bg-border-soft text-ink hover:-translate-y-0.5 hover:bg-border-light transition">
                          <Globe size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}