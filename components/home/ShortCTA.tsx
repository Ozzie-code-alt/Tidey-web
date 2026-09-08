/* eslint-disable @next/next/no-img-element */
import { StoreButton } from "@/components/StoreButtons";

// Section 6 — short closing CTA.
export default function ShortCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1740px] px-4 pb-6 pt-10 lg:px-10 lg:py-[100px]">
        <div className="flex flex-col items-center justify-center gap-8 rounded-[40px] px-6 py-10 text-center lg:flex-row lg:justify-between lg:gap-10 lg:rounded-[40px] lg:px-20 lg:py-14">
          <h2 className="max-w-[520px] text-[24px] font-semibold leading-[30px] tracking-[-0.005em] text-[#00BAFA] lg:text-[36px] lg:leading-[45px]">
            Download Tidey now on iOS
          </h2>
          <div className="flex flex-col items-center gap-[14px] sm:flex-row sm:gap-10">
            <StoreButton platform="iphone" />
            <StoreButton platform="android" />
          </div>
        </div>
      </div>
    </section>
  );
}
