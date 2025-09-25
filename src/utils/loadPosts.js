import matter from "gray-matter";

// Import all markdown files from /posts
const importPosts = import.meta.glob("../posts/*.md", { eager: true });

export function getPosts() {
  const posts = Object.keys(importPosts).map((fileName) => {
    const file = importPosts[fileName];
    const { data, content } = matter(file.default);
    return {
      slug: fileName.replace("../posts/", "").replace(".md", ""),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
