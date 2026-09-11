const tints = [
  "bg-[linear-gradient(180deg,#D5F1F8_0%,#F2FBFD_100%)]",
  "bg-[linear-gradient(180deg,#EBFCD8_0%,#F9FEF3_100%)]",
  "bg-[linear-gradient(180deg,#FBF7D9_0%,#FEFDF4_100%)]",
  "bg-[linear-gradient(180deg,#FBEDF2_0%,#FEFAFB_100%)]",
];

const values = [
  {
    id: "playful",
    emoji: "🎯",
    title: "Playful by default",
    body: "Chores framed as missions, not obligations. Kids show up because it's fun, not because they were nagged.",
  },
  {
    id: "fair",
    emoji: "🪙",
    title: "Effort earns reward",
    body: "Every finished job pays out in Tidey Coins, so the link between work and reward is immediate and visible.",
  },
  {
    id: "family",
    emoji: "🏡",
    title: "Built for whole families",
    body: "Parents set the jobs and the rewards. Kids own the doing. Nobody is managing a spreadsheet.",
  },
  {
    id: "lasting",
    emoji: "🌱",
    title: "Habits that outlast the app",
    body: "The goal isn't screen time. It's a nine-year-old who tidies up without being asked.",
  },
];

export default function ValueCards() {
  return (
    <section className="mx-auto w-full max-w-[1738px] px-5 py-10 lg:px-10 lg:py-[clamp(54px,5.26vw,100px)]">
      <div className="mx-auto mb-8 max-w-[34ch] text-center lg:mb-[clamp(32px,3.16vw,60px)]">
        <h2 className="text-[32px] font-bold leading-[40px] tracking-[-0.5px] text-[#232323] lg:text-[clamp(28px,2.74vw,52px)] lg:leading-[127%] lg:tracking-[-1.66px]">
          What we believe
        </h2>
        <p className="mt-3 text-[16px] font-normal leading-[160%] text-[#878787] lg:text-[clamp(14px,calc(0.86vw+3.71px),20px)]">
          Four ideas that shape every decision we make.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-[clamp(14px,1.37vw,26px)]">
        {values.map((value, i) => (
          <article
            key={value.id}
            className={`rounded-[26px] p-6 shadow-[inset_0px_0px_20px_#FFFFFF] lg:rounded-[40px] lg:p-10 ${tints[i % tints.length]}`}
          >
            <span className="text-3xl" aria-hidden>
              {value.emoji}
            </span>
            <h3 className="mt-4 text-[20px] font-bold leading-[160%] text-[#232323] lg:text-[clamp(22px,1.68vw,32px)] lg:leading-[125%]">
              {value.title}
            </h3>
            <p className="mt-2 text-[16px] font-normal leading-[160%] text-[#878787] lg:text-[clamp(14px,calc(0.86vw+3.71px),20px)]">
              {value.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
