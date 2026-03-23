import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="bg-white shadow-md fixed top-0 left-0 w-full z-50 "
      style={{ fontFamily: "'Great Vibes', cursive" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-4xl font-bold text-blue-600">
          AutismCare
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700 text-xl">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/signs" className="hover:text-blue-600">Signs</Link>
          <Link to="/quiz" className="hover:text-blue-600">Quiz</Link>
          <Link to="/resources" className="hover:text-blue-600">Resources</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          open ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 text-gray-700 text-lg">

          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/signs">Signs</Link>
          <Link onClick={() => setOpen(false)} to="/quiz">Quiz</Link>
          <Link onClick={() => setOpen(false)} to="/resources">Resources</Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;