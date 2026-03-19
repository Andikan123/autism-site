import { Link } from "react-router-dom";

function InfoCard({ title, text, link }) {
  return (
    <div
      className="group bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
      style={{ fontFamily: "'Cinzel', cursive" }}
    >
      {/* Top Accent Line */}
      <div className="h-1 w-12 bg-blue-600 mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition">
        {title}
      </h3>

      {/* Text */}
      <p className="text-gray-600 mb-6 leading-relaxed text-sm">
        {text}
      </p>

      {/* Link */}
      <Link
        to={link}
        style={{ fontFamily: "'Great Vibes', cursive" }}
        className="inline-flex items-center gap-2 text-2xl text-blue-600 font-semibold group-hover:gap-3 transition-all"
      >
        Explore
        <span  className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}

export default InfoCard;