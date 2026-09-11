import Image from "next/image";

type Role = {
  title: string;
  tag: string;
  desc: string;
  img: string;
  imgW: number;
  imgH: number;
  alt: string;
  bg: string;
  imgCls: string;
};

const roles: Role[] = [
  {
    title: "Junior Explorer",
    tag: "Best for 4-7 years old",
    desc: "Sparkle stars, instant rewards, and early counting to spark a love for saving.",
    img: "/assets/illustrations/junior-explorer.png",
    imgW: 270,
    imgH: 337,
    alt: "Junior Explorer",
    bg: "bg-[linear-gradient(180deg,#54A8FF_0%,#97CAFF_100%)]",
    imgCls: "h-[197px] lg:h-[clamp(181px,17.74vw,337px)]",
  },
  {
    title: "Pilot",
    tag: "Best for 8-12 years old",
    desc: "Independent kids ready for real-world money lessons.",
    img: "/assets/illustrations/pro-entrepreneur.png",
    imgW: 301,
    imgH: 330,
    alt: "Pilot",
    bg: "bg-[linear-gradient(180deg,#EFB110_0%,#FFCB44_100%)]",
    imgCls: "h-[208px] lg:h-[clamp(178px,17.37vw,330px)]",
  },
  {
    title: "Teen Strategist",
    tag: "Best for 13-18 years old",
    desc: "Advanced savings vaults, interest-earning time deposits, and real money management skills.",
    img: "/assets/illustrations/teen-strategist.png",
    imgW: 243,
    imgH: 342,
    alt: "Teen Strategist",
    bg: "bg-[linear-gradient(180deg,#98CA7D_0%,#A9D791_100%)]",
    imgCls: "h-[194px] lg:h-[clamp(184px,18vw,342px)]",
  },
];

export default function RoleCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1820px] px-5 py-10 lg:px-10 lg:py-[clamp(54px,5.26vw,100px)]">
        <h2 className="text-center text-[30px] font-bold leading-[38px] tracking-[-1.66px] text-[#232323] lg:text-[clamp(38px,3.68vw,70px)] lg:leading-[126%]">
          Built for every age
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-[clamp(43px,4.21vw,80px)] lg:grid-cols-3 lg:gap-[clamp(14px,1.37vw,26px)]">
          {roles.map((r) => (
            <article
              key={r.title}
              className={`grid grid-cols-[1fr_auto] items-stretch gap-0 min-h-[213px] rounded-[30px] py-6 pl-6 shadow-[inset_0px_0px_20px_#FFFFFF] lg:py-8 lg:pl-[clamp(calc(var(--spacing)*6),1.68vw,calc(var(--spacing)*8))] ${r.bg}`}
            >
              {/* text takes the remaining column width */}
              <div className="flex flex-col self-center -mr-13 lg:-mr-7">
                <span className="text-[32px] font-bold leading-[40px] text-white lg:text-[clamp(22px,2.11vw,40px)] lg:leading-[125%]">
                  {r.title}
                </span>
                <span className="mt-3 md:mt-4 lg:mt-[clamp(calc(var(--spacing)*2),1.33vw,calc(var(--spacing)*4))] inline-block w-fit rounded-[37px] bg-white px-4 md:px-4.5 py-1 md:py-1.25 text-[12px] font-bold uppercase leading-3.75 tracking-[0.05px] text-[#B8B8B8] lg:px-[clamp(10px,0.95vw,18px)]">
                  {r.tag}
                </span>
                <p className="mt-4 md:mt-6 lg:mt-[clamp(calc(var(--spacing)*2),1.26vw,calc(var(--spacing)*6))] text-[14px] font-semibold leading-[24px] text-white lg:text-[clamp(14px,calc(0.57vw+7.14px),18px)] lg:leading-[130%] max-w-5/6">
                  {r.desc}
                </p>
              </div>

              {/* image keeps its own size and bleeds flush into the corner */}
              <Image
                src={r.img}
                alt={r.alt}
                width={r.imgW}
                height={r.imgH}
                className={`pointer-events-none -mt-16 -mb-6 w-auto self-end object-contain object-bottom-right lg:-mt-24 lg:-mb-8 ${r.imgCls}`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
