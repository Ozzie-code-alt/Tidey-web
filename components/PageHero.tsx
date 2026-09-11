type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#01AEFA_0%,#48D4FB_100%)] px-5 pb-10 pt-[calc(var(--header-h)+40px)] lg:px-10 lg:pb-[clamp(54px,5.26vw,100px)] lg:pt-[calc(var(--header-h)+clamp(54px,5.26vw,100px))]">
      <div className="mx-auto max-w-[900px] text-center">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-[14px] font-bold uppercase tracking-[0.06em] text-white">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-[30px] font-bold leading-[38px] tracking-[-0.63px] text-white lg:text-[clamp(32px,3.16vw,60px)] lg:leading-[125%] lg:tracking-[-1.66px]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-[52ch] text-[16px] font-normal leading-[160%] text-white/90 lg:mt-[clamp(14px,1.37vw,26px)] lg:text-[clamp(14px,calc(0.86vw+3.71px),20px)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
