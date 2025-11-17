import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h1 className="text-6xl font-bold mb-2">
              <span className="text-white">Wel</span>
              <span className="text-yellow-300">Nest</span>
            </h1>
            <p className="text-2xl font-light text-blue-100">
              Your Safe Space for Mental Wellness
            </p>
          </div>
          <h2 className="text-3xl font-semibold mb-6">
            Culturally-Sensitive Support for International Students
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A culturally-sensitive platform designed to provide mental health support
            tailored to the unique experiences of international students from Asia,
            Africa, and Latin America.
          </p>
          <div className="space-x-4">
            <Link
              href="/survey"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block"
            >
              Take Our Survey
            </Link>
            <Link
              href="/content"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 inline-block"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">See How We're Making a Difference</h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <video
              controls
              className="w-full"
              poster="/video-thumbnail.jpg"
            >
              <source src="/intro-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
            Learn about our mission to provide culturally-sensitive mental health support
            for international students.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why This Platform?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Culturally Aware</h3>
              <p className="text-gray-600">
                Content and support designed with deep understanding of diverse cultural
                perspectives on mental health and wellbeing.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Private & Secure</h3>
              <p className="text-gray-600">
                Your data is protected with end-to-end encryption. Your university
                cannot access your personal information.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-semibold mb-3">Stigma-Free</h3>
              <p className="text-gray-600">
                A safe space to seek support without judgment, designed to reduce
                stigma around mental health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Who We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">International Students</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• First-year undergraduates</li>
                <li>• Graduate students (Masters/PhD)</li>
                <li>• Students from Asia, Africa, and Latin America</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Common Challenges</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Homesickness and cultural adjustment</li>
                <li>• Academic pressure and stress</li>
                <li>• Language barriers</li>
                <li>• Isolation and loneliness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Help Us Build Something Better</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're conducting research to ensure this platform truly meets your needs.
            Your feedback will directly shape how we support international students.
          </p>
          <Link
            href="/survey"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block"
          >
            Share Your Feedback
          </Link>
        </div>
      </section>
    </div>
  );
}
