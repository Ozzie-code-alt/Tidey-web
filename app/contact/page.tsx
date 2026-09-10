import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Tidey",
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

      <section className="mx-auto grid max-w-[1120px] gap-12 px-6 py-16 md:grid-cols-[1fr_1.2fr] md:py-20">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-ink">
            Other ways to reach us
          </h2>
          <dl className="mt-6 flex flex-col gap-5">
            <div>
              <dt className="text-sm font-extrabold uppercase tracking-[0.04em] text-[var(--blue-600)]">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:hello@tidey.app"
                  className="font-bold text-ink hover:text-[var(--blue-600)]"
                >
                  hello@tidey.app
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-extrabold uppercase tracking-[0.04em] text-[var(--blue-600)]">
                Response time
              </dt>
              <dd className="mt-1 font-semibold text-ink-soft">
                Usually within two working days.
              </dd>
            </div>
          </dl>

          <div className="mt-8 rounded-card border border-[var(--gold-200)] bg-[var(--surface-cream)] p-6">
            <p className="font-semibold leading-relaxed text-[var(--ink-700)]">
              Looking for early access? Join the waitlist on the{" "}
              <a href="/" className="font-extrabold text-[var(--gold-600)] underline underline-offset-2">
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
    </>
  );
}