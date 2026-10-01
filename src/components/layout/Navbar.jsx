import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";

const items = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full max-w-full bg-bg border-b border-border-soft">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 h-[64px] sm:h-[82px] flex items-center justify-between gap-3">
        {/* Logo is ~290px wide at full size, so it is scaled down on phones */}
        <div className="min-w-0 shrink [zoom:0.72] min-[400px]:[zoom:0.85] sm:[zoom:1]">
          <Logo />
        </div>

        <div className="hidden lg:flex gap-10">
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

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Button moves into the mobile menu on phones to save space */}
          <Link
            to="/contact"
            className="hidden sm:inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-5 lg:px-6 py-3 lg:py-3.5 rounded-lg transition-colors text-[14px] lg:text-[15px] whitespace-nowrap"
          >
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-lg border border-border-soft text-ink"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border-soft bg-bg px-4 sm:px-6 pb-4">
          {items.map(([n, p]) => (
            <NavLink
              key={p}
              to={p}
              end
              className={({ isActive }) =>
                `block py-3 font-medium border-b border-border-soft transition-colors ${
                  isActive ? "text-primary" : "text-muted hover:text-ink"
                }`
              }
            >
              {n}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="sm:hidden mt-4 block text-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-[15px]"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}