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
    <section className="mx-auto max-w-[1120px] px-6 py-16 md:py-20">
      <div className="mx-auto mb-12 max-w-[34ch] text-center">
        <h2 className="font-display text-[clamp(26px,4vw,38px)] font-extrabold leading-[1.1] text-ink">
          What we believe
        </h2>
        <p className="mt-3 text-lg font-semibold text-ink-soft">
          Four ideas that shape every decision we make.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {values.map((value) => (
          <article
            key={value.id}
            className="rounded-card border border-hairline bg-[var(--surface-subtle)] p-7 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-md)]"
          >
            <span className="text-3xl" aria-hidden>
              {value.emoji}
            </span>
            <h3 className="mt-4 text-xl font-extrabold text-ink">{value.title}</h3>
            <p className="mt-2 font-semibold leading-relaxed text-ink-soft">
              {value.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}