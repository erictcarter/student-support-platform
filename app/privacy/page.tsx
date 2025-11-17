export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">
            Last Updated: November 2024
          </p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-gray-700 mb-4">
                We understand that privacy is especially important when it comes to mental
                health support. As an international student, you may have additional concerns
                about who has access to your information. This privacy policy explains exactly
                how we protect your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What Information We Collect</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  <strong>Account Information:</strong> Email address, name (optional),
                  and demographic information you choose to provide
                </li>
                <li>
                  <strong>Usage Data:</strong> Which resources you access, time spent on
                  the platform, and features you use
                </li>
                <li>
                  <strong>Survey Responses:</strong> Your feedback through surveys and
                  assessment tools
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages sent through the platform
                  (if applicable)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Protect Your Information</h2>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Industry-Standard Security</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>All data is encrypted in transit using TLS 1.3</li>
                  <li>Data at rest is encrypted using AES-256 encryption</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication for admin access</li>
                  <li>No sharing of individual data with third parties</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                University Access - Your Data Stays Private
              </h2>
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <p className="text-gray-700 mb-3">
                  <strong>Important:</strong> Your university does NOT have access to your
                  individual data or account information.
                </p>
                <p className="text-gray-700 mb-3">
                  We may provide aggregate, anonymized statistics to universities (e.g.,
                  "150 students used the platform this month"), but we will NEVER share:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Your name or identity</li>
                  <li>Which resources you accessed</li>
                  <li>Your survey responses</li>
                  <li>Any personal information</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal data for as long as your account is active, plus:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  <strong>Account Data:</strong> 2 years after account closure, then
                  permanently deleted
                </li>
                <li>
                  <strong>Survey Responses:</strong> Anonymized and aggregated for research
                  purposes; personal identifiers removed after 1 year
                </li>
                <li>
                  <strong>Usage Statistics:</strong> Aggregated data retained indefinitely
                  for research and platform improvement
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of all data we have about you
                </li>
                <li>
                  <strong>Correction:</strong> Request corrections to inaccurate data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your account and all
                  associated data
                </li>
                <li>
                  <strong>Export:</strong> Download your data in a portable format
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Stop certain data processing activities
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:privacy@example.com" className="text-blue-600 hover:underline">
                  privacy@example.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Legal Compliance</h2>
              <p className="text-gray-700 mb-4">
                We comply with applicable data protection laws including:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>FERPA (Family Educational Rights and Privacy Act)</li>
                <li>HIPAA (Health Insurance Portability and Accountability Act)</li>
                <li>GDPR (General Data Protection Regulation) for EU students</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                If you're accessing the platform from outside the United States, your data
                may be transferred to and processed in the U.S. We ensure appropriate
                safeguards are in place through:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Standard contractual clauses approved by regulatory authorities</li>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this privacy policy from time to time. We will notify you of
                any material changes by email or through a prominent notice on the platform.
                Continued use of the platform after changes constitutes acceptance of the
                updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-2">
                If you have questions or concerns about this privacy policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-gray-700">
                  Email:{" "}
                  <a href="mailto:privacy@example.com" className="text-blue-600 hover:underline">
                    privacy@example.com
                  </a>
                </p>
                <p className="text-gray-700 mt-2">
                  Response time: We aim to respond to all privacy inquiries within 48 hours.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
