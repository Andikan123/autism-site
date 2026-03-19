function InfoImageCard({ title, text, image, color = "blue" }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3
          className={`text-2xl font-semibold mb-3 transition ${
            color === "blue"
              ? "group-hover:text-blue-600"
              : "group-hover:text-purple-600"
          }`}
        >
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm">
          {text}
        </p>

      </div>
    </div>
  );
}

export default InfoImageCard;