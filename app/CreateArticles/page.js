"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { createArticle, fetchArticles, updateArticle } from "../utils/api";
import { CldUploadWidget } from "next-cloudinary";

export default function ArticleForm() {
  const [articles, setArticles] = useState([]);
  const [editingId, setEditingId] = useState(null); // Track which article is being edited
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [titles, setTitles]= useState([""])
  const [contents, setContents]=useState([""])
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
  }, [refresh]);

  async function handleSubmit(e) {
    e.preventDefault();
    setRefresh(!refresh);
    const articleData = {
      title,
      slug,
      subtitle,
      description,
      content,
      author,
      selectedCategory,
      date,
      image,
    };

    try {
      if (editingId) {
        // Updating an existing article
        await updateArticle(editingId, articleData);
        alert("Article updated successfully!");
      } else {
        // Creating a new article
        await createArticle(articleData);
        alert("Article created successfully!");
      }
      setRefresh(!refresh)
      resetForm();
    } catch (err) {
      console.error("Error saving article:", err);
    }
  }

  function resetForm() {
    setEditingId(null);
    setTitle("");
    setSlug("");
    setSubtitle("");
    setDescription("");
    setContent("");
    setAuthor("");
    setSelectedCategory("");
    setDate("");
    setImage("");
  }

  function handleEdit(article) {
    setEditingId(article._id || "");
    setTitle(article.title || "");
    setSlug(article.slug || "");
    setSubtitle(article.subtitle || "");
    setDescription(article.description || "");
    setContent(article.content || "");
    setAuthor(article.author || "");
    setSelectedCategory(article.selectedCategory || "");
    setDate(article.date || "");
    setImage(article.image || "");
  }
  const [modal, setModal]=useState(false)

  const [currentSlug, setCurrentSlug] = useState(""); // Store slug globally
  console.log('slugggg',currentSlug)
  const  handleAddTitleAndContent=(slug)=> {
    if (!slug) {
      alert("Please enter a slug before adding titles and content.");
      return;
    }
    console.log(slug)
    setCurrentSlug(slug)
    setModal(true)
  }
  const saveAddTitle = async ( subtitle, content) => {
    if (!currentSlug) {
      alert("Slug is missing.");
      return;
    }
  
    if (!subtitle || !content) {
      alert("Subtitle and content are required.");
      return;
    }
  
    try {
      const encodedSlug = encodeURIComponent(currentSlug); // ✅ Encode special characters
  
      const { data } = await axios.patch(
        `http://localhost:5000/api/articles/${encodedSlug}/add-info`,
        {
          subtitle,
          content,
        }
      );
      alert("Data add Successfully");
      setSubtitle("");
      setContent("");
      console.log("Article updated:", data.article);
    } catch (error) {
      console.error("Error updating article:", error.response?.data?.message || error.message);
    }
  };
        

  function handleTitleChange(index, value) {
    const updatedTitles = [...titles];
    updatedTitles[index] = value;
    setTitles(updatedTitles);
  }

  function handleContentChange(index, value) {
    const updatedContents = [...contents];
    updatedContents[index] = value;
    setContents(updatedContents);
  }
  const categories = [
    { name: "Technology",  },
    { name: "Travel",  },
    { name: "Sport",  },
    { name: "Business",  },
    { name: "Education",  },
    { name: "Trends",  },
    { name: "Startups",  },
    { name: "News",  },
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    console.log("Selected Category:", selectedValue);
  };




  return (
    <>
    <div className="max-w-2xl mx-auto p-6 bg-black shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">
        {editingId ? "Update Article" : "Create an Article"}
      </h2>

      <div className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          className="w-full p-2 border rounded"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Slug"
          required
        />
        <input
          className="w-full p-2 border rounded"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Subtitle"
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <input
          className="w-full p-2 border rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
    <select onChange={handleChange} className="w-full p-2 border rounded">
      <option value="" disabled selected>
        Categories
      </option>
      {categories.map((category, index) => (
        <option key={index} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <CldUploadWidget
          cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          onSuccess={(result) => {
            if (result.event === "success") {
              const imageUrl = result.info.secure_url;
              console.log("Uploaded Image URL:", imageUrl); // Debugging log
              setImage(imageUrl);
            }
          }}>
          {({ open }) => (
            <button
              type="button"
              onClick={() => open()}
              className="w-full p-2 border rounded bg-blue-500 text-white">
              Upload Image
            </button>
          )}
        </CldUploadWidget>

        {image && (
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-40 object-cover mt-2 rounded"
          />
        )}
        {!editingId ? (
          <button
            onClick={handleSubmit}
            className="w-full p-2 bg-green-500 text-white rounded">
            Create Article
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="w-full p-2 bg-green-500 text-white rounded">
            Update Article
          </button>
        )}

        {editingId && (
          <button
            type="button"
            onClick={resetForm}
            className="w-full p-2 mt-2 bg-gray-500 text-white rounded">
            Cancel Edit
          </button>
        )}
      </div>

    </div>
    <div className="w-full h-screen gap-3 bg-black flex flex-wrap justify-center p-4">
    {articles.map((article) => (
      <div className="w-[440px] h-[400px] bg-black  border-white border-2 p-2 rounded-md">
      <li key={article._id} className="border-b py-4">
        <h3 className="font-bold text-2xl">{article.title}</h3>
        <p className="text-gray-600">{article.slug}</p>
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-40 object-cover mt-2 rounded"
          />
        )}
        <button
          onClick={() => handleEdit(article)}
          className="mt-3 p-2 w-full bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => handleAddTitleAndContent(article.slug)}
          className="w-full mt-2 p-2 border rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Add Title & Content
        </button>
      </li>
      </div>
    ))}
</div>

  {modal===true?
  <div>
  {titles.map((t, index) => (
          <div key={index} className="space-y-2 border p-2 rounded">
            <input
              className="w-full p-2 border rounded"
              value={t}
              onChange={(e) => handleTitleChange(index, e.target.value)}
              placeholder="Additional Title"
            />
            <textarea
              className="w-full p-2 border rounded"
              value={contents[index]}
              onChange={(e) => handleContentChange(index, e.target.value)}
              placeholder="Additional Content"
            />
    <button
      className="w-full p-2 border rounded bg-blue-500 text-white"
      onClick={() => saveAddTitle( titles[index], contents[index])} // Pass slug, title, and content
    >
      Submit
    </button>
          </div>
        ))}

  </div>
        :null}


        </>
    
  );
}
