import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import BlogPreview from "../components/BlogPreview";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <BlogPreview />
      <Contact />
    </>
  );
}

export default Home;
