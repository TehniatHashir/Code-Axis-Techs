export default function PageHero({ tag, title, accent, text, children }) {
  return (
    <section className="bg-gradient-to-br from-hero-2 from-40% to-hero-3 py-24 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <span className="inline-flex items-center gap-2.5 border border-border-light bg-white px-4 py-2 rounded-md text-[12px] tracking-[.2em] font-semibold text-muted uppercase before:content-[''] before:w-[22px] before:h-[2px] before:bg-primary">
          {tag}
        </span>
        <h1 className="font-display text-[56px] font-extrabold leading-[1.15] mt-6 mb-5 text-ink">
          {title} <span className="text-accent">{accent}</span>
        </h1>
        <p className="max-w-[640px] mx-auto mb-8 text-muted text-lg">{text}</p>
        {children}
      </div>
    </section>
  );
}