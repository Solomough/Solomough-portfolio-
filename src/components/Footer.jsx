import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Youtube, Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black/80 text-gray-400 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-purple-500">Solomough</h2>
          <p className="mt-2 text-sm">
            Out of Darkness to Light ✝️ — Bridging Faith + Tech for a global impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-400">
                Projects
              </a>
            </li>
            <li>
              <Link to="/blog" className="hover:text-purple-400">
                Blog
              </Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/Solomough" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-purple-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/solomon-moughkaa-zahemen-a5476a377"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="hover:text-purple-400" />
            </a>
            <a href="https://x.com/moughkaa46415?s=09" target="_blank" rel="noopener noreferrer">
              <Twitter className="hover:text-purple-400" />
            </a>
            <a href="https://www.youtube.com/@solomough" target="_blank" rel="noopener noreferrer">
              <Youtube className="hover:text-purple-400" />
            </a>
            <a href="https://www.facebook.com/share/1Cfh9uxYXu/" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-purple-400" />
            </a>
            <a href="https://www.instagram.com/solomough3?igsh=cGJ1d3JtYzh5M3Ay" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-purple-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Solomough. All Rights Reserved. | “Out of Darkness to Light ✝️”
      </div>
    </footer>
  );
}

export default Footer;
