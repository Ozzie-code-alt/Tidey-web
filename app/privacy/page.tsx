import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Tidey",
  description:
    "How Tidey collects, uses, and protects your family’s information — including our commitment to children’s privacy.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 1, 2026">
      <p className="legal-lead">
        This Privacy Policy explains how Tidey (“us”, “we”, or “our”) collects,
        uses, and protects your information when you use the Tidey mobile
        application (the “Service”). We built Tidey for families, and protecting
        your family’s privacy — especially your children’s — is at the heart of
        everything we do.
      </p>
      <p>
        By using the Service, you agree to the collection and use of information
        in accordance with this Policy. Capitalized terms not defined here have
        the meaning given in our{" "}
        <a href="/terms">Terms of Service</a>.
      </p>

      <h2>
        <span className="num">1.</span> Information We Collect
      </h2>
      <ul>
        <li>
          <strong>Account information:</strong> When the account holder (a parent
          or guardian) creates an account, we collect information such as name,
          email address, and a password or PIN.
        </li>
        <li>
          <strong>Child profile information:</strong> The account holder may
          create profiles for their children within their account. These
          profiles may include a child’s first name or nickname, age, avatar,
          and the chores, coins, streaks, and rewards associated with them.
          Children do not create their own accounts.
        </li>
        <li>
          <strong>Content you provide:</strong> Chores, rewards, messages,
          images, and other content you add to the Service.
        </li>
        <li>
          <strong>Usage information:</strong> Basic information about how the
          Service is used — such as device type, app version, and in-app
          activity — to keep the app working and improve it.
        </li>
      </ul>

      <h2>
        <span className="num">2.</span> How We Use Your Information
      </h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve the Service;</li>
        <li>Set up and manage accounts and child profiles;</li>
        <li>
          Track chores, coins, streaks, and rewards configured by the account
          holder;
        </li>
        <li>Keep the Service safe and prevent abuse;</li>
        <li>Respond to your questions and support requests;</li>
        <li>Comply with our legal obligations.</li>
      </ul>

      <h2>
        <span className="num">3.</span> Children’s Privacy
      </h2>
      <p>
        Tidey is designed to be used by families. Children do not create
        independent accounts — a child can only use the Service through a profile
        created and managed by their parent or guardian within the account
        holder’s account. The account holder is responsible for the information
        added to a child’s profile and for supervising their child’s use of the
        Service.
      </p>
      <p>
        We do not knowingly collect personal information directly from children
        without verifiable parental consent, which the parent or guardian
        provides when they create the child’s profile. If you believe a child
        has provided us with personal information without proper consent, please
        contact us and we will delete it.
      </p>

      <h2>
        <span className="num">4.</span> How We Share Information
      </h2>
      <p>
        We do <strong>not</strong> sell your personal information. We only share
        information:
      </p>
      <ul>
        <li>
          With service providers who help us operate the Service (for example,
          hosting and infrastructure), under obligations of confidentiality;
        </li>
        <li>
          When required by law, or to protect the rights, safety, and security
          of our users or the public;
        </li>
        <li>
          In connection with a business transfer such as a merger or
          acquisition, subject to this Privacy Policy.
        </li>
      </ul>

      <h2>
        <span className="num">5.</span> Rewards
      </h2>
      <p>
        Rewards configured within the Service are set up and managed entirely by
        the account holder. We are not a party to, and do not guarantee or
        enforce, any reward or agreement between users.
      </p>

      <h2>
        <span className="num">6.</span> Data Retention
      </h2>
      <p>
        We keep your information for as long as your account is active or as
        needed to provide the Service. You may delete a child’s profile or your
        account at any time, after which we will delete or de-identify the
        associated information, except where we are required to retain it by law.
      </p>

      <h2>
        <span className="num">7.</span> Security
      </h2>
      <p>
        We use reasonable technical and organizational measures to protect your
        information. However, no method of transmission over the internet or
        method of storage is completely secure, and we cannot guarantee absolute
        security. You are responsible for keeping your password or PIN
        confidential.
      </p>

      <h2>
        <span className="num">8.</span> Your Rights and Choices
      </h2>
      <p>
        Depending on where you live, you may have the right to access, correct,
        or delete your personal information, or to object to or restrict certain
        processing. As the account holder, you can review and update account and
        child-profile information within the app, or contact us to exercise these
        rights.
      </p>

      <h2>
        <span className="num">9.</span> Changes to This Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the “Last updated” date above. Continued use of the Service after
        changes take effect means you accept the revised Policy.
      </p>

      <h2>
        <span className="num">10.</span> Governing Law
      </h2>
      <p>
        This Privacy Policy is governed by the laws of Pennsylvania, United
        States.
      </p>

      <h2>
        <span className="num">11.</span> Contact Us
      </h2>
      <div className="legal-contact">
        <p>
          If you have any questions about this Privacy Policy or how we handle
          your information, please contact us:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:hello@gettidey.com">hello@gettidey.com</a>
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a href="https://gettidey.com">gettidey.com</a>
        </p>
      </div>
    </LegalLayout>
  );
}
