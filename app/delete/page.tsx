import type { Metadata } from "next";
import Image from "next/image";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "How to delete your Tidey account and remove your family's data from the app — in-app or by email.",
};

// Screenshots in public/assets/delete-profile/, listed in step order.
// `null` keeps the labelled placeholder.
const STEP_IMAGES: (string | null)[] = [
  "/assets/delete-profile/onboarding-screen.png",
  "/assets/delete-profile/dashboard.png",
  "/assets/delete-profile/settings.png",
  "/assets/delete-profile/delete-account.png",
  "/assets/delete-profile/delete-account-pin.png",
  "/assets/delete-profile/delete-account-pin-submit.png",
];

const steps = [
  {
    title: "Open Tidey and sign in",
    body: "Use the parent or guardian account — the one created when you set up the family. Deleting it removes linked child profiles as well.",
  },
  {
    title: "Tap the settings gear icon at the bottom",
    body: "The settings gear sits at the bottom of the Tidey home screen. Tap it to open your settings.",
  },
  {
    title: "Tap “Delete Account” at the bottom of the screen",
    body: "The Delete Account button sits at the very bottom of the settings screen. Nothing is removed yet — a confirmation appears first.",
  },
  {
    title: "Read the “Delete account?” confirmation, then tap “Continue”",
    body: "The modal spells out exactly what goes: your entire household — every profile, chore, reward, coin balance, and history. It can't be undone. An active subscription must be cancelled separately in your device's subscription settings. Tap Continue when you're sure.",
  },
  {
    title: "Enter your parent PIN",
    body: "To make sure the deletion is intentional, Tidey asks you to verify with your parent PIN before anything is removed.",
  },
  {
    title: "Your account is deleted",
    body: "Once the correct parent PIN is entered, Tidey handles the rest. You're signed out immediately, and your profile and your family's data are permanently removed within 30 days.",
  },
];

function Step({
  step,
  image,
  index,
}: {
  step: (typeof steps)[number];
  image: string | null;
  index: number;
}) {
  return (
    <li className="legal-step">
      <div>
        <div className="legal-step-head">
          <span className="legal-step-num">{index + 1}</span>
          <span className="legal-step-title">{step.title}</span>
        </div>
        <p>{step.body}</p>
      </div>
      <div className="legal-step-shot">
        {image ? (
          <Image src={image} alt={`${step.title} — Tidey app screen`} fill sizes="210px" />
        ) : (
          <span>Screenshot coming soon</span>
        )}
      </div>
    </li>
  );
}

export default function DeleteAccountPage() {
  return (
    <LegalLayout
      title="Delete Your Account"
      updated="October 28, 2026"
      eyebrow="Account"
    >
      <p className="legal-lead">
        You can delete your Tidey account at any time, for any reason. You can
        do it yourself in the app in under a minute, or ask us by email and
        we&apos;ll take care of it for you.
      </p>

      <h2>
        <span className="num">1.</span> Delete in the app
      </h2>
      <p>
        Follow these steps on the phone where Tidey is installed. Screenshots
        of each step are being added — the button labels below are exact, so
        you can follow along either way.
      </p>
      <ol className="legal-steps">
        {steps.map((step, i) => (
          <Step key={step.title} step={step} image={STEP_IMAGES[i]} index={i} />
        ))}
      </ol>

      <h2>
        <span className="num">2.</span> Delete by email
      </h2>
      <p>
        If you can&apos;t access the app — a lost device, a forgotten password,
        or an issue with your family account — email us and we&apos;ll verify
        your identity and delete the account for you:
      </p>
      <ul>
        <li>
          Send your request to{" "}
          <a href="mailto:hello@tidey.app">hello@tidey.app</a> from the email
          address registered with Tidey
        </li>
        <li>Use the subject line “Account Deletion Request”</li>
        <li>
          Include the family name and the names or nicknames of any child
          profiles, so we can locate the right account
        </li>
        <li>
          We&apos;ll confirm within two working days and delete the account
          after verifying the request came from the account owner
        </li>
      </ul>

      <h2>
        <span className="num">3.</span> What happens after deletion
      </h2>
      <ul>
        <li>
          Deletion is permanent. Once confirmed, your account can&apos;t be
          restored, and Tidey Coins, streaks, and vaults can&apos;t be
          recovered.
        </li>
        <li>
          Child profiles linked to your parent account are deleted along with
          it.
        </li>
        <li>
          Data is fully removed from our systems within 30 days, except
          records we must keep for legal, tax, or fraud-prevention reasons.
        </li>
        <li>
          Deleting your Tidey account does not cancel a paid subscription —
          cancel separately through your Apple App Store or Google Play
          subscription settings so you&apos;re not billed again.
        </li>
      </ul>

      <h2>
        <span className="num">4.</span> Questions first?
      </h2>
      <p>
        If something isn&apos;t working the way you expect, we&apos;d like the
        chance to help before you go — reach us at{" "}
        <a href="mailto:hello@tidey.app">hello@tidey.app</a> or through our{" "}
        <a href="/contact">contact page</a>. Either way, the deletion options
        above always remain available.
      </p>
    </LegalLayout>
  );
}
