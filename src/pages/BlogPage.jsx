import React from "react";
import Blog from "../components/Blog";

function BlogPage() {
  return (
    <div className="py-20 px-6 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Blog Component */}
        <Blog />
      </div>
    </div>
  );
}

export default BlogPage;
