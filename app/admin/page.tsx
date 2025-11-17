"use client";

import { useEffect, useState } from "react";

interface SurveyResponse {
  id: string;
  enrollmentStatus: string;
  region: string;
  usedCounseling: string;
  cf1: string;
  cf2: string;
  cf3: string;
  cf4: string;
  cf5: string;
  cf6: string;
  tr1: string;
  tr2: string;
  tr3: string;
  tr4: string;
  tr5: string;
  tr6: string;
  submittedAt: string;
}

export default function AdminPage() {
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedResponse, setSelectedResponse] = useState<SurveyResponse | null>(null);

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = async () => {
    try {
      const response = await fetch("/api/survey");
      const data = await response.json();
      if (data.success) {
        setResponses(data.responses);
      }
    } catch (error) {
      console.error("Error fetching responses:", error);
    } finally {
      setLoading(false);
    }
  };

  const calculateAverages = () => {
    if (responses.length === 0) return null;

    const cfScores = responses.map((r) =>
      [r.cf1, r.cf2, r.cf3, r.cf4, r.cf5].map(Number)
    );
    const trScores = responses.map((r) =>
      [r.tr1, r.tr2, r.tr3, r.tr4].map(Number)
    );

    const cfAvg =
      cfScores.reduce((sum, scores) => sum + scores.reduce((a, b) => a + b, 0), 0) /
      (responses.length * 5);
    const trAvg =
      trScores.reduce((sum, scores) => sum + scores.reduce((a, b) => a + b, 0), 0) /
      (responses.length * 4);

    return {
      culturalFit: cfAvg.toFixed(2),
      trust: trAvg.toFixed(2),
      totalResponses: responses.length,
    };
  };

  const stats = calculateAverages();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Survey Results Dashboard</h1>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading survey responses...</p>
          </div>
        ) : responses.length === 0 ? (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-600">No survey responses yet.</p>
          </div>
        ) : (
          <>
            {/* Summary Statistics */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Total Responses
                </h3>
                <p className="text-4xl font-bold text-blue-600">{stats?.totalResponses}</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Avg Cultural Fit Score
                </h3>
                <p className="text-4xl font-bold text-green-600">
                  {stats?.culturalFit}/5.00
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Target: ≥4.0 {Number(stats?.culturalFit) >= 4.0 ? "✓" : "✗"}
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Avg Trust Score
                </h3>
                <p className="text-4xl font-bold text-purple-600">
                  {stats?.trust}/5.00
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Target: ≥4.0 {Number(stats?.trust) >= 4.0 ? "✓" : "✗"}
                </p>
              </div>
            </div>

            {/* Demographics Breakdown */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Demographics</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Enrollment Status</h3>
                  {Object.entries(
                    responses.reduce((acc, r) => {
                      acc[r.enrollmentStatus] = (acc[r.enrollmentStatus] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)
                  ).map(([status, count]) => (
                    <div key={status} className="text-sm text-gray-700">
                      {status}: {count}
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Region</h3>
                  {Object.entries(
                    responses.reduce((acc, r) => {
                      acc[r.region] = (acc[r.region] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)
                  ).map(([region, count]) => (
                    <div key={region} className="text-sm text-gray-700">
                      {region}: {count}
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Used Counseling</h3>
                  {Object.entries(
                    responses.reduce((acc, r) => {
                      acc[r.usedCounseling] = (acc[r.usedCounseling] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)
                  ).map(([used, count]) => (
                    <div key={used} className="text-sm text-gray-700">
                      {used}: {count}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Individual Responses */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Individual Responses</h2>
              <div className="space-y-4">
                {responses.map((response) => (
                  <div
                    key={response.id}
                    className="border border-gray-200 rounded p-4 hover:bg-gray-50 cursor-pointer"
                    onClick={() =>
                      setSelectedResponse(
                        selectedResponse?.id === response.id ? null : response
                      )
                    }
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">
                          Response #{response.id.slice(-6)}
                        </p>
                        <p className="text-sm text-gray-600">
                          {response.region} • {response.enrollmentStatus}
                        </p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-gray-600">
                          {new Date(response.submittedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {selectedResponse?.id === response.id && (
                      <div className="mt-4 pt-4 border-t space-y-3">
                        <div>
                          <p className="font-semibold text-sm">Cultural Fit Scores:</p>
                          <p className="text-sm text-gray-700">
                            CF1: {response.cf1} | CF2: {response.cf2} | CF3:{" "}
                            {response.cf3} | CF4: {response.cf4} | CF5: {response.cf5}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">CF6 (Open-ended):</p>
                          <p className="text-sm text-gray-700 italic">"{response.cf6}"</p>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Trust Scores:</p>
                          <p className="text-sm text-gray-700">
                            TR1: {response.tr1} | TR2: {response.tr2} | TR3:{" "}
                            {response.tr3} | TR4: {response.tr4}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">
                            TR5 (Privacy Concern):
                          </p>
                          <p className="text-sm text-gray-700 italic">"{response.tr5}"</p>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">
                            TR6 (Policy Suggestion):
                          </p>
                          <p className="text-sm text-gray-700 italic">"{response.tr6}"</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
