import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ShortCTA from "@/components/home/ShortCTA";

export const metadata: Metadata = {
  title: "Support",
  description: "Questions about Tidey? Send us a message and we'll get back to you.",
};

export default function SupportPage() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-[1820px] flex-col gap-10 px-5 pb-10 pt-[140px] md:flex-row md:items-center md:gap-12 lg:px-[clamp(40px,5.26vw,100px)] lg:pb-[clamp(54px,5.26vw,100px)] lg:pt-[180px]">
        <div className="w-full md:w-1/2">
          <h1 className="text-[28px] font-bold leading-[36px] tracking-[-0.5px] text-[#232323] lg:text-[clamp(30px,2.53vw,48px)] lg:leading-[115%]">
            How can we help you?
          </h1>
          <p className="mt-4 max-w-[520px] text-[16px] font-normal leading-[160%] text-[#878787] lg:mt-6 lg:text-[clamp(15px,calc(0.57vw+9.14px),18px)]">
            Questions about the app, your account, or anything Tidey — send us a
            message and we&apos;ll get back to you. Or email us at{" "}
            <a
              href="mailto:hello@gettidey.com"
              className="font-semibold text-[#0088FA] underline underline-offset-2 transition hover:text-[#00BAFA]"
            >
              hello@gettidey.com
            </a>
            .
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <div className="rounded-[26px] border border-[#EBEBEB] bg-white p-6 shadow-[-6.48px_39.96px_43.09px_0px_#0038614D] lg:rounded-[40px] lg:p-8">
            <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.5px] text-[#232323] lg:text-[clamp(22px,1.68vw,32px)] lg:leading-[125%]">
              Contact
            </h2>
            <p className="mt-2 text-[16px] font-normal leading-[160%] text-[#878787] lg:text-[18px]">
              Send us a message and we&apos;ll get back to you soon.
            </p>
            <div className="mt-6 lg:mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ShortCTA />
    </>
  );
}
