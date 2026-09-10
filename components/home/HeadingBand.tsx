import Image from "next/image";

export default function HeadingBand() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-white py-4 lg:py-[140px]">

      <div className="relative z-0 mx-auto px-5 text-center">
        <Image
          src="/assets/illustrations/cleaning-spray.png"
          alt=""
          aria-hidden
          width={115}
          height={113}
          className="absolute z-10 h-auto drop-shadow-[-10px_-8px_6.4px_rgba(0,70,128,0.2)] right-[10px] lg:right-[65px] -top-[27px] lg:-top-[73px] w-[80px] lg:w-[168px]"
        />
        <Image
          src="/assets/illustrations/tidey-coin.png"
          alt=""
          aria-hidden
          width={72}
          height={78}
          className="absolute z-10 h-auto -left-[14px] -bottom-[23px] w-[50px] lg:-left-[47px] lg:-bottom-[44px] lg:w-[100px]"
        />
        <h2 className="bg-[linear-gradient(180deg,#0088FA_0%,#00CCFA_100%)] bg-clip-text text-[30px] font-bold tracking-[-0.63px] text-transparent lg:text-[70px] lg:leading-[100%] lg:tracking-[-1.66px]">
          Household chores,
        </h2>
        <p className="-mt-1.5 lg:mt-[0] bg-[radial-gradient(78.82%_4300.05%_at_9.18%_82.18%,#F77E27_0%,#FBA436_66.98%,#FFCB44_100%)] bg-clip-text text-[30px] font-bold  tracking-[-0.68px] text-transparent lg:text-[80px] leading-[100%] lg:tracking-[-1.81px]">
          made easier for families
        </p>
      </div>
    </section>
  );
}
