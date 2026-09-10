"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StoreButton } from "@/components/StoreButtons";

type Quote = { title: string; quote: string; name: string };

const quotes: Quote[] = [
  {
    title: "Super helpful!!!",
    quote:
      "I like that I don\u2019t have to keep explaining what needs to be done. The kids can check Tidey, get through their chores, and see what they\u2019re working toward. It gives them a little more independence, and for me, it just makes the whole routine at home feel a lot easier.",
    name: "Melvin C.",
  },
  {
    title: "Our mornings are calmer",
    quote:
      "Getting out of the house used to be a daily battle. Now my kids glance at Tidey to see the get-ready checklist, tick things off, and race each other to finish. We still negotiate about who loads the dishwasher, but honestly, that\u2019s progress.",
    name: "Sarah T.",
  },
  {
    title: "Kids actually look forward to chores",
    quote:
      "The coin rewards and the little pet they feed made me skeptical at first \u2014 but my seven-year-old now reminds me when a task is due. I never expected to hear \u201cCan I do the chores first?\u201d before screen time.",
    name: "Diane R.",
  },
  {
    title: "Money lessons without lectures",
    quote:
      "My teens set their own savings goals, we match a few of them, and they\u2019ve started splitting coins between spending and saving on their own. Tidey does the teaching for me.",
    name: "Marcus L.",
  },
  {
    title: "Worth every download",
    quote:
      "One parent account, two kids with their own tasks, and everything tracks cleanly. What sold me was the rewards store \u2014 we stocked it with screen time and weekend trips, so there are no empty promises, just clear ones.",
    name: "Priya K.",
  },
];

function ArrowButton({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
      onClick={onClick}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FBFBFB] shadow-[-7px_8px_26px_#EBEBEB] cursor-pointer z-1"
    >
      <Image
        src="/assets/icons/icon-forward.svg"
        alt=""
        width={15}
        height={21}
        className={`h-[21px] w-[15px] ${direction === "prev" ? "-scale-x-100" : ""}`}
      />
    </button>
  );
}

export default function Testimonial() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto grid max-w-[1820px] grid-cols-1 items-start gap-8 px-5 py-10 lg:gap-5 lg:px-10 lg:py-35 xl:grid-cols-2">
        {/* Left — heading + copy + single store CTA */}
        <div className="w-full lg:px-20 lg:py-[69px]">
          <h2 className="text-[28px] font-bold leading-[35px] tracking-[-0.5px] text-[#232323] lg:text-[60px] lg:leading-19 lg:tracking-[-1.66px]">
            Make everyday routines work better for your family
          </h2>
          <p className="mt-[14px] xl:max-w-[625px] text-[16px] font-normal leading-[24px] text-[#878787] lg:mt-[26px] lg:text-[18px]">
            Set chores, create rewards and help your kids build habits they can carry with them as they grow.
          </p>
          <div className="mt-6 lg:mt-10 hidden lg:block">
            <StoreButton platform="iphone" />
          </div>
        </div>

        {/* Right — quote-card swiper */}
        <div className="w-full lg:max-w-[742px] m-auto xl:mr-auto">
          <div className="lg:flex lg:items-center lg:gap-7">
            <div className="min-w-0 lg:flex-1">
              <Swiper
                className="testimonial-swiper !ml-0 lg:max-w-[663px]"
                onSwiper={setSwiper}
                loop
                grabCursor
                slidesPerView={1}
                spaceBetween={24}
              >
            {quotes.map((q) => (
              <SwiperSlide key={q.name}>
                <div className="flex min-h-[370px] flex-col justify-start lg:justify-center rounded-[30px] bg-[#FBFBFB] p-6 lg:min-h-[467px] lg:p-10">
                  <div className="flex items-center gap-[3.79px] lg:gap-[5.48px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Image
                        key={i}
                        src="/assets/icons/star.svg"
                        alt=""
                        width={32}
                        height={31}
                        className="h-[26px] w-[26px] object-contain lg:h-[37px] lg:w-[37px]"
                      />
                    ))}
                  </div>

                  <h3 className="mt-6 bg-[linear-gradient(180deg,#0088FA_0%,#00CCFA_100%)] bg-clip-text text-[26px] font-semibold leading-[33px] text-transparent">
                    {q.title}
                  </h3>
                  <p className="mt-6 text-[16px] font-medium leading-[24px] text-[#878787] lg:text-[18px]">
                    {q.quote}
                  </p>
                  <p className="mt-6 text-[16px] font-semibold leading-[24px] text-[#3C3C3C] lg:font-bold">
                    {q.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
              </Swiper>

              {/* Arrows below the card (mobile) */}
              <div className="mt-7 flex justify-center gap-[10px] lg:hidden">
                <ArrowButton direction="prev" onClick={() => swiper?.slidePrev()} />
                <ArrowButton direction="next" onClick={() => swiper?.slideNext()} />
              </div>
            </div>

            {/* Next button outside-right of the card (desktop only; prev hidden) */}
            <div className="hidden shrink-0 lg:block">
              <ArrowButton direction="next" onClick={() => swiper?.slideNext()} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
