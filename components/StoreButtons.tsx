import Link from "next/link";
import Image from "next/image";

type StoreButtonProps = {
  href?: string;
  platform: "iphone" | "android";
  label?: string;
  className?: string;
};

export function StoreButton({
  href = "/contact",
  platform,
  label,
  className = "",
}: StoreButtonProps) {
  const isIOS = platform === "iphone";
  return (
    <Link
      href={href}
      className={
        "inline-flex items-center justify-center gap-[14px] md:min-w-79 rounded-[60px] bg-[#0088FA] px-8 py-5 text-white shadow-[inset_0px_0px_20px_#FFFFFF] transition hover:brightness-105 active:scale-[0.97] " +
        className
      }
    >
      <Image
        src={isIOS ? "/assets/icons/apple.svg" : "/assets/icons/android.svg"}
        alt=""
        width={isIOS ? 18 : 20}
        height={22}
        className={isIOS ? "h-[22px] w-[18px]" : "h-[22px] w-[20px]"}
      />
      <span className="text-center text-[18px] font-semibold leading-none lg:text-[20px]">
        {label ?? (isIOS ? "Coming Soon" : "Coming Soon")}
      </span>
    </Link>
  );
}

type StoreButtonsProps = {
  platforms?: ("iphone" | "android")[];
  layout?: "row" | "col";
  className?: string;
};

export default function StoreButtons({
  platforms = ["iphone", "android"],
  layout = "row",
  className = "",
}: StoreButtonsProps) {
  const wrap =
    layout === "col" ? "flex flex-col gap-[14px]" : "flex flex-row flex-wrap gap-[40px]";
  return (
    <div className={`${wrap} ${className}`}>
      {platforms.includes("iphone") && <StoreButton platform="iphone" />}
      {platforms.includes("android") && <StoreButton platform="android" />}
    </div>
  );
}
