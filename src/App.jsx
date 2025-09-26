import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />
    </div>
  );
}

export default App;
