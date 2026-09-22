import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand/Logo Area */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Abizis Pvt ltd
            </span>
          </div>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/#"
              className="text-sm font-medium text-gray-600 hover:text-corporate transition"
            >
              Tech & Sales
            </Link>
            <Link
              to="/#"
              className="text-sm font-medium text-gray-600 hover:text-vibrant transition"
            >
              Media Services
            </Link>
            <Link
              to="/#"
              className="bg-corporate text-gray-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-50 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/tech"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Tech & Sales
            </Link>
            <Link
              to="/media"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Media Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-corporate hover:bg-gray-50 rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
