function Signs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-4 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center">
        Early Signs of Autism
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
        Recognizing early signs can help with timely support and intervention.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8" style={{ fontFamily: "'Cinzel', cursive" }}>

        {/* Infants */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

          <div className="text-5xl mb-4">👶</div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition">
            Infants (0–2 years)
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span> No eye contact
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span> No response to name
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span> Limited facial expressions
            </li>
          </ul>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/5 transition"></div>
        </div>

        {/* Toddlers */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

          <div className="text-5xl mb-4">🧒</div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-purple-600 transition">
            Toddlers
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-purple-500">•</span> Delayed speech
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500">•</span> Repeating words
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500">•</span> Difficulty interacting
            </li>
          </ul>

          <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover:bg-purple-500/5 transition"></div>
        </div>

        {/* Older Children */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

          <div className="text-5xl mb-4">🧑</div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-indigo-600 transition">
            Older Children
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500">•</span> Difficulty making friends
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500">•</span> Strong routine preferences
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500">•</span> Sensitivity to sounds/lights
            </li>
          </ul>

          <div className="absolute inset-0 rounded-2xl bg-indigo-500/0 group-hover:bg-indigo-500/5 transition"></div>
        </div>

      </div>

    </div>
  );
}

export default Signs;