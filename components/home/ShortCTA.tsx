import { StoreButton } from "@/components/StoreButtons";

export default function ShortCTA() {
  return (
    <section className="bg-white px-5 py-10 lg:px-10 xl:px-20 2xl:px-[162px] 2xl:py-[60px]">
      <div className="mx-auto flex w-full max-w-[1738px] flex-col items-center gap-[26px] rounded-[40px] px-5 py-5 lg:flex-row lg:justify-center lg:gap-[60px] lg:px-10 xl:px-20 2xl:px-[100px]">
        <h2 className="max-w-[304px] text-center text-[24px] font-semibold leading-[30px] tracking-[-0.005em] text-[#00BAFA] lg:max-w-[478px] lg:text-[36px] lg:leading-[45px]">
          Download Tidey now on iOS
        </h2>
        <div className="flex w-full max-w-[350px] flex-col gap-[14px] lg:w-auto lg:max-w-none lg:flex-row lg:gap-10">
          <StoreButton
            platform="iphone"
            className="h-[63px] w-full justify-center [&_span]:text-[18px] lg:w-[340px] 2xl:w-[400px]"
          />
          <StoreButton
            platform="android"
            className="h-[63px] w-full justify-center [&_span]:text-[18px] lg:w-[340px] 2xl:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
