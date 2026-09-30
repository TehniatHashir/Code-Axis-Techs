import { NavLink, Link } from "react-router-dom";
import Logo from "../common/Logo";

const items = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-bg border-b border-border-soft">
      <div className="max-w-[1200px] mx-auto px-6 h-[82px] flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex gap-10">
          {items.map(([n, p]) => (
            <NavLink
              key={p}
              to={p}
              end
              className={({ isActive }) =>
                `py-2 font-medium transition-colors ${
                  isActive
                    ? "text-ink border-b-2 border-primary"
                    : "text-muted hover:text-ink"
                }`
              }
            >
              {n}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-[15px]"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}