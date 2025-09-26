import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Blog Preview Section */}
      <Blog />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default Home;
