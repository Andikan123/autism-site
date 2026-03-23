import Hero from "../components/Hero";
import FeatureCard from "../components/InfoCard";
import TeamSection from "../components/TeamSection";

function Home() {
  return (
    <div>

      {/* HERO */}
      <Hero />

      {/* MISSION */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
        Our Mission
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        This platform was developed as a{" "}
        <span className="text-blue-600 font-semibold">
          collaborative effort
        </span>{" "}
        to raise awareness about autism, promote{" "}
        <span className="text-blue-600 font-semibold">
          early detection
        </span>, and provide accessible educational resources for{" "}
        <span className="text-blue-600 font-semibold">
          families and caregivers
        </span>.
      </p>

      {/* Divider */}
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
    </div>

    {/* RIGHT CARD */}
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

      <h3 className="text-xl font-semibold text-blue-600 mb-4">
        Why This Project Matters
      </h3>

      <ul className="space-y-4 text-gray-600">

        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✔</span>
          Improve awareness and understanding of autism
        </li>

        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✔</span>
          Encourage early identification of symptoms
        </li>

        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✔</span>
          Support caregivers with helpful resources
        </li>

      </ul>

    </div>

  </div>

</section>
      {/* Divider */}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto my-10 rounded-full"></div>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        <FeatureCard
          title="Early Signs"
          text="Learn behavioral and developmental signs of autism."
          link="/signs"
        />

        <FeatureCard
          title="Screening Quiz"
          text="Take a simple screening questionnaire."
          link="/quiz"
        />

        <FeatureCard
          title="Resources"
          text="Explore therapies and caregiver guidance."
          link="/resources"
        />

      </section>

      {/* TEAM */}
      <TeamSection />

      {/* CALL TO ACTION */}
      

    </div>
  );
}

export default Home;