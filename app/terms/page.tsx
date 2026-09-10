import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The Terms of Service that govern your access to and use of the Tidey app.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="July 3, 2026">
      <p className="legal-lead">
        Welcome to Tidey! Please read these Terms of Service (“Terms”, “Terms of
        Service”) carefully before using the Tidey mobile application (the
        “Service”) operated by Tidey (“us”, “we”, or “our”).
      </p>
      <p>
        Your access to and use of the Service is conditioned on your acceptance
        of and compliance with these Terms. These Terms apply to all visitors,
        users, and others who access or use the Service.
      </p>
      <p>
        By accessing or using the Service you agree to be bound by these Terms.
        If you disagree with any part of the terms, then you may not access the
        Service.
      </p>

      <h2>
        <span className="num">1.</span> Eligibility and Accounts
      </h2>
      <p>
        The account holder must be at least 18 years of age. By agreeing to
        these Terms, you represent and warrant that:
      </p>
      <ul>
        <li>(a) You are at least 18 years of age;</li>
        <li>
          (b) You have not previously been suspended or removed from the
          Service; and
        </li>
        <li>
          (c) Your registration and your use of the Service is in compliance
          with any and all applicable laws and regulations.
        </li>
      </ul>
      <p>
        Children may use the Service only through a profile created and managed
        by their parent or guardian within the account holder’s account, and do
        not create independent accounts.
      </p>

      <h2>
        <span className="num">2.</span> User Accounts
      </h2>
      <p>
        When you create an account with us, you must provide us with information
        that is accurate, complete, and current at all times. Failure to do so
        constitutes a breach of the Terms, which may result in immediate
        termination of your account on our Service.
      </p>
      <ul>
        <li>
          You are responsible for safeguarding the password or PIN that you use
          to access the Service.
        </li>
        <li>You agree not to disclose your password or PIN to any third party.</li>
        <li>
          You must notify us immediately upon becoming aware of any breach of
          security or unauthorized use of your account.
        </li>
        <li>
          You are responsible for all activity on your account, including
          activity by any child using a profile within your account.
        </li>
      </ul>

      <h2>
        <span className="num">3.</span> User Conduct (Safety &amp; Prohibited
        Use)
      </h2>
      <p>
        We prioritize the safety of our users. You agree strictly{" "}
        <strong>not</strong> to use the Service to:
      </p>
      <ul>
        <li>
          <strong>Harass or bully:</strong> Engage in harassment, bullying,
          stalking, spamming, or threatening of other users.
        </li>
        <li>
          <strong>Upload objectionable content:</strong> Upload or share
          unlawful, harmful, threatening, abusive, defamatory, obscene,
          pornographic, or otherwise objectionable content.
        </li>
        <li>
          <strong>Engage in illegal activities:</strong> Use the Service for any
          illegal purpose.
        </li>
        <li>
          <strong>Impersonate:</strong> Impersonate any person or entity.
        </li>
        <li>
          <strong>Harm minors</strong> in any way.
        </li>
        <li>
          <strong>Distribute malware:</strong> Upload or transmit viruses or
          malicious code.
        </li>
      </ul>
      <div className="legal-callout">
        <p>
          <strong>Zero-tolerance policy:</strong> We reserve the right to
          immediately suspend or terminate your account without notice if you
          violate these rules.
        </p>
      </div>

      <h2>
        <span className="num">4.</span> User-Generated Content
      </h2>
      <p>
        You are responsible for the Content that you upload or transmit through
        the Service, including its legality, reliability, and appropriateness.
      </p>
      <p>
        By uploading Content, you grant us the right and license to use, store,
        and display such Content solely as necessary to provide the Service to
        you. You retain all rights to your Content.
      </p>

      <h2>
        <span className="num">5.</span> Content Moderation
      </h2>
      <p>
        We may monitor usage of the Service to ensure safety and reserve the
        right to remove or block Content that violates these Terms.
      </p>

      <h2>
        <span className="num">6.</span> Rewards
      </h2>
      <p>
        Rewards configured within the Service are determined entirely by the
        account holder. We are not a party to, and do not guarantee or enforce,
        any reward or agreement between users.
      </p>

      <h2>
        <span className="num">7.</span> Intellectual Property
      </h2>
      <p>
        The Service and its original content (excluding Content provided by
        users) remain the exclusive property of Tidey and its licensors.
      </p>

      <h2>
        <span className="num">8.</span> Termination
      </h2>
      <p>
        We may terminate or suspend your account immediately, without prior
        notice or liability, for any reason including breach of the Terms.
      </p>

      <h2>
        <span className="num">9.</span> Limitation of Liability
      </h2>
      <p>
        In no event shall Tidey or its affiliates be liable for any indirect,
        incidental, special, consequential, or punitive damages including loss
        of data or profits.
      </p>

      <h2>
        <span className="num">10.</span> Disclaimer
      </h2>
      <p>
        The Service is provided on an “AS IS” and “AS AVAILABLE” basis without
        warranties of any kind.
      </p>

      <h2>
        <span className="num">11.</span> Governing Law
      </h2>
      <p>
        These Terms are governed by the laws of Pennsylvania, United States.
      </p>

      <h2>
        <span className="num">12.</span> Changes
      </h2>
      <p>
        We may modify or replace these Terms at any time. Continued use of the
        Service implies acceptance of the revised terms.
      </p>

      <h2>
        <span className="num">13.</span> Contact Us
      </h2>
      <div className="legal-contact">
        <p>
          If you have any questions about these Terms, please contact us:
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
