import InfoImageCard from "../components/AboutCard";

import commImg from "../assets/images/comchild.jpg";
import repeatImg from "../assets/images/repaut.jpg";

function AboutAutism() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* TITLE */}
      <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Understanding Autism
      </h1>

      {/* INTRO */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">

  <div className="max-w-6xl mx-auto px-6">

    {/* Title */}
    <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
      What is Autism Spectrum Disorder (ASD)?
    </h2>

    {/* Subtitle */}
    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
      Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that
      affects communication, behavior, and social interaction. It presents
      differently in each individual, making it a spectrum disorder.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">

        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          Social Communication Challenges
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Individuals with autism may experience difficulty with verbal and
          non-verbal communication, understanding social cues, and building
          relationships.
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">

        <h3 className="text-xl font-semibold text-purple-600 mb-4">
          Repetitive Behaviors & Interests
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Repetitive movements, strict routines, and focused interests are
          common characteristics that help individuals feel structured and
          secure.
        </p>

      </div>

    </div>

    {/* Spectrum Highlight */}
    <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-2xl shadow-xl text-center">

      <h3 className="text-2xl font-bold mb-4">
        Why is it called a “Spectrum”?
      </h3>

      <p className="max-w-2xl mx-auto text-gray-100 leading-relaxed">
        Autism is described as a spectrum because symptoms vary widely in
        severity, presentation, and functional impact. Each individual has a
        unique combination of strengths and challenges.
      </p>

    </div>

  </div>

</section>

{/* EPIDEMIOLOGY*/}
<section className="py-20 bg-white">

  <div className="max-w-6xl mx-auto px-6">

    {/* Title */}
    <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
      Epidemiology of Autism
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
      Autism Spectrum Disorder affects individuals worldwide, with variations
      in prevalence influenced by diagnostic practices, awareness, and access
      to healthcare.
    </p>

    {/* STATS */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl text-center">
        <h3 className="text-4xl font-bold mb-2">1 in 100</h3>
        <p className="text-gray-100">Children globally affected</p>
      </div>

      <div className="bg-white border border-gray-100 shadow-lg p-8 rounded-2xl text-center">
        <h3 className="text-4xl font-bold text-blue-600 mb-2">4 : 1</h3>
        <p className="text-gray-600">Male to female ratio</p>
      </div>

      <div className="bg-white border border-gray-100 shadow-lg p-8 rounded-2xl text-center">
        <h3 className="text-4xl font-bold text-purple-600 mb-2">&lt; 3 yrs</h3>
        <p className="text-gray-600">Typical age of symptom onset</p>
      </div>

    </div>

    {/* REASONS */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Are Cases Increasing?
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          The rise in autism diagnoses is not necessarily due to an increase
          in the condition itself, but largely due to improvements in
          identification and awareness.
        </p>

        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-2">
            <span className="text-blue-600">✔</span> Better screening methods
          </li>
          <li className="flex gap-2">
            <span className="text-blue-600">✔</span> Increased public awareness
          </li>
          <li className="flex gap-2">
            <span className="text-blue-600">✔</span> Broader diagnostic criteria
          </li>
        </ul>
      </div>

      {/* RIGHT CARD */}
      <div className="bg-blue-50 p-8 rounded-2xl shadow-md">

        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          Global Perspective
        </h3>

        <p className="text-gray-600 leading-relaxed">
          According to the World Health Organization, autism affects
          individuals across all ethnic, racial, and socioeconomic groups.
          It is a universal condition that requires global awareness and
          inclusive support systems.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ETIOLOGICAL FACTOR */}
<section className="py-20 bg-gradient-to-b from-white to-blue-50">

  <div className="max-w-6xl mx-auto px-6">

    {/* Title */}
    <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
      Etiology and Risk Factors
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
      Autism Spectrum Disorder is influenced by a combination of genetic and
      environmental factors. No single cause has been identified.
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* GENETIC */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">

        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          Genetic Factors
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-2">
            <span className="text-blue-600">✔</span> Strong hereditary component
          </li>
          <li className="flex gap-2">
            <span className="text-blue-600">✔</span> Gene mutations
          </li>
          <li className="flex gap-2">
            <span className="text-blue-600">✔</span> Chromosomal abnormalities
          </li>
        </ul>

      </div>

      {/* ENVIRONMENTAL */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">

        <h3 className="text-xl font-semibold text-purple-600 mb-4">
          Environmental Factors
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li className="flex gap-2">
            <span className="text-purple-600">✔</span> Advanced parental age
          </li>
          <li className="flex gap-2">
            <span className="text-purple-600">✔</span> Prenatal infections
          </li>
          <li className="flex gap-2">
            <span className="text-purple-600">✔</span> Maternal diabetes
          </li>
          <li className="flex gap-2">
            <span className="text-purple-600">✔</span> Prematurity
          </li>
        </ul>

      </div>

    </div>

    {/* IMPORTANT WARNING BOX */}
    <div className="mt-14 bg-red-50 border border-red-200 p-8 rounded-2xl text-center shadow">

      <h3 className="text-xl font-bold text-red-600 mb-3">
        Important Clarification
      </h3>

      <p className="text-gray-700 leading-relaxed">
        Vaccines do NOT cause autism. This has been extensively studied and
        scientifically disproven. There is no credible evidence linking vaccines
        to autism.
      </p>

    </div>

  </div>

</section>


      {/* CHARACTERISTICS */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <InfoImageCard
          title="Communication Differences"
          text="Some autistic individuals may experience delayed speech, difficulty maintaining conversations, or challenges in understanding social cues and body language."
          image={commImg}
          color="blue"
        />

        <InfoImageCard
          title="Repetitive Behaviors"
          text="Repetitive movements, routines, or strong focus on specific interests are common. These behaviors can provide comfort and predictability."
          image={repeatImg}
          color="purple"
        />
      </div>

      {/* DIVIDER */}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 my-16 rounded-full"></div>

      {/* CAUSES SECTION */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Causes Autism?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The exact cause of autism is not fully understood, but research
            suggests a combination of genetic and environmental factors.
            Differences in brain development and neural connections may also
            play a role.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <ul className="space-y-3 text-gray-600">
            <li>✔ Genetic predisposition</li>
            <li>✔ Brain development differences</li>
            <li>✔ Environmental influences</li>
          </ul>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 my-16 rounded-full"></div>

      {/* SIGNS SUMMARY */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Common Signs of Autism
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="font-semibold text-blue-600 mb-2">Social</h3>
            <p className="text-gray-600 text-sm">
              Difficulty with eye contact, making friends, or understanding
              emotions.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="font-semibold text-purple-600 mb-2">
              Communication
            </h3>
            <p className="text-gray-600 text-sm">
              Delayed speech, repeating words, or difficulty expressing needs.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="font-semibold text-indigo-600 mb-2">Behavior</h3>
            <p className="text-gray-600 text-sm">
              Repetitive actions, strict routines, or sensitivity to sensory
              input.
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 my-16 rounded-full"></div>

      {/* VIDEO SECTION */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Learn From Our Team
        </h2>

        <p className="text-gray-600 mb-8">
          Watch one of our team members explain autism in a simple and
          understandable way.
        </p>

        <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[300px] md:h-[400px]"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Autism Explanation Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="mt-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Awareness Matters
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Increasing awareness about autism helps promote understanding, reduce
          stigma, and ensure that individuals receive the support they need to
          live fulfilling lives.
        </p>
      </section>
    </div>
  );
}

export default AboutAutism;
