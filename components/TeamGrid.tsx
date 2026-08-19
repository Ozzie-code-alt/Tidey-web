import Image from "next/image";

const team = [
  {
    id: "maya",
    name: "Maya Ortega",
    role: "Co-founder, product",
    bio: "Nine years building learning tools for schools. Mother of two chore-avoidant boys.",
    photo: "/assets/team/maya.jpg",
    initials: "MO",
    tint: "var(--tint-sky)",
    ink: "var(--on-sky)",
  },
  {
    id: "dev",
    name: "Dev Raman",
    role: "Co-founder, engineering",
    bio: "Ex-fintech. Believes a coin animation beats a thousand reminder notifications.",
    photo: "/assets/team/dev.jpg",
    initials: "DR",
    tint: "var(--tint-mint)",
    ink: "var(--on-mint)",
  },
  {
    id: "lena",
    name: "Lena Fischer",
    role: "Design lead",
    bio: "Illustrator turned product designer. Drew every version of the Tidey blob, and there were many.",
    photo: "/assets/team/lena.jpg",
    initials: "LF",
    tint: "var(--tint-peach)",
    ink: "var(--on-peach)",
  },
];

export default function TeamGrid() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-16 md:py-20">
      <div className="mx-auto mb-12 max-w-[34ch] text-center">
        <h2 className="font-display text-[clamp(26px,4vw,38px)] font-extrabold leading-[1.1] text-ink">
          The people behind it
        </h2>
        <p className="mt-3 text-lg font-semibold text-ink-soft">
          Two parents and one very patient designer.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <article key={member.id} className="group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-[var(--surface-subtle)]">
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <span
                  className="flex h-full w-full items-center justify-center font-display text-6xl font-extrabold"
                  style={{ background: member.tint, color: member.ink }}
                  aria-hidden
                >
                  {member.initials}
                </span>
              )}
            </div>

            <h3 className="mt-5 text-xl font-extrabold text-ink">{member.name}</h3>
            <p className="mt-1 text-sm font-bold uppercase tracking-[0.04em] text-[var(--blue-600)]">
              {member.role}
            </p>
            <p className="mt-3 font-semibold leading-relaxed text-ink-soft">
              {member.bio}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}