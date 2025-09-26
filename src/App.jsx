import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Scroll To Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
