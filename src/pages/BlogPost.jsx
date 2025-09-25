import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPosts } from "../utils/loadPosts";

function BlogPost() {
  const { slug } = useParams();
  const post = getPosts().find((p) => p.slug === slug);

  if (!post) return <p className="p-6 text-red-400">Post not found</p>;

  return (
    <div className="py-20 px-6 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-6">{post.date}</p>
        <ReactMarkdown className="prose prose-invert max-w-none">
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogPost;
