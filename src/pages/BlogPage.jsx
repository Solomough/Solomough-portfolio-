import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const files = import.meta.glob("../posts/*.md", { as: "raw" });
      const loadedPosts = [];

      for (const path in files) {
        const fileContent = await files[path]();
        const { data, content } = matter(fileContent);
        loadedPosts.push({ ...data, content });
      }

      setPosts(loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date)));
    };

    loadPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog 📝</h1>
      {posts.map((post, index) => (
        <article
          key={index}
          className="bg-white shadow-md rounded-2xl p-4 mb-6"
        >
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{post.date}</p>
          <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
        </article>
      ))}
    </div>
  );
};

export default BlogPage;
