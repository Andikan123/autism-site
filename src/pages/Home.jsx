import Hero from "../components/Hero";
import FeatureCard from "../components/InfoCard";

function Home() {
  return (
    <div>

      <Hero />

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

    </div>
  );
}

export default Home;