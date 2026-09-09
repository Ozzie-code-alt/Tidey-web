import Image from "next/image";

// Section 3 — "step / feature" cards (bento, mirrors Figma order 2).
// Asset pairing (by copy order): get-rewards, investment, create-chore, feed-the-pet.
// TODO:: If any screenshot is sitting on the wrong card, swap only its src.

type Card = {
  heading: string;
  body?: string;
  bodyMobile?: string;
  img: string;
  imgW: number;
  imgH: number;
  alt: string;
  bg: string;
  size: "xl" | "lg" | "sm";
};

const money: Card = {
  heading: "Money lessons that grow with them",
  body: "Give kids hands-on experience earning rewards, setting goals and learning how to manage what they earn.",
  bodyMobile: "text-[16px] leading-[160%]",
  img: "/assets/screens/get-rewards.png",
  imgW: 477,
  imgH: 460,
  alt: "Rewards and earning screen",
  bg: "bg-[linear-gradient(180deg,#EBFCD8_0%,#F9FEF3_100%)]",
  size: "xl",
};

const savings: Card = {
  heading: "Grow real savings habits",
  body: "Teach them the power of time deposits and interest using interactive, kid-friendly vaults.",
  bodyMobile: "text-[16px] leading-[160%]",
  img: "/assets/screens/investment.png",
  imgW: 521,
  imgH: 416,
  alt: "Savings vaults screen",
  bg: "bg-[linear-gradient(180deg,#D5F1F8_0%,#F2FBFD_100%)]",
  size: "lg",
};

const family: Card = {
  heading: "More fun. \n More family wins.",
  img: "/assets/screens/create-chore.png",
  imgW: 527,
  imgH: 446,
  alt: "Create a chore screen",
  bg: "bg-[linear-gradient(180deg,#FBEDF2_0%,#FEFAFB_100%)]",
  size: "lg",
};

const rewards: Card = {
  heading: "Rewards for everyday tasks",
  body: "Set simple tasks, choose the rewards and make everyday responsibilities feel more motivating.",
  bodyMobile: "text-[14px] leading-[160%]",
  img: "/assets/screens/feed-the-pet.png",
  imgW: 635,
  imgH: 802,
  alt: "Task rewards screen",
  bg: "bg-[linear-gradient(180deg,#FBF7D9_0%,#FEFDF4_100%)]",
  size: "xl",
};

function headingCls(size: Card["size"]) {
  switch (size) {
    case "xl":
      return "text-[32px] leading-[40px] lg:text-[52px] lg:leading-[66px]";
    case "lg":
      return "text-[32px] leading-[40px] lg:text-[40px] lg:leading-[50px] lg:tracking-[-1.66px]";
    default:
      return "text-[32px] leading-[40px]";
  }
}

function CardBody({ card }: { card: Card }) {
  return (
    <div className="relative z-0 p-6 lg:p-[46px]">
      <h3
        className={`text-[#232323] ${headingCls(card.size)} whitespace-pre-line font-bold tracking-[-0.5px] lg:tracking-[-1.66px]`}
      >
        {card.heading}
      </h3>
      {card.body && (
        <p
          className={`mt-3 max-w-[500px] font-normal text-[#878787] lg:mt-6 ${card.bodyMobile ?? "text-[16px] leading-[160%]"} lg:text-[20px] lg:leading-[160%]`}
        >
          {card.body}
        </p>
      )}
    </div>
  );
}

function CardImage({ card }: { card: Card }) {
  return (
    <div className="flex flex-1 items-end justify-center lg:items-center lg:justify-end">
      <Image
        src={card.img}
        alt={card.alt}
        width={card.imgW}
        height={card.imgH}
        className="h-auto w-full max-w-[320px] object-contain lg:max-w-[440px]"
      />
    </div>
  );
}

export default function FeatureCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1820px] grid-cols-1 gap-6 px-5 py-12 lg:grid-cols-[repeat(8,minmax(0,1fr))] lg:gap-[26px] lg:px-10 lg:py-[100px]">
        {/* ---- Left column: money (wide) over savings + family fun ---- */}
        <div className="flex flex-col gap-6 lg:col-span-5 lg:gap-[26px]">
          <article
            className={`relative flex flex-col overflow-hidden rounded-[26px] shadow-[inset_0px_0px_20px_#FFFFFF] lg:rounded-[40px] lg:flex-row lg:items-stretch min-h-115 ${money.bg}`}
          >
            <div className="lg:w-[56%] flex items-center">
              <CardBody card={money} />
            </div>
            <CardImage card={money} />
          </article>

          <div className="flex flex-col gap-6 lg:flex-1 lg:flex-row lg:gap-[26px]">
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
