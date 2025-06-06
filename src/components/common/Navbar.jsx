import { FaSearch } from "react-icons/fa"; // Using FaSearch from react-icons
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/">
          {/* Replaced img with a placeholder/logo text, or you can use an icon if available */}
          <h1 className="h-10 flex items-center text-xl font-bold text-blue-600">
            AH
          </h1>
        </Link>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <form>
            <input
              className="outline-none border-none mr-2"
              type="search"
              name="search"
              placeholder="Search"
            />
          </form>
          <FaSearch className="inline h-4 w-4 cursor-pointer text-slate-600" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
