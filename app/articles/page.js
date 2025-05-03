"use client"; // Required in Next.js (App Router)

import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
// import { Article } from "../types/article"; // ✅ Correct spelling

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Array<Article>>([]);

  useEffect(() => {
    fetchArticles()
      .then(setArticles)
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  return (
    <div>
      <h1>Article</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <h2>{article.title}</h2>
            <p>{article.subtitle}</p>
            <p>{article.intro}</p>
            <p>By: {article.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
