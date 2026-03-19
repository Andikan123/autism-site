function Resources() {
  const resources = [
    {
      title: "Speech Therapy",
      description:
        "Helps children improve communication, language development, and social interaction skills.",
      icon: "🗣️",
      color: "blue"
    },
    {
      title: "Occupational Therapy",
      description:
        "Supports daily living skills, coordination, sensory processing, and independence.",
      icon: "🧩",
      color: "purple"
    },
    {
      title: "Behavioral Therapy",
      description:
        "Focuses on improving behavior patterns, emotional regulation, and communication strategies.",
      icon: "🧠",
      color: "indigo"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-4 text-center bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Autism Support Resources
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
        Evidence-based therapies that support development, learning, and independence in children with autism.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {resources.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-gray-100 to-transparent"></div>

            {/* Icon */}
            <div className="text-5xl mb-5">{item.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Tag */}
            <div
              className={`mt-6 inline-block text-xs px-3 py-1 rounded-full font-medium
              ${
                item.color === "blue"
                  ? "bg-blue-100 text-blue-700"
                  : item.color === "purple"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-indigo-100 text-indigo-700"
              }`}
            >
              Recommended Support
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Resources;