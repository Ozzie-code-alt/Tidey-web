import Image from "next/image";

type Card = {
  heading: string;
  body?: string;
  bodyMobile?: string;
  img: string;
  imgMobile: string;
  imgW: number;
  imgH: number;
  imgMW: number;
  imgMH: number;
  alt: string;
  bg: string;
  size: "xl" | "lg" | "sm";
};

const money: Card = {
  heading: "Money lessons that grow with them",
  body: "Give kids hands-on experience earning rewards, setting goals and learning how to manage what they earn.",
  bodyMobile: "text-[16px] leading-[160%]",
  img: "/assets/screens/get-rewards.png",
  imgMobile: "/assets/screens/get-rewards-mobile.png",
  imgW: 477,
  imgH: 460,
  imgMW: 390,
  imgMH: 302,
  alt: "Rewards and earning screen",
  bg: "bg-[linear-gradient(180deg,#EBFCD8_0%,#F9FEF3_100%)]",
  size: "xl",
};

const savings: Card = {
  heading: "Grow real savings habits",
  body: "Teach them the power of time deposits and interest using interactive, kid-friendly vaults.",
  bodyMobile: "text-[16px] leading-[160%]",
  img: "/assets/screens/investment.png",
  imgMobile: "/assets/screens/investment-mobile.png",
  imgW: 521,
  imgH: 416,
  imgMW: 390,
  imgMH: 239,
  alt: "Savings vaults screen",
  bg: "bg-[linear-gradient(180deg,#D5F1F8_0%,#F2FBFD_100%)]",
  size: "lg",
};

const family: Card = {
  heading: "More fun. \n More family wins.",
  img: "/assets/screens/create-chore.png",
  imgMobile: "/assets/screens/create-chore-mobile.png",
  imgW: 527,
  imgH: 446,
  imgMW: 390,
  imgMH: 275,
  alt: "Create a chore screen",
  bg: "bg-[linear-gradient(180deg,#FBEDF2_0%,#FEFAFB_100%)]",
  size: "lg",
};

const rewards: Card = {
  heading: "Rewards for \n everyday tasks",
  body: "Set simple tasks, choose the rewards and make everyday responsibilities feel more motivating.",
  bodyMobile: "text-[14px] leading-[160%]",
  img: "/assets/screens/feed-the-pet.png",
  imgMobile: "/assets/screens/feed-the-pet-mobile.png",
  imgW: 635,
  imgH: 802,
  imgMW: 390,
  imgMH: 370,
  alt: "Task rewards screen",
  bg: "bg-[linear-gradient(180deg,#FBF7D9_0%,#FEFDF4_100%)]",
  size: "xl",
};

function headingCls(size: Card["size"]) {
  switch (size) {
    case "xl":
      return "text-[32px] leading-[40px] lg:text-[clamp(28px,2.74vw,52px)] lg:leading-[127%]";
    case "lg":
      return "text-[32px] leading-[40px] lg:text-[clamp(22px,2.11vw,40px)] lg:leading-[125%] lg:tracking-[-1.66px]";
    default:
      return "text-[32px] leading-[40px]";
  }
}

function CardBody({ card }: { card: Card }) {
  return (
    <div className="relative z-0 py-6 px-6 lg:pt-[clamp(25px,2.42vw,46px)] lg:px-[clamp(25px,2.42vw,46px)] lg:pb-[clamp(16px,1.58vw,30px)]">
      <h3
        className={`text-[#232323] ${headingCls(card.size)} whitespace-pre-line font-bold tracking-[-0.5px] lg:tracking-[-1.66px]`}
      >
        {card.heading}
      </h3>
      {card.body && (
        <p
          className={`mt-3 max-w-125 font-normal text-[#878787] lg:mt-6 ${card.bodyMobile ?? "text-[16px] leading-[160%]"} lg:text-[clamp(14px,calc(0.86vw+3.71px),20px)] lg:leading-[160%]`}
        >
          {card.body}
        </p>
      )}
    </div>
  );
}

function CardImage({ card }: { card: Card }) {
  return (
    <div className="flex flex-1 items-end justify-center lg:items-center xl:justify-end">
      {/* native <picture> swap: mobile shows the mobile crop full-bleed,
          desktop the desktop shot — chosen by the browser before paint. */}
      <picture className="block w-full lg:w-auto lg:mt-auto">
        <source media="(min-width: 1024px)" srcSet={card.img} />
        <Image
          src={card.imgMobile}
          alt={card.alt}
          width={card.imgMW}
          height={card.imgMH}
          className="h-auto w-full max-w-[clamp(237px,23.16vw,440px)] object-contain"
        />
      </picture>
    </div>
  );
}

export default function FeatureCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1820px] grid-cols-1 gap-6 px-5 pt-12 xl:grid-cols-8 lg:gap-[clamp(14px,1.37vw,26px)] lg:px-10 lg:py-[clamp(54px,5.26vw,100px)]">
        {/* ---- Left column: money (wide) over savings + family fun ---- */}
        <div className="flex flex-col gap-6 lg:col-span-5 lg:gap-[clamp(14px,1.37vw,26px)]">
          <article
            className={`relative flex flex-col overflow-hidden rounded-[26px] shadow-[inset_0px_0px_20px_#FFFFFF] lg:rounded-[40px] lg:flex-row lg:items-stretch min-h-115 lg:min-h-[clamp(247px,24.21vw,460px)] ${money.bg}`}
          >
            <div className="lg:w-[56%] flex items-center">
              <CardBody card={money} />
            </div>
            <CardImage card={money} />
          </article>

          <div className="flex flex-col gap-6 lg:flex-1 lg:flex-row lg:gap-[clamp(14px,1.37vw,26px)]">
            <article
              className={`relative flex flex-1 flex-col justify-center overflow-hidden rounded-[26px] p-0 shadow-[inset_0px_0px_20px_#FFFFFF] lg:rounded-[40px] ${savings.bg}`}
            >
              <CardBody card={savings} />
              <CardImage card={savings} />
            </article>
            <article
              className={`relative flex flex-1 flex-col justify-center overflow-hidden rounded-[26px] p-0 shadow-[inset_0px_0px_20px_#FFFFFF] lg:rounded-[40px] ${family.bg}`}
            >
              <CardBody card={family} />
              <CardImage card={family} />
            </article>
          </div>
        </div>

        {/* ---- Right tall column: rewards for everyday tasks ---- */}
        <article
          className={`relative flex flex-col justify-center overflow-hidden rounded-[26px] shadow-[inset_0px_0px_20px_#FFFFFF] lg:col-span-3 lg:rounded-[40px] ${rewards.bg}`}
        >
          <CardBody card={rewards} />
          <CardImage card={rewards} />
        </article>
      </div>
    </section>
  );
}
