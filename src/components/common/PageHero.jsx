export default function PageHero({ tag, title, accent, text, children }) {
  return (
    <section className="bg-gradient-to-br from-hero-2 from-40% to-hero-3 py-14 sm:py-20 lg:py-24 text-center">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <span className="inline-flex items-center gap-2 sm:gap-2.5 border border-border-light bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-[10px] sm:text-[12px] tracking-[.15em] sm:tracking-[.2em] font-semibold text-muted uppercase before:content-[''] before:w-[18px] sm:before:w-[22px] before:h-[2px] before:bg-primary">
          {tag}
        </span>

        <h1 className="font-display text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.15] mt-5 sm:mt-6 mb-4 sm:mb-5 text-ink">
          {title} <span className="text-accent">{accent}</span>
        </h1>

        <p className="max-w-[640px] mx-auto mb-6 sm:mb-8 text-muted text-[14px] sm:text-base lg:text-lg px-2">
          {text}
        </p>

        {children}
      </div>
    </section>
  );
}