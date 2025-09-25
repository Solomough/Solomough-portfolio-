import React from "react";
import { Link } from "react-router-dom";

function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: "Faith + Tech: A New Era",
      excerpt: "Exploring how faith inspires innovation in Web3 and beyond...",
      link: "/blog/1",
    },
    {
      id: 2,
      title: "Why Web3 is the Future",
      excerpt: "Understanding decentralization and how it’s changing technology...",
      link: "/blog/2",
    },
    {
      id: 3,
      title: "Building Solutions, Not Just Apps",
      excerpt: "The mindset shift from developer to solution provider...",
      link: "/blog/3",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-purple-500">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="bg-gray-800/60 rounded-xl p-6 shadow hover:shadow-purple-500/20 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <Link
                to={post.link}
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-10">
          <Link
            to="/blog"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition"
          >
            See More Posts
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;
