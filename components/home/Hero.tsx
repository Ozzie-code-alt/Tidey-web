import Image from "next/image";
import { StoreButton } from "@/components/StoreButtons";

// Section 1 — Hero
// Desktop bg: /assets/homepage/desktop-hero.png
// Mobile  bg: /assets/homepage/mobile-hero.png
//
// Figma layout: hero is a full-height image with a top nav (global Header) and
// the two download buttons pinned to the bottom — full-width + stacked on
// mobile, side-by-side and centered on desktop.
export default function Hero() {
  return (
    <section className="relative flex min-h-[661px] flex-col overflow-hidden lg:min-h-[1040px]">
      {/* Mobile background */}
      <Image
        src="/assets/homepage/mobile-hero.png"
        alt="Tidey — everyday chores made fun"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center block lg:hidden"
      />
      {/* Desktop background */}
      <Image
        src="/assets/homepage/desktop-hero.png"
        alt="Tidey — everyday chores made fun"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 !hidden h-full w-full object-cover object-center lg:!block"
      />

      {/* Buttons pinned to the bottom. Stacked (full-width) on mobile,
          side-by-side + centered on desktop. */}
      <div className="relative z-10 mx-auto mt-auto flex w-full max-w-[430px] flex-col gap-[14px] px-5 pb-10 lg:max-w-none lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:px-0 lg:pb-0">
        <StoreButton
          platform="iphone"
          className="w-full justify-center lg:w-auto lg:px-[46px] lg:py-[26px]"
        />
        <StoreButton
          platform="android"
          className="w-full justify-center lg:w-auto lg:px-[46px] lg:py-[26px]"
        />
      </div>
    </section>
  );
}
