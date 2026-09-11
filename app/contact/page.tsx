import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ShortCTA from "@/components/home/ShortCTA";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions, press enquiries, or feedback — get in touch.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Say hello"
        title="Get in touch"
        subtitle="Questions about early access, press enquiries, or just an idea you want to throw at us."
      />

      <section className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 py-10 md:grid-cols-[1fr_1.2fr] md:gap-12 lg:px-10 lg:py-[clamp(54px,5.26vw,100px)]">
        <div>
          <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.5px] text-[#232323] lg:text-[clamp(22px,1.68vw,32px)] lg:leading-[125%]">
            Other ways to reach us
          </h2>
          <dl className="mt-6 flex flex-col gap-5">
            <div>
              <dt className="text-[14px] font-bold uppercase tracking-[0.04em] text-[#00BAFA]">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:hello@tidey.app"
                  className="text-[16px] font-semibold text-[#232323] transition hover:text-[#00BAFA] lg:text-[18px]"
                >
                  hello@tidey.app
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[14px] font-bold uppercase tracking-[0.04em] text-[#00BAFA]">
                Response time
              </dt>
              <dd className="mt-1 text-[16px] font-normal leading-[160%] text-[#878787] lg:text-[18px]">
                Usually within two working days.
              </dd>
            </div>
          </dl>

          <div className="mt-8 rounded-[26px] bg-[linear-gradient(180deg,#D5F1F8_0%,#F2FBFD_100%)] p-6 shadow-[inset_0px_0px_20px_#FFFFFF] lg:rounded-[40px] lg:p-8">
            <p className="text-[16px] font-normal leading-[160%] text-[#878787] lg:text-[18px]">
              Looking for early access? Join the waitlist on the{" "}
              <a href="/" className="font-bold text-[#0088FA] underline underline-offset-2">
                homepage
              </a>{" "}
              instead — it&apos;s faster.
            </p>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </section>

      <ShortCTA />
    </>
  );
}