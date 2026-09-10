import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ValueCards from "@/components/ValueCards";
import TestimonialSwiper  from "@/components/TestimonialSwiper";
// import TeamGrid from "@/components/TeamGrid";
import ShortCTA from "@/components/home/ShortCTA";

export const metadata: Metadata = {
  title: "About",
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

      <section className="mx-auto max-w-[900px] px-5 py-10 lg:px-10 lg:py-[100px]">
        <p className="text-[16px] font-normal leading-[160%] text-[#878787] lg:text-[20px]">
          Every parent knows the cycle. You ask, they forget. You ask again,
          louder. Something eventually gets done, badly, and nobody enjoyed any
          part of it.
        </p>
        <p className="mt-5 text-[16px] font-normal leading-[160%] text-[#878787] lg:text-[20px]">
          We thought the problem wasn&apos;t the kids. It was the format. So we
          rebuilt the chore chart as something closer to a game — missions,
          coins, streaks, and rewards that a seven-year-old actually cares about.
        </p>
      </section>

      <ValueCards />
      <TestimonialSwiper  />
      {/* TeamGrid hidden until real photos/bios are ready (design pass). */}
      {/* <TeamGrid /> */}
      <ShortCTA />
    </>
  );
}