import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CTA from "../components/layout/CTA";



const portfolioImages = import.meta.glob(
  "../assets/images/portfolio/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" }
);

function getImage(name) {
  const key = Object.keys(portfolioImages).find(
    (path) => path.split("/").pop().replace(/\.[^.]+$/, "") === name
  );
  return key ? portfolioImages[key] : null;
}

/* Shows the image if it exists, otherwise a themed placeholder box */
function Img({ name, alt, className = "" }) {
  const src = getImage(name);
  if (src) return <img src={src} alt={alt} loading="lazy" className={className} />;
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
const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 bg-primary hover:bg-navy text-surface font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm sm:text-[15px]";
const BTN_OUTLINE =
  "inline-flex items-center justify-center gap-2 bg-surface border border-primary text-primary hover:bg-tint-blue-bg font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm sm:text-[15px]";
const ICON_BOX =
  "shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-tint-blue-bg text-primary flex items-center justify-center";

/* ------------------------------------------------------------------
   ICONS (inline SVG — no extra package needed)
   ------------------------------------------------------------------ */
const ICONS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  refresh: <path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4" />,
  chevronLeft: <path d="M15 6l-6 6 6 6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  chart: <path d="M6 20v-6M12 20V10M18 20V4M3 20h18" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18M9 15l2 2 4-4" />
    </>
  ),
  trending: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15.5 14.2A5 5 0 0 1 21 19" />
    </>
  ),
  star: <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z" />,
  trophy: (
    <>
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
    </>
  ),
  quote: (
    <path d="M10 7H6a2 2 0 0 0-2 2v4h4v4H6M20 7h-4a2 2 0 0 0-2 2v4h4v4h-2" />
  ),
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

function SectionTag({ children, center = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-bold tracking-[.18em] uppercase text-primary ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="w-6 h-[2px] bg-primary" />
      {children}
    </span>
  );
}

/* Floating label card used on the hero image */
function FloatCard({ icon, label, className = "" }) {
  return (
    <div
      className={`absolute hidden sm:flex flex-col items-start gap-2 w-[118px] lg:w-[128px] p-3.5 rounded-2xl bg-surface/90 backdrop-blur border border-border-light shadow-xl shadow-navy/10 ${className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-tint-blue-bg text-primary flex items-center justify-center">
        <Icon name={icon} className="w-5 h-5" />
      </div>
      <span className="text-xs font-semibold text-ink leading-tight">{label}</span>
    </div>
  );
}

/* Testimonial photo, or initials if the photo isn't added yet */
function Avatar({ img, name }) {
  const src = getImage(img);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return src ? (
    <img src={src} alt={name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0 ring-4 ring-tint-blue-bg" />
  ) : (
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shrink-0 bg-tint-blue-bg text-primary font-display font-bold text-xl flex items-center justify-center ring-4 ring-bg-alt">
      {initials}
    </div>
  );
}

/* ------------------------------------------------------------------
   DATA — edit / add projects here.
   `cats` controls which filter tabs show the project.
   `badge` is the small label on the image.
   `url` is the live site link (opens in a new tab).
   ------------------------------------------------------------------ */
const heroStats = [
  { v: "50+", l: "Projects Delivered" },
  { v: "25+", l: "Industries Served" },
  { v: "98%", l: "Client Satisfaction" },
];

const filters = [
  "All Projects",
  "Web Applications",
  "Mobile Apps",
  "Ecommerce",
  "Local Business",
  "SaaS",
  "Custom Solutions",
];

const projects = [
  {
    title: "Tag Peak",
    badge: "Web",
    cats: ["Web Applications", "SaaS", "Custom Solutions"],
    desc: "A powerful web platform designed to simplify workflow and boost productivity for modern teams.",
    img: "tag-peak",
    url: "#",
  },
  {
    title: "Chimney Fire Place",
    badge: "Local Business",
    cats: ["Local Business"],
    desc: "A modern local business platform connecting users with professional chimney and fireplace services.",
    img: "chimney-fire-place",
    url: "#",
  },
  {
    title: "Veterinarian Clinic",
    badge: "Local Business",
    cats: ["Local Business"],
    desc: "A user-friendly platform providing veterinary services, pet care resources and appointment booking.",
    img: "veterinarian-clinic",
    url: "#",
  },
  {
    title: "Drive Road Side",
    badge: "Local Business",
    cats: ["Local Business"],
    desc: "A reliable roadside assistance platform helping drivers get support anytime, anywhere.",
    img: "drive-road-side",
    url: "#",
  },
  {
    title: "Cheap Towing Dallas",
    badge: "Local Business",
    cats: ["Local Business"],
    desc: "A fast and reliable towing service platform with easy booking and real-time assistance.",
    img: "cheap-towing-dallas",
    url: "#",
  },
  {
    title: "Sweet Rides",
    badge: "Web",
    cats: ["Web Applications"],
    desc: "A modern platform for luxury and daily car rentals, offering a seamless booking experience.",
    img: "sweet-rides",
    url: "#",
  },
];

const PAGE_SIZE = 6; // projects shown before "Load More"

const featuredStats = [
  { icon: "calendar", v: "3x", l: "More Bookings" },
  { icon: "trending", v: "60%", l: "Increase in Traffic" },
  { icon: "shield", v: "98%", l: "Client Satisfaction" },
];

const impactStats = [
  { icon: "doc", v: "50+", l: "Projects Completed" },
  { icon: "users", v: "25+", l: "Industries Served" },
  { icon: "star", v: "98%", l: "Client Satisfaction" },
  { icon: "trophy", v: "10+", l: "Years of Experience" },
];

/* Replace with your real client feedback */
const testimonials = [
  {
    quote:
      "Code Axis Tech delivered an exceptional platform for our business. Their team is professional, creative and truly understands our needs.",
    name: "James Carter",
    role: "Founder, Tag Peak",
    img: "client-1",
  },
  {
    quote:
      "Our new website brought in more bookings within the first month. Communication was clear and every deadline was met.",
    name: "Sarah Mitchell",
    role: "Owner, Veterinarian Clinic",
    img: "client-2",
  },
  {
    quote:
      "From planning to launch the process was smooth. The site is fast, easy to manage and our customers love it.",
    name: "Michael Brooks",
    role: "Manager, Sweet Rides",
    img: "client-3",
  },
];

/* ------------------------------------------------------------------
   PAGE
   ------------------------------------------------------------------ */
export default function Portfolio() {
  const [filter, setFilter] = useState("All Projects");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [slide, setSlide] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (filter === "All Projects" || p.cats.includes(filter)) &&
        (!q || `${p.title} ${p.desc} ${p.badge}`.toLowerCase().includes(q))
    );
  }, [filter, query]);

  const shown = filtered.slice(0, visible);

  const changeFilter = (f) => {
    setFilter(f);
    setVisible(PAGE_SIZE);
  };

  const t = testimonials[slide];
  const prevSlide = () => setSlide((s) => (s - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () => setSlide((s) => (s + 1) % testimonials.length);

  return (
    <>
      {/* ============ 1. HERO ============ */}
      {/* Smaller top padding than other sections so the whole hero fits on one screen */}
      <section className="relative overflow-hidden bg-linear-to-b from-hero-2 to-hero-1 pt-4 pb-16 md:pt-6 md:pb-20 lg:pt-6 lg:pb-24">
        <div className="pointer-events-none absolute -left-24 top-10 w-64 h-64 rounded-full bg-primary/10 blur-2xl" />

        <div className={`${CONTAINER} relative grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-10 items-center`}>
          {/* Left */}
          <div>
            <SectionTag>Our Portfolio</SectionTag>
            <h1 className="mt-3 text-[34px] sm:text-[44px] lg:text-[48px] xl:text-[54px] font-extrabold leading-[1.08] text-ink font-display">
              Real Projects.
              <span className="block">Real Results.</span>
              <span className="block text-primary">Real Impact.</span>
            </h1>
            <p className="mt-4 text-muted text-[15px] sm:text-base max-w-[480px]">
              Explore our portfolio of successful projects that showcase our expertise, creativity
              and commitment to delivering digital solutions that make a difference.
            </p>

            <div className="mt-6">
              <Link to="/contact" className={BTN_DARK}>
                Start Your Project <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-8 max-w-[480px]">
              {heroStats.map((s) => (
                <div key={s.l}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-ink font-display">{s.v}</div>
                  <div className="mt-1 text-xs sm:text-sm text-muted">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — devices mockup with floating labels */}
          {/* lg:-translate-y-* moves the image up on desktop — increase/decrease to adjust */}
          <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none lg:-translate-y-6 xl:-translate-y-8">
            <div className="absolute inset-x-[6%] inset-y-[8%] rounded-[40px] bg-tint-blue-bg/60 blur-2xl" />
            <Img
              name="hero"
              alt="Portfolio projects shown on laptop, tablet and phone"
              className="relative w-full aspect-[4/3] object-contain rounded-[24px]"
            />

           {/* Floating cards — adjust top / left / right / bottom % to move them */}
<FloatCard icon="monitor" label="Web Application"     className="left-0 top-[60%]" />
<FloatCard icon="phone"   label="Mobile Applications" className="-right-3 lg:-right-12 top-[24%]" />
<FloatCard icon="chart"   label="Business Growth"     className="right-[16%] bottom-[2%]" />

            {/* "Our Work Speaks" handwritten note */}
            <div className="absolute hidden md:flex items-end gap-1 left-[22%] -bottom-2 text-ink/70 -rotate-6">
              <span className="font-display italic text-lg lg:text-xl leading-tight">
                Our
                <br />
                Work Speaks
              </span>
              <svg viewBox="0 0 60 30" className="w-12 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 22c14 8 32 6 50-12" />
                <path d="M44 8l9 1-2 9" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. PROJECTS ============ */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          {/* Filters + search */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-10">
            <div className="flex flex-nowrap gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => changeFilter(f)}
                  className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
                    filter === f
                      ? "bg-navy text-surface border-navy"
                      : "bg-surface text-muted border-border-light hover:border-primary hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

           
              <label className="relative w-full sm:w-56 lg:w-52 shrink-0">
              <span className="sr-only">Search projects</span>
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
                placeholder="Search projects..."
                className="w-full bg-surface border border-border-light rounded-full pl-4 pr-10 py-2.5 text-sm text-ink placeholder:text-soft outline-none focus:border-primary transition-colors"
              />
              <Icon name="search" className="w-4 h-4 text-soft absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </label>
          </div>

          {/* Grid */}
          {shown.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {shown.map((p) => (
                <article
                  key={p.title}
                  className={`${CARD} overflow-hidden flex flex-col transition-transform hover:-translate-y-1`}
                >
                  <div className="relative">
                    <Img
                      name={p.img}
                      alt={`${p.title} website`}
                      className="w-full aspect-[16/10] object-cover"
                    />
                    <span className="absolute left-4 bottom-0 translate-y-1/2 bg-surface border border-border-light text-ink text-[10px] font-bold tracking-[.12em] uppercase px-3 py-1.5 rounded-full shadow-sm">
                      {p.badge}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 pt-7 sm:pt-8 flex flex-col flex-1">
                    <h3 className="text-[18px] sm:text-[19px] font-bold text-ink font-display">{p.title}</h3>
                    <p className="mt-2 text-muted text-sm flex-1">{p.desc}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                      >
                        View Project <Icon name="arrow" className="w-4 h-4" />
                      </a>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${p.title} live site`}
                        className="text-primary hover:text-navy transition-colors"
                      >
                        <Icon name="external" className="w-[18px] h-[18px]" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={`${CARD} py-14 text-center`}>
              <p className="text-ink font-semibold">No projects found</p>
              <p className="mt-1 text-muted text-sm">Try another category or search term.</p>
            </div>
          )}

          {/* Load more — always centred under the grid. Loads the next projects;
              once everything is shown it turns into a disabled "All Projects Loaded" button. */}
          {shown.length > 0 && (
            <div className="mt-10 sm:mt-12 flex justify-center">
              {visible < filtered.length ? (
                <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)} className={BTN_OUTLINE}>
                  Load More Projects <Icon name="refresh" className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled
                  className={`${BTN_OUTLINE} opacity-60 cursor-not-allowed hover:bg-surface`}
                >
                  All Projects Loaded <Icon name="refresh" className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ============ 3. FEATURED CASE STUDY ============ */}
      <section className={`relative overflow-hidden bg-linear-to-r from-bg-alt via-hero-1 to-bg-alt ${SECTION}`}>
        <div className="pointer-events-none absolute -left-20 top-1/3 w-48 h-48 rounded-full bg-primary/10 blur-2xl" />

        <div className={`${CONTAINER} relative grid md:grid-cols-2 lg:grid-cols-[1fr_1.15fr_.62fr] gap-10 lg:gap-8 items-center`}>
          <div className="md:col-span-2 lg:col-span-1">
            <SectionTag>Featured Case Study</SectionTag>
            <h2 className={H2}>Turning a Bold Idea Into a Digital Success Story</h2>
            <p className="mt-5 text-muted text-[15px] sm:text-base max-w-[520px]">
              See how we helped a local business grow with a modern web platform, resulting in
              higher engagement, more customers and measurable growth.
            </p>
            <Link to="/contact" className={`${BTN_PRIMARY} mt-7`}>
              View Full Case Study <Icon name="arrow" className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-[8%] rounded-[32px] bg-tint-blue-bg/70 blur-2xl" />
            <Img
              name="featured-case-study"
              alt="Featured project on laptop and phone"
              className="relative w-full aspect-[4/3] object-contain rounded-2xl"
            />
          </div>

          <div className="grid gap-4">
            {featuredStats.map((s) => (
              <div key={s.l} className={`${CARD} p-4 sm:p-5 flex items-center gap-4`}>
                <div className={ICON_BOX}>
                  <Icon name={s.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-ink font-display leading-none">{s.v}</div>
                  <div className="mt-1.5 text-xs sm:text-sm text-muted">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. OUR IMPACT ============ */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <div className="text-center mb-10 sm:mb-12">
            <SectionTag center>Our Impact</SectionTag>
            <h2 className={H2}>Numbers That Tell Our Story</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {impactStats.map((s) => (
              <div key={s.l} className="bg-bg-alt border border-border-light rounded-2xl shadow-xl shadow-primary/5 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <Icon name={s.icon} className="w-9 h-9 sm:w-10 sm:h-10 text-primary shrink-0" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-ink font-display leading-none">{s.v}</div>
                  <div className="mt-1.5 text-xs sm:text-sm text-muted">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. CLIENT FEEDBACK ============ */}
      <section className={`bg-bg-alt ${SECTION}`}>
        <div className={`${CONTAINER} grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-14 items-center`}>
          <div>
            <SectionTag>Client Feedback</SectionTag>
            <h2 className={H2}>What Our Clients Say</h2>
            <p className="mt-5 text-muted text-[15px] sm:text-base max-w-[420px]">
              Real feedback from businesses we've helped grow.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-surface border border-border-light text-primary items-center justify-center hover:border-primary transition-colors"
              >
                <Icon name="chevronLeft" className="w-4 h-4" />
              </button>

              <figure key={slide} className={`${CARD} flex-1 p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-6`}>
                <Avatar img={t.img} name={t.name} />
                <div className="flex-1">
                  <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M7.5 6C5 6 3 8 3 10.5S5 15 7.5 15c.4 0 .8 0 1.2-.1-.5 1.6-2 2.9-3.9 3.1-.4.1-.7.4-.7.8 0 .5.4.9.9.9 3.9-.4 6.9-3.7 6.9-7.7V10.5C11.9 7.9 9.9 6 7.5 6zm9 0C14 6 12 8 12 10.5S14 15 16.5 15c.4 0 .8 0 1.2-.1-.5 1.6-2 2.9-3.9 3.1-.4.1-.7.4-.7.8 0 .5.4.9.9.9 3.9-.4 6.9-3.7 6.9-7.7V10.5C20.9 7.9 18.9 6 16.5 6z"/>
</svg>
                  <blockquote className="mt-2 text-ink text-[15px] sm:text-base leading-relaxed">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-4">
                    <div className="font-bold text-ink font-display">{t.name}</div>
                    <div className="text-xs sm:text-sm text-muted">{t.role}</div>
                  </figcaption>
                </div>
              </figure>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-surface border border-border-light text-primary items-center justify-center hover:border-primary transition-colors"
              >
                <Icon name="chevronRight" className="w-4 h-4" />
              </button>
            </div>

            {/* dots */}
            <div className="mt-5 flex justify-center gap-2">
              {testimonials.map((x, i) => (
                <button
                  key={x.name}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === slide ? "w-6 bg-primary" : "w-2 bg-border-input"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 6. CTA (your existing component) ============ */}
      <CTA />
    </>
  );
}