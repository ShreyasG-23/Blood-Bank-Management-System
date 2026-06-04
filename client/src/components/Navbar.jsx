import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link
          to="/"
          className="text-3xl font-bold text-red-600"
        >
          ❤️ BloodBank
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-red-600">
            Home
          </Link>

          <Link to="/donors" className="hover:text-red-600">
            Donors
          </Link>

          <Link to="/request-blood" className="hover:text-red-600">
            Request
          </Link>

          <div className="flex gap-3">
          <Link to="/login" className="bg-red-600 text-white px-4 py-2 rounded-lg">
           Login
          </Link>

          <Link to="/register" className="border border-red-600 text-red-600 px-4 py-2 rounded-lg">
            Register
          </Link>
         </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;