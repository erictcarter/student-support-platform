import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="text-6xl mb-6">✓</div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Your survey response has been submitted successfully. Your feedback is
            invaluable in helping us create a platform that truly serves the needs
            of international students.
          </p>
          <p className="text-gray-600 mb-8">
            We deeply appreciate you taking the time to share your thoughts and
            experiences with us.
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
