"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchArticles } from "../../utils/api"; // Ensure correct import

const BlogPostPage = () => {
  const params = useParams(); // Get URL params
  const slug = params?.slug; // Extract slug
  console.log("Slug from URL:", slug);

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    if (!slug) {
      console.error("Slug is undefined or missing.");
      setError("Invalid post request.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await fetchArticles();
        console.log("Fetched Data:", data);

        if (!Array.isArray(data)) {
          console.error("Error: Expected an array but got", typeof data);
          setError("Invalid data format.");
          return;
        }

        console.log("All slugs in fetched data:", data.map((p) => p.slug));

        const decodedSlug = decodeURIComponent(slug); // Fix special characters
        console.log("Decoded Slug:", decodedSlug);

        const foundPost = data.find(
          ({ slug: postSlug }) =>
            postSlug?.trim().toLowerCase() === decodedSlug.trim().toLowerCase()
        );

        if (foundPost) {
          setPost(foundPost);
          console.log("Post found:", foundPost);
        } else {
          console.error("No post found for slug:", decodedSlug);
          setError("Post not found.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to load post.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {post ? (
        <>
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 text-center">
            {post.title}
          </h1>
          <div className="mt-6 text-3xl text-gray-800 dark:text-gray-200">
            {post.description}
          </div>

          <div className="mt-4 text-gray-600 dark:text-gray-300">
  {/* Main subtitle and content */}
  <h1 className="text-xl font-bold">{post.subtitle}</h1>
  <p className="mb-4">{post.content}</p>

  {/* Loop through subtitles and contents dynamically */}
  {post.subtitles?.map((subtitle, index) => (
    <div key={index} className="mb-4">
      <h1 className="text-xl font-bold">{subtitle}</h1>
      <p>{post.contents?.[index]}</p>
    </div>
  ))}

  {/* Post metadata */}
  <div className="text-right font-mono">
    <p>Published on: {post.date}</p>
    <p>By {post.author}</p>
  </div>
</div>
        </>
      ) : (
        <p className="text-center text-gray-500">Post not available.</p>
      )}
    </div>
  );
};

export default BlogPostPage;
