function Signs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center">
        Signs & Symptoms of Autism
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
        Autism presents with a range of behavioral and developmental signs
        affecting communication, behavior, and sensory processing.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* SOCIAL */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

          <div className="text-5xl mb-4">🗣️</div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition">
            Social Communication
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>• Poor or limited eye contact</li>
            <li>• Delayed speech development</li>
            <li>• Difficulty understanding emotions</li>
            <li>• Reduced social interaction</li>
          </ul>

          <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/5 transition"></div>
        </div>

        {/* REPETITIVE */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

          <div className="text-5xl mb-4">🔁</div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-purple-600 transition">
            Repetitive Behaviors
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>• Hand flapping or rocking</li>
            <li>• Repeating words (echolalia)</li>
            <li>• Strict adherence to routines</li>
            <li>• Resistance to change</li>
          </ul>

          <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover:bg-purple-500/5 transition"></div>
        </div>

        {/* SENSORY */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

          <div className="text-5xl mb-4">🎧</div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-indigo-600 transition">
            Sensory Processing
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>• Oversensitivity to sound or light</li>
            <li>• Unusual response to textures</li>
            <li>• Altered pain perception</li>
            <li>• Sensory overload in crowded spaces</li>
          </ul>

          <div className="absolute inset-0 rounded-2xl bg-indigo-500/0 group-hover:bg-indigo-500/5 transition"></div>
        </div>

      </div>

    </div>
  );
}

export default Signs;