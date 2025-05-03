"use client";

import Link from "next/link";
import { useParams } from "next/navigation"; // ✅ Correct import
import { useState, useEffect } from "react";
import { fetchArticlesByCategory } from "../../utils/api"; // Updated to fetch by category

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams(); // ✅ Get category from dynamic route

  useEffect(() => {
    if (!category) return; // ✅ Prevent calling API with undefined category

    async function fetchData() {
      try {
        const data = await fetchArticlesByCategory(category);
        setBlogPosts(data);
      } catch (err) {
        setError("Failed to load blog posts.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [category]);

  if (!category) return <div className="text-center py-10 text-gray-500">Invalid Category</div>;
  if (loading) return <div className="text-center py-10 text-gray-500">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 text-center">
        {category} Blog Posts
      </h1>

      <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 dark:bg-opacity-20 transition-opacity"></div>
            </div>
            <div className="p-6 dark:bg-black">
              <h3 className="text-xl font-semibold dark:text-gray-300">
                {post.title}
              </h3>
              <p className="mt-2 dark:text-gray-200">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
