import React from "react";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="flex items-center mb-4 md:mb-0">
          {Logo && <img src={Logo} alt="Logo" className="w-10 h-10 mr-3" />}
          <span>Solomough | Out of Darkness to Light ✝️</span>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Solomough. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
