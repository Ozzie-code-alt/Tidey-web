import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ValueCards from "@/components/ValueCards";
import TestimonialSwiper  from "@/components/TestimonialSwiper";
import TeamGrid from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "About Tidey — chores, reimagined",
  description:
    "Why we built Tidey: a chore app that kids actually want to open.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="We got tired of nagging."
        subtitle="Tidey started as a sticker chart on a fridge. It worked for about nine days."
      />

      <section className="mx-auto max-w-[760px] px-6 py-16">
        <p className="text-lg font-medium leading-[1.7] text-[var(--ink-700)]">
          Every parent knows the cycle. You ask, they forget. You ask again,
          louder. Something eventually gets done, badly, and nobody enjoyed any
          part of it.
        </p>
        <p className="mt-5 text-lg font-medium leading-[1.7] text-[var(--ink-700)]">
          We thought the problem wasn&apos;t the kids. It was the format. So we
          rebuilt the chore chart as something closer to a game — missions,
          coins, streaks, and rewards that a seven-year-old actually cares about.
        </p>
      </section>

      <ValueCards />
      <TestimonialSwiper  />
      <TeamGrid />
    </>
  );
}