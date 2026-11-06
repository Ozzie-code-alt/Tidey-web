import { StoreButton } from "@/components/StoreButtons";
// import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonial() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto grid max-w-[1820px] grid-cols-1 items-center gap-8 px-5 py-10 lg:px-10 lg:py-[clamp(75px,7.37vw,140px)]">
        <div className="mx-auto w-full max-w-[900px] text-center lg:py-[clamp(37px,3.63vw,69px)]">
          <h2 className="text-[28px] font-bold leading-[35px] tracking-[-0.5px] text-[#232323] lg:text-[clamp(32px,3.16vw,60px)] lg:leading-[127%] lg:tracking-[-1.66px]">
            Make everyday routines work better for your family
          </h2>
          <p className="mx-auto mt-[14px] max-w-[625px] text-[16px] font-normal leading-[24px] text-[#878787] lg:mt-[clamp(14px,1.37vw,26px)] lg:text-[clamp(14px,calc(0.57vw+7.14px),18px)] lg:leading-[130%]">
            Set chores, create rewards and help your kids build habits they can carry with them as they grow.
          </p>
          <div className="mt-6 hidden lg:mt-10 lg:flex lg:justify-center">
            <StoreButton platform="iphone" />
          </div>
        </div>

        {/* Testimonial carousel temporarily hidden — no real testimonials yet.
            Restore by uncommenting the import + usage below, and re-adding
            `xl:grid-cols-2` to the grid above. */}
        {/* <TestimonialCarousel /> */}
      </div>
    </section>
  );
}
