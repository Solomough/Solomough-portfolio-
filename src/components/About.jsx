import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-900 text-gray-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8"
        >
          I am <span className="font-semibold text-white">Solomon Moughkaa
          Zahemen (Solomough)</span> — a blessing to my world, a solution
          provider, and a vessel for God’s wisdom. My life is rooted in the
          truth that <span className="italic">Christ in me is the hope of
          glory</span>, and through this, I shine light in the tech world and
          beyond.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          With a passion for <span className="text-white">Web, AI, and
          Web3</span>, I am building transformative platforms like{" "}
          <span className="font-semibold">The Ark Academy</span>,{" "}
          <span className="font-semibold">SEEPAF</span>, and{" "}
          <span className="font-semibold">The Ark — Christ Riches in
          Glory</span>. My vision is to bridge the gap between{" "}
          <span className="font-bold">Faith and Technology</span>, raising a
          global movement of youths, influencers, and solution providers.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
