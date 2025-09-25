import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // Navigate back home first
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-500">
          Solomough
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <button onClick={() => scrollToSection("about")} className="hover:text-purple-400">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-purple-400">
            Projects
          </button>
          <Link to="/blog" className="hover:text-purple-400">
            Blog
          </Link>
          <button onClick={() => scrollToSection("contact")} className="hover:text-purple-400">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
          <button onClick={() => scrollToSection("about")} className="block w-full text-left hover:text-purple-400">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="block w-full text-left hover:text-purple-400">
            Projects
          </button>
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="block w-full text-left hover:text-purple-400"
          >
            Blog
          </Link>
          <button onClick={() => scrollToSection("contact")} className="block w-full text-left hover:text-purple-400">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
