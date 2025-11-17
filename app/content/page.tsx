export default function ContentPage() {
  const resources = [
    {
      title: "Managing Homesickness",
      category: "Emotional Wellbeing",
      excerpt: "Practical strategies for dealing with homesickness that respect your cultural values and family bonds.",
      content: `Feeling homesick is a natural part of adjusting to life in a new country. Many international students experience waves of longing for home, especially during holidays or stressful academic periods. This doesn't mean you're weak or that you made the wrong choice—it means you're human.

In many cultures, family bonds are central to our identity and daily life. Being thousands of miles away from parents, siblings, and familiar foods can feel isolating. Here are some strategies that respect your cultural values while helping you adapt:

• Create a "home corner" in your room with familiar items
• Connect with student groups from your region
• Cook traditional meals when possible
• Schedule regular video calls home at times that work across time zones
• Remember that seeking support is a sign of strength, not weakness`,
    },
    {
      title: "Academic Stress and Cultural Expectations",
      category: "Academic Success",
      excerpt: "Navigating the pressure to succeed while managing your mental health in a new educational system.",
      content: `Many international students face unique academic pressures—not just from coursework, but from family expectations, cultural values around achievement, and the financial investment of studying abroad.

It's common to feel that you must excel to justify your family's sacrifices. In some cultures, mental health struggles are seen as weakness or bringing shame to the family. This can make it harder to ask for help when you need it.

Remember:
• Academic struggles are normal, especially when adjusting to a new education system
• Your worth is not defined solely by your grades
• Seeking help early is smart, not shameful
• Many successful students use support services
• Taking care of your mental health helps your academic performance`,
    },
    {
      title: "Building Community in a New Country",
      category: "Social Connection",
      excerpt: "Finding your people and creating meaningful connections while studying abroad.",
      content: `Loneliness is one of the most common challenges for international students. You might feel caught between two worlds—not fully belonging in your host country but also feeling disconnected from home.

Building community takes time and intentional effort:

• Join cultural student organizations from your region
• Attend international student events and mixers
• Don't be afraid to reach out to classmates for study groups
• Find spaces that remind you of home (restaurants, cultural centers, religious communities)
• Remember that many students around you are also looking for friends
• It's okay to have different friend groups for different parts of your identity`,
    },
    {
      title: "When to Seek Professional Help",
      category: "Mental Health",
      excerpt: "Understanding the signs that you might benefit from professional mental health support.",
      content: `In some cultures, seeing a therapist or counselor carries stigma. You might worry about what your family would think, or believe you should handle problems on your own.

However, seeking professional help is increasingly recognized globally as a sign of self-awareness and strength. Consider reaching out to a counselor if you:

• Feel persistently sad, anxious, or empty for more than two weeks
• Have trouble sleeping or sleep too much
• Lose interest in activities you used to enjoy
• Experience significant changes in appetite or weight
• Have difficulty concentrating on your studies
• Feel overwhelmed by homesickness
• Have thoughts of harming yourself

Campus counseling services are:
• Confidential (they won't tell your university or family)
• Often free or low-cost for students
• Staffed by professionals trained in cultural sensitivity
• Designed to help you succeed academically and personally`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Support Resources</h1>
        <p className="text-xl text-gray-600 mb-12">
          Culturally-aware content to support your wellbeing as an international student.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-sm text-blue-600 font-semibold mb-2">
                {resource.category}
              </div>
              <h2 className="text-2xl font-bold mb-3">{resource.title}</h2>
              <p className="text-gray-600 mb-4">{resource.excerpt}</p>
              <div className="prose prose-sm text-gray-700 whitespace-pre-line">
                {resource.content}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h3 className="text-xl font-semibold mb-2">Need More Support?</h3>
          <p className="text-gray-700 mb-4">
            These resources are meant to provide general guidance. If you're experiencing
            a mental health crisis or need immediate support, please reach out to your
            campus counseling center or a crisis hotline.
          </p>
          <p className="text-gray-700">
            <strong>Crisis Text Line:</strong> Text HOME to 741741 (available 24/7)
          </p>
        </div>
      </div>
    </div>
  );
}
