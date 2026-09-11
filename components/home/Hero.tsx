import Image from "next/image";
import { StoreButton } from "@/components/StoreButtons";

export default function Hero() {
  return (
    <section className="relative flex min-h-[661px] flex-col overflow-hidden md:min-h-[100vw] lg:min-h-[53.2vw]">
      <picture className="absolute inset-0 block">
        <source media="(min-width: 768px)" srcSet="/assets/homepage/desktop-hero.png" />
        <Image
          src="/assets/homepage/mobile-hero.png"
          alt="Tidey — everyday chores made fun"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      <div className="relative z-10 mx-auto mt-auto flex w-full max-w-[430px] flex-col gap-[14px] bg-[linear-gradient(0deg,white,transparent)] px-5 pb-10 lg:max-w-none lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:px-0 lg:pb-0">
        <StoreButton
          platform="iphone"
          className="w-full justify-center lg:w-auto lg:px-[clamp(25px,2.42vw,46px)] lg:py-[clamp(14px,1.37vw,26px)]"
        />
        <StoreButton
          platform="android"
          className="w-full justify-center lg:w-auto lg:px-[clamp(25px,2.42vw,46px)] lg:py-[clamp(14px,1.37vw,26px)]"
        />
      </div>
    </section>
  );
}
