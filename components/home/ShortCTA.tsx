import { StoreButton } from "@/components/StoreButtons";

export default function ShortCTA() {
  return (
    <section className="bg-white p-5 lg:px-[clamp(60px,8.53vw,162px)] lg:py-[clamp(32px,3.16vw,60px)]">
      <div className="mx-auto flex w-full max-w-[1738px] flex-col items-center gap-[26px] rounded-[40px] px-5 py-5 lg:flex-row lg:justify-center lg:gap-[clamp(32px,3.16vw,60px)] lg:px-[clamp(40px,5.26vw,100px)]">
        <h2 className="max-w-[270px] text-center text-[24px] font-semibold leading-[30px] tracking-[-0.005em] text-[#00BAFA] lg:max-w-[clamp(257px,25.16vw,478px)] lg:text-[clamp(19px,1.89vw,36px)] lg:leading-[125%]">
          Download Tidey now on iOS
        </h2>
        <div className="flex w-full max-w-[350px] flex-col gap-[14px] lg:w-auto lg:max-w-none lg:flex-row lg:gap-10">
          <StoreButton
            platform="iphone"
            className="h-[63px] w-full justify-center [&_span]:text-[18px] lg:w-[clamp(285px,21.05vw,400px)]"
          />
          <StoreButton
            platform="android"
            className="h-[63px] w-full justify-center [&_span]:text-[18px] lg:w-[clamp(285px,21.05vw,400px)]"
          />
        </div>
      </div>
    </section>
  );
}
