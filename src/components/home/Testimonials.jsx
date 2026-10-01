import { useRef } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

/* Avatars: put the photos in src/assets/images/testimonials/
   using the file names below (jpg, jpeg, png or webp).
   If a photo is missing, the initials circle is shown instead. */
const avatarFiles = import.meta.glob(
  "../../assets/images/testimonials/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const avatarFor = (name) =>
  Object.entries(avatarFiles).find(([path]) =>
    new RegExp(`/${name}\\.(jpe?g|png|webp)$`).test(path)
  )?.[1];

const testimonials = [
  {
    name: "Daniel Carter",
    photo: "daniel-carter",
    role: "CEO, Skyline Real Estate",
    text: "Code Axis Tech transformed our vision into a modern, high-performing website that has significantly increased our leads and sales. Their team is professional, responsive, and truly understands business goals.",
  },
  {
    name: "Priya Sharma",
    photo: "priya-sharma",
    role: "Marketing Head, HealthPlus",
    text: "The Code Axis Tech team delivered an exceptional digital experience for our brand. From design to development, the entire process was smooth, transparent, and results-driven. We've seen a remarkable growth in our online presence.",
  },
  {
    name: "Michael Rodriguez",
    photo: "michael-rodriguez",
    role: "Founder, FoodVista",
    text: "Working with Code Axis Tech was a game-changer for our business. They built a fast, beautiful, and scalable platform that perfectly fits our needs. The support and communication throughout the project were outstanding.",
  },
   {
    name: "Sarah Thompson",
    photo: "sarah-thompson",
    role: "Director, EduTech Solutions",
    text: "Code Axis Tech exceeded our expectations at every stage. Their attention to detail and commitment to delivering on time made the entire experience seamless. Our new platform has greatly improved user engagement and retention.",
  },
];

const initials = (n) => n.split(" ").map((w) => w[0]).join("").slice(0, 2);

export default function Testimonials() {
  const track = useRef(null);

  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-14 lg:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-[.1em] uppercase text-primary before:content-[''] before:w-3.5 before:h-0.5 before:bg-primary">
              Client Testimonials
            </div>
            <h2 className="text-[26px] sm:text-[36px] lg:text-[40px] font-extrabold leading-[1.15] mt-3 text-ink">
              What Our Clients<br className="hidden sm:block" /> Say About Us
            </h2>
          </div>

          <div className="flex w-full lg:w-auto items-center justify-between lg:justify-end gap-6 lg:gap-10">
            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-muted max-w-[360px]">
              We're proud to partner with businesses worldwide and help them achieve
              real, measurable results through digital innovation.
            </p>
            <div className="flex gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Previous testimonial"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-border-light grid place-items-center text-ink hover:bg-bg-alt transition"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Next testimonial"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-border-light grid place-items-center text-ink hover:bg-bg-alt transition"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={track}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="snap-start shrink-0 basis-[88%] sm:basis-[calc(50%-8px)] lg:basis-[calc(33.333%-10.67px)] bg-white border border-border-light rounded-xl p-5 sm:p-6 shadow-[0_14px_34px_rgba(31,50,120,.07)]"
            >
              <div className="flex items-center gap-3.5">
                {avatarFor(t.photo) ? (
                  <img
                    src={avatarFor(t.photo)}
                    alt={t.name}
                    loading="lazy"
                    className="w-12 h-12 sm:w-[54px] sm:h-[54px] shrink-0 rounded-full object-cover object-top"
                  />
                ) : (
                  <div className="w-12 h-12 sm:w-[54px] sm:h-[54px] shrink-0 rounded-full bg-gradient-to-br from-primary to-navy text-white grid place-items-center text-sm font-bold">
                    {initials(t.name)}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-bold text-ink leading-tight">{t.name}</h3>
                  <p className="text-xs text-soft mt-1 leading-snug">{t.role}</p>
                </div>
                <div className="hidden min-[400px]:flex gap-0.5 shrink-0" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <Quote size={22} className="text-primary/25 fill-primary/25 mt-5" />
              <p className="text-[14px] sm:text-[15px] leading-[1.75] text-muted mt-2">“{t.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}