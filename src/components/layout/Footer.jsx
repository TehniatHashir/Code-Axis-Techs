import { Link } from "react-router-dom";
import { Clock, MapPin, Mail, Phone, Send } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaDribbble } from "react-icons/fa";
import { useState } from "react";
import Logo from "../common/Logo";
import { serviceNames } from "../../data/services";

const socials = [
  { icon: FaLinkedin, label: "LinkedIn" },
  { icon: FaFacebook, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaDribbble, label: "Dribbble" },
];

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];

const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

function ColumnTitle({ children, barColor }) {
  return (
    <div>
      <h3 className="text-sm text-white font-semibold font-display">{children}</h3>
      <span className={`block h-[3px] w-7 mt-2.5 rounded-full ${barColor}`} />
    </div>
  );
}

function ContactItem({ Icon, title, text, type }) {
  const bg = type === "pink" ? "bg-pink/15 text-pink" : "bg-primary/15 text-accent";
  return (
    <div className="flex gap-3 items-center">
      <div className={`w-9 h-9 shrink-0 rounded-full grid place-items-center ${bg}`}>
        <Icon size={15} />
      </div>
      <div className="min-w-0">
        <b className="block text-xs text-white break-words">{title}</b>
        <span className="block text-[11px] text-footer-text">{text}</span>
      </div>
    </div>
  );
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
    <footer className="relative overflow-hidden bg-footer-bg text-footer-text-2 pt-12 sm:pt-16">
      <div className="absolute -right-20 -bottom-24 w-[260px] h-[260px] rounded-full bg-gradient-to-br from-pink to-violet opacity-35 pointer-events-none" />
      <div className="absolute right-[180px] -bottom-16 w-[250px] h-[140px] rounded-full bg-primary opacity-25 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.9fr_1.2fr] gap-10">
          <div className="lg:border-r lg:border-white/10 lg:pr-10">
            <Logo variant="light" />

            <p className="text-xs leading-relaxed text-footer-text mt-4 mb-4 max-w-[330px]">
              Code Axis Tech empowers innovation, delivering modern IT solutions tailored to your business needs.
            </p>

            <div className="flex flex-col gap-4">
              <ContactItem Icon={Clock} title="Open Hours" text="Available 24/7 to Serve You Anytime" type="pink" />
              <ContactItem Icon={MapPin} title="Gulberg Lahore" text="Pakistan" type="blue" />
              <ContactItem Icon={Mail} title="info@codeaxistech.com" text="We reply within 24 hours" type="pink" />
              <ContactItem Icon={Phone} title="+92 336 3339083" text="Call or WhatsApp" type="blue" />
            </div>
          </div>

          <div>
            <ColumnTitle barColor="bg-pink">Quick Links</ColumnTitle>
            <ul className="mt-5 sm:mt-6">
              {links.map(([name, path]) => (
                <li key={path} className="text-xs mb-3 text-footer-text-2 hover:text-white transition-colors">
                  <Link to={path} className="inline-block py-0.5">{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle barColor="bg-accent">Our Services</ColumnTitle>
            <ul className="mt-5 sm:mt-6">
              {serviceNames.map((s) => (
                <li key={s} className="text-xs mb-3 text-footer-text-2 hover:text-white transition-colors">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle barColor="bg-violet">Stay Updated</ColumnTitle>

            <p className="text-xs leading-relaxed text-footer-text mt-4">
              Subscribe to our newsletter to get the latest updates, insights and special offers.
            </p>

            <form
              onSubmit={submit}
              className="mt-5 h-[42px] w-full max-w-[420px] flex bg-footer-input border border-white/10 rounded-xl p-1"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 bg-transparent outline-none px-3 text-white text-xs placeholder:text-footer-text"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-9 shrink-0 rounded-lg bg-pink text-white grid place-items-center hover:opacity-90 transition"
              >
                <Send size={15} />
              </button>
            </form>

            {sent && <p className="text-xs text-accent mt-2">Thanks for subscribing!</p>}

            <div className="flex flex-wrap gap-3 mt-5">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-[34px] h-[34px] rounded-full border border-white/10 grid place-items-center hover:bg-white/5 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-footer-bottom border-t border-white/10 py-4 text-[11px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between gap-2.5 text-center md:text-left">
          <span>
            © {new Date().getFullYear()} <b className="text-white">Code Axis Tech</b>. All rights reserved.
          </span>
          <span>
            {legal.map((item, i) => (
              <span key={item}>
                {i > 0 && " | "}
                {item}
              </span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}