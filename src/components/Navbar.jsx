import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  // Detect scrolling sections when on home
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const sections = ["about", "projects", "contact"];
        let current = "";
        sections.forEach((id) => {
          const section = document.getElementById(id);
          if (section) {
            const offset = section.offsetTop - 100;
            if (window.scrollY >= offset) {
              current = id;
            }
          }
        });
        setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const linkClasses = (isActive) =>
    isActive ? "text-purple-400 font-semibold" : "hover:text-purple-400";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-500">
          Solomough
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <button
            onClick={() => scrollToSection("about")}
            className={linkClasses(activeSection === "about")}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={linkClasses(activeSection === "projects")}
          >
            Projects
          </button>
          <Link
            to="/blog"
            className={linkClasses(location.pathname === "/blog")}
          >
            Blog
          </Link>
          <button
            onClick={() => scrollToSection("contact")}
            className={linkClasses(activeSection === "contact")}
          >
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
          <button
            onClick={() => scrollToSection("about")}
            className={`block w-full text-left ${linkClasses(
              activeSection === "about"
            )}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`block w-full text-left ${linkClasses(
              activeSection === "projects"
            )}`}
          >
            Projects
          </button>
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={`block w-full text-left ${linkClasses(
              location.pathname === "/blog"
            )}`}
          >
            Blog
          </Link>
          <button
            onClick={() => scrollToSection("contact")}
            className={`block w-full text-left ${linkClasses(
              activeSection === "contact"
            )}`}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
