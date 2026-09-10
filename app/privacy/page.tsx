import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Tidey collects, uses, and protects your family’s information — including our commitment to children’s privacy.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 3, 2026">
      <p className="legal-lead">
        Tidey (“us”, “we”, or “our”) operates the Tidey mobile application (the
        “Service”). This Privacy Policy informs you of our policies regarding
        the collection, use, and disclosure of Personal Information when you
        use the Service and the choices you have regarding that data.
      </p>
      <p>
        We use your data to provide and improve the Service. By using the
        Service, you agree to the collection and use of information in
        accordance with this policy. Capitalized terms not defined here have
        the meaning given in our <a href="/terms">Terms of Service</a>.
      </p>

      <h2>
        <span className="num">1.</span> Information We Collect
      </h2>
      <p>
        We collect several different types of information for various purposes
        to provide and improve our Service to you.
      </p>

      <h3>a. Personal Data</h3>
      <p>
        While using our Service, we may ask you to provide certain personally
        identifiable information that can be used to contact or identify you
        (“Personal Data”). This may include, but is not limited to:
      </p>
      <ul>
        <li>Email address</li>
        <li>First and last name</li>
        <li>Cookies and Usage Data</li>
      </ul>

      <h3>b. Usage Data</h3>
      <p>
        When you access the Service via mobile device, we may collect
        information automatically such as your device type, unique ID, IP
        address, operating system, browser type, unique identifiers, and other
        diagnostic data.
      </p>

      <h3>c. Child Profile Information</h3>
      <p>
        Where a parent or guardian creates a profile on behalf of a child, the
        following information may be collected:
      </p>
      <ul>
        <li>Nickname</li>
        <li>Age</li>
        <li>Avatar</li>
      </ul>
      <p>
        We do <strong>not</strong> knowingly collect a child’s full name,
        contact information, or precise location.
      </p>

      <h3>d. User-Generated Content</h3>
      <p>We collect content that you create or upload, such as:</p>
      <ul>
        <li>Chore lists and rewards</li>
        <li>Completion records</li>
        <li>Metadata associated with your content</li>
      </ul>

      <h3>Device Permissions</h3>
      <p>
        To provide specific features, we may request access to your device’s:
      </p>
      <ul>
        <li>Photo Library</li>
        <li>Notifications</li>
      </ul>
      <p>
        You may enable or disable permissions at any time in your device
        settings.
      </p>

      <h2>
        <span className="num">2.</span> Use of Data
      </h2>
      <p>Tidey uses collected data for purposes such as:</p>
      <ul>
        <li>To provide and maintain the Service</li>
        <li>To notify you of changes</li>
        <li>To enable interactive features</li>
        <li>To provide customer support</li>
        <li>To analyze and improve the Service</li>
        <li>To monitor usage</li>
        <li>To detect and prevent technical issues</li>
      </ul>

      <h2>
        <span className="num">3.</span> Parental Consent and Control
      </h2>
      <p>
        Where a child profile is created, the parent or guardian is the account
        holder and consents to the collection of the information described in
        Section 1(c) on the child’s behalf. Parents may view, edit, or delete
        any child profile at any time.
      </p>

      <h2>
        <span className="num">4.</span> Data Retention &amp; Deletion
      </h2>
      <p>
        We retain your Personal Data only as long as necessary to fulfill the
        purposes outlined in this policy.
      </p>
      <h3>Deletion (Right to be Forgotten)</h3>
      <p>You may request deletion of your account at any time via:</p>
      <ul>
        <li>The “Delete Account” option within the app settings</li>
        <li>
          Emailing{" "}
          <a href="mailto:hello@gettidey.com">hello@gettidey.com</a> with the
          subject “Account Deletion Request”
        </li>
      </ul>
      <p>
        We will delete your data within 30 days unless retention is required by
        law.
      </p>

      <h2>
        <span className="num">5.</span> Transfer of Data
      </h2>
      <p>
        Your information may be transferred to computers outside your region
        where data protection laws may differ. By providing your data, you
        agree to this transfer.
      </p>

      <h2>
        <span className="num">6.</span> Security of Data
      </h2>
      <p>
        While we strive to protect your data, no method of transmission or
        storage is 100% secure. We use commercially acceptable means to
        safeguard your Personal Data but cannot guarantee absolute security.
      </p>

      <h2>
        <span className="num">7.</span> Service Providers
      </h2>
      <p>
        We may employ third-party companies to assist in providing or analyzing
        our Service (e.g., hosting, analytics). These providers may access your
        Personal Data only to perform tasks on our behalf.
      </p>

      <h2>
        <span className="num">8.</span> Children’s Privacy
      </h2>
      <p>
        Our Service allows children to use certain features through a profile
        created by a parent or guardian. We comply with the Children’s Online
        Privacy Protection Act (COPPA) and do not knowingly collect personal
        information directly from a child outside of a parent-managed account.
        If we become aware that a child has provided personal information to us
        outside of this structure, we will promptly delete it.
      </p>
      <p>
        Parents may contact us at{" "}
        <a href="mailto:hello@gettidey.com">hello@gettidey.com</a> to review,
        modify, or request deletion of their child’s information.
      </p>

      <h2>
        <span className="num">9.</span> Changes to This Privacy Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of changes by posting the updated policy and updating the “Last
        Updated” date at the top.
      </p>

      <h2>
        <span className="num">10.</span> Contact Us
      </h2>
      <div className="legal-contact">
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
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
