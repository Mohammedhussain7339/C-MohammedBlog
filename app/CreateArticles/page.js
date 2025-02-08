"use client";

import { useState, useEffect } from "react";
import { createArticle,fetchArticles } from "../utils/api";
import { CldUploadWidget } from "next-cloudinary";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    }
    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Submitting article:", { title, slug, description, author, date, image }); // Debugging log

    if (!image) {
      alert("Please upload an image before submitting.");
      return;
    }

    try {
      const newArticle = { title, slug, description, author, date, image };
      await createArticle(newArticle);
      alert("Article created successfully!");
    } catch (err) {
      console.error("Error creating article:", err);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create an Article</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border rounded" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input className="w-full p-2 border rounded" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Slug" required />
        <textarea className="w-full p-2 border rounded" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <input className="w-full p-2 border rounded" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
        <input type="date" className="w-full p-2 border rounded" value={date} onChange={(e) => setDate(e.target.value)} required />

        <CldUploadWidget
          cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          onSuccess={(result) => {
            console.log("Cloudinary Upload Result:", result); // Debugging log
            if (result.event === "success") {
              const imageUrl = result.info.secure_url;
              console.log("Image URL received:", imageUrl); // Debugging log
              setImage(imageUrl);
            }
          }}
        >
          {({ open }) => (
            <button type="button" onClick={() => open()} className="w-full p-2 border rounded bg-blue-500 text-white">
              Upload Image
            </button>
          )}
        </CldUploadWidget>

        {image && <img src={image} alt="Uploaded" className="w-full h-40 object-cover mt-2 rounded" />}

        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
          Create Article
        </button>
      </form>
      <h2 className="text-2xl font-semibold mt-6">Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article._id} className="border-b py-2">
            <h3 className="font-bold">{article.title}</h3>
            <p>{article.slug}</p>
            {article.image && <img src={article.image} alt="" className="w-full h-40 object-cover mt-2 rounded" />}
          </li>
        ))}
      </ul>

    </div>
  );
}
