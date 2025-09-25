import React from "react";
import { motion } from "framer-motion";
import { PenLine } from "lucide-react";
import { getPosts } from "../utils/loadPosts";

function Blog() {
  const posts = getPosts();

  return (
    <section id="blog" className="py-20 px-6 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Blog
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-2 mb-3 text-indigo-400">
                <PenLine className="w-5 h-5" />
                <span className="text-sm">{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
