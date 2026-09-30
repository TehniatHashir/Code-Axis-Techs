import { Link } from "react-router-dom";
import { Zap, ShieldCheck, Users, Phone, ArrowRight } from "lucide-react";
import ctaLaptop from "../../assets/images/cta-laptop.png";

export default function CTA() {
  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <section className="relative bg-dark text-white rounded-2xl my-10 mb-20 overflow-hidden">
        <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center px-8 md:px-12 py-10">

          {/* LEFT — content */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2.5 bg-dark border border-white/15 text-footer-text-2 px-4 py-2 rounded-md text-[12px] tracking-[.2em] font-semibold uppercase before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
              Let's work together
            </span>

            <h2 className="font-display text-[26px] sm:text-[30px] lg:text-[32px] leading-[1.15] mt-4 mb-4 text-white font-extrabold">
              <span className="whitespace-nowrap">Building Digital Solutions</span>
              <br />
              <span className="whitespace-nowrap">
                That Drive <span className="text-accent">Real Results.</span>
              </span>
            </h2>

            <p className="text-footer-text-2 max-w-[520px] mb-6 text-[15px] leading-[1.65]">
              We help businesses transform ideas into powerful digital experiences that
              drive growth, engage audiences and create lasting impact.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-[14px]"
              >
                Contact Us <ArrowRight size={15} />
              </Link>

              <a
                href="tel:+923363339083"
                className="inline-flex items-center gap-2.5 bg-transparent hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors text-[14px]"
              >
                <Phone size={15} />
                Call Now: +92 336 3339083
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-footer-text-2 text-sm">
              <span className="inline-flex items-center gap-2">
                <Zap size={16} className="text-accent" />
                Fast Response
              </span>
              <span className="hidden sm:inline-block w-px h-5 bg-white/15" />
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-accent" />
                Secure &amp; Reliable
              </span>
              <span className="hidden sm:inline-block w-px h-5 bg-white/15" />
              <span className="inline-flex items-center gap-2">
                <Users size={16} className="text-accent" />
                Dedicated Support
              </span>
            </div>
          </div>

          {/* RIGHT — image only */}
          <div className="relative flex items-center justify-center min-h-[220px] lg:min-h-[260px]">
            <img
              src={ctaLaptop}
              alt="Dashboard preview"
              className="relative z-10 w-full max-w-[420px] h-auto object-contain"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 70%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse at center, black 70%, transparent 100%)",
              }}
            />

            {/* Floating badge */}
            <div className="absolute right-0 lg:right-2 bottom-2 lg:bottom-6 bg-cta-badge-bg border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 shadow-[0_14px_34px_rgba(0,0,0,.35)] z-20">
              <div className="flex items-end gap-0.5">
                <span className="w-1.5 h-4 bg-pink rounded-sm" />
                <span className="w-1.5 h-6 bg-primary rounded-sm" />
                <span className="w-1.5 h-3 bg-accent rounded-sm" />
              </div>
              <div>
                <b className="block text-white text-[13px] font-bold leading-none">
                  Your Growth
                </b>
                <span className="block text-footer-text-2 text-[12px] mt-0.5">
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