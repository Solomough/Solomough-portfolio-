import React from "react";
import { Github, Linkedin, Twitter, Youtube, Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-indigo-400">
            Solomough — Out of Darkness to Light ✝️
          </h2>
          <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-indigo-400">Home</a>
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#blog" className="hover:text-indigo-400">Blog</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>

        {/* Social Media */}
        <div className="flex gap-5">
          <a href="https://github.com/Solomough" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-indigo-400" />
          </a>
          <a href="https://www.linkedin.com/in/solomon-moughkaa-zahemen-a5476a377?utm_source=share&utm_campaign=share_via&utm_content=profile&ut" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-indigo-400" />
          </a>
          <a href="https://x.com/moughkaa46415?s=09" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 hover:text-indigo-400" />
          </a>
          <a href="https://www.youtube.com/@solomough" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-5 h-5 hover:text-indigo-400" />
          </a>
          <a href="https://www.facebook.com/share/1Cfh9uxYXu/" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 hover:text-indigo-400" />
          </a>
          <a href="https://www.instagram.com/solomough3?igsh=cGJ1d3JtYzh5M3Ay" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-indigo-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
