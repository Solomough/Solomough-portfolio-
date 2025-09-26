import React from "react";
import { motion } from "framer-motion";
import DP from "../assets/dp.jpg";
import Banner from "../assets/banner.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: Banner ? `url(${Banner})` : undefined,
        backgroundColor: Banner ? undefined : "#000", // fallback if banner fails
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {DP && (
          <img
            src={DP}
            alt="Solomough DP"
            className="w-40 h-40 rounded-full border-4 border-indigo-500 mb-6 object-cover"
          />
        )}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Solomough | Out of Darkness to Light ✝️
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-300 max-w-xl"
        >
          Software Engineer 🚀 | Web, AI & Web3 | Writer ✍️ | Kingdom Strategist
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
