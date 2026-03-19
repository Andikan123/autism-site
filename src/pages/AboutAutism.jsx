import InfoImageCard from "../components/AboutCard";

// import your images
import commImg from "../assets/images/comchild.jpg";
import repeatImg from "../assets/images/repaut.jpg";

function AboutAutism() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-extrabold mb-6 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Understanding Autism
      </h1>

      <p className="text-gray-600 text-lg max-w-3xl">
        Autism is a developmental condition that affects communication,
        behavior, and social interaction.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-14">

        <InfoImageCard
          title="Communication Differences"
          text="Some autistic individuals may experience delayed speech or difficulty understanding social cues."
          image={commImg}
          color="blue"
        />

        <InfoImageCard
          title="Repetitive Behaviors"
          text="Repetitive movements or strong interests in specific topics are common traits."
          image={repeatImg}
          color="purple"
        />

      </div>

    </div>
  );
}

export default AboutAutism;