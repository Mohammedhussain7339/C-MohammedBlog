export const API_URL = "http://localhost:5000/api/articles";

export  async function fetchArticles() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export async function createArticle(articleData: object) {
  console.log("Sending data to API:", articleData); // Debugging log

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(articleData),
  });

  const data = await response.json();
  console.log("API Response:", data); // Debugging log

  if (!response.ok) {
    throw new Error(`Failed to create article: ${data.error || response.statusText}`);
  }

  return data;
}
