"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: "priya",
    quote:
      "My eight-year-old asked if he could do the dishes. I genuinely had to sit down for a moment.",
    name: "Priya S.",
    detail: "Parent of two, Manchester",
    initials: "PS",
    tint: "var(--tint-sky)",
    ink: "var(--on-sky)",
  },
  {
    id: "marcus",
    quote:
      "The coins did what six months of reminder charts couldn't. They can see the reward stacking up.",
    name: "Marcus T.",
    detail: "Parent of three, Leeds",
    initials: "MT",
    tint: "var(--tint-mint)",
    ink: "var(--on-mint)",
  },
  {
    id: "hannah",
    quote:
      "We stopped arguing about whose turn it was. The app just says. That alone was worth it.",
    name: "Hannah W.",
    detail: "Parent of two, Bristol",
    initials: "HW",
    tint: "var(--tint-peach)",
    ink: "var(--on-peach)",
  },
  {
    id: "omar",
    quote:
      "My daughter saved up for three weeks for a cinema trip. She learned more about money than I taught her all year.",
    name: "Omar A.",
    detail: "Parent of one, Glasgow",
    initials: "OA",
    tint: "var(--tint-leaf)",
    ink: "var(--on-leaf)",
  },
];

export default function TestimonialSwiper() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const sync = (s: SwiperClass) => {
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  return (
    <section className="bg-white px-5 py-10 lg:px-10 lg:py-[clamp(54px,5.26vw,100px)]">
      <div className="mx-auto mb-8 flex max-w-[1738px] flex-col items-center gap-6 md:flex-row md:items-end md:justify-between lg:mb-[clamp(32px,3.16vw,60px)]">
        <div className="text-center md:text-left">
          <h2 className="text-[32px] font-bold leading-[40px] tracking-[-0.5px] text-[#232323] lg:text-[clamp(28px,2.74vw,52px)] lg:leading-[127%] lg:tracking-[-1.66px]">
            Parents are talking
          </h2>
          <p className="mt-3 max-w-[40ch] text-[16px] font-normal leading-[160%] text-[#878787] lg:text-[clamp(14px,calc(0.86vw+3.71px),20px)]">
            Early access families, in their own words.
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            disabled={isBeginning}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBFBFB] text-[#232323] shadow-[-7px_8px_26px_#EBEBEB] transition duration-200 hover:-translate-y-0.5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M15 5l-7 7 7 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            disabled={isEnd}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBFBFB] text-[#232323] shadow-[-7px_8px_26px_#EBEBEB] transition duration-200 hover:-translate-y-0.5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="team-swiper mx-auto max-w-[1738px]">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1.1}
          onSwiper={(s) => {
            setSwiper(s);
            sync(s);
          }}
          onSlideChange={sync}
          onResize={sync}
          pagination={{ clickable: true }}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto pb-14">
              <figure className="flex h-full flex-col rounded-[30px] bg-[#FBFBFB] p-6 shadow-[0_18px_36px_#EFEFEF] lg:p-10">
                <span
                  className="text-5xl font-bold leading-none text-[#00BAFA]"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-[16px] font-normal leading-[160%] text-[#232323] lg:text-[clamp(14px,calc(0.86vw+3.71px),20px)]">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[#EEEEEE] pt-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    style={{ background: item.tint, color: item.ink }}
                    aria-hidden
                  >
                    {item.initials}
                  </span>
                  <span>
                    <span className="block font-bold text-[#232323]">{item.name}</span>
                    <span className="block text-sm font-normal text-[#878787]">
                      {item.detail}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}