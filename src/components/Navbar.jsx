import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          {Logo && <img src={Logo} alt="Logo" className="w-12 h-12 mr-3" />}
          <span className="text-white font-bold text-xl">Solomough</span>
        </div>

        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <Link to="hero" smooth duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="blog" smooth duration={500}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
