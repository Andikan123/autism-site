import { Link } from "react-router-dom";
import heroBg from "../assets/images/aut-bg.jpg";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 text-center text-white">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm mb-6 shadow-lg">

  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

  <span className="text-gray-100 tracking-wide">
    Group Project • Autism Awareness
  </span>

</div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Understanding Autism Together
        </h1>

        {/* Subtitle */}
        <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-200">
          A collaborative platform designed to promote awareness, early
          detection, and support for individuals with autism and their families.
        </p>

        {/* Buttons */}
        

        {/* Stats */}
        <div className="flex justify-center gap-6 mt-12 flex-wrap">

          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl">
            <p className="text-2xl font-bold">1 in 100</p>
            <p className="text-sm text-gray-200">Children affected</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl">
            <p className="text-2xl font-bold">Early Detection</p>
            <p className="text-sm text-gray-200">Improves outcomes</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl">
            <p className="text-2xl font-bold">Team Project</p>
            <p className="text-sm text-gray-200">Built collaboratively</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;