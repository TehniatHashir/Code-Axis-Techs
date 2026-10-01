import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Monitor, PenTool, Smartphone, ShoppingCart, BarChart3, Bot,
  ArrowRight, Play, Target, Layers, Eye, Headphones,
  Home as HomeIcon, Stethoscope, Utensils, HardHat, ShoppingBag,
  GraduationCap, Truck,Search, Code2, Rocket,
} from "lucide-react";

/* ============ BRAND ICONS ============ */
import {
  FaShopify, FaWordpress, FaAws, FaGoogle, FaSlack, FaFigma,
} from "react-icons/fa";
import { SiMeta, SiVercel } from "react-icons/si";

/* ============ LOCAL IMAGES ============ */
import heroLaptop from "../assets/images/hero-laptop.jpg";
import caseStudy from "../assets/images/case-study.jpg";
import imgRealEstate from "../assets/images/industry-real-estate.jpg";
import imgHealthcare from "../assets/images/industry-healthcare.jpg";
import imgRestaurants from "../assets/images/industry-restaurants.jpg";
import imgConstruction from "../assets/images/industry-construction.jpg";
import imgEcommerce from "../assets/images/industry-ecommerce.jpg";
import imgEducation from "../assets/images/industry-education.jpg";
import imgLogistics from "../assets/images/industry-logistics.jpg";

/* ============ SECTIONS ============ */
import Testimonials from "../components/home/Testimonials";
import Faq from "../components/home/Faq";
import CTA from "../components/layout/CTA";

/* ============ DATA ============ */
const features = [
  [Target, "Strategy", "First Approach"],
  [Layers, "Modern", "& Scalable Solutions"],
  [Eye, "Transparent", "Process"],
  [Headphones, "Ongoing", "Support"],
];

const brands = [
  { name: "shopify",      Icon: FaShopify,   style: "font-bold text-[20px] tracking-tight text-body" },
  { name: "WORDPRESS",    Icon: FaWordpress, style: "font-serif text-[14px] tracking-[.02em] text-body" },
  { name: "aws",          Icon: FaAws,       style: "font-bold text-[22px] tracking-tight text-ink" },
  { name: "Google Cloud", Icon: FaGoogle,    style: "font-semibold text-[15px] text-body" },
  { name: "Meta",         Icon: SiMeta,      style: "font-bold text-[19px] text-ink" },
  { name: "slack",        Icon: FaSlack,     style: "font-bold text-[17px] text-body" },
  { name: "Figma",        Icon: FaFigma,     style: "font-semibold text-[17px] text-body" },
  { name: "Vercel",       Icon: SiVercel,    style: "font-bold text-[19px] tracking-tight text-ink" },
];

const services = [
  [Monitor, "Web Development", "High-performance websites tailored to your business goals."],
  [PenTool, "UI/UX Design", "Modern, user-focused designs that convert visitors into customers."],
  [Smartphone, "Mobile App Development", "Scalable mobile apps for iOS and Android platforms."],
  [ShoppingCart, "E-commerce Development", "Powerful online stores that drive more sales."],
  [BarChart3, "Digital Marketing", "SEO, social media, PPC and content marketing for real growth."],
  [Bot, "AI Automation & CRM", "Automate processes and manage leads more efficiently."],
];

const industries = [
  [HomeIcon, "Real Estate", imgRealEstate],
  [Stethoscope, "Healthcare", imgHealthcare],
  [Utensils, "Restaurants", imgRestaurants],
  [HardHat, "Construction", imgConstruction],
  [ShoppingBag, "E-commerce", imgEcommerce],
  [GraduationCap, "Education", imgEducation],
  [Truck, "Logistics", imgLogistics],
];

const steps = [
  ["Discovery", "Understand your goals and requirements.", Search],
  ["Design", "Create modern and user-focused designs.", PenTool],
  ["Development", "Build with clean, scalable and secure code.", Code2],
  ["Launch & Support", "Deploy and provide ongoing support.", Rocket],
];

/* Light edge-only blend: just the borders fade, the image stays crisp */
const softEdge = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 4%, black 100%), linear-gradient(to left, transparent 0%, black 4%, black 100%), linear-gradient(to bottom, transparent 0%, black 4%, black 92%, transparent 100%)",
  WebkitMaskComposite: "source-in",
  maskImage:
    "linear-gradient(to right, transparent 0%, black 4%, black 100%), linear-gradient(to left, transparent 0%, black 4%, black 100%), linear-gradient(to bottom, transparent 0%, black 4%, black 92%, transparent 100%)",
  maskComposite: "intersect",
};

export default function Home() {
  return (
    <div className="font-sans text-ink bg-bg overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-hero-1 via-hero-2 to-hero-3 lg:h-[calc(100vh-82px)] lg:min-h-[620px] lg:max-h-[820px] overflow-hidden">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-10 h-full grid lg:grid-cols-[1fr_1.1fr] gap-6 items-center relative z-10">

          <div className="py-8 sm:py-10 lg:py-0">
            <span className="inline-block border border-border-input bg-white rounded-md px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold tracking-[.08em] text-body uppercase">
              Web Development &amp; Digital Solutions
            </span>

            <h1 className="font-display text-[34px] sm:text-[44px] lg:text-[40px] xl:text-[56px] font-extrabold leading-[1.05] mt-5 mb-4 tracking-[-.03em] text-ink">
              Digital Solutions<br />
              That <b className="text-primary">Grow Your</b><br />
              Business
            </h1>

            <p className="text-[14px] sm:text-[15px] xl:text-base leading-[1.7] text-muted max-w-[480px] lg:max-w-[400px] xl:max-w-[480px]">
              We design, develop, and market high-performing websites and
              applications that help businesses generate more leads, increase
              sales, and achieve real growth.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 mb-7">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 text-[14px] font-semibold px-6 py-3.5 rounded-lg bg-navy text-white shadow-[0_8px_20px_rgba(15,31,61,.25)] hover:opacity-95 transition"
              >
                Get a Free Consultation <ArrowRight size={15} />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-3 text-[14px] font-semibold px-6 py-3.5 rounded-lg bg-white text-ink border border-border-input shadow-[0_4px_12px_rgba(15,31,61,.06)] hover:bg-bg-alt transition"
              >
                <span className="w-[20px] h-[20px] rounded-full bg-primary text-white grid place-items-center">
                  <Play size={9} />
                </span>
                Watch Our Work
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap lg:flex-nowrap gap-x-5 lg:gap-x-3 gap-y-4 xl:gap-7">
              {features.map(([I, a, b]) => (
                <div key={a} className="flex gap-2 items-start text-xs xl:text-[13px] text-muted leading-tight sm:shrink-0 lg:shrink xl:shrink-0">
                  <I size={15} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <b className="block text-ink font-semibold text-[13px] xl:text-sm">{a}</b>
                    <span className="sm:whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap">{b}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>

        {/* RIGHT — hero image */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none select-none">
          <div className="relative h-full max-w-[1240px] mx-auto">
          <div className="absolute top-[-140px] bottom-[-30px] right-[-20px] xl:right-[-40px] w-[48%] xl:w-[62%] flex items-center justify-end">
          <img
            src={heroLaptop}
            alt="Modern web solutions dashboard"
            className="w-full h-auto max-h-[115%] object-contain"
            style={softEdge}
          />
          </div>
          </div>
        </div>

        <div className="lg:hidden px-4 sm:px-6 pb-10">
          <img
            src={heroLaptop}
            alt="Modern web solutions dashboard"
            className="w-full h-auto max-w-[520px] mx-auto"
            style={softEdge}
          />
        </div>
      </section>

      {/* ================= TRUSTED (auto-scrolling marquee) ================= */}
      
        <section className="border-t border-border-soft py-10 sm:py-12 lg:py-14 bg-bg">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <small className="block text-[10px] tracking-[.12em] text-faint font-semibold mb-4">
            TRUSTED BY
          </small>

        {/* Marquee kept inside the same container as the other sections, soft edges */}
        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="marquee-track hover:[animation-play-state:paused] gap-8 pr-8 sm:gap-14 sm:pr-14">
            {/* Render the brands list TWICE so the loop is seamless */}
            {[...brands, ...brands].map(({ name, Icon, style }, i) => (
              <div
                key={`${name}-${i}`}
                className={`flex items-center gap-2.5 shrink-0 whitespace-nowrap ${style}`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
     
        <section className="py-10 sm:py-12 lg:py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 mb-8 sm:mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-[.1em] uppercase text-primary before:content-[''] before:w-3.5 before:h-0.5 before:bg-primary">
                Our Services
              </div>
              <h2 className="text-[26px] sm:text-[36px] lg:text-[40px] font-extrabold leading-[1.15] mt-3 text-ink">
                Complete Digital Solutions<br className="hidden sm:block" /> Under One Roof
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <p className="text-[14px] sm:text-[15px] leading-[1.7] text-muted max-w-[360px]">
                From websites to marketing and AI automation, we provide
                end-to-end solutions to help your business grow in the digital world.
              </p>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary whitespace-nowrap"
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* 6 service cards — 1 col mobile, 2 col sm, 3 col md, 6 across on xl */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 xl:gap-4">
            {services.map(([I, t, d], i) => {
              const palette = [
                "bg-tint-blue-bg text-tint-blue-fg",     // Web Development
                "bg-tint-violet-bg text-tint-violet-fg", // UI/UX Design
                "bg-tint-green-bg text-tint-green-fg",   // Mobile App
                "bg-tint-sky-bg text-tint-sky-fg",       // E-commerce
                "bg-tint-pink-bg text-tint-pink-fg",     // Digital Marketing
                "bg-tint-navy-bg text-tint-navy-fg",     // AI Automation & CRM
              ][i];

              return (
                <Link
                  key={t}
                  to="/services"
                  className="group bg-white border border-border-light rounded-xl px-5 py-6 pb-12 shadow-[0_10px_28px_rgba(31,50,120,.07)] min-h-[200px] sm:min-h-[240px] flex flex-col relative transition-transform hover:-translate-y-1"
                >
                  <div className={`w-11 h-11 rounded-[10px] grid place-items-center mb-5 ${palette}`}>
                    <I size={20} />
                  </div>

                  <h3 className="text-lg font-bold leading-tight mb-2 text-ink">{t}</h3>
                  <p className="text-sm leading-[1.6] text-soft">{d}</p>

                  <span className="absolute right-4 bottom-4 w-6 h-6 rounded-full bg-surface-2 grid place-items-center text-ink">
                    <ArrowRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
     
        <section className="py-10 sm:py-12 lg:py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-[.1em] uppercase text-primary before:content-[''] before:w-3.5 before:h-0.5 before:bg-primary">
                Industries We Serve
              </div>
              {/* Single line from sm up; wraps on very small screens */}
              <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1.15] mt-3 text-ink sm:whitespace-nowrap">
                Solutions for Every Industry
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <p className="text-[14px] sm:text-[15px] leading-[1.7] text-muted max-w-[360px]">
                We understand that every industry has unique challenges. Our
                tailored solutions help businesses across various industries grow and succeed.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary whitespace-nowrap"
              >
                View All Industries <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {industries.map(([I, n, img]) => (
              <Link
                key={n}
                to="/services"
                className="relative w-full h-[110px] sm:h-[124px] rounded-xl overflow-hidden bg-cover bg-center shadow-[0_10px_24px_rgba(0,0,0,.18)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/5 before:to-black/70 last:col-span-2 sm:last:col-span-1"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute left-2.5 right-2.5 bottom-2.5 flex items-center gap-1.5 text-white text-[11px] font-semibold leading-tight">
                  <span className="w-6 h-6 rounded-md bg-white text-navy grid place-items-center shrink-0">
                    <I size={13} />
                  </span>
                  <span className="flex-1 truncate">{n}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDY ================= */}
     
        <section className="py-10 sm:py-12 lg:py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[.9fr_1fr_1.25fr] gap-8 lg:gap-10 items-center">

          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-[.1em] uppercase text-primary before:content-[''] before:w-3.5 before:h-0.5 before:bg-primary">
              Case Study
            </div>
            <h2 className="text-[26px] sm:text-[36px] lg:text-[40px] font-extrabold leading-[1.15] mt-4 text-ink">
              Real Projects.<br />Real Results.
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-muted my-5 mb-7 max-w-[320px]">
              See how we help businesses across different industries achieve their
              goals with modern websites and web applications.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 text-[14px] sm:text-[15px] font-semibold px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg bg-navy text-white shadow-[0_8px_20px_rgba(15,31,61,.25)]"
            >
              View Case Studies <ArrowRight size={16} />
            </Link>
          </div>

          {/* Middle — pure image, no overlays, no text */}
          <div className="relative h-[220px] sm:h-[300px] lg:h-[240px] rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(15,31,61,.22)] bg-ink">
            <img
              src={caseStudy}
              alt="Luxury real estate platform"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white border border-border-light rounded-xl px-5 sm:px-7 pt-6 sm:pt-7 pb-7 sm:pb-8 shadow-[0_14px_34px_rgba(31,50,120,.09)]">
            <small className="text-[11px] tracking-[.1em] text-soft font-semibold uppercase">Real Estate</small>
            <h3 className="text-[20px] sm:text-[22px] font-bold mt-2 mb-2 text-ink font-display">Luxury Real Estate Platform</h3>
            <p className="text-sm text-muted leading-[1.65]">
              A custom real estate platform with property listings, advanced search and CRM integration.
            </p>

            <div className="flex gap-2 my-5 flex-wrap">
              <span className="bg-surface-2 rounded-md px-3 py-2 text-xs text-body">Web Development</span>
              <span className="bg-surface-2 rounded-md px-3 py-2 text-xs text-body">CRM Integration</span>
              <span className="bg-surface-2 rounded-md px-3 py-2 text-xs text-body">UI/UX Design</span>
            </div>

            <div className="grid grid-cols-3 text-center gap-2 sm:gap-3 mt-2">
              <div>
                <b className="text-[22px] sm:text-[28px] font-extrabold block text-ink leading-none">300%</b>
                <span className="text-[11px] sm:text-xs text-soft block mt-2 leading-snug">Increase in Leads</span>
              </div>
              <div>
                <b className="text-[22px] sm:text-[28px] font-extrabold block text-ink leading-none">50%</b>
                <span className="text-[11px] sm:text-xs text-soft block mt-2 leading-snug">Faster Property<br />Management</span>
              </div>
              <div>
                <b className="text-[22px] sm:text-[28px] font-extrabold block text-ink leading-none">98%</b>
                <span className="text-[11px] sm:text-xs text-soft block mt-2 leading-snug">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
     
        <section className="py-10 sm:py-12 lg:py-14">
       <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[.9fr_2fr] gap-8 lg:gap-14 items-start">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-[.1em] uppercase text-primary before:content-[''] before:w-3.5 before:h-0.5 before:bg-primary">
              Our Process
            </div>
            <h2 className="text-[26px] sm:text-[36px] lg:text-[40px] font-extrabold leading-[1.15] mt-4 text-ink">
              A Simple &<br />Transparent<br />Process
            </h2>
          </div>
<ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {steps.map(([title, text, Icon], index) => {
    const hasNext = index < steps.length - 1;
    return (
      <li
        key={title}
        className="relative flex flex-col items-start md:items-center pl-[76px] md:pl-0"
      >
        {/* mobile vertical line */}
        {hasNext && (
          <motion.span
            aria-hidden
            className="md:hidden absolute left-[27px] top-7 h-[calc(100%+40px)] w-0.5 origin-top bg-gradient-to-b from-pink via-violet to-primary"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeInOut" }}
          />
        )}

        {/* desktop horizontal line */}
        {hasNext && (
          <motion.span
            aria-hidden
            className={`hidden md:block absolute left-1/2 top-8 h-0.5 w-[calc(100%+1rem)] origin-left bg-gradient-to-r from-pink via-violet to-primary ${
              index % 2 === 1 ? "md:max-lg:hidden" : ""
            }`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
          />
        )}

        {/* icon circle */}
        <motion.div
          className="absolute left-0 top-0 md:relative md:left-auto md:top-auto z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-white text-primary shadow-[0_14px_34px_rgba(47,84,255,.18)]"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <Icon size={22} strokeWidth={1.8} />
        </motion.div>

        {/* dashed stem + dot */}
        <div className="hidden md:flex flex-col items-center">
          <span className="h-6 border-l border-dashed border-primary" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
        </div>

        {/* card */}
        <div className="relative overflow-hidden bg-white border border-border-light rounded-2xl px-4 sm:px-5 py-6 shadow-[0_10px_30px_rgba(47,84,255,.06)] mt-2 w-full transition-transform hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(47,84,255,.12)]">
          <span className="absolute right-0 top-0 w-20 h-20 rounded-bl-[100%] bg-primary/10" />
          <span className="relative text-2xl font-extrabold text-primary font-display block">
            0{index + 1}
          </span>
          <h3 className="relative text-[17px] font-bold text-ink mt-1.5">{title}</h3>
          <p className="relative text-[13px] text-muted leading-[1.7] mt-2">{text}</p>
        </div>
      </li>
    );
  })}
</ol>
         </div>
      </section>

      <Testimonials />
      <CTA />
      <Faq />
      
    </div>
  );
}