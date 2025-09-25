import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-6"
      >
        <img
          src="/src/assets/logo.png"
          alt="Solomough Logo"
          className="w-24 h-24 mx-auto mb-4 rounded-full shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Solomough — Out of Darkness to Light ✝️
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Embracing divine purpose, I illuminate paths to success and spiritual
          growth. As a vessel for God's wisdom, I share insights and expertise
          to empower individuals on their journey towards enlightenment.
        </p>
      </motion.div>
    </div>
  );
}

export default App;
