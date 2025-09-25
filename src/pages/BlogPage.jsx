import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Faith + Tech: The Future of Innovation",
      excerpt:
        "Exploring how faith-driven creativity can shape the tech world and create solutions that truly transform lives...",
      date: "Sept 19, 2025",
      category: "Faith & Tech",
      link: "#",
    },
    {
      id: 2,
      title: "Building Purpose-Driven Projects",
      excerpt:
        "A breakdown of how to align vision, purpose, and technology to create projects that inspire and impact communities...",
      date: "Sept 12, 2025",
      category: "Projects",
      link: "#",
    },
    {
      id: 3,
      title: "From Vision to Reality",
      excerpt:
        "Why consistency, excellence, and faith are the real tools for building a global influence in technology and ministry...",
      date: "Sept 5, 2025",
      category: "Inspiration",
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BookOpen className="mx-auto mb-4 text-purple-500" size={40} />
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-gray-400 mt-2">
            Insights, teachings, and stories bridging faith and technology.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div>
                <span className="text-xs uppercase tracking-wide text-purple-400">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
                <p className="text-gray-400 text-sm mt-3">{post.excerpt}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <p className="text-gray-500 text-xs">{post.date}</p>
                <a
                  href={post.link}
                  className="text-purple-400 text-sm font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
