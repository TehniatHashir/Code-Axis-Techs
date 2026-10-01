import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import Logo from "../common/Logo";
import { serviceNames } from "../../data/services";

const socials = [
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaTwitter, label: "Twitter" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaYoutube, label: "YouTube" },
];

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];

const locations = ["United States", "Canada", "United Kingdom", "Australia", "UAE", "India"];
const legal = ["Privacy Policy", "Terms of Service", "Sitemap"];

function ColumnTitle({ children }) {
  return <h3 className="text-sm font-semibold text-white font-display mb-3 sm:mb-3.5">{children}</h3>;
}

function ContactLine({ Icon, children, href }) {
  const body = (
    <>
      <Icon size={14} className="shrink-0 mt-0.5 text-white" />
      <span className="min-w-0 break-words">{children}</span>
    </>
  );
  const cls = "flex items-start gap-3 text-[13px] leading-snug text-footer-text-2 hover:text-white transition-colors";
  return href ? <a href={href} className={cls}>{body}</a> : <div className={cls}>{body}</div>;
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (email.includes("@")) {
      setSent(true);
      setEmail("");
    }
  }

  return (
    <footer className="relative bg-footer-bg text-footer-text-2 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1.35fr_.75fr_1.05fr_.85fr_1.3fr] gap-x-8 gap-y-6 lg:gap-x-14 xl:gap-x-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pr-4 xl:pr-0">
            <Logo variant="light" />
            <p className="text-[13px] leading-[1.65] text-footer-text-2 mt-3 max-w-[340px]">
              We design, develop, and market high-performing websites and digital
              solutions that help businesses grow, generate more leads, and achieve real results.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-white/90 hover:text-accent hover:-translate-y-0.5 transition"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ColumnTitle>Quick Links</ColumnTitle>
            <ul className="space-y-2">
              {links.map(([name, path]) => (
                <li key={path}>
                  <Link to={path} className="text-[13px] text-footer-text-2 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <ColumnTitle>Our Services</ColumnTitle>
            <ul className="space-y-2">
              {serviceNames.map((s) => (
                <li key={s} className="text-[13px] text-footer-text-2 hover:text-white transition-colors">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <ColumnTitle>Locations</ColumnTitle>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l} className="text-[13px] text-footer-text-2 hover:text-white transition-colors">
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch + Newsletter */}
          <div className="sm:col-span-2 lg:col-span-4 xl:col-span-1 lg:grid lg:grid-cols-2 lg:gap-10 lg:pt-5 lg:border-t lg:border-white/10 xl:block xl:pt-0 xl:border-t-0">
            <div>
              <ColumnTitle>Get In Touch</ColumnTitle>
              <div className="space-y-2">
                <ContactLine Icon={Phone} href="tel:+923363339083">+92 336 3339083</ContactLine>
                <ContactLine Icon={Mail} href="mailto:info@codeaxistech.com">info@codeaxistech.com</ContactLine>
                <ContactLine Icon={MapPin}>Gulberg, Lahore, Pakistan</ContactLine>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 lg:mt-0 lg:pt-0 lg:border-t-0 xl:mt-4 xl:pt-4 xl:border-t">
              <h3 className="text-sm font-semibold text-white font-display mb-2.5">Subscribe to Our Newsletter</h3>
              <form
                onSubmit={submit}
                className="h-[42px] w-full max-w-[420px] flex items-center bg-white/[.04] border border-white/15 rounded-full pl-4 pr-1"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 bg-transparent outline-none text-white text-[13px] placeholder:text-footer-text"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-9 h-9 shrink-0 rounded-full bg-white text-ink grid place-items-center hover:opacity-90 transition"
                >
                  <ArrowRight size={15} />
                </button>
              </form>
              {sent && <p className="text-xs text-accent mt-2">Thanks for subscribing!</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 py-3 flex flex-col md:flex-row justify-between items-center gap-2.5 text-[12px] text-center md:text-left">
          <span>
            © {new Date().getFullYear()} <b className="text-white font-semibold">Code Axis Tech</b>. All rights reserved.
          </span>
          <span className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {legal.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/25">|</span>}
                <a href="#" className="hover:text-white transition-colors">{item}</a>
              </span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}