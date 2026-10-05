import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CTA from "../components/layout/CTA";

/* ------------------------------------------------------------------
   IMAGES — place these files in:  src/assets/images/services/
     hero            → hero section photo
     custom-software → Custom Software Development card
     web-mobile      → Web & Mobile Applications card
     cloud-devops    → Cloud & DevOps Solutions card
     consulting      → Technology Consulting card
     team            → "Let's Build Something" section photo
   Any extension works (.jpg .jpeg .png .webp .svg). Until a file is
   added, a placeholder box is shown instead — the page never breaks.
   ------------------------------------------------------------------ */
const serviceImages = import.meta.glob(
  "../assets/images/services/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" }
);

function getImage(name) {
  const key = Object.keys(serviceImages).find(
    (path) => path.split("/").pop().replace(/\.[^.]+$/, "") === name
  );
  return key ? serviceImages[key] : null;
}

/* Shows the image if it exists, otherwise a themed placeholder box */
function Img({ name, alt, className = "" }) {
  const src = getImage(name);
  if (src) return <img src={src} alt={alt} className={className} />;
  return (
    <div
      role="img"
      aria-label={alt}
      className={`${className} bg-tint-blue-bg text-primary flex items-center justify-center text-center text-xs font-semibold p-3 min-h-28`}
    >
      Add “{name}” image
    </div>
  );
}

/* ------------------------------------------------------------------
   COLORS — no hardcoded colors on this page. Every color comes from
   the @theme tokens in index.css (primary, navy, dark, ink, muted,
   surface, bg-alt, hero-1/2, tint-blue-bg, border-light ...).
   Change them in index.css and this page updates automatically.
   ------------------------------------------------------------------ */

/* ------------------------------------------------------------------
   SHARED STYLES — every section uses the same vertical padding,
   so spacing between all sections is equal top and bottom.
   ------------------------------------------------------------------ */
const SECTION = "py-16 md:py-20 lg:py-24";
const CONTAINER = "max-w-[1200px] mx-auto px-4 sm:px-6";
const H2 =
  "mt-4 text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1.15] text-ink font-display";
const CARD =
  "bg-surface border border-border-light rounded-2xl shadow-xl shadow-primary/5";
const BTN_DARK =
  "inline-flex items-center justify-center gap-2 bg-navy hover:bg-primary text-surface font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm sm:text-[15px]";
const BTN_OUTLINE =
  "inline-flex items-center justify-center gap-2 bg-surface border border-primary text-primary hover:bg-tint-blue-bg font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm sm:text-[15px]";
const ICON_BOX =
  "shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-tint-blue-bg text-primary flex items-center justify-center";

/* ------------------------------------------------------------------
   ICONS (inline SVG — no extra package needed)
   ------------------------------------------------------------------ */
const ICONS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevronLeft: <path d="M15 6l-6 6 6 6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  trophy: (
    <>
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  cloud: <path d="M17.5 19H7a5 5 0 1 1 .9-9.9A6 6 0 0 1 19 11a4 4 0 0 1-1.5 8z" />,
  chart: <path d="M6 20v-6M12 20V10M18 20V4M3 20h18" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15.5 14.2A5 5 0 0 1 21 19" />
    </>
  ),
  team: (
    <>
      <circle cx="12" cy="7" r="3" />
      <circle cx="5" cy="10" r="2" />
      <circle cx="19" cy="10" r="2" />
      <path d="M7 20a5 5 0 0 1 10 0M2 19a3 3 0 0 1 4-3M22 19a3 3 0 0 0-4-3" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  doc: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3" />
    </>
  ),
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
};

function Icon({ name, className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

function SectionTag({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-bold tracking-[.18em] uppercase ${
        light ? "text-surface/80" : "text-primary"
      }`}
    >
      <span className={`w-6 h-[2px] ${light ? "bg-surface/70" : "bg-primary"}`} />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------
   DATA
   ------------------------------------------------------------------ */
const stats = [
  { v: "50+", l: "Projects Delivered" },
  { v: "25+", l: "Experts Worldwide" },
  { v: "98%", l: "Client Satisfaction" },
];

const serviceCards = [
  {
    icon: "trophy",
    title: "Custom Software Development",
    desc: "Scalable, secure and high-performance software solutions tailored to your unique business needs.",
    img: "custom-software",
    to: "/contact",
  },
  {
    icon: "phone",
    title: "Web & Mobile Applications",
    desc: "Modern, user-centric digital products that deliver exceptional experiences across all devices.",
    img: "web-mobile",
    to: "/contact",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps Solutions",
    desc: "Reliable, scalable infrastructure for a more agile, efficient and future-ready business.",
    img: "cloud-devops",
    to: "/contact",
  },
  {
    icon: "chart",
    title: "Technology Consulting",
    desc: "Strategic guidance to turn your ideas into successful digital solutions.",
    img: "consulting",
    to: "/contact",
  },
];

const reasons = [
  { icon: "users", title: "Client-Centric Approach", desc: "Your goals are at the heart of everything we do." },
  { icon: "team", title: "Experienced Team", desc: "A diverse team of experts committed to your success." },
  { icon: "bulb", title: "Innovation-Driven", desc: "We bring fresh ideas to solve real-world problems." },
  { icon: "shield", title: "Long-Term Partnership", desc: "We grow together, beyond just delivering a project." },
];

const steps = [
  { icon: "search", n: "01", title: "Discover", desc: "Understand your goals, challenges and opportunities." },
  { icon: "doc", n: "02", title: "Plan & Strategize", desc: "Create a tailored strategy and roadmap." },
  { icon: "code", n: "03", title: "Develop & Deliver", desc: "Build, test and deploy with precision." },
  { icon: "chart", n: "04", title: "Grow Together", desc: "Provide ongoing support and optimization." },
];

/* Tech logos load from the free Devicon CDN.
   To use your own logos instead, replace `logo` with an imported image. */
const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const techTabs = {
  Frontend: [
    { name: "React", logo: `${DEV}/react/react-original.svg` },
    { name: "Next.js", logo: `${DEV}/nextjs/nextjs-original.svg` },
    { name: "TypeScript", logo: `${DEV}/typescript/typescript-original.svg` },
    { name: "JavaScript", logo: `${DEV}/javascript/javascript-original.svg` },
    { name: "Tailwind CSS", logo: `${DEV}/tailwindcss/tailwindcss-original.svg` },
    { name: "Vue.js", logo: `${DEV}/vuejs/vuejs-original.svg` },
    { name: "HTML5", logo: `${DEV}/html5/html5-original.svg` },
  ],
  Backend: [
    { name: "Node.js", logo: `${DEV}/nodejs/nodejs-original.svg` },
    { name: "Express", logo: `${DEV}/express/express-original.svg` },
    { name: "Python", logo: `${DEV}/python/python-original.svg` },
    { name: "PHP", logo: `${DEV}/php/php-original.svg` },
    { name: "MongoDB", logo: `${DEV}/mongodb/mongodb-original.svg` },
    { name: "PostgreSQL", logo: `${DEV}/postgresql/postgresql-original.svg` },
    { name: "MySQL", logo: `${DEV}/mysql/mysql-original.svg` },
  ],
  Cloud: [
    { name: "AWS", logo: `${DEV}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { name: "Google Cloud", logo: `${DEV}/googlecloud/googlecloud-original.svg` },
    { name: "Azure", logo: `${DEV}/azure/azure-original.svg` },
    { name: "Firebase", logo: `${DEV}/firebase/firebase-plain.svg` },
    { name: "DigitalOcean", logo: `${DEV}/digitalocean/digitalocean-original.svg` },
  ],
  Mobile: [
    { name: "Flutter", logo: `${DEV}/flutter/flutter-original.svg` },
    { name: "React Native", logo: `${DEV}/react/react-original.svg` },
    { name: "Swift", logo: `${DEV}/swift/swift-original.svg` },
    { name: "Kotlin", logo: `${DEV}/kotlin/kotlin-original.svg` },
    { name: "Android", logo: `${DEV}/android/android-original.svg` },
    { name: "Dart", logo: `${DEV}/dart/dart-original.svg` },
  ],
  DevOps: [
    { name: "Docker", logo: `${DEV}/docker/docker-original.svg` },
    { name: "Kubernetes", logo: `${DEV}/kubernetes/kubernetes-plain.svg` },
    { name: "Git", logo: `${DEV}/git/git-original.svg` },
    { name: "GitHub", logo: `${DEV}/github/github-original.svg` },
    { name: "Jenkins", logo: `${DEV}/jenkins/jenkins-original.svg` },
    { name: "Nginx", logo: `${DEV}/nginx/nginx-original.svg` },
  ],
};

/* ------------------------------------------------------------------
   PAGE
   ------------------------------------------------------------------ */
export default function Services() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const sliderRef = useRef(null);

  const scrollTech = (dir) => {
    sliderRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
    sliderRef.current?.scrollTo({ left: 0 });
  };

  return (
    <>
      {/* ============ 1. HERO ============ */}
      {/* Smaller top padding than other sections so the whole hero fits on one screen */}
      <section className="relative overflow-hidden bg-linear-to-b from-hero-2 to-hero-1 pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
        <div className="pointer-events-none absolute -left-24 top-10 w-64 h-64 rounded-full bg-primary/10 blur-2xl" />

        <div className={`${CONTAINER} relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center`}>
          {/* Left */}
          <div>
            <SectionTag>Our Services</SectionTag>
            <h1 className="mt-3 text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[50px] font-extrabold leading-[1.1] text-ink font-display">
              Digital Solutions <br className="hidden sm:block" />
              That Drive
              <span className="block text-primary">Real Business Growth.</span>
            </h1>
            <p className="mt-4 text-muted text-[15px] sm:text-base max-w-[520px]">
              We design, develop, and deliver innovative technology solutions that help businesses
              solve real problems, create value and stay ahead in a digital-first world.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact" className={BTN_DARK}>
                Discuss Your Project <Icon name="arrow" className="w-4 h-4" />
              </Link>
              <a href="#process" className={BTN_OUTLINE}>
                Our Process <Icon name="arrow" className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-8 max-w-[480px]">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-ink font-display">{s.v}</div>
                  <div className="mt-1 text-xs sm:text-sm text-muted">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image (no floating boxes) */}
          {/* lg:-translate-y-* moves the image up on desktop — increase/decrease the number to adjust */}
          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none lg:-translate-y-8 xl:-translate-y-10">
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-2/3 h-2/3 rounded-[28px] bg-tint-blue-bg" />
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-1/2 h-1/2 rounded-[28px] bg-primary/20" />
            <Img
              name="hero"
              alt="Developer working on a laptop"
              className="relative w-full aspect-[4/3] lg:max-h-[440px] xl:max-h-[480px] object-cover rounded-[24px] shadow-2xl shadow-navy/20"
            />
          </div>
        </div>
      </section>

      {/* ============ 2. SERVICES ============ */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-10 sm:mb-12">
            <div>
              <SectionTag>Our Services</SectionTag>
              <h2 className={H2}>
                Comprehensive Technology Services for Every Business Need.
              </h2>
            </div>
            <div>
              <p className="text-muted text-[15px] sm:text-base">
                From custom software development to cloud solutions, we offer end-to-end services
                designed to help you innovate, scale and stay competitive.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 mt-4 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Explore All Services <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {serviceCards.map((s) => (
              <div
                key={s.title}
                className={`${CARD} p-6 sm:p-7 xl:p-8 flex flex-col sm:flex-row md:flex-col lg:flex-row sm:items-center md:items-stretch lg:items-center gap-5 transition-transform hover:-translate-y-1`}
              >
                <div className="flex gap-4 flex-1 min-w-0">
                  <div className={ICON_BOX}>
                    <Icon name={s.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-ink font-display leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-muted text-sm sm:text-[15px]">{s.desc}</p>
                    <Link
                      to={s.to}
                      className="inline-flex items-center gap-2 mt-4 text-primary font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Learn More <Icon name="arrow" className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <Img
                  name={s.img}
                  alt={s.title}
                  className="w-56 sm:w-48 md:w-56 lg:w-44 xl:w-56 h-auto object-contain self-center shrink-0 order-first sm:order-none md:order-first lg:order-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. WHY CHOOSE US ============ */}
      <section className={`bg-bg-alt ${SECTION}`}>
        <div className={`${CONTAINER} grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
          <div>
            <SectionTag>Why Choose Us</SectionTag>
            <h2 className={H2}>
              More Than Services <br className="hidden sm:block" />
              A True Technology Partner.
            </h2>
            <p className="mt-5 text-muted text-[15px] sm:text-base max-w-[520px]">
              We combine deep technical expertise with a client-first approach to deliver solutions
              that create real impact. Our focus is on long-term partnerships, measurable results
              and innovation that drives growth.
            </p>
            <Link to="/about" className={`${BTN_DARK} mt-8`}>
              Why Choose Us <Icon name="arrow" className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className={`${CARD} p-6 sm:p-7`}>
                <div className={ICON_BOX}>
                  <Icon name={r.icon} className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-[17px] sm:text-[18px] font-bold text-ink font-display">{r.title}</h3>
                <p className="mt-2 text-muted text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. PROCESS ============ */}
      <section id="process" className={`scroll-mt-24 ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-10 sm:mb-12">
            <div>
              <SectionTag>Our Process</SectionTag>
              <h2 className={H2}>A Simple, Transparent Process to Turn Ideas Into Impact.</h2>
            </div>
            <p className="text-muted text-[15px] sm:text-base">
              We follow a proven approach to ensure every project is delivered with clarity,
              efficiency and measurable results.
            </p>
          </div>

          <div className={`${CARD} p-6 sm:p-10`}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
              {steps.map((s, i) => (
                <div key={s.n} className="relative">
                  {/* dashed connector (desktop only) */}
                  {i < steps.length - 1 && (
                    <span className="hidden lg:block absolute top-8 left-[5.5rem] right-2 border-t-2 border-dashed border-primary/25" />
                  )}
                  <div className="relative w-16 h-16 rounded-full bg-tint-blue-bg text-primary flex items-center justify-center ring-8 ring-primary/5">
                    <Icon name={s.icon} className="w-7 h-7" />
                  </div>
                  <span className="block mt-6 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/15" />
                  <div className="mt-4 text-primary font-bold text-sm">{s.n}</div>
                  <h3 className="mt-1 text-[17px] sm:text-[18px] font-bold text-ink font-display">{s.title}</h3>
                  <p className="mt-2 text-muted text-sm max-w-[240px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. TECHNOLOGIES ============ */}
      <section className={`bg-bg-alt ${SECTION}`}>
        <div className={`${CONTAINER} grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-center`}>
          <div>
            <SectionTag>Technologies We Work With</SectionTag>
            <h2 className={H2}>Modern Technologies for Future-Ready Solutions.</h2>
            <p className="mt-5 text-muted text-[15px] sm:text-base max-w-[460px]">
              We use industry-leading tools and frameworks to build scalable, secure and
              high-performing solutions.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              Explore Our Expertise <Icon name="arrow" className="w-4 h-4" />
            </Link>
          </div>

          <div className="min-w-0">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
              {Object.keys(techTabs).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => changeTab(tab)}
                  className={`px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold border transition-colors ${
                    activeTab === tab
                      ? "bg-navy text-surface border-navy"
                      : "bg-surface text-ink border-border-light hover:border-primary hover:text-primary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Slider */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => scrollTech(-1)}
                aria-label="Previous"
                className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-surface border border-border-light text-ink items-center justify-center hover:text-primary hover:border-primary transition-colors"
              >
                <Icon name="chevronLeft" className="w-4 h-4" />
              </button>

              <div
                ref={sliderRef}
                className="flex-1 min-w-0 flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {techTabs[activeTab].map((t) => (
                  <div
                    key={t.name}
                    className={`${CARD} snap-start shrink-0 w-[104px] sm:w-[116px] py-5 px-3 flex flex-col items-center text-center`}
                  >
                    <img src={t.logo} alt={t.name} loading="lazy" className="w-11 h-11 object-contain" />
                    <span className="mt-3 text-xs sm:text-sm font-medium text-ink">{t.name}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollTech(1)}
                aria-label="Next"
                className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-surface border border-border-light text-ink items-center justify-center hover:text-primary hover:border-primary transition-colors"
              >
                <Icon name="chevronRight" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 6. CTA BANNER ============ */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <div className="relative overflow-hidden rounded-[24px] bg-linear-to-r from-dark via-navy to-primary px-6 py-10 sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-surface/5" />
            <div className="pointer-events-none absolute right-24 -bottom-24 w-56 h-56 rounded-full bg-surface/5" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[560px]">
                <SectionTag light>Let's Build Together</SectionTag>
                <h2 className="mt-4 text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[1.15] text-surface font-display">
                  Have a project in mind?
                </h2>
                <p className="mt-3 text-surface/75 text-[15px] sm:text-base">
                  Let's discuss how Code Axis Tech can help you turn your ideas into powerful
                  digital solutions.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 shrink-0 bg-surface text-navy hover:bg-tint-blue-bg font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm sm:text-[15px] self-start md:self-auto"
              >
                Start a Conversation <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7. LET'S BUILD SOMETHING ============ */}
      <section className={`bg-bg-alt ${SECTION}`}>
        <div className={`${CONTAINER} grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
          <div className="relative">
            <Img
              name="team"
              alt="Our team collaborating"
              className="w-full aspect-[4/3] object-cover rounded-[24px] shadow-2xl shadow-navy/15"
            />
            <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 flex items-center gap-3 bg-surface/90 backdrop-blur rounded-xl px-4 py-3 shadow-lg shadow-navy/10">
              <div className="w-10 h-10 rounded-lg bg-tint-blue-bg text-primary flex items-center justify-center">
                <Icon name="team" className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm leading-tight text-ink font-medium">
                Technology
                <br />
                People
                <br />
                Real Impact
                {/* gradient accent line */}
                <span className="block mt-2 h-[3px] w-12 sm:w-14 rounded-full bg-linear-to-r from-primary to-tint-blue-bg" />
              </div>
            </div>
          </div>

          <div>
            <SectionTag>Ready to Get Started?</SectionTag>
            <h2 className={H2}>
              Let's Build Something <br className="hidden sm:block" />
              Amazing Together.
            </h2>
            <p className="mt-5 text-muted text-[15px] sm:text-base max-w-[500px]">
              Whether you have a clear idea or just a vision, our team is here to help you bring it
              to life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact" className={BTN_DARK}>
                Get a Free Quote <Icon name="arrow" className="w-4 h-4" />
              </Link>
              <Link to="/contact" className={BTN_OUTLINE}>
                Talk to Our Experts <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

     
      <CTA />
    </>
  );
}