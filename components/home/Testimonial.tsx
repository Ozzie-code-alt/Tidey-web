import Image from "next/image";
import { StoreButton } from "@/components/StoreButtons";

// Section 5 — testimonial / explainer.
export default function Testimonial() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1740px] flex-col-reverse items-center justify-between gap-10 px-4 py-10 lg:flex-row lg:px-24 lg:py-[100px] lg:gap-[80px]">
        {/* Left — heading + copy + single store CTA */}
        <div className="w-full max-w-[773px] shrink text-center lg:shrink-0 lg:text-left">
          <h2 className="text-[28px] font-bold leading-[35px] tracking-[-0.5px] text-[#232323] lg:text-[60px] lg:leading-[76px] lg:tracking-[-1.66px]">
            Make everyday routines work better for your family
          </h2>
          <p className="mx-auto mt-4 max-w-[625px] text-[16px] font-normal leading-[24px] text-[#878787] lg:mx-0 lg:text-[18px]">
            Set chores, create rewards and help your kids build habits they can carry with them as they grow.
          </p>
          <div className="mt-6 flex justify-center lg:mt-10 lg:justify-start">
            <StoreButton platform="iphone" />
          </div>
        </div>

        {/* Right — quote card */}
        <div className="w-full max-w-[663px] rounded-[30px] bg-[#FBFBFB] p-6 shadow-[-33px_71px_97.4px_#EAEAEA] lg:p-10">
          <div className="flex items-center gap-[5.48px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/assets/icons/star.svg"
                alt=""
                width={32}
                height={31}
                className="h-[37px] w-[37px]"
              />
            ))}
          </div>

          <h3 className="mt-5 bg-[linear-gradient(180deg,#0088FA_0%,#00CCFA_100%)] bg-clip-text text-[26px] font-semibold leading-[33px] text-transparent">
            Super helpful!!!
          </h3>
          <p className="mt-4 text-[16px] font-medium leading-[24px] text-[#878787] lg:text-[18px]">
            I like that I don&apos;t have to keep explaining what needs to be done. The kids can check Tidey, get
            through their chores, and see what they&apos;re working toward. It gives them a little more independence,
            and for me, it just makes the whole routine at home feel a lot easier.
          </p>
          <p className="mt-4 text-[16px] font-bold leading-[24px] text-[#3C3C3C]">Melvin C.</p>
        </div>
      </div>
    </section>
  );
}
