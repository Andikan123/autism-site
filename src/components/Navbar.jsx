import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md" style={{ fontFamily: "'Great Vibes', cursive" }}>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center" >

        <h1 className="text-4xl font-bold text-blue-600">
          AutismCare
        </h1>

        <div className="space-x-6 font-medium text-gray-700 text-2xl">

          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>

          <Link to="/signs" className="hover:text-blue-600">
            Signs
          </Link>

          <Link to="/quiz" className="hover:text-blue-600">
            Quiz
          </Link>

          <Link to="/resources" className="hover:text-blue-600">
            Resources
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;