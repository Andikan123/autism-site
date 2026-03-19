import { Link } from "react-router-dom";
import heroBg from "../assets/images/aut-bg.jpg";

function Hero() {
  return (
    <section
  style={{
    fontFamily: "'Cinzel', cursive",
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="relative"
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative max-w-6xl mx-auto px-6 py-24 text-center text-white">
    <h1 className="text-5xl font-bold mb-6">
      Understanding Autism
    </h1>

    <p className="text-lg max-w-2xl mx-auto mb-10">
      Learn about autism, identify early signs, and explore resources
      that help children and families thrive.
    </p>

    <Link
      to="/about"
      className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
    >
      Learn More
    </Link>
  </div>
</section>
  );
}

export default Hero;