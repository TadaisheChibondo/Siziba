import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <img
                src="/images/logo.jpg"
                alt="Abizis Innovative Solutions"
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>
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
        <div className="md:hidden absolute top-16 left-0 w-full border-t border-slate-100 bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a
              href="#tech"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-corporate rounded-lg transition-colors"
            >
              Tech & Sales
            </a>
            <a
              href="#media"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-vibrant rounded-lg transition-colors"
            >
              Media Services
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Our Story
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
