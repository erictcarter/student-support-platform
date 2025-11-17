"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SurveyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Demographics
    enrollmentStatus: "",
    region: "",
    usedCounseling: "",

    // Cultural Fit
    cf1: "",
    cf2: "",
    cf3: "",
    cf4: "",
    cf5: "",
    cf6: "",

    // Trust Risk
    tr1: "",
    tr2: "",
    tr3: "",
    tr4: "",
    tr5: "",
    tr6: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit survey");
      }

      router.push("/survey/thank-you");
    } catch (err) {
      setError("There was an error submitting your survey. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">
            Cultural Fit and Trust Risk Assessment Survey
          </h1>
          <p className="text-gray-600 mb-8">
            This survey is designed to understand how well our platform meets the needs
            of international students. Your responses are confidential and will help us
            improve our services.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section A: Demographics */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Section A: Demographics and Background
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    1. What is your current enrollment status? *
                  </label>
                  <select
                    name="enrollmentStatus"
                    value={formData.enrollmentStatus}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="first-year">First-year undergraduate</option>
                    <option value="continuing">Continuing undergraduate</option>
                    <option value="graduate">Graduate student (Master's/PhD)</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    2. Which region do you primarily identify with? *
                  </label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="asia">Asia (e.g., China, India, South Korea)</option>
                    <option value="africa">Africa (e.g., Nigeria, South Africa, Egypt)</option>
                    <option value="latin-america">Latin America (e.g., Brazil, Mexico, Colombia)</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    3. Have you ever used the mental health counseling services provided by your university? *
                  </label>
                  <select
                    name="usedCounseling"
                    value={formData.usedCounseling}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Sample Content */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Sample Platform Content</h3>
              <p className="text-gray-700 mb-4">
                <strong>Managing Homesickness: A Guide for International Students</strong>
              </p>
              <p className="text-gray-700 mb-3">
                Feeling homesick is a natural part of adjusting to life in a new country. Many
                international students experience waves of longing for home, especially during
                holidays or stressful academic periods. This doesn't mean you're weak or that
                you made the wrong choice—it means you're human.
              </p>
              <p className="text-gray-700 mb-3">
                In many cultures, family bonds are central to our identity and daily life.
                Being thousands of miles away from parents, siblings, and familiar foods can
                feel isolating. Here are some strategies that respect your cultural values
                while helping you adapt:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Create a "home corner" in your room with familiar items</li>
                <li>Connect with student groups from your region</li>
                <li>Cook traditional meals when possible</li>
                <li>Schedule regular video calls home at times that work across time zones</li>
                <li>Remember that seeking support is a sign of strength, not weakness</li>
              </ul>
            </section>

            {/* Section B: Cultural Fit */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Section B: Cultural Fit Risk Assessment
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Please read the sample content above and answer the questions below.
                (1 = Strongly Disagree, 5 = Strongly Agree)
              </p>

              <div className="space-y-6">
                {[
                  { name: "cf1", text: "The language used in this content feels natural and easy to understand." },
                  { name: "cf2", text: "I feel that the platform understands the unique challenges faced by international students from my background." },
                  { name: "cf3", text: "The advice or scenario presented here is relatable to my own experiences." },
                  { name: "cf4", text: "I would feel comfortable sharing this content with a friend from my home country." },
                  { name: "cf5", text: "This content helps to reduce the stigma I might feel about seeking mental health support." },
                ].map((question, index) => (
                  <div key={question.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CF{index + 1}. {question.text} *
                    </label>
                    <div className="flex space-x-4">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <label key={value} className="flex items-center">
                          <input
                            type="radio"
                            name={question.name}
                            value={value}
                            checked={formData[question.name as keyof typeof formData] === String(value)}
                            onChange={handleChange}
                            required
                            className="mr-2"
                          />
                          <span>{value}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CF6. What is one thing about this content that made you feel understood,
                    or one thing that felt completely unrelatable? *
                  </label>
                  <textarea
                    name="cf6"
                    value={formData.cf6}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please explain your answer..."
                  />
                </div>
              </div>
            </section>

            {/* Privacy Policy Summary */}
            <section className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Privacy Policy Summary</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Data Collection:</strong> We collect only necessary information to provide support services.</li>
                <li><strong>Confidentiality:</strong> Your personal information and session data are kept strictly confidential.</li>
                <li><strong>University Access:</strong> Your university cannot access your individual data or know that you are using the platform.</li>
                <li><strong>Security:</strong> We use industry-standard encryption to protect your data from unauthorized access.</li>
                <li><strong>Data Retention:</strong> Personal data is retained for 2 years, then securely deleted.</li>
                <li><strong>Your Rights:</strong> You can request access to, correction of, or deletion of your data at any time.</li>
              </ul>
            </section>

            {/* Section C: Trust Risk */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Section C: Trust Risk Assessment
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Please review the privacy policy summary above and answer the questions below.
                (1 = Not at all Trustworthy, 5 = Highly Trustworthy)
              </p>

              <div className="space-y-6">
                {[
                  { name: "tr1", text: "I trust that the platform will keep my personal information and session data completely confidential." },
                  { name: "tr2", text: "I believe the platform has sufficient security measures to protect my sensitive mental health information from hackers or leaks." },
                  { name: "tr3", text: "I am confident that my university will NOT be able to access my individual data or know that I am using the platform." },
                  { name: "tr4", text: "The platform's policy on data retention (how long data is kept) is acceptable to me." },
                ].map((question, index) => (
                  <div key={question.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      TR{index + 1}. {question.text} *
                    </label>
                    <div className="flex space-x-4">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <label key={value} className="flex items-center">
                          <input
                            type="radio"
                            name={question.name}
                            value={value}
                            checked={formData[question.name as keyof typeof formData] === String(value)}
                            onChange={handleChange}
                            required
                            className="mr-2"
                          />
                          <span>{value}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    TR5. What is your single biggest concern regarding the privacy or security of this platform? *
                  </label>
                  <textarea
                    name="tr5"
                    value={formData.tr5}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your answer..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    TR6. What one change to the privacy policy would make you feel significantly more comfortable using the platform? *
                  </label>
                  <textarea
                    name="tr6"
                    value={formData.tr6}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your answer..."
                  />
                </div>
              </div>
            </section>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Survey"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
