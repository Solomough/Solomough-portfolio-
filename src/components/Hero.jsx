import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-6"
      >
        <img
          src="/src/assets/banner.png"
          alt="Solomough Banner"
          className="w-full max-w-3xl mx-auto mb-6 rounded-2xl shadow-lg"
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
    </section>
  );
}

export default Hero;
