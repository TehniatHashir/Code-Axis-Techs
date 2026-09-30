import { Link } from "react-router-dom";
import { Zap, ShieldCheck, Users, Phone, ArrowRight } from "lucide-react";
import ctaLaptop from "../../assets/images/cta-laptop.png";

export default function CTA() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
      <section className="relative bg-dark text-white rounded-2xl my-8 sm:my-10 mb-16 sm:mb-20 overflow-hidden">
        <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-6 sm:gap-8 lg:gap-10 items-center px-5 sm:px-8 md:px-12 py-8 sm:py-10">

          {/* LEFT — content */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 sm:gap-2.5 bg-dark border border-white/15 text-footer-text-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-md text-[9px] sm:text-[11px] tracking-[.18em] sm:tracking-[.2em] font-semibold uppercase before:content-[''] before:w-1 sm:before:w-1.5 before:h-1 sm:before:h-1.5 before:rounded-full before:bg-accent">
              Let's work together
            </span>

            <h2 className="font-display text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px] leading-[1.2] mt-3 sm:mt-4 mb-3 sm:mb-4 text-white font-extrabold">
              <span className="sm:whitespace-nowrap">Building Digital Solutions</span>
              <br />
              <span className="sm:whitespace-nowrap">
                That Drive <span className="text-accent">Real Results.</span>
              </span>
            </h2>

            <p className="text-footer-text-2 max-w-[520px] mb-5 sm:mb-6 text-[12px] sm:text-[14px] lg:text-[15px] leading-[1.65]">
              We help businesses transform ideas into powerful digital experiences that
              drive growth, engage audiences and create lasting impact.
            </p>

            <div className="flex flex-col xs:flex-row sm:flex-wrap gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors text-[12px] sm:text-[13px] lg:text-[14px]"
              >
                Contact Us <ArrowRight size={13} />
              </Link>

              <a
                href="tel:+923363339083"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-white/20 transition-colors text-[12px] sm:text-[13px] lg:text-[14px]"
              >
                <Phone size={13} />
                <span className="truncate">Call Now: +92 336 3339083</span>
              </a>
            </div>

            {/* Feature row */}
            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-5 gap-y-2 sm:gap-y-3 text-footer-text-2 text-[11px] sm:text-[13px] lg:text-sm">
              <span className="inline-flex items-center gap-1.5 sm:gap-2">
                <Zap size={13} className="text-accent shrink-0" />
                Fast Response
              </span>
              <span className="hidden sm:inline-block w-px h-4 sm:h-5 bg-white/15" />
              <span className="inline-flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck size={13} className="text-accent shrink-0" />
                Secure &amp; Reliable
              </span>
              <span className="hidden sm:inline-block w-px h-4 sm:h-5 bg-white/15" />
              <span className="inline-flex items-center gap-1.5 sm:gap-2">
                <Users size={13} className="text-accent shrink-0" />
                Dedicated Support
              </span>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="relative flex items-center justify-center min-h-[160px] sm:min-h-[220px] lg:min-h-[260px] mt-2 lg:mt-0">
            <img
              src={ctaLaptop}
              alt="Dashboard preview"
              className="relative z-10 w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[420px] h-auto object-contain"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 70%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse at center, black 70%, transparent 100%)",
              }}
            />

            {/* Floating badge */}
            <div className="absolute right-0 sm:right-2 bottom-0 sm:bottom-2 lg:bottom-6 bg-cta-badge-bg border border-white/10 rounded-lg sm:rounded-xl px-2.5 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-[0_14px_34px_rgba(0,0,0,.35)] z-20">
              <div className="flex items-end gap-0.5">
                <span className="w-1 h-3 sm:w-1.5 sm:h-4 bg-pink rounded-sm" />
                <span className="w-1 h-4 sm:w-1.5 sm:h-6 bg-primary rounded-sm" />
                <span className="w-1 h-2 sm:w-1.5 sm:h-3 bg-accent rounded-sm" />
              </div>
              <div>
                <b className="block text-white text-[10px] sm:text-[13px] font-bold leading-none">
                  Your Growth
                </b>
                <span className="block text-footer-text-2 text-[9px] sm:text-[12px] mt-0.5">
                  Our Priority
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}