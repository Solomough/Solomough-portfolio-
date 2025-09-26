import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        {/* Navbar */}
        <Navbar />

        {/* Page Routing */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
