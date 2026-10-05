import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight, Award, FileText, Users, Headphones, Target, Eye, Mail,
  MapPin, Landmark, Globe, Compass, Rocket, BarChart3, Settings, Trophy,
  Lightbulb, Hammer, TrendingUp,
} from "lucide-react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Counter } from "../components/Counter";
import { team } from "../data/team";

/* ---------------------------------------------------------------
   IMAGES — save these in:  src/assets/images/about/
     about-hero.jpg   (building / office photo, hero right)
     our-story.jpg    (team working together)
     founder.jpg      (founder portrait)
     world-map.png    (dotted world map, transparent PNG)
   Team member photos come from ../data/team (unchanged).
   If a file is missing, a soft placeholder is shown instead.
---------------------------------------------------------------- */
const aboutImages = import.meta.glob("../assets/images/about/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const pic = (name) =>
  Object.entries(aboutImages).find(([p]) =>
    new RegExp(`/${name}\\.(jpe?g|png|webp)$`).test(p)
  )?.[1];

function Photo({ name, alt, fit = "object-cover object-top", eager = false }) {
  const src = pic(name);
  return src ? (
    <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className={`w-full h-full ${fit}`} />
  ) : (
    <div role="img" aria-label={alt} className="w-full h-full bg-gradient-to-br from-tint-blue-bg to-hero-3" />
  );
}

/* ---------------- DATA (edit freely) ---------------- */
const stats = [
  { icon: Award, value: "8+", label: "Years of Experience" },
  { icon: FileText, value: "120+", label: "Projects Delivered" },
  { icon: Users, value: "60+", label: "Happy Clients" },
  { icon: Headphones, value: "24/7", label: "Support Available" },
];

const missionVision = [
  {
    icon: Target,
    label: "Our Mission",
    text: "To empower businesses with innovative technology solutions that create real impact and drive sustainable growth.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    text: "To be a global leader in digital transformation, known for our people, our innovation and our commitment to a better tomorrow.",
  },
];

const regions = [
  ["North America", MapPin],
  ["Europe", Landmark],
  ["Asia Pacific", Globe],
  ["Middle East", Compass],
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

const achievements = [
  { v: 120, s: "+", l: "Projects Delivered" },
  { v: 60, s: "+", l: "Happy Clients" },
  { v: 10, s: "+", l: "Years of Experience" },
  { v: 24, s: "/7", l: "Support Availability" },
];

const founderOf = team.find((m) => /founder/i.test(m.r ?? m.role ?? "")) ?? team[0];
const founder = {
  name: founderOf?.n ?? founderOf?.name ?? "Hassan Alam",
  role: "Founder & CEO, Code Axis Tech",
};

/* ---------------- SMALL HELPERS ---------------- */
const Eyebrow = ({ children }) => (
  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[.1em] uppercase text-primary before:content-[''] before:w-3.5 before:h-0.5 before:bg-primary">
    {children}
  </div>
);

const H2 = ({ children, className = "" }) => (
  <h2 className={`text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1.15] tracking-[-.02em] text-ink ${className}`}>
    {children}
  </h2>
);

const Container = ({ children, className = "" }) => (
  <div className={`max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 ${className}`}>{children}</div>
);

const SectionTag = ({ children }) => (
  <span className="inline-flex items-center gap-2.5 sm:gap-3 bg-border-soft px-3.5 sm:px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-[.15em] sm:tracking-[.2em] uppercase text-muted">
    <span className="w-5 sm:w-6 h-0.5 rounded bg-gradient-to-r from-pink via-violet to-primary" />
    {children}
  </span>
);

const GradientHeading = ({ children }) => (
  <span className="bg-gradient-to-r from-pink via-violet to-primary bg-clip-text text-transparent">{children}</span>
);

const GradLine = ({ className = "" }) => (
  <span className={`block h-[3px] rounded bg-gradient-to-r from-pink via-violet to-primary ${className}`} />
);

/* ---------------- PAGE ---------------- */
export default function About() {
  return (
    <div className="font-sans text-ink bg-bg overflow-x-hidden">

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hero-1 via-hero-2 to-hero-3">
        <div aria-hidden className="absolute -left-24 top-20 w-52 h-52 rounded-full bg-primary/10 pointer-events-none" />
        <Container className="relative grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-center py-12 sm:py-14 lg:py-16">
          <div>
            <Eyebrow>About Us</Eyebrow>
            <h1 className="font-display text-[26px] min-[400px]:text-[30px] sm:text-[40px] md:text-[44px] lg:text-[36px] xl:text-[46px] font-extrabold leading-[1.08] tracking-[-.03em] mt-4 text-ink">
              People. Ideas.<br />Technology.<br />
              <span className="text-primary whitespace-nowrap">A Brighter Tomorrow.</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-muted mt-4 sm:mt-5 max-w-[430px]">
              We are Code Axis Tech, a global technology partner helping businesses
              turn innovative ideas into solutions that create lasting value.
            </p>
            <a
              href="#story"
              className="inline-flex items-center gap-3 mt-6 text-[14px] font-semibold px-6 py-3.5 rounded-lg bg-navy text-white shadow-[0_8px_20px_rgba(15,31,61,.25)] hover:opacity-95 transition"
            >
              Our Story <ArrowRight size={15} />
            </a>
          </div>

          <div className="relative lg:w-full xl:w-[calc(100%+40px)] xl:-mr-10 lg:-translate-y-4 lg:-translate-x-4 xl:-translate-y-6 xl:-translate-x-6">
            <div className="rounded-[22px] sm:rounded-[28px] overflow-hidden aspect-[16/11] lg:aspect-[16/11.5] shadow-[0_24px_50px_rgba(31,50,120,.18)] bg-tint-blue-bg">
              <Photo name="about-hero" alt="Code Axis Tech office building" eager />
            </div>
            <div className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 backdrop-blur-md bg-white/70 border border-white/60 rounded-xl px-4 sm:px-5 py-3 text-[12px] sm:text-[13px] leading-[1.7] text-muted shadow-[0_10px_30px_rgba(31,50,120,.12)]">
              Technology<br />People<br />Impact<br />Always
              <GradLine className="w-10 mt-2.5" />
            </div>
          </div>
        </Container>
      </section>

      {/* ===== OUR STORY ===== */}
      <section id="story" className="py-12 sm:py-14 lg:py-16 scroll-mt-24">
        <Container className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="relative">
            <div className="absolute -right-3 top-5 -bottom-3 left-10 rounded-2xl bg-tint-blue-bg" aria-hidden />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_20px_44px_rgba(31,50,120,.16)]">
              <Photo name="our-story" alt="The Code Axis Tech team collaborating" />
              <div className="absolute left-1 bottom-0 sm:left-2 sm:bottom-1 max-w-[190px] sm:max-w-[215px] rounded-xl bg-white/90 backdrop-blur-md border border-white/60 px-4 sm:px-5 py-4 text-[12px] sm:text-[13px] leading-[1.6] text-ink font-medium shadow-[0_10px_30px_rgba(31,50,120,.15)]">
                A team driven by curiosity, collaboration and real-world impact.
                <GradLine className="w-10 mt-2.5" />
              </div>
            </div>
          </div>

          <div>
            <Eyebrow>Our Story</Eyebrow>
            <H2 className="mt-3">From a Bold Idea to<br className="hidden sm:block" /> a Global Partner</H2>
            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-muted mt-4 sm:mt-5 max-w-[520px]">
              Code Axis Tech was founded with a simple belief — technology can create a
              better, more connected and more inclusive world. What started as a small,
              passionate team has grown into a trusted global technology partner, helping
              businesses across industries innovate, solve real problems and achieve lasting impact.
            </p>
            <Link to="/portfolio" className="inline-flex items-center gap-2 mt-5 text-[14px] font-semibold text-primary">
              Our Journey <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-tint-blue-bg/80 via-tint-blue-bg/50 to-tint-blue-bg/80 border border-border-light shadow-[0_10px_30px_rgba(31,50,120,.05)] px-4 sm:px-8 py-8 sm:py-10 grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 lg:divide-x lg:divide-border-light">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 sm:gap-4 lg:justify-center lg:px-4">
                <span className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-white/80 text-primary grid place-items-center">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
                <div>
                  <b className="block text-[22px] sm:text-[28px] font-extrabold leading-none text-ink">{value}</b>
                  <span className="block text-[11px] sm:text-xs text-soft mt-1.5 leading-tight">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-12 sm:py-14 lg:py-16">
        <Container className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {missionVision.map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="flex items-center gap-4 sm:gap-6 rounded-2xl bg-gradient-to-br from-tint-blue-bg/70 to-tint-blue-bg/40 border border-border-light px-5 sm:px-8 py-8 sm:py-10 shadow-[0_10px_30px_rgba(31,50,120,.05)]"
            >
              <span className="w-14 h-14 sm:w-[68px] sm:h-[68px] shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center">
                <Icon size={26} strokeWidth={1.6} />
              </span>
              <div>
                <div className="text-[11px] font-bold tracking-[.1em] uppercase text-primary">{label}</div>
                <p className="text-[14px] leading-[1.7] text-muted mt-1.5">{text}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-12 sm:py-14 lg:py-16 bg-bg-alt overflow-hidden">
        <Container className="text-center">
          <SectionTag>Timeline</SectionTag>
          <H2 className="mt-5">Our <GradientHeading>Journey</GradientHeading></H2>
          <p className="max-w-[620px] mx-auto mt-4 text-muted text-[14px] sm:text-[15px] leading-[1.7]">
            From a small idea to a trusted name in full-service technology solutions.
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-16 text-left">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const next = journey[index + 1];
              return (
                <li key={item.year} className="relative flex flex-col items-start md:items-center pl-[76px] md:pl-0">
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
                      className={`hidden md:block absolute left-1/2 top-8 h-0.5 w-[calc(100%+1.5rem)] origin-left bg-gradient-to-r from-pink via-violet to-primary ${index % 2 === 1 ? "md:max-lg:hidden" : ""}`}
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
                  <div className="relative overflow-hidden bg-white border border-border-light rounded-2xl px-5 sm:px-6 py-6 shadow-[0_10px_30px_rgba(47,84,255,.06)] mt-2 w-full transition-transform hover:-translate-y-1">
                    <span className="absolute right-0 top-0 w-20 h-20 rounded-bl-[100%] bg-primary/10" />
                    <span className="relative text-2xl font-extrabold text-primary font-display block">{item.year}</span>
                    <h3 className="relative text-[17px] font-bold text-ink mt-1.5">{item.title}</h3>
                    <p className="relative text-[13px] text-muted leading-[1.7] mt-2">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-12 sm:py-14 lg:py-16">
        <Container className="text-center">
          <SectionTag>Our Values</SectionTag>
          <H2 className="mt-5">Innovate · Build · Grow · <GradientHeading>Succeed</GradientHeading></H2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-12 text-left">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="relative overflow-hidden bg-white border border-border-light rounded-2xl px-5 sm:px-6 py-6 sm:py-7 shadow-[0_10px_30px_rgba(47,84,255,.06)] transition-transform hover:-translate-y-1.5">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <GradLine className="w-8 my-4" />
                  <h3 className="text-lg font-extrabold text-ink">{v.title}</h3>
                  <p className="mt-2 text-muted text-sm leading-[1.7]">{v.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="py-12 sm:py-14 lg:py-16">
        <Container className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/4.3] shadow-[0_24px_50px_rgba(31,50,120,.16)] bg-tint-blue-bg">
              <Photo name="founder" alt={`${founder.name}, ${founder.role}`} />
            </div>
            <div className="absolute left-3 bottom-3 sm:-left-3 sm:bottom-6 max-w-[135px] sm:max-w-[150px] rounded-xl bg-gradient-to-br from-pink via-violet to-primary text-white px-3.5 sm:px-4 py-5 sm:py-6 text-[13px] sm:text-[14px] leading-[1.5] font-medium shadow-[0_16px_36px_rgba(15,31,61,.35)]">
              Leading with innovation, integrity and purpose.
            </div>
          </div>

          <div>
            <Eyebrow>Our Leadership</Eyebrow>
            <H2 className="mt-3">Meet Our Founder</H2>
            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-muted mt-4 sm:mt-5 max-w-[520px]">
              {founder.name} founded Code Axis Tech with a vision to create innovative
              digital solutions that help businesses and people grow. With a deep passion
              for technology and a commitment to positive change, {founder.name.split(" ")[0]} continues
              to guide our team, inspire innovation and build long-term partnerships worldwide.
            </p>

            <div className="mt-6 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <div
                  className="text-[30px] sm:text-[34px] leading-none text-ink italic"
                  style={{ fontFamily: "'Segoe Script','Brush Script MT',cursive" }}
                >
                  {founder.name}
                </div>
                <div className="mt-3 pt-2.5 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[2px] before:w-full before:max-w-[230px] before:rounded before:bg-gradient-to-r before:from-pink before:via-violet before:to-primary">
                  <b className="block text-[14px] text-ink">{founder.name}</b>
                  <span className="block text-xs text-soft mt-0.5">{founder.role}</span>
                </div>
              </div>
              <div className="flex gap-2">
                {[
                  [FaLinkedinIn, "LinkedIn"],
                  [FaTwitter, "Twitter"],
                  [Mail, "Email"],
                ].map(([I, l]) => (
                  <a key={l} href="#" aria-label={`${founder.name} on ${l}`} className="w-9 h-9 rounded-lg bg-tint-blue-bg text-primary grid place-items-center hover:-translate-y-0.5 transition">
                    <I size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== TEAM ===== */}
      <section className="py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-7 sm:mb-9">
            <div>
              <Eyebrow>Our Team</Eyebrow>
              <H2 className="mt-3">A Diverse Team Building What's Next</H2>
              <p className="text-[14px] sm:text-[15px] leading-[1.7] text-muted mt-3 max-w-[640px]">
                We are a close-knit team of designers, developers, strategists and innovators
                who are passionate about people, technology and creating solutions that make a real difference.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 shrink-0 self-start md:self-auto text-[14px] font-semibold px-6 py-3.5 rounded-lg bg-navy text-white shadow-[0_8px_20px_rgba(15,31,61,.25)] hover:opacity-95 transition"
            >
              Meet Our Team <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {team.map((m) => {
              const name = m.n ?? m.name;
              const role = m.r ?? m.role;
              const img = m.img ?? m.image;
              return (
                <article key={name} className="bg-white border border-border-light rounded-xl overflow-hidden shadow-[0_10px_28px_rgba(31,50,120,.07)] transition-transform hover:-translate-y-1">
                  <div className="aspect-[4/4.2] bg-tint-blue-bg">
                    <img src={img} alt={`${name}, ${role} at Code Axis Tech`} loading="lazy" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="flex items-center justify-between gap-2 p-3 sm:p-4">
                    <div className="min-w-0">
                      <h3 className="text-[13px] sm:text-[15px] font-bold text-ink truncate">{name}</h3>
                      <p className="text-[11px] sm:text-xs text-soft mt-0.5 truncate">{role}</p>
                    </div>
                    <a href="#" aria-label={`${name} on LinkedIn`} className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 rounded-md bg-tint-blue-bg text-primary grid place-items-center">
                      <FaLinkedinIn size={12} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section className="py-12 sm:py-14 lg:py-16 bg-bg-alt">
        <Container className="text-center">
          <SectionTag>Achievements</SectionTag>
          <H2 className="mt-5">Numbers that <GradientHeading>speak for us</GradientHeading></H2>
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-10 sm:mt-12">
            {achievements.map((a) => (
              <div key={a.l} className="bg-white border border-border-light rounded-2xl px-4 sm:px-6 py-7 sm:py-8 text-center shadow-[0_10px_30px_rgba(47,84,255,.06)] transition-transform hover:-translate-y-1">
                <Counter value={a.v} suffix={a.s} />
                <p className="mt-2 text-[12px] sm:text-[13px] text-muted font-medium">{a.l}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== GLOBAL PRESENCE ===== */}
      <section className="py-12 sm:py-14 lg:py-16">
        <Container className="grid lg:grid-cols-[.7fr_1.3fr] gap-8 lg:gap-10 items-center">
          <div>
            <Eyebrow>Our Global Presence</Eyebrow>
            <H2 className="mt-3">Empowering Businesses<br className="hidden sm:block" /> Across Industries</H2>
            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-muted mt-4 max-w-[440px]">
              We work with businesses across the globe, helping them innovate and grow. Our
              solutions serve clients in a wide range of industries, from healthcare and
              finance to eCommerce and education.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-1 w-full aspect-[4/3] lg:min-h-[320px]">
              <Photo name="world-map" alt="World map showing Code Axis Tech's global reach" fit="object-contain" />
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4 w-full sm:w-auto shrink-0">
              {regions.map(([r, RegionIcon]) => (
                <li key={r} className="flex items-center gap-2.5 text-[13px] text-muted whitespace-nowrap">
                  <span className="w-7 h-7 rounded-full bg-tint-blue-bg text-primary grid place-items-center shrink-0">
                    <RegionIcon size={14} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ===== CTA CARD ===== */}
      <section className="py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-navy text-white px-6 sm:px-10 lg:px-12 py-10 sm:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <svg aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="abBase" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#0a1f52" />
                  <stop offset=".6" stopColor="#0d2f7a" />
                  <stop offset="1" stopColor="#1646b8" />
                </linearGradient>
                <radialGradient id="abGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#4f8dff" stopOpacity=".7" />
                  <stop offset="1" stopColor="#2f54ff" stopOpacity="0" />
                </radialGradient>
                <pattern id="abDots" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.4" fill="#fff" fillOpacity=".5" />
                </pattern>
              </defs>
              <rect width="1200" height="300" fill="url(#abBase)" />
              <path d="M0 230 C 250 150, 420 290, 700 200 S 1050 120, 1200 190 L1200 300 L0 300 Z" fill="#3b7bff" fillOpacity=".12" />
              <circle cx="140" cy="330" r="260" fill="#2f5fd8" fillOpacity=".25" />
              <circle cx="140" cy="330" r="260" fill="none" stroke="#9db8ff" strokeOpacity=".15" />
              <circle cx="-30" cy="40" r="150" fill="#1e40af" fillOpacity=".35" />
              <circle cx="1060" cy="40" r="230" fill="url(#abGlow)" />
              <circle cx="1200" cy="250" r="170" fill="#3b7bff" fillOpacity=".3" />
              <circle cx="1000" cy="150" r="260" fill="none" stroke="#fff" strokeOpacity=".08" />
              <circle cx="1000" cy="150" r="190" fill="none" stroke="#fff" strokeOpacity=".06" />
              <circle cx="620" cy="40" r="26" fill="#60a5fa" fillOpacity=".25" />
              <circle cx="470" cy="270" r="40" fill="#3b7bff" fillOpacity=".18" />
              <rect x="1040" y="30" width="120" height="100" fill="url(#abDots)" opacity=".5" />
            </svg>
            <div className="relative">
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[.12em] uppercase text-white/70 before:content-[''] before:w-5 before:h-px before:bg-white/60">
                Let's Build Together
              </div>
              <h2 className="font-display text-[24px] sm:text-[30px] font-extrabold mt-3">Have an idea in mind?</h2>
              <p className="text-[14px] text-white/75 mt-2 max-w-[460px] leading-[1.6]">
                Let's discuss how Code Axis Tech can help you turn your ideas into powerful digital solutions.
              </p>
            </div>
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center gap-3 shrink-0 bg-white text-ink text-[14px] font-semibold px-6 py-3.5 rounded-lg shadow-[0_10px_26px_rgba(0,0,0,.25)] hover:bg-white/90 transition"
            >
              Start a Conversation <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}