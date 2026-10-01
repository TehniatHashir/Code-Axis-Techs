import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import ctaLaptop from "../../assets/images/cta-laptop.png";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-footer-bg text-white">
      {/* ===== BACKGROUND (matches reference): big curved shapes, bright blobs, rings, dot grid ===== */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 560"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="ctaBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#3b7bff" stopOpacity=".85" />
            <stop offset="1" stopColor="#1d4ed8" stopOpacity=".12" />
          </radialGradient>
          <linearGradient id="ctaLeft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2f5fd8" stopOpacity=".38" />
            <stop offset="1" stopColor="#1b3a96" stopOpacity=".06" />
          </linearGradient>
          <radialGradient id="ctaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#3b7bff" stopOpacity=".42" />
            <stop offset="1" stopColor="#3b7bff" stopOpacity="0" />
          </radialGradient>
          <pattern id="ctaDots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill="#fff" fillOpacity=".6" />
          </pattern>
        </defs>

        {/* left: large sweeping circles */}
        <circle cx="140" cy="470" r="520" fill="url(#ctaLeft)" />
        <circle cx="140" cy="470" r="520" fill="none" stroke="#7aa2ff" strokeOpacity=".10" />
        <circle cx="-40" cy="60" r="260" fill="#1e40af" fillOpacity=".22" />

        {/* right: bright blobs + rings */}
        <circle cx="1240" cy="30" r="250" fill="url(#ctaBlue)" />
        <circle cx="1440" cy="230" r="200" fill="#2563eb" fillOpacity=".35" />
        <circle cx="1160" cy="300" r="430" fill="none" stroke="#fff" strokeOpacity=".06" />
        <circle cx="1160" cy="300" r="330" fill="none" stroke="#fff" strokeOpacity=".04" />

        {/* glow behind the devices */}
        <ellipse cx="1000" cy="300" rx="480" ry="250" fill="url(#ctaGlow)" />

        {/* dot grid, top-right */}
        <rect x="1280" y="110" width="150" height="190" fill="url(#ctaDots)" opacity=".5" />
      </svg>

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-14 grid lg:grid-cols-[1fr_1.05fr] xl:grid-cols-[.85fr_1.15fr] gap-5 sm:gap-6 items-center">

        {/* LEFT — content */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[.12em] uppercase text-footer-text-2 before:content-[''] before:w-5 sm:before:w-6 before:h-px before:bg-footer-text-2">
            Let's work together
          </div>

          <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[40px] xl:text-[46px] font-extrabold leading-[1.08] tracking-[-.02em] mt-3 sm:mt-4">
            Ready to Build Your<br />
            Next <span className="text-accent">Digital Product?</span>
          </h2>

          <p className="text-footer-text-2 text-[14px] sm:text-[16px] xl:text-[17px] leading-[1.6] mt-3 sm:mt-4 max-w-[520px] lg:max-w-[440px] xl:max-w-[460px]">
            Turn your ideas into powerful digital solutions. Let's discuss your
            project and explore how we can help you grow your business with
            modern web and AI solutions.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-3 mt-5 sm:mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-ink font-semibold text-[14px] sm:text-[15px] lg:text-[14px] px-6 sm:px-7 lg:px-5 py-3.5 sm:py-4 whitespace-nowrap rounded-full shadow-[0_10px_26px_rgba(0,0,0,.25)] hover:bg-white/90 transition"
            >
              Get Free Consultation <ArrowRight size={16} />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-3 text-white font-semibold text-[14px] sm:text-[15px] lg:text-[14px] px-6 sm:px-7 lg:px-5 py-3.5 sm:py-4 whitespace-nowrap rounded-full border border-white/25 bg-white/[.03] hover:bg-white/10 transition"
            >
              <span className="w-6 h-6 rounded-full bg-primary grid place-items-center">
                <Play size={10} className="fill-white" />
              </span>
              View Case Studies
            </Link>
          </div>
        </div>

        {/* RIGHT — devices on a glossy floor (replace src/assets/images/cta-laptop.png) */}
        <div className="relative flex items-center justify-center lg:justify-end pb-6 sm:pb-8 lg:pb-4 lg:-my-8">
          <div className="relative w-full max-w-[460px] sm:max-w-[620px] lg:max-w-none lg:w-[114%] lg:-mr-8 xl:w-[116%] xl:-mr-16">

            {/* glossy floor light */}
            <div className="absolute -left-[6%] -right-[6%] -bottom-[6%] h-[24%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(96,150,255,.6),rgba(47,84,255,.2)_55%,transparent_75%)] blur-md" />

            {/* mirrored reflection */}
            <img
              src={ctaLaptop}
              alt=""
              aria-hidden
              className="absolute left-0 top-full w-full h-auto -mt-[3%] scale-y-[-1] opacity-25 pointer-events-none select-none"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,.7), transparent 45%)",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,.7), transparent 45%)",
              }}
            />

            {/* contact shadows under laptop and phone */}
            <div className="absolute left-[2%] bottom-[1%] w-[68%] h-[5%] rounded-[50%] bg-black/60 blur-[6px]" />
            <div className="absolute right-[3%] bottom-[0%] w-[23%] h-[4%] rounded-[50%] bg-black/60 blur-[5px]" />

            <img
              src={ctaLaptop}
              alt="Laptop and mobile preview of a modern website"
              loading="lazy"
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}