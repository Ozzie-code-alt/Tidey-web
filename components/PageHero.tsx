type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[linear-gradient(180deg,var(--sky-top),var(--sky-mid))] px-6 pb-16 pt-[calc(var(--header-h)+40px)]">
      <div className="mx-auto max-w-[760px] text-center">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-white backdrop-blur-sm">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 font-display text-[clamp(34px,5vw,54px)] font-extrabold leading-[1.05] text-white [text-shadow:0_6px_22px_rgba(11,80,150,0.28)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-[52ch] text-lg font-semibold leading-relaxed text-[#EAF7FF]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}