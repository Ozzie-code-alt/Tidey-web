import type { Metadata } from "next";
import Image from "next/image";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "How to delete your Tidey account and remove your family's data from the app — in-app or by email.",
};

// Drop real screenshots in public/assets/account-deletion/ as
// step-1.png … step-7.png (phone screenshots, 9:16) and list the paths
// here in step order. `null` keeps the labelled placeholder.
const STEP_IMAGES: (string | null)[] = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
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
    title: "Tap your avatar or open your profile",
    body: "Your avatar sits at the very top of the settings page — tap it to open your profile.",
  },
  {
    title: "Tap “Delete account” at the bottom of the page",
    body: "Scroll to the bottom of the account page and tap “Delete account”. Nothing is removed yet — the process only completes after you confirm below.",
  },
  {
    title: "Review the summary",
    body: "We show exactly what will be deleted: Tidey Coins, streaks, your pet, savings vaults, chores, and reward history. This step can still be cancelled.",
  },
  {
    title: "Confirm by email",
    body: "We send a verification link to your registered email address. Tap it within 24 hours — if the link expires, nothing is deleted and your account stays as it was.",
  },
  {
    title: "Tap “Delete permanently”",
    body: "After the final confirmation, your profile and your family's data are queued for deletion within 30 days and you're signed out immediately.",
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
      updated="September 14, 2026"
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
          restored, and Tidey Coins, streaks, pets, and vaults can&apos;t be
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
