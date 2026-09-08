import Image from "next/image";

// Section 4 — three age-role cards ("Built for every age").
// People: /assets/illustrations/junior-explorer.png (sky)
//         /assets/illustrations/pro-entrepreneur.png (sun / Pilot)
//         /assets/illustrations/teen-strategist.png (forest / Teen Strategist)
type Role = {
  title: string;
  tag: string;
  desc: string;
  img: string;
  imgW: number;
  imgH: number;
  alt: string;
  bg: string;
  imgLeft: string; // override positioning of the person cut-out
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
    imgLeft: "lg:left-[56%] lg:top-[-40px]",
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
    imgLeft: "lg:left-[42%] lg:top-[-30px]",
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
    imgLeft: "lg:left-[60%] lg:top-[-40px]",
  },
];

export default function RoleCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1740px] px-4 py-10 lg:px-10 lg:py-[100px]">
        <h2 className="text-center text-[30px] font-bold leading-[38px] text-[#232323] lg:text-[70px] lg:leading-[88px] lg:tracking-[-1.66px]">
          Built for every age
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-[26px]">
          {roles.map((r) => (
            <article
              key={r.title}
              className={`relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[30px] p-8 shadow-[inset_0px_0px_20px_#FFFFFF] lg:h-[380px] ${r.bg}`}
            >
              {/* text block sits above a soft base, person cut-out overlaps top */}
              <div className="relative z-0 max-w-[300px]">
                <span className="block text-[40px] font-bold leading-[50px] text-white lg:text-[40px] lg:leading-[50px]">
                  {r.title}
                </span>
                <span className="mt-4 block w-fit max-w-full rounded-[37px] bg-white px-[18px] py-1 text-[14px] font-bold uppercase leading-[18px] tracking-[0.05px] text-[#B8B8B8]">
                  {r.tag}
                </span>
                <p className="mt-4 text-[14px] font-semibold leading-[24px] text-white lg:text-[18px]">
                  {r.desc}
                </p>
              </div>

              <Image
                src={r.img}
                alt={r.alt}
                width={r.imgW}
                height={r.imgH}
                className={`pointer-events-none absolute right-0 bottom-0 z-10 h-[88%] w-auto object-contain ${r.imgLeft}`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
